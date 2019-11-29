import * as fs from 'fs'
import express from 'express' 
import config from './setting.json'


const port = 3002;
/**
 * デバッグ用
 */
function dd($obj:any){
  console.dir($obj);

}
const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req:any, res:any)=>{
   return res.render('index',{
   })
});

app.listen(port,() => console.log(`ポート${port}番で処理開始`));

dd(config);

