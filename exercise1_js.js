document.querySelectorAll("input").forEach((element) => {
  element.setAttribute("class", "text-center");
});

document.querySelectorAll("div.row").forEach((element) => {
  element.classList.add("class", "text-dark");
});

fillOne = document.querySelector("#fillOne");
fillOne1 = document.querySelector("#fillOne1");
statOne = document.querySelector("#statOne");

function questionOne() {
  if (fillOne.value == "channelName" && fillOne1.value == "techTIME") {
    statOne.innerText = "Correct";
    statOne.setAttribute("class", "row alert alert-success");
  } else {
    statOne.innerText = "Wrong";
    statOne.setAttribute("class", "row alert alert-danger");
  }
}

fillTwo = document.querySelector("#fillTwo");
fillTwo1 = document.querySelector("#fillTwo1");
statTwo = document.querySelector("#statTwo");

function questionTwo() {
  if (fillTwo.value == "myAge" && fillTwo1.value == "15") {
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
  if (
    fillThr.value == "var" ||
    fillThr.value == "let" ||
    fillThr.value == "const"
  ) {
    statThr.innerText = "Correct";
    statThr.setAttribute("class", "row alert alert-success");
  } else {
    statThr.innerText = "Wrong";
    statThr.setAttribute("class", "row alert alert-danger");
  }
}

fillFou = document.querySelector("#fillFou");
statFou = document.querySelector("#statFou");

function questionFou() {
  if (fillFou.value == "12") {
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
  if (fillFiv.value == "console.log") {
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
  if (fillSev.value.toLowerCase() == "boolean") {
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
  if (fillEig.value.toLowerCase() == "string") {
    statEig.innerText = "Correct";
    statEig.setAttribute("class", "row alert alert-success");
  } else {
    statEig.innerText = "Wrong";
    statEig.setAttribute("class", "row alert alert-danger");
  }
}

fillNin = document.querySelector("#fillNin");
fillNine = document.querySelector("#fillNine");
statNin = document.querySelector("#statNin");

function questionNin() {
  if (fillNin.value.toLowerCase() == "array") {
    statNin.innerText = "Correct";
    statNin.setAttribute("class", "row alert alert-success");
  } else {
    statNin.innerText = "Wrong";
    statNin.setAttribute("class", "row alert alert-danger");
  }
}

fillTen = document.querySelector("#fillTen");
fillTen1 = document.querySelector("#fillTen1");
fillTen2 = document.querySelector("#fillTen2");
statTen = document.querySelector("#statTen");

function questionTen() {
  if (
    fillTen.value == "console.log" &&
    fillTen1.value == "My name is" &&
    fillTen2.value == "name"
  ) {
    statTen.innerText = "Correct";
    statTen.setAttribute("class", "row alert alert-success");
  } else {
    statTen.innerText = "Wrong";
    statTen.setAttribute("class", "row alert alert-danger");
  }
}
