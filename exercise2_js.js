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
fillOne1 = document.querySelector("#fillOne1");
statOne = document.querySelector("#statOne");

function questionOne() {
  if (fillOne.value == "$" && fillOne1.value == "}") {
    statOne.innerText = "Correct";
    statOne.setAttribute("class", "row alert alert-success");
  } else {
    statOne.innerText = "Wrong";
    statOne.setAttribute("class", "row alert alert-danger");
  }
}

fillTwo = document.querySelector("#fillTwo");
statTwo = document.querySelector("#statTwo");

function questionTwo() {
  if (fillTwo.value == "**") {
    statTwo.innerText = "Correct";
    statTwo.setAttribute("class", "row alert alert-success");
  } else {
    statTwo.innerText = "Wrong";
    statTwo.setAttribute("class", "row alert alert-danger");
  }
}

fillThr = document.querySelector("#fillThr");
statThr = document.querySelector("#statThr");

function questionThr() {
  if (fillThr.value == "%") {
    statThr.innerText = "Correct";
    statThr.setAttribute("class", "row alert alert-success");
  } else {
    statThr.innerText = "Wrong";
    statThr.setAttribute("class", "row alert alert-danger");
  }
}

fillFou = document.querySelector("#fillFou");
fillFou1 = document.querySelector("#fillFou1");
statFou = document.querySelector("#statFou");

function questionFou() {
  if (fillFou.value == "The sum of two values is :" && fillFou1.value == "z") {
    statFou.innerText = "Correct";
    statFou.setAttribute("class", "row alert alert-success");
  } else {
    statFou.innerText = "Wrong";
    statFou.setAttribute("class", "row alert alert-danger");
  }
}

fillFiv = document.querySelector("#fillFiv");
statFiv = document.querySelector("#statFiv");

function questionFiv() {
  if (fillFiv.value == "Wrong") {
    statFiv.innerText = "Correct";
    statFiv.setAttribute("class", "row alert alert-success");
  } else {
    statFiv.innerText = "Wrong";
    statFiv.setAttribute("class", "row alert alert-danger");
  }
}

fillSix = document.querySelector("#fillSix");
fillSix1 = document.querySelector("#fillSix1");
statSix = document.querySelector("#statSix");

function questionSix() {
  if (fillSix.value == "src" && fillSix1.value == "defer") {
    statSix.innerText = "Correct";
    statSix.setAttribute("class", "row alert alert-success");
  } else {
    statSix.innerText = "Wrong";
    statSix.setAttribute("class", "row alert alert-danger");
  }
}

fillSev = document.querySelector("#fillSev");
statSev = document.querySelector("#statSev");

function questionSev() {
  if (fillSev.value == "getElementById") {
    statSev.innerText = "Correct";
    statSev.setAttribute("class", "row alert alert-success");
  } else {
    statSev.innerText = "Wrong";
    statSev.setAttribute("class", "row alert alert-danger");
  }
}

fillEig = document.querySelector("#fillEig");
statEig = document.querySelector("#statEig");

function questionEig() {
  if (fillEig.value == "querySelector") {
    statEig.innerText = "Correct";
    statEig.setAttribute("class", "row alert alert-success");
  } else {
    statEig.innerText = "Wrong";
    statEig.setAttribute("class", "row alert alert-danger");
  }
}

fillNin = document.querySelector("#fillNin");
statNin = document.querySelector("#statNin");

function questionNin() {
  if (
    fillNin.value == "querySelector" ||
    fillNin.value == "querySelector " ||
    fillNin.value == " querySelector"
  ) {
    statNin.innerText = "Correct";
    statNin.setAttribute("class", "row alert alert-success");
  } else {
    statNin.innerText = "Wrong";
    statNin.setAttribute("class", "row alert alert-danger");
  }
}

fillTen = document.querySelector("#fillTen");
statTen = document.querySelector("#statTen");

function questionTen() {
  if (fillTen.value.toLowerCase() == "string") {
    statTen.innerText = "Correct";
    statTen.setAttribute("class", "row alert alert-success");
  } else {
    statTen.innerText = "Wrong";
    statTen.setAttribute("class", "row alert alert-danger");
  }
}
