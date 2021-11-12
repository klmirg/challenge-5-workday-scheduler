// var buttonEl = document.querySelectorAll(".saveBtn");
// var events = {};

$("#currentDay").append("The current day is " + moment().format('dddd, MMM Do'));

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"]

for (let i = 0; i < hours.length; i++) {
  var hoursDisplay = hours[i];

  // created parent div
  var parentDiv = $("<div>").addClass("row");

  // created hours and append
  var newHour = $("<div>").addClass("time-block row-1 hour").text(hoursDisplay);
  $(parentDiv).append(newHour);

  // created and append text area
  var newText = $("<textarea>").addClass("time-block description col-10")
  $(parentDiv).append(newText);

  // created a button and appending the button to the parentDiv
  var newButton = $("<button>").addClass("time-block saveBtn col-1").attr("width", "20");
  $(parentDiv).append(newButton);

  // put icon on the button
  var saveIcon = $("<span>").addClass("fas fa-save");
  $(newButton).append(saveIcon);

  $(".container").append(parentDiv);

}

$(".saveBtn").click(function() {
  
  var entry = $(this).siblings("textarea").val()
  var time = $(this).parent(".row").text()

  localStorage.setItem ("event", entry);
  localStorage.setItem ("time", time);

  console.log(time);
  console.log(entry);
}); 

var loadSchedule = function() {

  entry = JSON.parse(localStorage.getItem("entry"));

}




// var addTask = function () {

// }

// var saveTask = function (event) {
//   // var savedTasks = localStorage.setItem("tasks");
//   console.log("click")
//   // console.log(savedTasks);
// };


// var saveTaskHandler = function () {
  

// }



// loadEvents();



  