import Vue, { VNode, CreateElement } from 'vue'
import Component from 'vue-class-component'

// @Component デコレータはクラスが Vue コンポーネントであることを示します


@Component({
})


class field extends Vue {
  // 初期データはインスタンスプロパティとして宣言できます
  public message: string = 'Hello!';

  public render(h:CreateElement):VNode {
    return h("div",{
        
        style:{
            color:"red"
        },
        on:{
            click:()=>window.alert('Good!')
        }
    },[
        h("button","1"),
        h("button","2"),
    ]);
  }

  // コンポーネントメソッドはインスタンスメソッドとして宣言できます
  onClick (): void {
    window.alert(this.message)
  }
}

export default field;