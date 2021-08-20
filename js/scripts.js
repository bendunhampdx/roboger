function roboger(input) {
  let range = [];
  for (i = 1; i <= input; i++) {
    range.push([i].toString());
  };
  console.log("are we here??");
  return range;
};


$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    let range = roboger($(".form-control").val());
    $(".result").text(range);
  });
});