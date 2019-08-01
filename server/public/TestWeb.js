function turn(state) {
  $.post(window.location + "data", state);
  console.log(state);
}