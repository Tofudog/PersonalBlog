

var zoom = 1;
var width = 100;

function bigger() {
    zoom = zoom + 0.1;
    width = 100 / zoom;
    document.body.style.transformOrigin = "left top";
    document.body.style.transform = "scale(" + zoom + ")";
    document.body.style.width = width + "%";
}
function smaller() {
    zoom = zoom - 0.1;
    width = 100 / zoom;
    document.body.style.transformOrigin = "left top";
    document.body.style.transform = "scale(" + zoom + ")";
    document.body.style.width = width + "%";
}







function displaySum() {
    let firstNum = Number(document.getElementById('firstNum').innerHTML)
    let secondNum = Number(document.getElementById('secondNum').innerHTML)
  
    let total = firstNum + secondNum;
    document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
  }
  
  document.getElementById('sumButton').addEventListener("click", displaySum);

  function sendEmail() {
    
  }


