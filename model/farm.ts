

class Farms extends Map<string,Farm>{
}

class Farm{

  public Field:Array<any>=[];
}

class Field{
}


interface SoilParam{
  setSeed? : boolean,
  crop?:Crop,
}
//土
class Soil implements SoilParam{
  public constructor(
    soil:SoilParam
  ){
    Object.assign(this,soil);
  }
}

//種
class Seed{
}
//水
class Water{
}

//作物
class Crop{
//収穫時期によって収穫できるものが異なる

  public Take():RewardInfo{
    return new RewardInfo();
  }

//また、内部ステータスによって収穫までの時期が早まったりする

}
/* 
基本構成
土に種をやって水を撒けばその内作物が収穫できる。
*/

/**
アイテム獲得情報
*/
class RewardInfo{
  public constructor(){

  }

}



//アイテムマスタ
class Item{
}

class Items extends Map<string,Item>{
}

//アイテムマスタ　ここまで

//所持数
class Stock{
  public itemId:string = "item_sample";
  public count:number = 1;

}


const s= new Soil({setSeed:true});

console.dir(s);
