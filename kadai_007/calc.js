//変数numにランダムな整数を代入する
const min = 1;
const max = 100;
let num = Math.floor(Math.random()*(max - min + 1))+min;



//変数numの値を出力する)
console.log(num);

//変数numの値が3の倍数であれば「３の倍数」
if(num % 3 === 0  && num % 5 !== 0){
  console.log("3の倍数です");
  }

  else if(num % 5 === 0 && num % 3 !== 0){
    console.log("5の倍数です");
  }

  else if(num % 15 === 0){
    console.log("3と5の倍数です");
  }

  else {
    console.log(num);
  }