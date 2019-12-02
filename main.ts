import * as fs from 'fs'
import express from 'express' 
import config from './setting.json'
import cookieParser from 'cookie-parser';
import * as crypto from 'crypto'

const port = 3002;
/**
 * デバッグ用
 */
function dd($obj:any){
  console.dir($obj);
}

function randomCookie():string{

  let s="";
  for(let i=0;i<8;i++){
    s+="AbcdefGHijkLmnOpqrStuVWXyz"[Math.round(Math.random()*25)];

    //s+=Math.round(Math.random()*26)+":";
  }
  return s;
}

const sessions:Map<string,{}>=new Map<string,{}>();

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res)=>{
  let token:string= req.cookies.token;
  let session=sessions.has(token)?sessions.get("token"):{};

  if(!token){
    token=randomCookie();
    res.cookie("token",token,{path:"/",expires:new Date("2999-12-31 00:00:00")});
    sessions.set(token,{
      "first_login":Date.now()
    })
    console.log("empty token");
  }else{
    console.log(`not empty cookie TOKEN=${token}`);  
  }
  console.log(req.cookies);

  //クッキーがなかったら生成
  

  return res.render('index',{
    "cookie":"sss"
  });
});
app.post("/aaaa",(req,res)=>{

});

app.post("/",
(req,res)=>{
  
  return res.send({
    "A":"B"
  });
});


//ログイン
app.post("/login",(req:any,res:any)=>{
  return res.send({
    "A":"B"
  });
});


app.listen(port,() => console.log(`ポート${port}番で処理開始`));

dd(config);

