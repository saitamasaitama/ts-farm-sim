import $ from 'jquery'
import Vue,{VNode, CreateElement} from 'vue'
import field from './components/field'
import Component from 'vue-class-component'

function dd($obj:any){
  console.dir($obj);
}



$().ready(()=>{
  new Vue({
    render:(h):VNode=>h(field)
    }).$mount("#vue2");
});
