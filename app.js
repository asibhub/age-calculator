let datePick = document.getElementById("date-pick");
datePick.max = new Date().toDateString().split("T")[0];
let result = document.getElementById("result");
function calculateAge() {
  let selectDate = new Date(datePick.value);

  let date1 = selectDate.getDate();
  let month1 = selectDate.getMonth() + 1;
  let year1 = selectDate.getFullYear();
  let toDay = new Date();
  let date2 = toDay.getDate();
  let month2 = toDay.getMonth() + 1;
  let year2 = toDay.getFullYear();

  let date3, month3, year3;
  year3 = year2 - year1;
  if (month2 >= month1) {
    month3 = month2 - month1;
  } else {
    year3--;
    month3 = 12 + month2 - month1;
  }
  if (date2 >= date1) {
    date3 = date2 - date1;
  } else {
    month3--;
    date3 = getMonth(year1, month1) + date2 - date1;
  }
  if (month3 < 0) {
    month3 = 11;
    year3--;
  }
  result.innerHTML = `Your Current Age is <span>${year3}</span> years <span>${month3}</span> months and <span>${date3}</span> Days👍`;
}

function getMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
