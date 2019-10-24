$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($("#number1").val());
    var side2 = parseInt($("#number2").val());
    var side3 = parseInt($("#number3").val());
    console.log(side1)
    console.log(side2)
    console.log(side3)

    if (side1.toString() === "NaN" || side2.toString() === "NaN" || side3.toString() === "NaN") {
      alert("Please enter three numbers.");
    } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      $(".output").text("This is not a triangle.");
    } else if (side1 === side2 && side2 === side3) {
      $(".output").text("Equilateral");
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      $(".output").text("Isosceles");
    } else if (side1 != side2 && side2 != side3 && side2 != side1) {
      $(".output").text("Scalene");
    } else {
      console.log("Shit.")
    };

    // if (isNaN(side1))

  });
});
