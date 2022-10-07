document.querySelectorAll("input").forEach((element) => {
  element.setAttribute("class", "text-center");
});

document.querySelectorAll("div.row").forEach((element) => {
  element.classList.add("class", "text-dark");
});

fillOne = document.querySelector("#fillOne");
statOne = document.querySelector("#statOne");

function questionOne() {
  if (fillOne.value == "href") {
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
    fillTwo.value == "</ul>" &&
    fillTwo1.value == "<li>" &&
    fillTwo2.value == "</li>"
  ) {
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
  if (fillThr.value == "_blank") {
    statThr.innerText = "Correct";
    statThr.setAttribute("class", "row alert alert-success");
  } else {
    statThr.innerText = "Wrong";
    statThr.setAttribute("class", "row alert alert-danger");
  }
}

fillFou = document.querySelector("#fillFou");
fillFour = document.querySelector("#fillFour");
statFou = document.querySelector("#statFou");

function questionFou() {
  if (fillFou.value == "<ol>" && fillFour.value == "</ol>") {
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
  if (fillFiv.value == "<ul>" && fillFive.value == "</ul>") {
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
  if (fillSix.value == "</ul>" && fillSix1.value == "</li>") {
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
  if (fillSev.value == "<dl>") {
    statSev.innerText = "Correct";
    statSev.setAttribute("class", "row alert alert-success");
  } else {
    statSev.innerText = "Wrong";
    statSev.setAttribute("class", "row alert alert-danger");
  }
}

fillEig = document.querySelector("#fillEig");
fillEight = document.querySelector("#fillEight");
statEig = document.querySelector("#statEig");

function questionEig() {
  if (fillEig.value == "<dt>" && fillEight.value == "</dd>") {
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
  if (fillNin.value == "</li>" && fillNine.value == "</ul>") {
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
  if (fillTen.value == "3") {
    statTen.innerText = "Correct";
    statTen.setAttribute("class", "row alert alert-success");
  } else {
    statTen.innerText = "Wrong";
    statTen.setAttribute("class", "row alert alert-danger");
  }
}
