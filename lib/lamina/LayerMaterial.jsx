import React, { useEffect } from 'react'
import mergeRefs from 'react-merge-refs'
import { extend } from "@react-three/fiber"
import { LayerMaterial } from './vanilla.ts'
extend({ LayerMaterial })

function getLayerMaterialArgs({ color, alpha, lighting, name, userData, ...rest }) {
  return [
    {
      color,
      alpha,
      lighting,
      name,
      userData,
    },
    rest,
  ]
}

export default React.forwardRef(({ children, setMaterial = () => {}, ...props }, forwardRef) => {
  const ref = React.useRef(null)
  useEffect(() => setMaterial(ref.current), [])

  React.useLayoutEffect(() => {
    ref.current.layers = (ref.current).__r3f.objects
    ref.current.refresh()
  }, [children])

  const [args, otherProps] = React.useMemo(() => getLayerMaterialArgs(props), [props])

  return (
    <layerMaterial args={[args]} ref={mergeRefs([ref, forwardRef])} {...otherProps}>
      {children}
    </layerMaterial>
  )
})