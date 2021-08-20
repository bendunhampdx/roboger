function roboger(input) {
  let range = [];
  for (i = 0; i <= input; i++) {
    range.push([i].toString()); {
      if ([i].toString().includes("3")) {
        range.splice(i, 3, "Won't you be my neighbor?") 
      } else if ([i].toString().includes("2")) {
        range.splice(i, 2, "Boop")
      } else if ([i].toString().includes("1")) {
        range.splice(i, 1, "Beep")
      } 
    }
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