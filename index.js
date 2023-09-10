let string = "";
let screen_value = document.getElementsByClassName("cal-screen");

function display(val) {
  string = string + val;
  document.querySelector("input").value = string;
  console.log(string);
}

function onClickEqual() {
  let ans = eval(string) + "";
  if (ans === "Infinity") {
    document.querySelector("input").value = "Can't divided by zero";
  } else {
    document.querySelector("input").value = eval(string);
    string = ans + "";
    console.log("ans: ", ans, typeof ans);
  }
}

function onClickAc() {
  string = "";
  document.querySelector("input").value = "";
}

function onClickEs() {
  let ans = eval(string) + "";
  if (ans === "Infinity") {
    string = "";
    document.querySelector("input").value = "";
  }
  console.log("len = ", string.length);
  string = string.slice(0, string.length - 1);
  console.log("string = ", string);
  document.querySelector("input").value = string;
}
