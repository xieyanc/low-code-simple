import Vue from 'vue'
import { EventManage, eventBus, eventsName } from '@/eventBus'
import { getComponents } from './register'

class GlobalData {
  constructor({
    request,
    ui
  }) {
    this.eventManage = new EventManage({
      request,
      ui
    })
    this.init()
  }
  init() {
    this.initConfig()
    this.initApi()
    this.registerAttrs()
  }

  initApi() {
    Vue.prototype.$lowApi = {}
    Vue.prototype.$lowApi['eventManage'] = this.eventManage
    Vue.prototype.$lowApi['eventBus'] = eventBus
    Vue.prototype.$lowApi['eventsName'] = eventsName
  }

  initConfig() {
    const fileFun = require.context('@/components/ControlConfigs', true, /config.json$/)
    let fields = {}
    let controlList = []
    fileFun.keys().forEach(key => {
      const compName = key.split('/') && key.split('/')[1]
      const config = {
        component: compName,
        ...fileFun(key)
      }
      fields[compName] = config.fields
      controlList.push(this.rewriteConfig(config))
    })
    Vue.prototype.$fields = fields
    Vue.prototype.$controlList = controlList
  }

  rewriteConfig({ name, icon, component, fields }) {
    const temp = { component }
    const newFiels = {}
    Object.keys(fields).forEach(item => {
      newFiels[item] = fields[item].value
    })
    return { name, icon, component, ...newFiels }
  }

  registerAttrs() {
    const compListObj = getComponents(require.context('@/components/AttrForms', true, /.vue/))
    Object.keys(compListObj).forEach(compName => {
      Vue.component(compName, compListObj[compName])
    })
  }
}

export default GlobalData