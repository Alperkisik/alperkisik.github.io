const calculateExperience = () => {
  var currentDate = new Date();
  var pastDate = new Date(2010, 8, 11);

  var spentTimeMilliseconds = currentDate - pastDate;
  var spentTimeDays = spentTimeMilliseconds / (1000 * 60 * 60 * 24);
  var spentYear = Math.floor(spentTimeDays / 365.25);

  document.getElementById("totalExperience").innerHTML = spentYear;
};

function calculateTimeDifference(startDate, endDate) {
  var startMilliseconds = startDate.getTime();
  var endMilliseconds = endDate.getTime();

  var timeDifferenceMilliseconds = Math.abs(
    endMilliseconds - startMilliseconds
  );

  var days = Math.floor(timeDifferenceMilliseconds / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeDifferenceMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor(
    (timeDifferenceMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );
  var seconds = Math.floor((timeDifferenceMilliseconds % (1000 * 60)) / 1000);

  var months = Math.floor(days / 30);
  var years = Math.floor(months / 12);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    months: months,
    years: years,
  };
}

function convertMonthToYearAndMonth(month) {
  var year = Math.floor(month / 12);
  var remainingMonths = month % 12;

  return {
    year: year,
    month: remainingMonths,
  };
}

const LastJobTimeSpentSetup = () => {
  var startDate = new Date("2023-02-27T10:00:00");
  var endDate = new Date();

  var timeDifference = calculateTimeDifference(startDate, endDate);

  let monthtext = "Month";
  if (timeDifference.months > 1) monthtext = "Months";

  document.getElementById(
    "lastJobSpentTime"
  ).innerHTML = `${timeDifference.months} ${monthtext}`;

  if (timeDifference.years >= 1) {
    var lastJobSpentTime = convertMonthToYearAndMonth(timeDifference.months);

    let yearText = "Year";
    monthtext = "Month";

    if (lastJobSpentTime.year > 1) yearText = "Years";
    if (lastJobSpentTime.month > 1) monthtext = "Months";

    document.getElementById(
      "lastJobSpentTime"
    ).innerHTML = `${lastJobSpentTime.year} ${yearText} ${lastJobSpentTime.month} ${monthtext}`;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  calculateExperience();
  LastJobTimeSpentSetup();

  if (window.innerWidth < 576) {
    document.querySelector(".header-top").classList.remove("bg-transparent");
  }

  
});

// Menu links that open a tab in the About Me section
const ABOUT_TAB_LINKS = {
  "#about-me": "nav-about-tab",
  "#work-experience": "nav-experience-tab",
};

Object.entries(ABOUT_TAB_LINKS).forEach(([hash, tabButtonId]) => {
  document.querySelectorAll('a[href$="' + hash + '"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openAboutTab(tabButtonId);
    });
  });
});

const tabFromHash = ABOUT_TAB_LINKS[window.location.hash];

if (tabFromHash) {
  window.addEventListener("load", () => openAboutTab(tabFromHash));
}
