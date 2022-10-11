document.querySelectorAll("input").forEach((element) => {
  element.setAttribute("class", "text-center");
});

document.querySelectorAll("div.row").forEach((element) => {
  element.classList.add("class", "text-dark");
});

document.querySelectorAll("button.btn").forEach((element) => {
  element.classList.add("class", "mt-2");
});

fillOne = document.querySelector("#fillOne");
statOne = document.querySelector("#statOne");

function questionOne() {
  if (fillOne.value == "sayHello()") {
    statOne.innerText = "Correct";
    statOne.setAttribute("class", "row alert alert-success");
  } else {
    statOne.innerText = "Wrong";
    statOne.setAttribute("class", "row alert alert-danger");
  }
}

fillTwo = document.querySelector("#fillTwo");
fillTwo1 = document.querySelector("#fillTwo1");
fillTwo2 = document.querySelector("#fillTwo2");

statTwo = document.querySelector("#statTwo");

function questionTwo() {
  if (
    fillTwo.value == "function" &&
    fillTwo1.value == "schoolTime()" &&
    fillTwo2.value == "}"
  ) {
    statTwo.innerText = "Correct";
    statTwo.setAttribute("class", "row alert alert-success");
  } else {
    statTwo.innerText = "Wrong";
    statTwo.setAttribute("class", "row alert alert-danger");
  }
}

fillThr = document.querySelector("#fillThr");
fillThr1 = document.querySelector("#fillThr1");
fillThr2 = document.querySelector("#fillThr2");

statThr = document.querySelector("#statThr");

function questionThr() {
  if (
    fillThr.value == "num1" &&
    fillThr1.value == "num2" &&
    fillThr2.value == "return"
  ) {
    statThr.innerText = "Correct";
    statThr.setAttribute("class", "row alert alert-success");
  } else {
    statThr.innerText = "Wrong";
    statThr.setAttribute("class", "row alert alert-danger");
  }
}

fillFou = document.querySelector("#fillFou");
fillFour = document.querySelector("#fillFour");
fillFour1 = document.querySelector("#fillFour1");
statFou = document.querySelector("#statFou");

function questionFou() {
  if (
    fillFou.value == "num2=9" &&
    fillFour.value == "return" &&
    fillFour1.value == "myValue"
  ) {
    statFou.innerText = "Correct";
    statFou.setAttribute("class", "row alert alert-success");
  } else {
    statFou.innerText = "Wrong";
    statFou.setAttribute("class", "row alert alert-danger");
  }
}

fillFiv = document.querySelector("#fillFiv");
fillFive = document.querySelector("#fillFive");
statFiv = document.querySelector("#statFiv");

function questionFiv() {
  if (fillFiv.value == "#glow" && fillFive.value == "backgroundColor") {
    statFiv.innerText = "Correct";
    statFiv.setAttribute("class", "row alert alert-success");
  } else {
    statFiv.innerText = "Wrong";
    statFiv.setAttribute("class", "row alert alert-danger");
  }
}
