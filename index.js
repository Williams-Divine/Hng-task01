 // Function to update the time
 function updateTime() {
  // Create a new Date object
  var now = new Date();

  // Get the current time as a string (HH:MM:SS)
  var timeString = now.toLocaleTimeString();

  // Update the content of the HTML element with the current time
  document.getElementById('current-time').textContent = timeString;
}

// Call updateTime initially to display the time
updateTime();

// Set up a timer to update the time every second
setInterval(updateTime, 1000);

function updateDay() {
  // Create a new Date object
  var now = new Date();

  // Get the current day of the week as a string (e.g., "Monday", "Tuesday")
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayOfWeekString = daysOfWeek[now.getDay()];

  // Update the content of the HTML element with the current day of the week
  document.getElementById('current-day').textContent = "Today is " + dayOfWeekString;
}

// Call updateDay initially to display the day of the week
updateDay();