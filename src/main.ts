//import Vue from 'vue'
import $ from 'jquery'
import Vue,{VNode} from 'vue'
import Component from 'vue-class-component'
Vue.config.productionTip = false;

@Component({
  template: '<button @click="onClick">Click!</button>'
})
class A3 extends Vue {
  // 初期データはインスタンスプロパティとして宣言できます
  message: string = 'Hello2';
  onClick (): void {
    window.alert(this.message)
  }
}

$().ready(()=>{
  new Vue({
    render:(h):VNode=>h(A3)
    }).$mount("#vue2");
});
