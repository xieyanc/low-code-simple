/**
 * 这个文件的作用似乎是交互行为的注册
 */

import Vue from 'vue'
export const eventBus = new Vue()

export const eventsName = {
  openModal: 'OPENMODAL',
  request: 'REQUEST',
}

export class EventManage {
  // 这个构造器像是提供给element-ui用的，
  constructor({ request, ui }){
    this.events = {
      // openmodal和requestFun两个方法在底下，可能是按钮的弹窗和发送请求的方法
      // bind()方法主要就是将函数绑定到某个对象，bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()第一个参数的值
      // this.events是一个对象，下面那俩中括号是它的属性
      [eventsName.openModal]: this.openmodal.bind(this),
      [eventsName.request]: this.requestFun.bind(this),
    }
    // console.log(this.openmodal)

    // console.log(this)
    // this.request = request
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
    // MessageBox是elementUI的方法
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
