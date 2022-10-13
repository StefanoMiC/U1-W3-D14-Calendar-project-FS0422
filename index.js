// ###########################################

// usually we start following the code from the window.onload method
// since it will be executed automatically when the page finishes loading

// ###########################################

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

const now = new Date(); // date of today

const daysInThisMonth = function () {
  // We select the next month with "now.getMonth() +1", just to go back one day with "0" in the third arguement.
  // So starting from the next month from NOW, this will give us back the LAST DAY of the month before, so basically the last day of the current month.
  // And that's exactly what we needed, the last day of the current month is also the total number of days that we need to create in the calendar! ;)
  const getYear = now.getFullYear();
  const getMonth = now.getMonth();

  const lastDayDateObj = new Date(getYear, getMonth + 1, 0);
  const lastDayOfThisMonth = lastDayDateObj.getDate();

  return lastDayOfThisMonth; // returns the number of days in the current month

  //  it can also be written as a one-liner for brevity
  //   return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

const createDays = function (days) {
  const calendar = document.getElementById("calendar");

  for (let i = 0; i < days; i++) {
    const dayCellNode = document.createElement("div"); // this will create an empty day cell
    dayCellNode.className = "day"; // assigning the CSS class

    const h3 = document.createElement("h3"); // label for day's number
    // adding the number as innerText of the day's <h3> we've created
    h3.innerText = i + 1; // the for loop gives a 0 based index, let's increase it by 1 to count days properly

    dayCellNode.appendChild(h3); // <div class="day"><h3 /></div>
    calendar.appendChild(dayCellNode); // <div id="calendar"> <div class="day"><h3 /></div> </div>
  }
};

window.onload = function () {
  const title = document.querySelector("h1");
  const numberOfDays = daysInThisMonth(); // receives a number value from the function

  const monthIndex = now.getMonth();
  const currentMonth = months[monthIndex]; // extracts a string from the months array in the position found with monthIndex
  title.innerText = currentMonth; // sets the month name as the page title

  createDays(numberOfDays); // generates new day cells dynamically based on the number of days provided as arguement
};
