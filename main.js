import QrCreator from "qr-creator";
import io from 'socket.io-client';
import {v1 as uuidGenerator} from 'uuid';



const socket = io('https://mysf.fly.dev/');
socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

var
    qrRadius = .5,
    qreEcLevel = "H",
    qrFill = "#333333";

var
    hostURL = window.location.protocol + "//" + window.location.host,
    shopID = "testshop",
    uuid = uuidGenerator(),
    shoeModel = "testmodel",
    shoeManufacturer = "testManu";

var token; //reseved for shopify app


//Hashing URL
// JS Object
const urlObj = {
    uid: uuid, // Random UID
    host: hostURL,
    shop: shopID,
    manufacturer: shoeManufacturer,
    model: shoeModel
};
// Object to JSON String
const json = JSON.stringify(urlObj);
// Hashed JSON String
const encoded = btoa(json);
// Build URL
const url = `https://mysf.fly.dev/?hash=${encoded}`;

var isMobile = false;

var modal = document.createElement("div");
document.body.appendChild(modal);
modal.id = "myModal";
modal.style.display = "none";


var close = document.createElement("button");
document.getElementById("myModal").appendChild(close);
close.id = "close";

var myBtn = document.createElement("button");
document.body.appendChild(myBtn);
myBtn.textContent = "Modal Test";
myBtn.id = "firstButton";
myBtn.class = "firstButton";
myBtn.style.backgroundColor = "#ff7d4f";
myBtn.style.padding = "12px";
myBtn.style.fontFamily = "'Circular Std', sans-serif";
myBtn.style.fontSize = "16px";
myBtn.style.color = "#ffffff";
myBtn.style.borderRadius = "10px";
myBtn.style.border = "1px solid #ff7d4f";
myBtn.style.left = "45%";
myBtn.style.top = "50%";
myBtn.style.position = "absolute";

var firstModal = document.createElement("div");
document.body.appendChild(firstModal);
firstModal.id = "firstModal";
firstModal.style.display = "none";

myBtn.onclick = function() {
    firstModal.style.display = "flex";
    draw();
};

var firstclose = document.createElement("button");
document.getElementById("firstModal").appendChild(firstclose);
firstclose.id = "firstclose";

var continueBtn = document.createElement("button");
document.getElementById("firstModal").appendChild(continueBtn);
continueBtn.id = "continueBtn";




modal.innerHTML = `
<style>
@import url('https://fonts.cdnfonts.com/css/circular-std');

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    margin-top: -35px;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .modal {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-transition: 0.5s;
    overflow: auto;
    transition: all 0.3s linear;
    backdrop-filter: blur(15px);
    font-family: 'Circular std',sans-serif;
  }

  .modal-content {
    max-width: 800px;
    background-image: linear-gradient(to right, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffdfc9, #ffe6d5, #ffede2, #fff4ee);
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    border: 1px;
    border-radius: 20px;
    box-sizing: content-box;
    font-family: 'Circular std',sans-serif;
    color: #333333;
  }

  .inner-content {
    align-items: center;
    justify-content: space-between;
    font-family: 'Circular std',sans-serif;
    margin: auto;
    width: 420px;
  }

  .qr-code {
    margin-left: 25px;
    margin-top: -20px;
    margin-bottom: 15px;
  }

  .Form {
    position:relative;
    font-family: 'Circular std',sans-serif;
    display: block;
  }

  .submitBtn {
    width: 90%;
    background-color: #ff7d4f;
    padding: 12px;
    font-family: 'Circular std',sans-serif;
    font-size: 14px;
    color: #ffffff;
    border-radius: 20px;
    border: 1px solid #ff7d4f;
  }

  .submitBtn:hover {
    background-color: white;
    border:1px solid #fff;
    box-shadow: 0px 0px 32px 0 #f8f8f850;
    color: #ff7d4f;
    transition-duration: 250ms;
  }

  input {
    width: 85%;
    margin-top: 5px;
    margin-bottom: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    border: 1px solid #d2d9e4;
    border-radius: 20px;
    font-family: 'Circular std',sans-serif;
  }
</style>

<div id="myModal" class="modal" onclick="document.getElementById('myModal').style.display='none'">
  <table class="modal-content" onclick="event.stopPropagation()">
    <tbody>
      <tr>
        <td>
          <img style="position: relative;z-index: 1;" src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/627137e6fd5e54d4f660aff5_mySHOEFITTER-logo.svg" alt="mySHOEFITTER Logo" class="myshoefitter-logo-icon" width="150px">
        </td>
        <td colspan="2">
          <span colspan="2" onclick="document.getElementById('myModal').style.display='none'" class="close">&times;</span>
        </td>
      </tr>
      <tr>
        <td>
          <div border="1" class="inner-content" id="inner-content">
            <div id="left half">
            <img style="width:350px;position:absolute" src="./background.png" alt="mySHOEFITTER background" class="myshoefitter-background"></img>
              <p style="position:relative;z-index:1;font-family: 'Circular std',sans-serif;" align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro voluptas nihil ipsam labore sunt maxime incidunt officiis aspernatur non praesentium iusto veritatis, exercitationem delectus velit reiciendis cupiditate eos accusamus.</p>
              <br>
              <div class="Form" id="Form">
                <label style = "font-family: 'Circular std',sans-serif;">ScanID:</label> <br>
                <input type="text" id="idField" name="idFormField" placeholder="Enter your ID" style="font-family: 'Circular std',sans-serif;"> <br>
                <label style= "font-family: 'Circular std',sans-serif;">Email: </label> <br>
                <input type="text" id="emailField" name="emailField" placeholder="Enter your Email" style="font-family: 'Circular std',sans-serif;"> <br>
                <button id="submitBtn" class="submitBtn">Senden</button>
              </div>
            </div>
          </div>
        </td>
        <td>
        <hr style="width:0px;height:350px;margin-left:50px;margin-right:50px;border:1px solid #ff7d4f;border-radius:50%;" />
        </td>
        <td>
          <div id="qr-code" class="qr-code"> </div>
          <center style="color:#33333375; font-family:'Circular std',sans-serif; font-size:14px">QrCode mit dem Smartphone scannen</center>
        </td>
      </tr>
    </tbody>
  </table>
</div>

`;



firstModal.innerHTML = `
<style>
@import url('https://fonts.cdnfonts.com/css/circular-std');

  .firstclose {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    margin-top: -35px;
    margin-left: -20px;
  }

  .firstclose:hover,
  .firstclose:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .firstModal {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-transition: 0.5s;
    overflow: auto;
    transition: all 0.3s linear;
    backdrop-filter: blur(15px);
    font-family: 'Circular std',sans-serif;
  }

  .firstmodal-content {
    width:1000px;
    background-image: linear-gradient(to right, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffd9bc, #ffdfc9, #ffe6d5, #ffede2, #fff4ee);
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    padding-right:50px;
    padding-left:50px;
    border: 1px;
    border-radius: 20px;
    box-sizing: content-box;
    font-family: 'Circular std',sans-serif;
    color: #333333;
  }

  .continueBtn {
    width: 90%;
    background-color: #ff7d4f;
    padding: 12px;
    font-family: 'Circular std',sans-serif;
    font-size: 14px;
    color: #ffffff;
    border-radius: 20px;
    border: 1px solid #ff7d4f;
  }

  .continueBtn:hover {
    background-color: white;
    border:1px solid #fff;
    box-shadow: 0px 0px 32px 0 #f8f8f850;
    color: #ff7d4f;
    transition-duration: 250ms;
  }

</style>

<div id="firstModal" class="firstModal" onclick="document.getElementById('firstModal').style.display='none'">
  <table class="firstmodal-content" onclick="event.stopPropagation()">
    <tbody>
      <tr>
        <td>
          <img style="position: relative;z-index: 1;" src="https://uploads-ssl.webflow.com/627136f58be1570905eb8a28/627137e6fd5e54d4f660aff5_mySHOEFITTER-logo.svg" alt="mySHOEFITTER Logo" class="myshoefitter-logo-icon" width="150px">
        </td>
        <td colspan="4">
          <span colspan="4" onclick="document.getElementById('firstModal').style.display='none'" class="firstclose">&times;</span>
        </td>
      </tr>

      <tr>
        <td>
          <p style="position:relative;z-index:1;font-family: 'Circular std',sans-serif;" align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro voluptas nihil ipsam labore sunt maxime incidunt officiis aspernatur non praesentium iusto veritatis, exercitationem delectus velit reiciendis cupiditate eos accusamus.</p>
        </td>

        <td>
          <hr style="width:0px;height:350px;margin-left:50px;margin-right:50px;border:1px solid #ff7d4f;border-radius:50%;" />
        </td>

        <td>
          <p style="position:relative;z-index:1;font-family: 'Circular std',sans-serif;" align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro voluptas nihil ipsam labore sunt maxime incidunt officiis aspernatur non praesentium iusto veritatis, exercitationem delectus velit reiciendis cupiditate eos accusamus.</p>
        </td>

        <td>
          <hr style="width:0px;height:350px;margin-left:50px;margin-right:50px;border:1px solid #ff7d4f;border-radius:50%;" />
        </td>

        <td>
          <p style="position:relative;z-index:1;font-family: 'Circular std',sans-serif;" align="top">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro voluptas nihil ipsam labore sunt maxime incidunt officiis aspernatur non praesentium iusto veritatis, exercitationem delectus velit reiciendis cupiditate eos accusamus.</p>
        </td>
      </tr>
          
         <tr>
         <td></td><td></td>
          <td colspan="5" style = "display: flex;justify-content: center;width:100%" >
            <button id="continueBtn" class="continueBtn">Fortfahren</button>
          </td>
          <td></td><td></td>
        </tr>

    </tbody>
  </table>
</div>
`;


document.querySelector("#submitBtn").onclick = function() {
  var idField = document.querySelector("#idField");
  var emailField = document.querySelector("#emailField");

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

};


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
          const Data = result[0].id;
          console.log(Data);
      })
      .catch(error => {
          console.log('error', error);
          alert("Invalid User Code");
      });
}

function draw() {
  var testbox = document.querySelector("#inner-content");
  if (modal.style.display != "none") {
      document.querySelector("#qr-code").innerHTML = "";
      //console.log("Width is " + testbox.offsetWidth);
      var x = testbox.clientWidth * .75;
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
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}


document.querySelector("#continueBtn").onclick = function() {
    document.getElementById("firstModal").style.display = "none";
    document.getElementById("myModal").style.display = "flex";
    draw();

};





window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {
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