import Demo from './src/index'

Demo.install = function (Vue) {
  Vue.component(Demo.name, Demo)
}
export default Demo
