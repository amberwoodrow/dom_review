
function createElement (element) {
  var createdEl = document.createElement(element);
  document.body.appendChild(createdEl);
}

createElement("ul");

function createMuliElements (num, element) {
  for (var i=1; i<=num; i++) {
    var createdEl = document.createElement(element);
    document.body.appendChild(createdEl);
    createdEl.innerText = "Text " + i;
  }
}

createMuliElements(3, "li");

function changeTextIndex1 (element) {
  var element = document.getElementsByTagName(element)[1];
  element.innerText =  "I be rollin'";
}

changeTextIndex1("li");

function changeTextIndex2 (element) {
 var element = document.getElementsByTagName(element)[2];
 element.style.backgroundColor='red';
}

changeTextIndex2("li");

function click1stLi (element) {
  var element = document.getElementsByTagName(element)[0];
  element.addEventListener("click", function(){console.log(element.innerText);});
}

click1stLi("li");

