// -------------------------------
// Exercise 01 - jQuery DOM
// -------------------------------

// Part 1: Copy text when button is clicked
$(document).ready(function () {
  const $inputClick = $("#userInput1");
  const $outputClick = $("#output1");

  $("#copy").on("click", function () {
    $outputClick.text($inputClick.val());
  });

  // Part 2: Update output as user types
  const $inputLive = $("#userInput2");
  const $outputLive = $("#output2");

  $inputLive.on("input", function () {
    $outputLive.text($(this).val());
  });
});
