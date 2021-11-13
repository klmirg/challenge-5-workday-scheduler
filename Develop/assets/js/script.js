
$("#currentDay").append("The current day is: " + moment().format('dddd, MMM Do'));

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am"]



for (let i = 0; i < hours.length; i++) {
  var hoursDisplay = hours[i];

  // created parent div
  var parentDiv = $("<div>").addClass("row hour");

  // created hours and append
  var newHour = $("<div>").addClass("time-block row-1").text(hoursDisplay);
  $(parentDiv).append(newHour);

  // created and append text area.......... add a specific hour class to newText
  var newText = $("<textarea>").addClass("time-block description col-10 hoursDisplay")
  $(parentDiv).append(newText);

  // created a button and appending the button to the parentDiv
  var newButton = $("<button>").addClass("time-block saveBtn col-1").attr("width", "20");
  $(parentDiv).append(newButton);

  // putting the icon on the button
  var saveIcon = $("<span>").addClass("fas fa-save");
  $(newButton).append(saveIcon);

  $(".container").append(parentDiv);

}

$(".saveBtn").click(function() {
  
  var entry = $(this).siblings("textarea").val()
  var time = $(this).parent(".row").text()

  localStorage.setItem (time, entry);
  localStorage.setItem (time, entry);

  console.log(time);
  console.log(entry);
}); 

var loadSchedule = function() {

  var entry = $(this).siblings("textarea").val()
  var time = $(this).parent(".row").text()

  var savedSchedule = localStorage.getItem(time, entry);
  
  if (!savedSchedule) {
    return false;
  } else {
     savedSchedule = JSON.parse(savedSchedule);
  }
}

// Get current time
// loop through hours
// compare each hour to the current time
// have the if else to compare the time
// add the coloring class to the class of that hour
var timeBlockColorChange = function(hours) {

  var currentTime = moment().format("MMMM Do, YYYY - hh:mm:ss a");
  console.log(currentTime);
  
  for (let i = 0; i < hours.length; i++) {
    
    if (hours[i] >= currentTime) {
      $("hoursDisplay").addClass("past");
    } else if (hours[i] <= currentTime) {
      $("hoursDisplay").addClass("future");
    } else { $("hoursDisplay").addClass("present")
    }
  }
};





timeBlockColorChange();

loadSchedule();





  