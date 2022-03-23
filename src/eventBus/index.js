import Vue from 'vue'
export const eventBus = new Vue()

export const eventsName = {
  openModal: 'OPENMODAL',
  request: 'REQUEST',
}

export class EventManage {
  constructor({
    request,
    ui
  }) {
    this.events = {
      [eventsName.openModal]: this.openmodal.bind(this),
      [eventsName.request]: this.requestFun.bind(this),
    }
    this.request = request
    this.ui = ui
    this.registerEvents()
  }
  registerEvents() {
    Object.keys(this.events).forEach(name => {
      eventBus.$on(name, this.events[name])
    })
  }

  offEvents() {
    Object.keys(this.events).forEach(name => {
      eventBus.$off(name, this.events[name])
    })
  }

  openmodal(param = {}) {
    console.log('弹窗')
    this.ui.MessageBox(param.message, param.title, param.options)
  }
  requestFun(options) {
    console.log('发送请求', options)
    this.request({
      url: options.url,
      method: options.method,
      data: {
  
      }
    })
  }
}


