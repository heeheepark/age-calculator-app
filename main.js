// 1. 모두 비었을때 require 메시지 표현
// 2. 하나라도 비었을 때 해당 require메시지 표현
// 3. 날짜가 안맞을 때 (없는 날짜 or 미래의 년도) 에러메시지 표현
// 4. 유효하지 않은 날짜(1991-04-31) 에러메시지 표현

let inputdate = document.querySelectorAll('input');
let day = document.getElementsByClassName('day')[0];
let month = document.getElementsByClassName('month')[0];
let year = document.getElementsByClassName('year')[0];
let fromDate ;


let title = document.querySelectorAll('.title');
let errorBlank = document.querySelectorAll('.error-blank');
let errorDate = document.getElementsByClassName('error-date');
let value = document.querySelectorAll('.value')
let result = true;
let currentDate = "2023-04-15";
  

function checkValidDate() {
  let date1 = fromDate.split("-");
  let y = parseInt(date1[0], 10),
      m = parseInt(date1[1], 10),
      d = parseInt(date1[2], 10);

  let dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
  result = dateRegex.test(d+'-'+m+'-'+y);
  
  for (let i = 0; i < inputdate.length; i++) {
    if (result === false) {
      errorDate[0].style.display = "block";
      title[i].style.color = "hsl(0, 100%, 67%)";
      inputdate[i].style.border = "1px solid hsl(0, 100%, 67%)";
      value[i].innerHTML = "- -";
    } else {
      errorDate[0].style.display = "none";
      title[i].style.color = "hsl(0, 1%, 44%)";
      inputdate[i].style.border = "1px solid hsl(0, 0%, 86%)";
      // value[i].innerHTML = inputdate[i].value;
      getDateDiff(fromDate, currentDate);
    }
  }
}

function inspector() {
  for(let i = 0; i < inputdate.length; i++) {
    if (inputdate[i].value !== "") {
      title[i].style.color = "hsl(0, 1%, 44%)";
      inputdate[i].style.border = "1px solid hsl(0, 0%, 86%)";
      errorBlank[i].style.display = "none";
      fromDate = `${year.value}-${month.value}-${day.value}`
      checkValidDate();
    } else {
      title[i].style.color = "hsl(0, 100%, 67%)";
      inputdate[i].style.border = "1px solid hsl(0, 100%, 67%)";
      errorBlank[i].style.display = "block";
    }
  }
}

function getDateDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  
  const diffDate = date1.getTime() - date2.getTime();
  
  console.log(Math.abs(diffDate / (1000 * 60 * 60 * 24))); // 밀리세컨 * 초 * 분 * 시 = 일
}