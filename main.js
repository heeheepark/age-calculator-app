// 1. 모두 비었을때 require 메시지 표현
// 2. 하나라도 비었을 때 해당 require메시지 표현
// 3. 날짜가 안맞을 때 (없는 날짜 or 미래의 년도) 에러메시지 표현
// 4. 유효하지 않은 날짜(1991-04-31) 에러메시지 표현

let inputdate = document.querySelectorAll('input');
let dayInput = document.getElementsByClassName('day')[0];
let monthInput = document.getElementsByClassName('month')[0];
let yearInput = document.getElementsByClassName('year')[0];
let fromDate ;


let title = document.querySelectorAll('.title');
let errorBlank = document.querySelectorAll('.error-blank');
let errorDate = document.getElementsByClassName('error-date');
let errorValue = document.getElementsByClassName('error-value');
let value = document.querySelectorAll('.value')
let result = true;
  
function inspector() {
  for(let i = 0; i < inputdate.length; i++) {
    if (inputdate[i].value !== "") {
      title[i].style.color = "hsl(0, 1%, 44%)";
      inputdate[i].style.border = "1px solid hsl(0, 0%, 86%)";
      errorBlank[i].style.display = "none";
      fromDate = `${yearInput.value}-${monthInput.value}-${dayInput.value}`
      checkValidDate();
    } else {
      title[i].style.color = "hsl(0, 100%, 67%)";
      inputdate[i].style.border = "1px solid hsl(0, 100%, 67%)";
      errorBlank[i].style.display = "block";
    }
  }
}

function checkValidDate() {
  let date = fromDate.split("-");
  let year = parseInt(date[0], 10),
      month = parseInt(date[1], 10),
      day = parseInt(date[2], 10);

  let dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
  result = dateRegex.test(day+'-'+month+'-'+year);
  
  // const currentDate = new Date()
  // if(0 < parseInt(dayInput.value) && parseInt(dayInput.value) < 32) {
  //   dayInput.style.border = "1px solid hsl(0, 0%, 86%)";
  //   errorValue[0].style.display = "block";
  //   title[0].style.color = "1px solid hsl(0, 0%, 86%)"
  // }
  // if(0 < parseInt(monthInput.value) && parseInt(monthInput.value) < 13) {
  //   monthInput.style.border = "1px solid hsl(0, 0%, 86%)";
  //   errorValue[1].style.display = "block";
  //   title[1].style.color = "1px solid hsl(0, 0%, 86%)"
  // }
  // if(parseInt(yearInput.value) > currentDate.getFullYear()) {
  //   yearInput.style.border = "1px solid hsl(0, 0%, 86%)";
  //   errorValue[2].style.display = "block";
  //   title[2].style.color = "1px solid hsl(0, 0%, 86%)"
  // }

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
      ageCalculate();
    }
  }
}

function inthePast() {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  if(birthDate < currentDate) {
    console.log(birthDate);
  };
}

function ageCalculate() {
  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);

  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
  let ageMonth = currentDate.getMonth() - birthDate.getMonth();
  let ageDay = currentDate.getDate() - birthDate.getDate();

  const daysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
  };

  if(ageDay < 0) {
      ageDay += daysInMonth(birthDate.getMonth(), birthDate.getFullYear());
      ageMonth -= 1;
  }
  if(ageMonth < 0) {
      ageMonth += 12;
      ageYear -= 1;
  }

  value[0].textContent = ageYear;
  value[1].textContent = ageMonth;
  value[2].textContent = ageDay;
}


