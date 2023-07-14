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
  //console.log("MOBILE DEVICE VIEW");
  device = "mobile"
} else {
  // Code for desktop devices
  // Apply desktop styles or behaviors
  //console.log("DESKTOP DEVICE VIEW");
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
    qrRadius = 0,
    qreEcLevel = "L",
    qrFill = "#022652";

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
url = `https://app.myshoefitter.com/?hash=${encoded}`;
}

var mySFModal = document.createElement("div");
document.body.appendChild(mySFModal);
mySFModal.id = "modal-overlay";
mySFModal.className = "animate__fadeInUp";
mySFModal.style.display = "none";


if(isMobile)
{
mySFModal.innerHTML = `
<style>
  /* montserrat-100 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 100;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-100.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-200 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 200;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-200.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-300 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 300;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-regular - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-500 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-600 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-700 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-800 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 800;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-900 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 900;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-900.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  
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
	  width:100%;		
	  position: relative;
	  flex-direction: column;
	  align-items: center;
	  overflow: hidden;
	  background-color: white;
	  box-shadow: 0 0 40px 10px rgba(0,0,0,0.1);
	  margin: auto;
	  padding: 20px;
	  border-radius: 40px;
	  font-family: 'Montserrat', sans-serif;
	  color: #333333;
	}
  
	#mysf_mob {	
	  z-index:1;
	}
  
	.header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  width: 100%;
	  z-index:1;
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
  
	.big-circle {
	  background: linear-gradient(#ff7d4f10, #ff7d4f40);
	  border-radius: 50%;
	  height: 300px;
	  position: absolute;
	  width: 300px;
	  z-index:0;
	  top:50%;
	  left:-100px;
	}
  
	.big-circle-top {
	  background: linear-gradient(#ff7d4f10, #ff7d4f40);
	  border-radius: 50%;
	  height: 200px;
	  position: absolute;
	  width: 200px;
	  z-index:0;
	  top:15%;
	  left:90%;
	}
  
	#mysf_input {
	  width:100%;
	  z-index:1;
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
	  display: block; 
	  margin: auto;
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
  
	.continue-button:active {
	  background-color: white;
	  box-shadow: 0px 0px 32px 0 #f8f8f850;
	  color: #ff7d4f;
	  transition-duration: 250ms;
	}
	
	.continue-to-id-button {
	  display: block; 
	  width: 50%;
	  background-color: transparent;
	  padding: 12px;
	  font-family: 'Montserrat', sans-serif;
	  font-size: 14px;
	  color: #ff7d4f;
	  border: 0;
	  margin-bottom: 1em;
	}
  
	.continue-to-id-button:active {
	  color: #aaa;
	}
  
	.continue-to-info-button {
	  display: block; 
	  width: 50%;
	  background-color: transparent;
	  padding: 12px;
	  font-family: 'Montserrat', sans-serif;
	  font-size: 14px;
	  color: #ff7d4f;
	  border-radius: 20px;
	  border: 1px solid #ff7d4f;
	  margin-bottom: 1em;
	}
	.circle {
	  position: relative;
	  background: #ff7d4f;
	  width: fit-content;
	  width: 160px;
	  height: 160px;
	  border-radius: 100%;
	  display: block;
	  margin: auto;
	}
  
	.shoe-size {
	  position: absolute;
	  font-weight: 500;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  color: #fff;
	  padding: 0;
	  margin: 0;
	  font-size: 70px;
	  width: 100%;
	  text-align: center;
	}
  
	.specs {
	  margin: 12px;
	  background-color: #f2f2f280;
	  padding: 10px;
	  border-radius: 12px;
	}
  
	ul {
	  list-style-type: none;
	  padding: 0px 24px;
	}
  
	li {
	  justify-content: space-between;
	  display: flex;
	  align-items: center;
	  margin-bottom: 10px;
	}
  
	.label {
	  font-weight: bold;
	  margin-right: 5px;
	}
  
	.note {
	  font-style: italic;
	  color: gray;
	}
  
  </style>
  
  <div id="modal-overlay" class="modal-overlay" onclick="document.getElementById('modal-overlay').style.display='none';
  document.getElementById('mysf_mob').style.display = 'block';
  document.getElementById('mysf_size').style.display = 'none';
  document.getElementById('mysf_input').style.display = 'none'";>
	<div class="modal-content animate__animated animate__fadeInDown" onclick="event.stopPropagation()">
	  <div class="big-circle"></div>
	  <div class="big-circle-top"></div>
	  <div class="header">
		<img src=" https://cdn.myshoefitter.com/images/logo.png" width="150px">
		<span class="close" onclick="document.getElementById('modal-overlay').style.display='none';
		 document.getElementById('mysf_mob').style.display = 'block';
		 document.getElementById('mysf_size').style.display = 'none';
		 document.getElementById('mysf_input').style.display = 'none';
		">&times;</span>
		</div>
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
		<h3>Einmal deinen Fuß scannen,<br>immer die richtige Größe bestellen</h3>
    <p>Scanne den QR-Code und starte mit der Messung. Du musst nur einen Scan von deinem Fuß machen.<br> Es dauert nur wenige Minuten.</p>		
    <button id="continue-btn2" class="continue-button">Jetzt Fuß vermessen</button>
		<div style="display:flex;flex-direction:row;justify-content:space-evenly;margin-top: 0.5em;">
		  <button id="continue-to-info-button" class="continue-to-info-button">So funktioniert's</button>
		  <button id="continue-btn" class="continue-to-id-button">Mit Scan-ID fortfahren</button>
		</div>
	  </div>
  
	  <div id="mysf_size" style="display:none">
	  <div class="circle">
		<h2 class="shoe-size">35</h2>
	  </div>
	  <div class="specs">
		  <ul>
			<li>
			  <div>
				Marke:
			  </div>
			  <div>
				Manufacturer
			  </div>
			</li>
			 <hr style="width:-webkit-fill-available;height:0px;border:1px solid #00000020; border-radius: 50%;margin: 5%;" />
			<li>
			  <div>
				Modell:
			  </div>
			  <div>
				Model
			  </div>
			</li>
		  </ul>
		</div>
	</div>
  </div>
`;
}
else {
  mySFModal.innerHTML = `
  <style>
	/* montserrat-100 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 100;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-100.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-200 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 200;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-200.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-300 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 300;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-300.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-regular - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 400;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-500 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 500;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-500.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-600 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 600;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-600.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-700 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 700;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-700.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-800 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 800;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-900 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 900;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-900.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
  
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
	  position: relative;
	  flex-direction: column;
	  align-items: center;
	  min-width: 900px;
	  width: 950px;
	  max-width:1200px;
	  overflow: hidden;
	  background-color: white;
	  box-shadow: 0 0 40px 10px rgba(0,0,0,0.1);
	  margin: auto;
	  padding: 20px;
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
	  padding: 0px 70px;
	  width: -webkit-fill-available;
	  justify-content: space-between;
	  margin: auto;
	  z-index:1;
	}
  
	.left-section {
	  display: flex;
	  flex-direction: column;
	  justify-content: space-around;
	  align-items: flex-start;
	  width: 50%;
	}
  
	.right-section {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	}
  
	.button-container {
	  display:flex;
	  width: max-content;
	}
  
	.continue-button {
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
	  cursor:pointer;
	  background-color: transparent;
	  box-shadow: 0px 0px 32px 0 #f8f8f850;
	  color: #ff7d4f;
	  transition-duration: 250ms;
	}
	
	.continue-to-id-button {
	  background-color: transparent;
	  padding: 12px;
	  font-family: 'Montserrat', sans-serif;
	  font-size: 14px;
	  color: #ff7d4f;
	  border-radius: 20px;
	  border: 0px;
	  margin-bottom: 1em;
	}
  
	.continue-to-id-button:hover {
	  cursor:pointer;
	  color: #aaa;
	  transition-duration: 250ms;
	}
  
	.form {
	  display:none;
	  width: 100%;
	  margin-bottom: 25px;
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
  
	.big-circle {
	  background: linear-gradient(#ff7d4f10, #ff7d4f40);
	  border-radius: 50%;
	  height: 300px;
	  position: absolute;
	  width: 300px;
	  z-index:0;
	  top:50%;
	  left:-100px;
	}
  
	.qr-circle {
	  background: linear-gradient(#ff7d4f10, #ff7d4f30);
	  border-radius: 50%;
	  height: 300px;
	  width: 300px;
	  z-index:0;
	  display:flex;
	  align-items: center;
	  justify-content: center;
	  margin-top:-100px;
	}
  
	.qr-background {
	  background-color:white;
	  box-shadow: 0 0 10px #0003;
	  border-radius:20px;
	  width:70%;
	  height:70%;
	  display:flex;
	  align-items: center;
	  justify-content: center;
	}
  
	.qr-code {
	  z-index:1;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	}
  
	.cut-border {
	  position: relative;
	  display: inline-block;
	  border: 2px solid #022652;
	  width: 90%;
	  height: 90%;
	  border-radius: 10px;
	}
	.cut-border::before {
	  content: "";
	  position: absolute;
	  height: calc(100% + 10px);
	  width: 50%;
	  background-color: white;
	  top: -5px;
	  left: 25%;
	}
	.cut-border::after {
	  content: "";
	  position: absolute;
	  height: 50%;
	  width: calc(100% + 10px);
	  background-color: white;
	  top: 25%;
	  left: -5px;
	}
  
	.circle {
	  position: relative;
	  background: #ff7d4f;
	  width: fit-content;
	  width: 160px;
	  height: 160px;
	  border-radius: 100%;
	  display: block;
	  margin: auto;
	}
  
	.shoe-size {
	  position: absolute;
	  font-weight: 500;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  color: #fff;
	  padding: 0;
	  margin: 0;
	  font-size: 70px;
	  width: 100%;
	  text-align: center;
	}
  
	.specs {
	  margin: 12px;
	  background-color: #f2f2f280;
	  padding: 10px;
	  border-radius: 12px;
	}
  
	ul {
	  list-style-type: none;
	  padding: 0px 24px;
	}
  
	li {
	  justify-content: space-between;
	  display: flex;
	  align-items: center;
	  margin-bottom: 10px;
	}
  
	.label {
	  font-weight: bold;
	  margin-right: 5px;
	}
  
	.note {
	  font-style: italic;
	  color: gray;
	}
  
  </style>
  
  <div id="modal-overlay" class="modal-overlay" onclick="document.getElementById('modal-overlay').style.display='none';
		document.querySelector('.button-container').style.display = 'flex';
		document.getElementById('mysf_size').style.display = 'none';
		document.querySelector('.qr-circle').style.display = 'flex';
		document.getElementById('form').style.display = 'none';">
	<div class="modal-content animate__animated animate__fadeInDown" onclick="event.stopPropagation()">
	<div class="big-circle"></div>
	  <div class="header">
		<img src=" https://cdn.myshoefitter.com/images/logo.png" width="150px" style="margin-left:50px">
		<span class="close" onclick="document.getElementById('modal-overlay').style.display='none';
		document.querySelector('.button-container').style.display = 'flex';
		document.getElementById('mysf_size').style.display = 'none';
		document.querySelector('.qr-circle').style.display = 'flex';
		document.getElementById('form').style.display = 'none';
		">&times;</span>
	  </div>
	  <div class="inner-content">
		<div class="left-section">
		<h3>Einmal deinen Fuß scannen,<br>immer die richtige Größe bestellen</h3>
    <p>Scanne den QR-Code und starte mit der Messung. Du musst nur einen Scan von deinem Fuß machen.<br> Es dauert nur wenige Minuten.</p>
    	<div class="button-container"> 
			<button class="continue-button" id="continue-to-info-button">So funktioniert's</button>
			<button id="continue-btn" class="continue-to-id-button">Mit Scan-ID fortfahren</button>
		  </div>
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
		<div class="right-section">
		<div id="mysf_size" style="display:none;width: -webkit-fill-available;">
		<div class="circle">
		  <h2 class="shoe-size">35</h2>
		</div>
		<div class="specs">
			<ul>
			  <li>
				<div>
				  Marke:
				</div>
				<div>
				  Manufacturer
				</div>
			  </li>
			   <hr style="width:-webkit-fill-available;height:0px;border:1px solid #00000020; border-radius: 50%;margin:5%" />
			  <li>
				<div>
				  Modell:
				</div>
				<div>
				  Model
				</div>
			  </li>
			</ul>
		  </div>
	  </div>
		  <div class="qr-circle">
			<div class="qr-background">
			  <div class="cut-border">
			  <div id="qr-code" class="qr-code"/>
			  </div>
			</div>
		  </div>
	  </div>
	</div>
  </div>
  `;
}

document.querySelector("#continue-to-info-button").onclick = function() {
  window.open("https://myshoefitter.com/faq", '_blank');
};

document.querySelector("#mySF_Widget_Button").onclick = function() {
  mySFModal.style.display = "flex";
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
      //console.log("ID submitted!");
  }
  if (userEmail != "") {
      fetchEmail(userEmail);
      //console.log("Email submitted!");
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
else{
  document.querySelector("#continue-btn").onclick = function() {
    document.querySelector(".button-container").style.display = "none";
    document.getElementById("form").style.display = "flex";
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
    //console.log("MOBILE DEVICE VIEW");
} else {
    // Code for desktop devices
    // Apply desktop styles or behaviors
    //console.log("DESKTOP DEVICE VIEW");
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
          //console.log(result);
          //note: response is json array
          const Data = result[0].size;
          //console.log(Data);
          document.querySelector("#info-text").textContent = "ID gesendet!";
          if(isMobile){
            document.querySelector("#mysf_mob").style.display = "none";
            document.querySelector("#mysf_input").style.display = "none";
          }else{
            document.querySelector(".qr-circle").style.display = "none";
          }
          document.querySelector("#mysf_size").style.display = "block";
      })
      .catch(error => {
          //console.log('error', error);
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
        //console.log(result);
        //document.getElementById("infoText").textContent = "Email gesendet!";
      })
      .catch(error => {
        //console.log('error', error);
        document.querySelector("#info-text").textContent = "Email nicht gefunden";
    });
}

function draw() {
  var box = document.querySelector(".qr-background");
  if (!isMobile) {
      document.querySelector("#qr-code").innerHTML = "";
      //console.log("Width is " + testbox.offsetWidth);
      var x = box.clientWidth * .8;
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
if(document.getElementById('manufacturer') && document.getElementById('model')){
  const manufacturer = document.getElementById('manufacturer').textContent; 
  const model = document.getElementById('model').textContent;
  const shop = getSiteName();
  mySF.setvalues(model,manufacturer,shop);
  }else mySF.setvalues("null","null","null");

  function getSiteName() {
    const fullUrlSplit = window.location.host.split(".");
    if (fullUrlSplit[0] !== "www")
      return fullUrlSplit[0];
    return fullUrlSplit[1];   
  }