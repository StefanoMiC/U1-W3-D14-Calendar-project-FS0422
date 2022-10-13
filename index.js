const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const now = new Date();

const daysInThisMonth = function () {
  const getYear = now.getFullYear();
  const getMonth = now.getMonth();

  const lastDayDateObj = new Date(getYear, getMonth + 1, 0);
  const lastDayOfThisMonth = lastDayDateObj.getDate();

  return lastDayOfThisMonth;
};

const createDays = function (days) {
  const calendar = document.getElementById("calendar");

  for (let i = 0; i < days; i++) {
    const dayCellNode = document.createElement("div");
    dayCellNode.className = "day";

    const h3 = document.createElement("h3");
    h3.innerText = i + 1;

    dayCellNode.appendChild(h3);
    calendar.appendChild(dayCellNode);
  }
};

window.onload = function () {
  const title = document.querySelector("h1");
  const numberOfDays = daysInThisMonth();

  const monthIndex = now.getMonth();
  const currentMonth = months[monthIndex];
  title.innerText = currentMonth;

  createDays(numberOfDays);
};
