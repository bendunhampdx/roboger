function roboger(input) {
  // let number = $("#userInput").val();
  let range = [];
  for (let i = 1; i <= input; i++) {
    range.push(i);
  };
  console.log("are we here??");
  return range;
};


$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    
    $("#output").append(range[i]);
  });
});