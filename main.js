'use strict';

// 1,2
{
  const scores = [80,90,40,70];

  // 1
  for(let i = 0;i < scores.length;i++){
    console.log(scores[i]);
  }

  // 2
  scores.forEach((score,index) => {
    console.log(`Score ${index} : ${score}`);
  });
}

// 3
{
  const prices = [180,190,200];
  const updatedprice = prices.map((price) => {
    return price + 20;
  });
  console.log(updatedprice);
}

// 4
{
  const prices = [180,190,200];
  const updatedprice = prices.map(price => price + 20);
  console.log(updatedprice);
}

// 5
{
  const numbers = [1,4,7,8,10];
  const evenNumber = numbers.filter((value) => {
    if(value % 2 == 0){
      return value;
    }
  });
  console.log(evenNumber);
}

// 6
{
  const numbers = [1,4,7,8,10];
  const evenNumber = numbers.filter(numberFilter => numberFilter % 2 == 0);
  console.log(evenNumber);
}

// 7
{
  const str = "hello";

  // 7
  console.log(str.length);

  // 8
  console.log(str.slice(2,4));

  // 9
  console.log(str.slice(1,2));
}

// 10
{
  const t = [2023,7,29];
  console.log(t.join("/"));
}

// 11,12,13,14,15,16
{
  const scores = [10,3,9];
  let sum = 0;

  // 11
  scores.forEach((score) => {
    sum += score;
  });
  console.log(sum);
  
  // 12
  const avg = sum / scores.length;
  console.log(avg);

  // 13
  console.log(Math.floor(avg));

  // 14
  
  console.log(Math.ceil(avg));

  // 15
  console.log(Math.round(avg));

  // 16
  // console.log((Math.floor(avg * 1000)) / 1000);
  console.log(avg.toFixed(3));
}

// 17
{
  // サイコロ(6までの数)にしたい場合は6をかける
  // 0に6をかけても0になる
  // 1未満の乱数に6をかけても6にはならない
  // よって、1をプラスする
  let num = Math.random() * 6 + 1;
  console.log(Math.trunc(num));
}
