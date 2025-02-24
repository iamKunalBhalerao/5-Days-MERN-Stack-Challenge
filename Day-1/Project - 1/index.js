function calculateAge() {
  const inpDay = document.getElementById("day");
  const inpMonth = document.getElementById("month");
  const inpYear = document.getElementById("year");
  const resultYear = document.getElementById("resultYear");
  const resultMonth = document.getElementById("resultMonth");
  const resultDay = document.getElementById("resultDay");
  const resultdiv = document.getElementById("resultdiv");

  const day = parseInt(inpDay.value);
  const month = parseInt(inpMonth.value) - 1;
  const year = parseInt(inpYear.value);

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    month < 0 ||
    month > 11
  ) {
    resultdiv.textContent = "Invalid Input, Please Enter Valid Date";
  }

  const birthDate = new Date(year, month, day);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths = (12 + ageMonths) % 12; // Handle Negative month Difference
    if (ageDays < 0) {
      const lastDayOfMotnth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate(); // get last Current Month
      ageDays = lastDayOfMotnth + ageDays; // Calculate the remaining days
      ageMonths--;
      if (ageMonths < 0) ageMonths = 11;
    }
  } else if (ageDays < 0) {
    const lastDayOfMotnth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate(); // Get last day of current month
    ageDays = lastDayOfMotnth + ageDays;
    ageMonths--;
    if (ageMonths < 0) ageMonths = 11;
  }

  resultYear.innerHTML = `<h2 id="resultYear">${ageYears} Years</h2>`;
  resultMonth.innerHTML = `<h2 id="resultMonth">${ageMonths} Months</h2>`;
  resultDay.innerHTML = `<h2 id="resultDay">${ageDays} Days</h2>`;
}
