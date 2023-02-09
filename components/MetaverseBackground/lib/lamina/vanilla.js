import BlendModesChunk from './chunks/BlendModes'
import NoiseChunk from './chunks/Noise'
import HelpersChunk from './chunks/Helpers'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import {
  Color,
  Material,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshToonMaterial,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshStandardMaterial,
} from "three";
import { MaterialProps } from '@react-three/fiber';

const ShadingTypes = {
  phong: MeshPhongMaterial,
  physical: MeshPhysicalMaterial,
  toon: MeshToonMaterial,
  basic: MeshBasicMaterial,
  lambert: MeshLambertMaterial,
  standard: MeshStandardMaterial,
};

class LayerMaterial extends CustomShaderMaterial {
  name = "LayerMaterial";
  layers = [];
  lighting;

  constructor({ color, alpha, lighting, layers, name, userData }) {
    super({
      baseMaterial: ShadingTypes[lighting || "basic"]
    });

    const _baseColor = color || "white";
    const _alpha = alpha ?? 1;

    this.uniforms = {
      u_lamina_color: {
        value: typeof _baseColor === "string" ? new Color(_baseColor).convertSRGBToLinear() : _baseColor,
      },
      u_lamina_alpha: {
        value: _alpha,
      },
    };

    this.layers = layers || this.layers;
    this.lighting = lighting || this.lighting;
    this.name = name || this.name;
    this.userData = userData || this.userData;

    this.refresh();
  }

  genShaders() {
    let vertexVariables = "";
    let fragmentVariables = "";
    let vertexShader = "";
    let fragmentShader = "";
    let uniforms = {};

    this.layers
      .filter((l) => l.visible)
      .forEach((l) => {
        vertexVariables += l.vertexVariables + "\n";
        fragmentVariables += l.fragmentVariables + "\n";
        vertexShader += l.vertexShader + "\n";
        fragmentShader += l.fragmentShader + "\n";

        uniforms = {
          ...uniforms,
          ...l.uniforms,
        };
      });

    uniforms = {
      ...uniforms,
      ...this.uniforms,
    };

    return {
      uniforms,
      vertexShader: `
        ${HelpersChunk}
        ${NoiseChunk}
        ${vertexVariables}

        uniform float viewport;
        uniform float uFocus;
        uniform float uBlur;
        varying float vDistance;
        varying float v_ScaleMult;
        varying float v_dofBlur;
        attribute float scaleMult;

        void main() {
          v_ScaleMult = scaleMult == 1.0 ? 1.0 : 0.1;

          vec3 lamina_finalPosition = position;
          vec3 lamina_finalNormal = normal;
          ${vertexShader}

          vec4 _mvPosition = modelViewMatrix * vec4(position, 1.);
          vDistance = abs(uFocus - -_mvPosition.z);

          gl_PointSize = 2.0 * viewport;

          float dofBlur = (step(0.0, position.y)) * vDistance * uBlur;
          v_dofBlur = dofBlur;

          gl_PointSize *= max(dofBlur * 0.667, 1.0);
          gl_PointSize *= scaleMult == 1.0 ? 1.0 : 0.67;

          csm_Position = lamina_finalPosition;
          csm_Normal = lamina_finalNormal;
        }
        `,
      fragmentShader: `
        ${HelpersChunk}
        ${NoiseChunk}
        ${BlendModesChunk}
        ${fragmentVariables}

        varying float vDistance;
        varying float v_ScaleMult;
        varying float v_dofBlur;

        float map(float value, float min1, float max1, float min2, float max2) {
          return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
        }

        uniform vec3 u_lamina_color;
        uniform float u_lamina_alpha;
        void main() {
          float length = length( gl_PointCoord - vec2( 0.5, 0.5 ) );
          float t1 = 1.0 - smoothstep(0.5 - 0.1, 0.5, length);

          vec4 lamina_finalColor = vec4(u_lamina_color, u_lamina_alpha);
          ${fragmentShader}
          csm_DiffuseColor = lamina_finalColor;
          csm_DiffuseColor.rgb *= v_ScaleMult;

          csm_DiffuseColor.a = 1.0;

          float dofColor = clamp(map(max(v_dofBlur, 1.0), 1.0, 16.0, 1.0, 0.0), 0.0, 1.0);
          float dofAlpha = clamp(map(max(v_dofBlur, 1.0), 1.0, 16.0, 1.0, 0.0), 0.0, 1.0);

          csm_DiffuseColor.rgb *= pow(dofColor, 4.0);
          csm_DiffuseColor.a *= pow(dofAlpha, 16.0);
          csm_DiffuseColor.a *= t1;
        }
        `,
    };
  }

  refresh() {
    const { uniforms, fragmentShader, vertexShader } = this.genShaders();
    super.update({ fragmentShader, vertexShader, uniforms });
  }

  serialize() {
    return {
      constructor: "LayerMaterial",
      properties: {
        color: this.color,
        alpha: this.alpha,
        name: this.name,
        lighting: this.lighting,
      },
    };
  }

  set color(v) {
    if (this.uniforms?.u_lamina_color?.value)
      this.uniforms.u_lamina_color.value = typeof v === "string" ? new Color(v).convertSRGBToLinear() : v;
  }
  get color() {
    return this.uniforms?.u_lamina_color?.value;
  }
  set alpha(v) {
    this.uniforms.u_lamina_alpha.value = v;
  }
  get alpha() {
    return this.uniforms.u_lamina_alpha.value;
  }
}

export { LayerMaterial }
