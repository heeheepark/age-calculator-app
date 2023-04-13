// 1. 모두 비었을때 require 메시지 표현
// 2. 하나라도 비었을 때 해당 require메시지 표현
// 3. 날짜가 안맞을 때 (없는 날짜 or 미래의 년도) 에러메시지 표현
// 4. 유효하지 않은 날짜(1991-04-31) 에러메시지 표현

let inputdate = document.querySelectorAll('input');
let day = document.getElementsByClassName('day')[0];
let month = document.getElementsByClassName('month')[0];
let year = document.getElementsByClassName('year')[0];

let title = document.querySelectorAll('.title');
let errorBlank = document.querySelectorAll('.error-blank');

console.log(inputdate[0].value === "")
function inspector() {
  for(let i = 0; i < inputdate.length; i++) {
    if (inputdate[i].value === "") {
      title[i].style.color = "hsl(0, 100%, 67%)";
      inputdate[i].style.border = "1px solid hsl(0, 100%, 67%)";
      errorBlank[i].style.display = "block";
    } else {
      title[i].style.color = "hsl(0, 1%, 44%)";
      inputdate[i].style.border = "1px solid hsl(0, 0%, 86%)";
      errorBlank[i].style.display = "none";
    }
  }
}