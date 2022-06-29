document.querySelectorAll("a").setAttribute('target', "_blank");


//const subscriber = document.getElementById("emailInput").value;
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      To: 'leodefarias25@gmail.com',
      From: subscriber,
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    }).then(function (message) {
        alert("mail sent successfully")
      });
  }

function clickButton() {
  var button = document.getElementById("ABC");
  document.getElementById("ABC").setAttribute('style', 'background-color:red');
}

