
export function getComponents(files) {
  const components = {}
  files.keys().forEach(key => {
    const component = files(key)
    let ctrl = component.default || component
    let compName = ctrl.name
    components[compName] = ctrl
  })
  return components
}
