"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{3181:function(n,e,a){a.d(e,{Z:function(){return R}});var t=a(5893),o=a(7294),i=a(1796),l=a(1953),c=a(8803),r=a(5029),s=a(8924),x=a(9477),v=a(9714),m=a(427),y=a(9657),d=a(140);let p={perlin:"perlin",simplex:"simplex",cell:"cell",curl:"curl",white:"white"},f={local:"local",world:"world",uv:"uv"};var _=a(5711);class u extends _.$p{static getNoiseFunction(n){switch(n){default:case"perlin":return"lamina_noise_perlin";case"simplex":return"lamina_noise_simplex";case"cell":return"lamina_noise_worley";case"white":return"lamina_noise_white";case"curl":return"lamina_noise_swirl"}}static getMapping(n){switch(n){default:case"local":return"p";case"world":return"(modelMatrix * vec4(p,1.0)).xyz";case"uv":return"vec3(uv, 0.)"}}constructor(n){super(u,{name:"Displace",...n},n=>{n.schema.push({value:n.type,label:"type",options:Object.values(p)}),n.schema.push({value:n.mapping,label:"mapping",options:Object.values(f)});let e=u.getNoiseFunction(n.type),a=u.getMapping(n.mapping);n.vertexVariables=n.vertexVariables.replace("lamina_mapping_template",a),n.vertexVariables=n.vertexVariables.replace("lamina_noise_template",e)}),this.type="perlin",this.mapping="local"}}u.u_strength=1,u.u_strengthHeight=1,u.u_scale=1,u.u_time=0,u.u_offset=new x.Vector3(0,0,0),u.vertexShader="\n\n      uniform float u_strength;\n      uniform float u_strengthHeight;\n      uniform float u_scale;\n      uniform vec3 u_offset;\n      uniform float u_time;\n\n      vec3 displace(vec3 p) {\n				vec3 f_position = lamina_mapping_template;\n        vec3 timeOffset = vec3(0.0, u_time, 0.0);\n        float f_n = lamina_noise_template((f_position + u_offset) * u_scale + timeOffset) * u_strength;\n        vec3 f_newPosition = p + (f_n * normal) + (f_n * vec3(0.0, u_strengthHeight, 0.0));\n\n				return f_newPosition;\n      }\n\n\n			vec3 orthogonal(vec3 v) {\n  		  return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0)\n  		  : vec3(0.0, -v.z, v.y));\n  		}\n  		vec3 recalcNormals(vec3 newPos) {\n  		  float offset = 0.001;\n  		  vec3 tangent = orthogonal(normal);\n  		  vec3 bitangent = normalize(cross(normal, tangent));\n  		  vec3 neighbour1 = position + tangent * offset;\n  		  vec3 neighbour2 = position + bitangent * offset;\n  		  vec3 displacedNeighbour1 = displace(neighbour1);\n  		  vec3 displacedNeighbour2 = displace(neighbour2);\n  		  vec3 displacedTangent = displacedNeighbour1 - newPos;\n  		  vec3 displacedBitangent = displacedNeighbour2 - newPos;\n  		  return normalize(cross(displacedTangent, displacedBitangent));\n  		}\n\n\n      void main() {\n\n				vec3 f_newPosition = displace(position);\n        lamina_finalNormal = recalcNormals(f_newPosition);\n\n        return f_newPosition;\n      }\n    ";var z=a(5878),g=a(4924),h="\n\n// From: https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83\n// Huge thanks to the creators of these algorithms\n\nfloat lamina_noise_mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 lamina_noise_mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 lamina_noise_perm(vec4 x){return lamina_noise_mod289(((x * 34.0) + 1.0) * x);}\nvec4 lamina_noise_permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }\nvec4 lamina_noise_taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }\n\n\nfloat lamina_noise_white(vec2 p) {\n  return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) *\n               (0.1 + abs(sin(p.y * 13.0 + p.x))));\n}\n\nfloat lamina_noise_white(vec3 p) {\n  return lamina_noise_white(p.xy);\n}\n\n\nvec3 lamina_noise_fade(vec3 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }\n\nfloat lamina_noise_perlin(vec3 P) {\n  vec3 Pi0 = floor(P);        // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P);        // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = lamina_noise_permute(lamina_noise_permute(ix) + iy);\n  vec4 ixy0 = lamina_noise_permute(ixy + iz0);\n  vec4 ixy1 = lamina_noise_permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n\n  vec4 norm0 = lamina_noise_taylorInvSqrt(\n      vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = lamina_noise_taylorInvSqrt(\n      vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = lamina_noise_fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111),\n                 fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return lamina_normalize(2.2 * n_xyz);\n}\n\nfloat lamina_noise_simplex(vec3 v) {\n  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);\n  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n  // First corner\n  vec3 i = floor(v + dot(v, C.yyy));\n  vec3 x0 = v - i + dot(i, C.xxx);\n\n  // Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min(g.xyz, l.zxy);\n  vec3 i2 = max(g.xyz, l.zxy);\n\n  //  x0 = x0 - 0. + 0.0 * C\n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n  // Permutations\n  i = mod(i, 289.0);\n  vec4 p = lamina_noise_permute(lamina_noise_permute(lamina_noise_permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y +\n                             vec4(0.0, i1.y, i2.y, 1.0)) +\n                    i.x + vec4(0.0, i1.x, i2.x, 1.0));\n\n  // Gradients\n  // ( N*N points uniformly over a square, mapped onto an octahedron.)\n  float n_ = 1.0 / 7.0; // N=7\n  vec3 ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z); //  mod(p,N*N)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_); // mod(j,N)\n\n  vec4 x = x_ * ns.x + ns.yyyy;\n  vec4 y = y_ * ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4(x.xy, y.xy);\n  vec4 b1 = vec4(x.zw, y.zw);\n\n  vec4 s0 = floor(b0) * 2.0 + 1.0;\n  vec4 s1 = floor(b1) * 2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;\n\n  vec3 p0 = vec3(a0.xy, h.x);\n  vec3 p1 = vec3(a0.zw, h.y);\n  vec3 p2 = vec3(a1.xy, h.z);\n  vec3 p3 = vec3(a1.zw, h.w);\n\n  // Normalise gradients\n  vec4 norm =\n      lamina_noise_taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n  // Mix final noise value\n  vec4 m =\n      max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);\n  m = m * m;\n  return lamina_normalize(42.0 *\n         dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3))));\n}\n\nvec3 lamina_noise_simplex3(vec3 x) {\n  float s = lamina_noise_simplex(vec3(x));\n  float s1 = lamina_noise_simplex(vec3(x.y - 19.1, x.z + 33.4, x.x + 47.2));\n  float s2 = lamina_noise_simplex(vec3(x.z + 74.2, x.x - 124.5, x.y + 99.4));\n  vec3 c = vec3(s, s1, s2);\n  return c;\n}\n\nvec3 lamina_noise_curl(vec3 p) {\n  const float e = .1;\n  vec3 dx = vec3(e, 0.0, 0.0);\n  vec3 dy = vec3(0.0, e, 0.0);\n  vec3 dz = vec3(0.0, 0.0, e);\n\n  vec3 p_x0 = lamina_noise_simplex3(p - dx);\n  vec3 p_x1 = lamina_noise_simplex3(p + dx);\n  vec3 p_y0 = lamina_noise_simplex3(p - dy);\n  vec3 p_y1 = lamina_noise_simplex3(p + dy);\n  vec3 p_z0 = lamina_noise_simplex3(p - dz);\n  vec3 p_z1 = lamina_noise_simplex3(p + dz);\n\n  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n  const float divisor = 1.0 / (2.0 * e);\n  return normalize(vec3(x, y, z) * divisor);\n}\n\nvec3 lamina_permute(vec3 x) {\n  return mod((34.0 * x + 1.0) * x, 289.0);\n}\n\nvec3 lamina_dist(vec3 x, vec3 y, vec3 z,  bool manhattanDistance) {\n  return manhattanDistance ?  abs(x) + abs(y) + abs(z) :  (x * x + y * y + z * z);\n}\n\n// From: https://github.com/Erkaman/glsl-worley\nfloat lamina_noise_worley(vec3 P) {\n  float jitter = 1.;\n  bool manhattanDistance = false; \n\n  float K = 0.142857142857; // 1/7\n  float Ko = 0.428571428571; // 1/2-K/2\n  float  K2 = 0.020408163265306; // 1/(7*7)\n  float Kz = 0.166666666667; // 1/6\n  float Kzo = 0.416666666667; // 1/2-1/6*2\n\n	vec3 Pi = mod(floor(P), 289.0);\n 	vec3 Pf = fract(P) - 0.5;\n\n	vec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);\n	vec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);\n	vec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);\n\n	vec3 p = lamina_permute(Pi.x + vec3(-1.0, 0.0, 1.0));\n	vec3 p1 = lamina_permute(p + Pi.y - 1.0);\n	vec3 p2 = lamina_permute(p + Pi.y);\n	vec3 p3 = lamina_permute(p + Pi.y + 1.0);\n\n	vec3 p11 = lamina_permute(p1 + Pi.z - 1.0);\n	vec3 p12 = lamina_permute(p1 + Pi.z);\n	vec3 p13 = lamina_permute(p1 + Pi.z + 1.0);\n\n	vec3 p21 = lamina_permute(p2 + Pi.z - 1.0);\n	vec3 p22 = lamina_permute(p2 + Pi.z);\n	vec3 p23 = lamina_permute(p2 + Pi.z + 1.0);\n\n	vec3 p31 = lamina_permute(p3 + Pi.z - 1.0);\n	vec3 p32 = lamina_permute(p3 + Pi.z);\n	vec3 p33 = lamina_permute(p3 + Pi.z + 1.0);\n\n	vec3 ox11 = fract(p11*K) - Ko;\n	vec3 oy11 = mod(floor(p11*K), 7.0)*K - Ko;\n	vec3 oz11 = floor(p11*K2)*Kz - Kzo; // p11 < 289 guaranteed\n\n	vec3 ox12 = fract(p12*K) - Ko;\n	vec3 oy12 = mod(floor(p12*K), 7.0)*K - Ko;\n	vec3 oz12 = floor(p12*K2)*Kz - Kzo;\n\n	vec3 ox13 = fract(p13*K) - Ko;\n	vec3 oy13 = mod(floor(p13*K), 7.0)*K - Ko;\n	vec3 oz13 = floor(p13*K2)*Kz - Kzo;\n\n	vec3 ox21 = fract(p21*K) - Ko;\n	vec3 oy21 = mod(floor(p21*K), 7.0)*K - Ko;\n	vec3 oz21 = floor(p21*K2)*Kz - Kzo;\n\n	vec3 ox22 = fract(p22*K) - Ko;\n	vec3 oy22 = mod(floor(p22*K), 7.0)*K - Ko;\n	vec3 oz22 = floor(p22*K2)*Kz - Kzo;\n\n	vec3 ox23 = fract(p23*K) - Ko;\n	vec3 oy23 = mod(floor(p23*K), 7.0)*K - Ko;\n	vec3 oz23 = floor(p23*K2)*Kz - Kzo;\n\n	vec3 ox31 = fract(p31*K) - Ko;\n	vec3 oy31 = mod(floor(p31*K), 7.0)*K - Ko;\n	vec3 oz31 = floor(p31*K2)*Kz - Kzo;\n\n	vec3 ox32 = fract(p32*K) - Ko;\n	vec3 oy32 = mod(floor(p32*K), 7.0)*K - Ko;\n	vec3 oz32 = floor(p32*K2)*Kz - Kzo;\n\n	vec3 ox33 = fract(p33*K) - Ko;\n	vec3 oy33 = mod(floor(p33*K), 7.0)*K - Ko;\n	vec3 oz33 = floor(p33*K2)*Kz - Kzo;\n\n	vec3 dx11 = Pfx + jitter*ox11;\n	vec3 dy11 = Pfy.x + jitter*oy11;\n	vec3 dz11 = Pfz.x + jitter*oz11;\n\n	vec3 dx12 = Pfx + jitter*ox12;\n	vec3 dy12 = Pfy.x + jitter*oy12;\n	vec3 dz12 = Pfz.y + jitter*oz12;\n\n	vec3 dx13 = Pfx + jitter*ox13;\n	vec3 dy13 = Pfy.x + jitter*oy13;\n	vec3 dz13 = Pfz.z + jitter*oz13;\n\n	vec3 dx21 = Pfx + jitter*ox21;\n	vec3 dy21 = Pfy.y + jitter*oy21;\n	vec3 dz21 = Pfz.x + jitter*oz21;\n\n	vec3 dx22 = Pfx + jitter*ox22;\n	vec3 dy22 = Pfy.y + jitter*oy22;\n	vec3 dz22 = Pfz.y + jitter*oz22;\n\n	vec3 dx23 = Pfx + jitter*ox23;\n	vec3 dy23 = Pfy.y + jitter*oy23;\n	vec3 dz23 = Pfz.z + jitter*oz23;\n\n	vec3 dx31 = Pfx + jitter*ox31;\n	vec3 dy31 = Pfy.z + jitter*oy31;\n	vec3 dz31 = Pfz.x + jitter*oz31;\n\n	vec3 dx32 = Pfx + jitter*ox32;\n	vec3 dy32 = Pfy.z + jitter*oy32;\n	vec3 dz32 = Pfz.y + jitter*oz32;\n\n	vec3 dx33 = Pfx + jitter*ox33;\n	vec3 dy33 = Pfy.z + jitter*oy33;\n	vec3 dz33 = Pfz.z + jitter*oz33;\n\n	vec3 d11 = lamina_dist(dx11, dy11, dz11, manhattanDistance);\n	vec3 d12 = lamina_dist(dx12, dy12, dz12, manhattanDistance);\n	vec3 d13 = lamina_dist(dx13, dy13, dz13, manhattanDistance);\n	vec3 d21 = lamina_dist(dx21, dy21, dz21, manhattanDistance);\n	vec3 d22 = lamina_dist(dx22, dy22, dz22, manhattanDistance);\n	vec3 d23 = lamina_dist(dx23, dy23, dz23, manhattanDistance);\n	vec3 d31 = lamina_dist(dx31, dy31, dz31, manhattanDistance);\n	vec3 d32 = lamina_dist(dx32, dy32, dz32, manhattanDistance);\n	vec3 d33 = lamina_dist(dx33, dy33, dz33, manhattanDistance);\n\n	vec3 d1a = min(d11, d12);\n	d12 = max(d11, d12);\n	d11 = min(d1a, d13); // Smallest now not in d12 or d13\n	d13 = max(d1a, d13);\n	d12 = min(d12, d13); // 2nd smallest now not in d13\n	vec3 d2a = min(d21, d22);\n	d22 = max(d21, d22);\n	d21 = min(d2a, d23); // Smallest now not in d22 or d23\n	d23 = max(d2a, d23);\n	d22 = min(d22, d23); // 2nd smallest now not in d23\n	vec3 d3a = min(d31, d32);\n	d32 = max(d31, d32);\n	d31 = min(d3a, d33); // Smallest now not in d32 or d33\n	d33 = max(d3a, d33);\n	d32 = min(d32, d33); // 2nd smallest now not in d33\n	vec3 da = min(d11, d21);\n	d21 = max(d11, d21);\n	d11 = min(da, d31); // Smallest now in d11\n	d31 = max(da, d31); // 2nd smallest now not in d31\n	d11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;\n	d11.xz = (d11.x < d11.z) ? d11.xz : d11.zx; // d11.x now smallest\n	d12 = min(d12, d21); // 2nd smallest now not in d21\n	d12 = min(d12, d22); // nor in d22\n	d12 = min(d12, d31); // nor in d31\n	d12 = min(d12, d32); // nor in d32\n	d11.yz = min(d11.yz,d12.xy); // nor in d12.yz\n	d11.y = min(d11.y,d12.z); // Only two more to go\n	d11.y = min(d11.y,d11.z); // Done! (Phew!)\n\n  vec2 F = sqrt(d11.xy);\n	return F.x; // F1, F2\n\n}\n\nfloat lamina_noise_swirl(vec3 position) {\n    float scale = 0.1;\n    float freq = 4. * scale;\n    float t = 1.;\n\n    vec3 pos = (position * scale) + lamina_noise_curl(position * 7. * scale);\n\n    float worley1 = 1. - lamina_noise_worley((pos * (freq * 2.)) +  (t * 2.));\n    float worley2 = 1. - lamina_noise_worley((pos * (freq * 4.)) +  (t * 4.));\n    float worley3 = 1. - lamina_noise_worley((pos * (freq * 8.)) +  (t * 8.));\n    float worley4 = 1. - lamina_noise_worley((pos * (freq * 16.)) +  (t * 16.));\n    \n    float fbm1 = worley1 * .625 + worley2 * .25 + worley3 * .125;\n    float fbm2 = worley2 * .625 + worley3 * .25 + worley4 * .125;\n    float fbm3 = worley3 * .75 + worley4 * .25;\n\n    vec3 curlWorleyFbm = vec3(fbm1, fbm2, fbm3);\n    float curlWorley = curlWorleyFbm.r * .625 + curlWorleyFbm.g * .25 + \n        curlWorleyFbm.b * .125;\n\n    return curlWorley;\n}\n  \n  \n",b="\n\nfloat lamina_map(float value, float min1, float max1, float min2, float max2) {\n  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n\nfloat lamina_normalize(float v) { return lamina_map(v, -1.0, 1.0, 0.0, 1.0); }\n",P=a(7804);let w={phong:x.MeshPhongMaterial,physical:x.MeshPhysicalMaterial,toon:x.MeshToonMaterial,basic:x.MeshBasicMaterial,lambert:x.MeshLambertMaterial,standard:x.MeshStandardMaterial};class K extends P.Z{genShaders(){let n="",e="",a="",t="",o={};return this.layers.filter(n=>n.visible).forEach(i=>{n+=i.vertexVariables+"\n",e+=i.fragmentVariables+"\n",a+=i.vertexShader+"\n",t+=i.fragmentShader+"\n",o={...o,...i.uniforms}}),o={...o,...this.uniforms},{uniforms:o,vertexShader:"\n        ".concat(b,"\n        ").concat(h,"\n        ").concat(n,"\n\n        uniform float viewport;\n        uniform float uFocus;\n        uniform float uBlur;\n        varying float vDistance;\n        varying float v_ScaleMult;\n        varying float v_dofBlur;\n        attribute float scaleMult;\n\n        void main() {\n          v_ScaleMult = scaleMult == 1.0 ? 1.0 : 0.1;\n\n          vec3 lamina_finalPosition = position;\n          vec3 lamina_finalNormal = normal;\n          ").concat(a,"\n\n          vec4 _mvPosition = modelViewMatrix * vec4(position, 1.);\n          vDistance = abs(uFocus - -_mvPosition.z);\n\n          gl_PointSize = 2.0 * viewport;\n\n          float dofBlur = (step(0.0, position.y)) * vDistance * uBlur;\n          v_dofBlur = dofBlur;\n\n          gl_PointSize *= max(dofBlur * 0.667, 1.0);\n          gl_PointSize *= scaleMult == 1.0 ? 1.0 : 0.67;\n\n          csm_Position = lamina_finalPosition;\n          csm_Normal = lamina_finalNormal;\n        }\n        "),fragmentShader:"\n        ".concat(b,"\n        ").concat(h,"\n        ").concat("\nvec4 lamina_blend_add(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4(min(x.xyz + y.xyz, 1.0) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec3 lamina_blend_alpha(const in vec3 x, const in vec3 y, const in float opacity) {\n\n	return y * opacity + x * (1.0 - opacity);\n\n}\n\nvec4 lamina_blend_alpha(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	float a = min(y.a, opacity);\n\n	return vec4(lamina_blend_alpha(x.rgb, y.rgb, a), x.a);\n\n}\nvec4 lamina_blend_average(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4((x.xyz + y.xyz) * 0.5 * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_color_burn(const in float x, const in float y) {\n\n	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);\n\n}\n\nvec4 lamina_blend_color_burn(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		lamina_blend_color_burn(x.r, y.r),\n		lamina_blend_color_burn(x.g, y.g),\n		lamina_blend_color_burn(x.b, y.b),\n		lamina_blend_color_burn(x.a, y.a)\n	);\n\n	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_color_dodge(const in float x, const in float y) {\n\n	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);\n\n}\n\nvec4 lamina_blend_color_dodge(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		lamina_blend_color_dodge(x.r, y.r),\n		lamina_blend_color_dodge(x.g, y.g),\n		lamina_blend_color_dodge(x.b, y.b),\n		lamina_blend_color_dodge(x.a, y.a)\n	);\n\n	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_darken(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4(min(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_difference(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4(abs(x.xyz - y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_divide(const in float x, const in float y) {\n\n	return (y > 0.0) ? min(x / y, 1.0) : 1.0;\n\n}\n\nvec4 lamina_blend_divide(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		lamina_blend_divide(x.r, y.r),\n		lamina_blend_divide(x.g, y.g),\n		lamina_blend_divide(x.b, y.b),\n		lamina_blend_divide(x.a, y.a)\n	);\n\n	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_exclusion(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4((x.xyz + y.xyz - 2.0 * x.xyz * y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_lighten(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4(max(x.xyz, y.xyz) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_multiply(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4( x.xyz * y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_negation(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4((1.0 - abs(1.0 - x.xyz - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_normal(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4(y.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_overlay(const in float x, const in float y) {\n\n	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));\n\n}\n\nvec4 lamina_blend_overlay(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		lamina_blend_overlay(x.r, y.r),\n		lamina_blend_overlay(x.g, y.g),\n		lamina_blend_overlay(x.b, y.b),\n		lamina_blend_overlay(x.a, y.a)\n	);\n\n	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_reflect(const in float x, const in float y) {\n\n	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);\n\n}\n\nvec4 lamina_blend_reflect(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		lamina_blend_reflect(x.r, y.r),\n		lamina_blend_reflect(x.g, y.g),\n		lamina_blend_reflect(x.b, y.b),\n		lamina_blend_reflect(x.a, y.a)\n	);\n\n	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_screen(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4((1.0 - (1.0 - x.xyz) * (1.0 - y.xyz)) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nfloat lamina_blend_softlight(const in float x, const in float y) {\n\n	return (y < 0.5) ?\n		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :\n		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));\n\n}\n\nvec4 lamina_blend_softlight(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	vec4 z = vec4(\n		lamina_blend_softlight(x.r, y.r),\n		lamina_blend_softlight(x.g, y.g),\n		lamina_blend_softlight(x.b, y.b),\n		lamina_blend_softlight(x.a, y.a)\n	);\n\n	return vec4(z.xyz * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\nvec4 lamina_blend_subtract(const in vec4 x, const in vec4 y, const in float opacity) {\n\n	return vec4(max(x.xyz + y.xyz - 1.0, 0.0) * opacity + x.xyz * (1.0 - opacity), x.a);\n\n}\n\n","\n        ").concat(e,"\n\n        varying float vDistance;\n        varying float v_ScaleMult;\n        varying float v_dofBlur;\n\n        float map(float value, float min1, float max1, float min2, float max2) {\n          return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n        }\n\n        uniform vec3 u_lamina_color;\n        uniform float u_lamina_alpha;\n        void main() {\n          float length = length( gl_PointCoord - vec2( 0.5, 0.5 ) );\n          float t1 = 1.0 - smoothstep(0.5 - 0.1, 0.5, length);\n\n          vec4 lamina_finalColor = vec4(u_lamina_color, u_lamina_alpha);\n          ").concat(t,"\n          csm_DiffuseColor = lamina_finalColor;\n          csm_DiffuseColor.rgb *= v_ScaleMult;\n\n          csm_DiffuseColor.a = 1.0;\n\n          float dofColor = clamp(map(max(v_dofBlur, 1.0), 1.0, 16.0, 1.0, 0.0), 0.0, 1.0);\n          float dofAlpha = clamp(map(max(v_dofBlur, 1.0), 1.0, 16.0, 1.0, 0.0), 0.0, 1.0);\n\n          csm_DiffuseColor.rgb *= pow(dofColor, 4.0);\n          csm_DiffuseColor.a *= pow(dofAlpha, 16.0);\n          csm_DiffuseColor.a *= t1;\n        }\n        ")}}refresh(){let{uniforms:n,fragmentShader:e,vertexShader:a}=this.genShaders();super.update({fragmentShader:e,vertexShader:a,uniforms:n})}serialize(){return{constructor:"LayerMaterial",properties:{color:this.color,alpha:this.alpha,name:this.name,lighting:this.lighting}}}set color(n){var e,a;(null===(e=this.uniforms)||void 0===e?void 0:null===(a=e.u_lamina_color)||void 0===a?void 0:a.value)&&(this.uniforms.u_lamina_color.value="string"==typeof n?new x.Color(n).convertSRGBToLinear():n)}get color(){var n,e;return null===(n=this.uniforms)||void 0===n?void 0:null===(e=n.u_lamina_color)||void 0===e?void 0:e.value}set alpha(n){this.uniforms.u_lamina_alpha.value=n}get alpha(){return this.uniforms.u_lamina_alpha.value}constructor({color:n,alpha:e,lighting:a,layers:t,name:o,userData:i}){super({baseMaterial:w[a||"basic"]}),(0,g.Z)(this,"name","LayerMaterial"),(0,g.Z)(this,"layers",[]),(0,g.Z)(this,"lighting",void 0);let l=n||"white";this.uniforms={u_lamina_color:{value:"string"==typeof l?new x.Color(l).convertSRGBToLinear():l},u_lamina_alpha:{value:null!=e?e:1}},this.layers=t||this.layers,this.lighting=a||this.lighting,this.name=o||this.name,this.userData=i||this.userData,this.refresh()}}(0,c.e)({LayerMaterial:K});var j=o.forwardRef((n,e)=>{let{children:a,setMaterial:i=()=>{},...l}=n,c=o.useRef(null);(0,o.useEffect)(()=>i(c.current),[]),o.useLayoutEffect(()=>{c.current.layers=c.current.__r3f.objects,c.current.refresh()},[a]);let[r,s]=o.useMemo(()=>(function(n){let{color:e,alpha:a,lighting:t,name:o,userData:i,...l}=n;return[{color:e,alpha:a,lighting:t,name:o,userData:i},l]})(l),[l]);return(0,t.jsx)("layerMaterial",{args:[r],ref:(0,z.Z)([c,e]),...s,children:a})});(0,c.e)({Displace:u});let S=()=>{let n=(0,o.useRef)(),e=(0,o.useRef)();(0,o.useEffect)(()=>{let n=[];for(let a=0;a<8;a++){let t=[];for(let o=0;o<8;o++){let i=(o+1)/8;t.push(new x.Vector2(i+0+a,0))}n.push(new x.LatheGeometry(t,150*(a+1)))}let l=(0,d.qf)(n),c=Array(l.attributes.position.count).fill(0).map((n,e)=>e%2?0:1);l.setAttribute("scaleMult",new x.BufferAttribute(new Float32Array(c,1),1));let r=new x.Vector3(0,1,0),s=m.v(l.attributes.position.array),v=m.v(l.attributes.normal.array);v=v.map((n,e)=>{let a=s[e].cross(r);return a.lerp(a.clone().normalize(),.75)}),l.attributes.normal.array=m.U(v),e.current.geometry=l},[]),(0,c.A)(e=>{let{clock:a}=e;n.current.time=Math.sin(.025*a.elapsedTime)});let{noiseScale:a,noiseStrength:i,noiseStrengthHeight:l}=(0,v.M4)({noiseScale:.5,noiseStrength:2,noiseStrengthHeight:.5}),{uFocus:r,uBlur:s}=(0,v.M4)({uFocus:{value:4,min:3,max:7,step:.01},uBlur:{value:1.3,min:0,max:6,step:.1}}),{size:p,viewport:f}=(0,c.z)();(0,o.useEffect)(()=>{u.current.uniforms.viewport.value=p.height*f.dpr/1e3},[p,f]);let _=(0,o.useMemo)(()=>({uFocus:{value:r},uBlur:{value:s},viewport:{value:p.height*f.dpr/1e3}}),[]),u=(0,o.useRef)();return(0,o.useEffect)(()=>{u.current.uniforms.uFocus.value=r,u.current.uniforms.uBlur.value=s},[r,s]),(0,t.jsx)("points",{ref:e,children:(0,t.jsxs)(j,{ref:u,transparent:!0,uniforms:_,depthTest:!1,toneMapped:!1,children:[(0,t.jsx)(y.Il,{color:new x.Color("#A114C3").multiplyScalar(15)}),(0,t.jsx)("displace",{strength:i,strengthHeight:l,scale:a,ref:n})]})})};var M=a(8481),D=a(5944),C=a(7737),B=a(1467);let F=new x.Vector3,q=Array(100).fill(0).map(()=>new x.Vector2((0,D.vX)(-10,10),(0,D.vX)(0,10)));function N(n,e,a){var t=Math.max(0,Math.min(1,(a-n)/(e-n)));return t*t*(3-2*t)}let A=()=>{let{camera:n}=(0,c.z)(),e=(0,B.Bc)(),a=(0,B.EF)(()=>new x.Vector3),i=(0,o.useRef)(null);return(0,c.A)(()=>{i.current.children.forEach(e=>{e.position.y+=.01,e.position.y%=5;let a=(e.position.clone().project(n).y+1)*.5,t=N(.2,.25,a),o=N(.025,.1,1-a);e.scale.setScalar(t*o)})}),(0,t.jsxs)(B.BT,{capacity:5e3,children:[(0,t.jsx)("circleGeometry",{args:[.005,16]}),(0,t.jsxs)(M.Zr.meshBasicMaterial,{transparent:!0,side:x.DoubleSide,toneMapped:!1,depthWrite:!1,color:new x.Color("#A114C3").multiplyScalar(10),children:[(0,t.jsx)(M.qz.Billboard,{}),(0,t.jsx)(M.qz.Velocity,{direction:a,time:e.age}),(0,t.jsx)(M.qz.Acceleration,{direction:new x.Vector3(0,-1,0),time:e.age}),(0,t.jsx)(M.qz.Alpha,{alpha:(0,C.ah)(e.progress)}),(0,t.jsx)(M.qz.Lifetime,{...e})]}),(0,t.jsx)("group",{ref:i,children:q.map((n,o)=>(0,t.jsxs)("mesh",{position:[n.x,5*x.MathUtils.seededRandom(1e4*o),n.y],children:[(0,t.jsx)("sphereGeometry",{args:[.01]}),(0,t.jsx)("meshBasicMaterial",{color:new x.Color("#48CCD0").multiplyScalar(2.5),toneMapped:!1}),(0,t.jsx)(B.Q5,{rate:15*x.MathUtils.seededRandom(1e4*o)+5,setup(n){let{mesh:t,position:o}=n;o.add(F.randomDirection().multiplyScalar((0,D.b_)(.05))),e.write(t,(0,D.vX)(.75,1.5)),a.write(t,n=>n.randomDirection().multiplyScalar((0,D.b_)(.1)))}})]},o))})]})},k=[1.771423577047188,1.2,-3.4364543723730123],V=()=>{let{camera:n}=(0,c.z)(),e=function(){let n=(0,c.z)(n=>n.mouse),e=(0,o.useRef)(n.clone()),a=new x.Vector2;return(0,c.A)(t=>{a.copy(e.current),e.current.lerp(n,.005)}),e}();(0,c.A)(()=>{n.position.fromArray(k),n.position.x+=e.current.x*Math.PI/20,n.position.y+=e.current.y*Math.PI/20,n.lookAt(0,1.3,0)})};var O=a(3955),E=a(5385);(0,c.e)({UnrealBloomPass:O.m});let Z={bottom:"linear-gradient(to top, ".concat(E.O9.black,", ").concat((0,i.Fq)(E.O9.black,0)," 15%)"),top:"linear-gradient(to bottom, ".concat(E.O9.black,", ").concat((0,i.Fq)(E.O9.black,0)," 15%)"),both:"linear-gradient(to top, ".concat(E.O9.black,", ").concat((0,i.Fq)(E.O9.black,0)," 15%, ").concat(E.O9.black,", ").concat((0,i.Fq)(E.O9.black,0)," 85%)")},I=n=>{let{fade:e,opacity:a}=n,[i,c]=(0,o.useState)(!1),{intensity:x,radius:m}=(0,v.M4)({intensity:{value:2.4,min:0,max:4,step:.01},radius:{value:1.2,min:0,max:2,step:.01}});return(0,o.useEffect)(()=>{window.setTimeout(()=>{c(!0)},1e3)},[]),(0,t.jsx)(l.Z,{component:"div",sx:{top:0,bottom:0,left:0,right:0,position:"absolute",opacity:i?a||.4:0,transition:"opacity 2s ease-in-out",zIndex:0,"&:after":{position:"absolute",top:0,bottom:0,left:0,right:0,content:e?'""':null,background:e?Z[e]:null,pointerEvents:"none"}},children:(0,t.jsxs)(r.Xz,{camera:{fov:50},children:[(0,t.jsx)(S,{}),(0,t.jsx)(A,{}),(0,t.jsx)(V,{}),(0,t.jsx)(s.z,{disableGamma:!0,children:(0,t.jsx)("unrealBloomPass",{threshold:1,strength:x,radius:m})})]})})};var R=o.memo(I)},1367:function(n,e,a){var t=a(5893);a(7294);var o=a(9630),i=a(1953),l=a(5385);let c=n=>{let{top:e,bottom:a,uppercase:c=!0,alignment:r="start",size:s="default",letterSpacing:x="default"}=n,v={default:[l.cp.display.h5.fontSize,l.cp.display.h3.fontSize],small:[l.cp.fontSizes[5],l.cp.fontSizes[10]]};return(0,t.jsxs)(o.Z,{variant:"h2",sx:{alignItems:r,display:"flex",flexDirection:"column"},children:[(0,t.jsx)(i.Z,{component:"div",...l.cp.display.h5,fontSize:v[s][0],letterSpacing:"tight"===x?l.cp.letterSpacing.PrimaryHeading:l.cp.letterSpacing.UppercaseDisplay,sx:{textTransform:c?"uppercase":null},children:e}),(0,t.jsx)(i.Z,{component:"div",...l.cp.display.h2,fontWeight:800,fontSize:v[s][1],letterSpacing:"tight"===x?l.cp.letterSpacing.PrimaryHeading:l.cp.letterSpacing.UppercaseDisplay,sx:{textAlign:"center"===r?"center":"left",textTransform:c?"uppercase":null},children:a})]})};e.Z=c}}]);