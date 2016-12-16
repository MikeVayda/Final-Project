class Cart{
  //What is the first part of every class? Type it below.
constructor(i,q){
  this.itemList = i;
  this.itemquality = q;
}


  //Type the instance functions below this comment.
addItem(i,q){
  this.itemList.push(i);
  this.itemquality.push(q);
}
totalCart(){
  let total = 0;
  for(a=0;a<this.itemlist.length;a++){
    total += this.itemList.[a].price*this.itemquality[a];
  }
  return total;
}
subCart(days){
  let subCart = new Cart([],[]);
  for(b=0;b<this.itemList.length;a++){
    if(this.itemList[b].shipping == days){
      subCart.push([b]);
    }
  }
  return subCart
}
}
