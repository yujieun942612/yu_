//base_02.js

//console.log("base_02.js 연결완료!");

console.log(10 + 10);       //20 => 숫자+숫자=숫자(20)
console.log("10" + 10);     //1010 => 문자+숫자= 문자=>나열 ("" 안에 들어간것은 문자)
console.log("10" + "10");   //1010 => 문자+문자 = 문자 =>나열

//js 에서는 다양한 형타입이 존재
// 숫자는 따옴표를 붙이지 않는다.
// 문자는 따옴표를 붙인다.(js 에서는 쌍따옴표 및 홑따옴표의 구분을 하지 않는다.) 
// 단, 따옴표의 시작과 끝의 모양이 같아야 한다. (')로 시작했으면 (') 로 끝나야한다 (")로 시작하면 (")로 끝나야한다.


//따옴표를 사용하지 않는 문자가 있다. -> 변수, 함수, 객체, 배열등의... 기능을 가진 것.

var 낄끼빠빠 = "낄때끼고 빠질때 빠져라!";
//console.log(낄끼빠빠);

var coffee ="인생의 쓴맛, 이걸 왜 먹지?, 각성하기 위한 포션";
//console.log(coffee);

  coffee="사치,오늘 하루를 무사히 이룰수있게 내일의 체력을 끌어오는 보충제";
console.log(coffee);  

//변수: 1.변하는 수라는 뜻을 가지고 있으며, 하나의 기능, 또는 내용을 요약해서 담고있는 형태.
//      2.상황에 따라 그 내용이 변할 수 있으며
//      3.어떠한 기능을 담을 수 있다.(단, js 외에 다른 언어에서는 변수에 기능을 담을 수 없다.)
//      4.변하지 않는 수에 대해서는 상수(최초의 등록의 값만 인지) 라고 불리운다.
//      5. 변수는 최초에 한번 var 라고 선언한다. 이후에는 동일한 변수를 수정시 var 을 적지않는다.=>예)위에 coffee 
// -----6.2015년 이후, ECMA2015(es6)버전이 등장하면서, var 변수 대신 const(상수), let(변수) 을 이용한 변수가 등장한다.

// ";" 작성하는곳:  ";" 의 의미는 기능종료를 뜻한다.(부분이 아닌, 해당 라인전체의 기능종료)
//변수선언 후 마지막에 작성하거나,=> var coffee = "defasdfasdf";
// 함수 또는 메소드 기능 마지막에 작성한다.=> log();   setInterval().log();

//=(대입하다) ===(같다)


// (10=="10") =>값자체만 보는것
// (10==="10") =>형태까지 보는 것 







