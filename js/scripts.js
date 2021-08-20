


$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    $("#output").text(range)
  })
  function roboger() {
    let range = [];
    for (let i = 0; i <= $("#userInput").length; i++) {
      range.push(i);
    }
  }
  roboger();
})