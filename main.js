import QrCreator from "qr-creator";
import io from "socket.io-client";
import {v1 as uuidGenerator} from "uuid";
import 'animate.css';

var isMobile = false;
var sentMail = false;
var device;
if (screen.width <= 768) {
  // Code for mobile devices
  // Apply mobile styles or behaviors
  isMobile = true;
  console.log("MOBILE DEVICE VIEW");
  device = "mobile"
} else {
  // Code for desktop devices
  // Apply desktop styles or behaviors
  console.log("DESKTOP DEVICE VIEW");
  isMobile = false;
}

/* const socket = io('https://mysf.vercel.app/');
socket.on('connect', () => {
    console.log('Connected to server');
});
socket.on('disconnect', () => {
    console.log('Disconnected from server');
}); */

var
    qrRadius = .5,
    qreEcLevel = "H",
    qrFill = "#333333";

var 
    url ,
    hostURL = window.location.protocol + "//" + window.location.host,
    uuid = uuidGenerator();


var token = "1234567890"; //reseved for shopify app

const mySF = (function() {
  function setvalues(manufacturer, model, token) {  
     generateURL(token,manufacturer,model);
  }

  return {
    setvalues: setvalues,
  };
})();


function generateURL(shopID,shoeManufacturer,shoeModel) {
//Hashing URL
// JS Object
const urlObj = {
    uid: uuid, // Random UID
    host: hostURL,
    shop: shopID,
    manufacturer: shoeManufacturer,
    model: shoeModel,
    client: device
};
// Object to JSON String
const json = JSON.stringify(urlObj);
// Hashed JSON String
const encoded = btoa(json);
// Build URL
url = `https://mysf.vercel.app/?hash=${encoded}`;
console.log(url);
}

var firstModal = document.createElement("div");
document.body.appendChild(firstModal);
firstModal.id = "modal-overlay";
firstModal.style.display = "none";


if(isMobile)
{
firstModal.innerHTML = `
<style>
  @import url('https://fonts.cdnfonts.com/css/montserrat');

  .modal-overlay {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-transition: 0.5s;
    transition: all 0.3s linear;
    backdrop-filter: blur(15px);
    font-family: 'Montserrat', sans-serif;
  }

  .modal-content {
    width: 70%;
    margin: auto;
    margin-top: auto;
    margin-bottom: auto;
    padding: 2em;
    border-radius: 40px;
    box-sizing: content-box;
    font-family: 'Montserrat', sans-serif;
    color: #333333;
    display: flex;
    flex-direction: column;
    background-color: white;
    background-image: url('./background0.png');
    background-repeat: no-repeat;
    background-size: 100%;
    box-shadow: 0 0 40px 10px rgba(0,0,0,0.1);
  }

  .close {
    color: #ff7d4f;
    float: right;
    font-size: 64px;
    font-weight: 300;
    margin-top: -10px;
  }

  .close:hover,
  .close:focus {
    color: #aaa;
    text-decoration: none;
    cursor: pointer;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .form-inputs {
    display: flex;
    width: -webkit-fill-available;
    flex-direction: row;
    border: 1px solid #d2d9e4;
    padding: 1px;
    border-radius: 20px;
    background: #fff;
    margin-bottom: 1em;
  }

  .form-inputs input {
    border: none;
    width: -webkit-fill-available;
    padding: 12px;
    border-radius: 20px;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
  }

  .form-inputs input:focus {
    outline: none;
    background-color: transparent;
  }

  .form-inputs input:-webkit-autofill,
  .form-inputs input:-webkit-autofill:hover,
  .form-inputs input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #333;
  }

  .form-inputs input:-moz-autofill {
    -moz-box-shadow: 0 0 0px 1000px white inset;
    -moz-text-fill-color: #333;
  }

  .form-inputs input::placeholder {
    color: #333333;
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }

  .forgot-link {
    cursor: pointer;
    color: grey;
  }

  .info-text {
    margin: 0;
    color: grey;
    text-decoration: none;
  }

  .continue-button {
    width: 100%;
    background-color: #ff7d4f;
    padding: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ffffff;
    border-radius: 20px;
    border: 1px solid #ff7d4f;
    margin-bottom: 1em;
  }

  .continue-button:hover {
    background-color: white;
    box-shadow: 0px 0px 32px 0 #f8f8f850;
    color: #ff7d4f;
    transition-duration: 250ms;
  }
  
  .continue-to-id-button {
    width: 100%;
    background-color: transparent;
    padding: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ff7d4f;
    border-radius: 20px;
    border: 1px solid #ff7d4f;
    margin-bottom: 1em;
  }
</style>

<div id="modal-overlay" class="modal-overlay" onclick="document.getElementById('modal-overlay').style.display='none'">

  <div class="modal-content animate__fadeInUp" onclick="event.stopPropagation()">
    <div>
      <img src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/6458f00e1462140aca5e9f19_mySHOEFITTER%20Logo-p-800.png" width="150px" style="position: relative; z-index: 1;">
      <span onclick="{document.getElementById('modal-overlay').style.display='none';document.getElementById('mysf_input').style.display='none';document.getElementById('mysf_mob').style.display='block'}" class="close">×</span>
    </div>
    <br>
    <div id="mysf_input" style="display:none">
      <div class="form-container">
        <div class="form-inputs">
          <input type="text" id="id-field" name="idFormField" placeholder="Enter your ID">
          <input type="text" id="email-field" name="emailField" placeholder="Enter your Email" style="display:none;">
        </div>
        <button id="submit-btn" class="continue-button">Senden</button>
        <div class="form-footer">
          <a id="forgot-button" class="forgot-link">ID vergessen?</a>
          <p id="info-text" class="info-text"></p>
        </div>
      </div>
    </div>

    <div id="mysf_mob">
      <h4>Deine perfekte Schuhgröße wartet schon auf dich! 🚀</h4>
      <p>Wenn du schon eine <b>ID</b> hast, kannst du sie unten <b>eingeben</b> und kommst so direkt zu deiner perfekten Größe, <b>oder</b> falls du noch keine Messung durchgeführt hast, klicke auf <b>"Jetzt Fuß vermessen"</b> und folge den Anweisungen.</p>
      <br>
      <button id="continue-btn2" class="continue-button" style="display: block; margin: 0 auto;">Jetzt Fuß vermessen</button>
      <br>
      <button id="continue-btn" class="continue-to-id-button" style="display: block; margin: 0 auto;">ID eingeben</button>
    </div>
  </div>

</div>

`;
}
else {
  firstModal.innerHTML = `
  <style>
  @import url('https://fonts.cdnfonts.com/css/montserrat');

  .modal-overlay {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    font-family: 'Montserrat', sans-serif;
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    background-color: white;
    background-image: url('./background0.png');
    background-repeat: no-repeat;
    background-size: 100%;
    box-shadow: 0 0 40px 10px rgba(0,0,0,0.1);
    margin: auto;
    padding: 30px;
    border-radius: 40px;
    font-family: 'Montserrat', sans-serif;
    color: #333333;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .close {
    color: #ff7d4f;
    font-size: 64px;
    font-weight: 300;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #aaa;
    text-decoration: none;
    cursor: pointer;
  }

  .inner-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: auto;
  }

  .left-section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 33.3%;
  }

  .right-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form {
    width: 100%;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .form-fields {
    display: flex;
    flex-direction: row;
    width: -webkit-fill-available;
    border: 1px solid #d2d9e4;
    padding: 1px;
    border-radius: 20px;
    background: #fff;
  }


  input {
    border: none;
    width: -webkit-fill-available;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    border-radius: 20px;
    background-color: transparent;
    font-family: inherit;
  }

  input:focus {
    outline: none;
    background-color: transparent;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #333;
  }

  input:-moz-autofill {
    -moz-box-shadow: 0 0 0px 1000px white inset;
    -moz-text-fill-color: #333;
  }

  input:-ms-input-placeholder {
    background-color: transparent !important;
  }

  .submit-btn {
    background-color: #ff7d4f;
    font-size: 14px;
    color: #ffffff;
    border-radius: 20px;
    border: 1px solid #ff7d4f;
  }

  .submit-btn:hover {
    background-color: white;
    border: 1px solid #ff7d4f;
    box-shadow: 0px 0px 32px 0 #f8f8f850;
    color: #ff7d4f;
    transition-duration: 250ms;
  }

  .form-footer {
    background-color: transparent;
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }

  #forgot-button {
    cursor: pointer;
    float: right;
    color: grey;
  }

  #info-text {
    margin: 0;
    float: left;
    color: grey;
    text-decoration: none;
  }

  .separator {
    width: 0px;
    height: 350px;
    border: 1px solid #ff7d4f;
    border-radius: 50%;
  }

  .qr-instruction {
    color: black;
    font-size: 16px;
    margin-top: 8px;
    font-family: 'Montserrat', sans-serif;
  }

</style>

<div id="modal-overlay" class="modal-overlay" onclick="document.getElementById('modal-overlay').style.display='none'">
  <div class="modal-content animate__fadeInUp" onclick="event.stopPropagation()">
    <div class="header">
      <img src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/6458f00e1462140aca5e9f19_mySHOEFITTER%20Logo-p-800.png" alt="mySHOEFITTER Logo" class="myshoefitter-logo-icon" width="150px">
      <span class="close" onclick="document.getElementById('modal-overlay').style.display='none'">&times;</span>
    </div>
    <div class="inner-content">
      <div class="left-section">
        <h4>Deine perfekte Schuhgröße wartet schon auf dich! 🚀</h4>
        <p>Wenn du schon eine <b>ID</b> hast, kannst du sie unten <b>eingeben</b> und kommst so direkt zu deiner perfekten Größe. Falls du noch keine Messung durchgeführt hast, <b>scanne den QR-Code</b> und folge den Anweisungen. <br> <br> Falls du deine <b>ID vergessen</b> hast, kannst du sie über deine Mail herausfinden. </p>
        <div class="form" id="form">
          <div class="form-fields">
            <input type="text" id="id-field" name="idFormField" placeholder="Enter your ID">
            <input type="text" id="email-field" name="emailField" placeholder="Enter your Email" style="display:none">
            <button id="submit-btn" class="submit-btn">Senden</button>
          </div>
          <div class="form-footer">
            <a id="forgot-button">ID vergessen?</a>
            <p id="info-text"></p>
          </div>
        </div>
      </div>
      <div class="separator"></div>
      <div class="right-section">
        <div id="qr-code" class="qr-code"></div>
        <center class="qr-instruction">Scan mich mit deinem Smartphone :-)</center>
      </div>
    </div>
  </div>
</div>

  `;
}




document.querySelector("#mySF_Widget_Button").onclick = function() {
  firstModal.style.display = "flex";
  document.querySelector(".modal-content").style.display = "flex";
  if (!isMobile){
  draw();
  }
};

document.querySelector("#submit-btn").onclick = function() {
  var idField = document.querySelector("#id-field");
  var emailField = document.querySelector("#email-field");

  var userCode = idField.value;
  var userEmail = emailField.value;

  if (userCode != "") {
      fetchCode(userCode);
      console.log("ID submitted!");
  }
  if (userEmail != "") {
      fetchEmail(userEmail);
      console.log("Email submitted!");
  }
  if (sentMail) {
    document.getElementById("forgot-button").textContent = "ID vergessen?";
    document.getElementById("email-field").style.display = "none";
    document.getElementById("id-field").style.display = "flex";
  }
};


if(isMobile)  {
  document.querySelector("#continue-btn2").onclick = function() {
    window.open(url, '_blank');
  };

  document.querySelector("#continue-btn").onclick = function() {
    document.getElementById("mysf_mob").style.display = "none";
    document.getElementById("mysf_input").style.display = "block";
  };
}

var back = false;

document.querySelector("#forgot-button").onclick = function() {
 if(!back){
  document.querySelector("#email-field").style.display = "flex";
  document.querySelector("#id-field").style.display = "none";
  //document.querySelector("#forgotButton").textContent = "ㅤ";
  document.querySelector("#forgot-button").textContent = "ID eingeben";
  document.querySelector("#info-text").textContent = " ";
  back=true;
  sentMail = true;  
}else{
  document.querySelector("#email-field").style.display = "none";
  document.querySelector("#id-field").style.display = "flex";
  document.querySelector("#forgot-button").textContent = "ID vergessen?";
  document.querySelector("#info-text").textContent = " ";
  back=false;
}
};



document.querySelector("#id-field").onclick = function() {
  document.querySelector("#info-text").textContent = " ";
};

window.addEventListener('resize', function () {
if (screen.width <= 768) {
    // Code for mobile devices
    // Apply mobile styles or behaviors
    isMobile = true;
    console.log("MOBILE DEVICE VIEW");
} else {
    // Code for desktop devices
    // Apply desktop styles or behaviors
    console.log("DESKTOP DEVICE VIEW");
    isMobile = false;
}
});

function fetchCode(Code) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
      "code": Code
  });

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };


  fetch("https://admin.myshoefitter.com/flows/trigger/c7a5aa72-8ff2-4398-b910-a88994aeab4c", requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result);
          //note: response is json array
          const Data = result[0].size;
          console.log(Data);
          document.querySelector("#info-text").textContent = "ID gesendet!";
      })
      .catch(error => {
          console.log('error', error);
          document.querySelector("#info-text").textContent = "Dieser Code exisitert nicht!";
      });
}

function fetchEmail(Email) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer oU-s4wmSpctuufVBIFNf-rUi9MtNKj5a");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
      "email": Email
  });

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };


  fetch("https://admin.myshoefitter.com/flows/trigger/bc96cffb-f215-4b8e-ba65-481d8c29e910", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        //document.getElementById("infoText").textContent = "Email gesendet!";
      })
      .catch(error => {
        console.log('error', error);
        document.querySelector("#info-text").textContent = "Email nicht gefunden";
    });
}

function draw() {
  var box = document.querySelector(".inner-content");
  if (!isMobile) {
      document.querySelector("#qr-code").innerHTML = "";
      //console.log("Width is " + testbox.offsetWidth);
      var x = box.clientWidth * .333;
      QrCreator.render({
              text: url,
              radius: qrRadius, // 0.0 to 0.5
              ecLevel: qreEcLevel, // L, M, Q, H
              fill: qrFill, // foreground color
              background: null, // color or null for transparent
              size: x, // in pixels
          },
          document.querySelector("#qr-code")
      );
  }
}




mySF.setvalues("model","manufacturer","mySHOEFITTER Shop");