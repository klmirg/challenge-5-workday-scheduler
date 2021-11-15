// Giving the current day 
$("#currentDay").append("The current day is: " + moment().format('dddd, MMM Do'));
// Hours of the day
var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12am"]

var militaryHours = ["6", "7", "8", "9","10", "11", "12", "13", "14", "15", "16", "17","18", "19", "20", "21", "22", "23", "24"]


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
// This is getting what text I have in localStorage
textAreas[0].textContent = localStorage.getItem('');

$(".saveBtn").click(function() {
  
  var entry = $(this).siblings("textarea").val()
  var time = $(this).siblings("textarea").attr("id")

  localStorage.setItem (time, entry);
}); 

// This function is to change the colors based on what time it is, if something is in the past, future, or present
var timeBlockColorChange = function() {

  var currentTime = parseInt(moment().format("kk"));
  console.log(currentTime);

  var textAreas = $("textarea")

textAreas.each( function (index, element) {
  var elementTime = $(element).attr("id")
  var numberVersionOfElTime = parseInt(elementTime);

  console.log(elementTime + " and " + currentTime)
// Comparing the currentTime to the time slot on the page, to decide which color it needs, based on past, present, or future.
  if (elementTime > currentTime) {
    $(textAreas[index]).addClass("future");
    $(textAreas[index]).removeClass("present");
    $(textAreas[index]).removeClass("past");
    
  } else if (elementTime == currentTime) {
    $(textAreas[index]).addClass("present");
    $(textAreas[index]).removeClass("future");
    $(textAreas[index]).removeClass("past");
  } else {
    $(textAreas[index]).addClass("past");
    $(textAreas[index]).removeClass("future");
    $(textAreas[index]).removeClass("present");
  }
});
};



timeBlockColorChange();