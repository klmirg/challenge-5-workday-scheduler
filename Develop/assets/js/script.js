
$("#currentDay").append("The current day is: " + moment().format('dddd, MMM Do'));

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"]

var militaryHours = ["6", "7", "8", "9","10", "11", "12", "13", "14", "15", "16", "17","18","19","20","21", "22", "23", "24"]


for (let i = 0; i < hours.length; i++) {
  var hoursDisplay = hours[i];

  // created parent div
  var parentDiv = $("<div>").addClass("row hour");

  // created hours and append
  var newHour = $("<div>").addClass("time-block row-1").text(hoursDisplay);
  $(parentDiv).append(newHour);

  // created and append text area.......... add a specific hour class to newText
  var newText = $("<textarea>").addClass("time-block description col-10 hoursDisplay past present future").attr("id", militaryHours[i]);
  $(parentDiv).append(newText);

  // created a button and appending the button to the parentDiv
  var newButton = $("<button>").addClass("time-block saveBtn col-1").attr("width", "20");
  $(parentDiv).append(newButton);

  // putting the icon on the button
  var saveIcon = $("<span>").addClass("fas fa-save");
  $(newButton).append(saveIcon);

  $(".container").append(parentDiv);

  var loadSchedule = function() {

    // var entry = $(this).siblings("textarea").val()
    var entry = localStorage.getItem(militaryHours[i]);
    $("#" + militaryHours[i]).val(entry);
   
  };
  loadSchedule();
}


let textAreas = document.getElementsByClassName('description');
textAreas[0].textContent = localStorage.getItem('');

$(".saveBtn").click(function() {
  
  var entry = $(this).siblings("textarea").val()
  var time = $(this).siblings("textarea").attr("id")

  localStorage.setItem (time, entry);

  console.log(time);
  console.log(entry);
}); 



// Get current time
// loop through hours
// compare each hour to the current time
// have the if else to compare the time
// add the coloring class to the class of that hour
var timeBlockColorChange = function() {

  var currentTime = moment().format("hh:mm:ss a");
  console.log(currentTime);
  
  for (let i = 0; i < militaryHours.length; i++) {
    
    if (militaryHours[i] < currentTime) {
      $("hoursDisplay").addClass("past");
    } else if (militaryHours[i] > currentTime) {
      $("hoursDisplay").addClass("future");
    } else { $("hoursDisplay").addClass("present")
    }
  }
};





timeBlockColorChange();







  