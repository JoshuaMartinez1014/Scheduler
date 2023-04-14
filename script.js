let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
// prettier-ignore
let hoursStandard = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM",];

let timeRange;
let today = dayjs().format("dddd, MMMM D YYYY");
let currentHour = dayjs().format("HH ");
console.log(`today is: ${today}`);
console.log(`currentHour: ${currentHour}`);

let date = $("#currentDay");
date.text(today);

let div = $("<div>");

// Creates each row, with given id and class
for (let i = 0; i < hours.length; i++) {
  if (hours[i] < currentHour) {
    timeRange = "past";
    console.log(hours[i] + " past");
  } else if (hours[i] > currentHour) {
    timeRange = "future";
    console.log(hours[i] + " future");
  } else {
    timeRange = "present";
    console.log(hours[i] + " present");
  }

  $(".container-lg").append(`<div id="hour-${hours[i]}"></div>`);
  $(`#hour-${hours[i]}`).attr("class", `row time-block ${timeRange}`);

  const newDiv = $("<div>");
  newDiv.addClass("col-2 col-md-1 hour text-center py-3");
  newDiv.text(hoursStandard[i]);

  const newTextArea = $("<textarea>");
  newTextArea.addClass("col-8 col-md-10 description");
  newTextArea.attr("rows", 3);

  const newButton = $("<button>");
  newButton.addClass("btn saveBtn col-2 col-md-1");
  newButton.attr("aria-label", "save");
  newButton.html(`<i class="fas fa-save" aria-hidden="true"></i>`);

  $(`#hour-${hours[i]}`).append(newDiv).append(newTextArea).append(newButton);
}
let storage = [];
let insertText;
// button click saves textarea
$(`button`).on(
  "click",
  function (e) {
    var hour = $(this).parent().attr("id");
    /* if (this) { */
    console.log($(this).prev().val());
    text = $(this).prev().val();

    console.log(e);
    insertText = { id: hour, textContent: text };
    pull();
  }
  /* } */
);

function pull() {
  save = JSON.parse(localStorage.getItem("Data")) || [];
  let overwritten = false;
  let updatedSave = [];

  if (save.length == 0) {
    updatedSave.push(insertText);
  } else {
    updatedSave = save.map((item) => {
      if (item.id == insertText.id) {
        overwritten = true;
        return insertText;
      } else {
        return item;
      }
    });

    if (!overwritten) {
      updatedSave.push(insertText);
    }
  }
  localStorage.setItem("Data", JSON.stringify(updatedSave));
}

function load() {
  save = JSON.parse(localStorage.getItem("Data"));

  save.forEach((item) => {
    const id = item.id;
    //  #hour-9 textarea
    $(`#${id} textarea`).val(item.textContent);
  });
}

load();
