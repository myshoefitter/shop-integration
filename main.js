import QrCreator from "qr-creator";
import { nanoid } from 'nanoid'
import 'animate.css';

/* vite-keep-varname */
const mySF_reload = (function() {
    function reload() {
        if (document.querySelector('#mySF-modal-overlay')) {
            document.querySelector('#mySF-modal-overlay').remove();
        }
        runScript();
    }
    return {
        reload: reload,
    };
})();

window.addEventListener('loaded', function() {
    runScript();
})

function runScript() {

    var isMobile = false;
    var sentMail = false;
    var device;

    function checekDevice() {
        if (screen.width <= 768) {
            // Apply mobile styles or behaviors
            isMobile = true;
            device = "mobile"
        } else {
            // Code for desktop devices
            isMobile = false;
        }
    }

checekDevice();

    var
        qrRadius = 0,
        qreEcLevel = "L",
        qrFill = "#022652";

    var
        url,
        hostURL = window.location.protocol + "//" + window.location.host,
        uuid = nanoid(32);


    const mySF = (function() {
        function setvalues(product_id, token) {
            generateURL(product_id, token);
        }
        return {
            setvalues: setvalues,
        };
    })();


    function generateURL(product_id, shopID) {
        const urlObj = {
            uid: uuid, 
            host: hostURL,
            shop: shopID,
            model: product_id,
            client: device
        };
        const json = JSON.stringify(urlObj);
        const encoded = btoa(json);
        url = `https://app.myshoefitter.com/?hash=${encoded}`;
    }

    var mySFModal = document.createElement("div");
    document.body.appendChild(mySFModal);
    mySFModal.id = "mySF-modal-overlay";
    mySFModal.className = "animate__fadeInUp";
    mySFModal.style.display = "none";


    if (isMobile) {
        mySFModal.innerHTML = `<!-- Test Deploy Action (Remove) -->
<style>
  /* montserrat-100 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 100;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-100.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-200 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 200;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-200.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-300 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 300;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-300.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-regular - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-regular.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-500 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-500.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-600 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 600;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-600.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-700 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-700.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-800 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 800;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-800.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* montserrat-900 - latin */
  @font-face {
	font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 900;
	src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-900.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  
	.mySF-modal-overlay {
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
  
	.mySF-modal-content {
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
  
	.mySF-modal-header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  width: 100%;
	  z-index:1;
	}
  
	.mySF-modal-close {
	  color: #ff7d4f;
	  font-size: 64px;
	  font-weight: 300;
	  cursor: pointer;
	}
  
	.mySF-modal-close:hover,
	.mySF-modal-close:focus {
	  color: #aaa;
	  text-decoration: none;
	  cursor: pointer;
	}
  
	.mySF-big-circle {
	  background: linear-gradient(#ff7d4f10, #ff7d4f40);
	  border-radius: 50%;
	  height: 300px;
	  position: absolute;
	  width: 300px;
	  z-index:0;
	  top:50%;
	  left:-100px;
	}
  
	.mySF-big-circle-top {
	  background: linear-gradient(#ff7d4f10, #ff7d4f40);
	  border-radius: 50%;
	  height: 200px;
	  position: absolute;
	  width: 200px;
	  z-index:0;
	  top:15%;
	  left:90%;
	}

	#mySF-input {
		width: 100%;
		padding: 8px;
		z-index: 1;
	}
  
	.mySF-modal-form-container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: space-between;
	  width: -webkit-fill-available;
	}
	.mySF-modal-form-fields {
		display: flex;
		flex-direction: row;
		width: -webkit-fill-available;
		border: 1px solid #d2d9e4;
		padding: 1px;
		border-radius: 20px;
		background: #fff;
		margin-bottom: 1em;
	  }
	
	  .mySF-modal-input {
		border: none;
		width: -webkit-fill-available;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 16px;
		border-radius: 20px;
		background-color: transparent;
		font-family: inherit;
	  }
	
	  .mySF-modal-input:focus {
		outline: none;
		background-color: transparent;
	  }
	
	  .mySF-modal-input:-webkit-autofill,
	  .mySF-modal-input:-webkit-autofill:hover,
	  .mySF-modal-input:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0px 1000px white inset;
		-webkit-text-fill-color: #333;
	  }
	
	  .mySF-modal-input:-moz-autofill {
		-moz-box-shadow: 0 0 0px 1000px white inset;
		-moz-text-fill-color: #333;
	  }
	
	  .mySF-modal-input:-ms-mySF-modal-input-placeholder {
		background-color: transparent !important;
	  }
  
	.mySF-modal-form-footer {
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
  
	.mySF-info-text {
	  margin: 0;
	  color: grey;
	  text-decoration: none;
	}
  
	.mySF-modal-continue-button {
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
  
	.mySF-modal-continue-button:active {
	  background-color: white;
	  box-shadow: 0px 0px 32px 0 #f8f8f850;
	  color: #ff7d4f;
	  transition-duration: 250ms;
	}
	
	.mySF-modal-continue-to-id-button {
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
  
	.mySF-modal-continue-to-id-button:active {
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
	.mySF-circle {
	  position: relative;
	  background: #ff7d4f;
	  width: fit-content;
	  width: 160px;
	  height: 160px;
	  border-radius: 100%;
	  display: block;
	  margin: auto;
	}
  
	.mySF-shoe-size {
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
  
	.mySF-specs {
	  margin: 12px;
	  background-color: #f2f2f280;
	  padding: 10px;
	  border-radius: 12px;
	}
  
  </style>
  
  <div id="mySF-modal-overlay" class="mySF-modal-overlay" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
  document.getElementById('mysf_mob').style.display = 'block';
  document.getElementById('mysf_size').style.display = 'none';
  document.getElementById('mySF-input').style.display = 'none'";>
	<div class="mySF-modal-content animate__animated animate__fadeInDown" onclick="event.stopPropagation()">
	  <div class="mySF-big-circle"></div>
	  <div class="mySF-big-circle-top"></div>
	  <div class="mySF-modal-header">
		<img src=" https://cdn.myshoefitter.com/images/logo.png" width="150px">
		<span class="mySF-modal-close" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
		 document.getElementById('mysf_mob').style.display = 'block';
		 document.getElementById('mysf_size').style.display = 'none';
		 document.getElementById('mySF-input').style.display = 'none';
		">&times;</span>
		</div>
	  <div id="mySF-input" style="display:none">
		<div class="mySF-modal-form-container">
		  <div class="mySF-modal-form-fields">
			<input type="text" class ="mySF-modal-input" id="mySF-modal-id-form-field" name="mySF-modal-id-form-field" placeholder="Enter your ID">
			<input type="text" class ="mySF-modal-input" id="mySF-modal-email-form-field" name="mySF-modal-email-form-field" placeholder="Enter your Email" style="display:none;">
		  </div>
		  <button id="mySF-submit-btn" class="mySF-modal-continue-button">Senden</button>
		  <div class="mySF-modal-form-footer">
			<a id="mySF-forgot-button" class="forgot-link">ID vergessen?</a>
			<p id="mySF-info-text" class="mySF-info-text"></p>
		  </div>
		</div>
	  </div>
  
	  <div id="mysf_mob">
		<h3>Einmal deinen Fuß scannen,<br>immer die richtige Größe bestellen.</h3>
    <p>Scanne den QR-Code und starte mit der Messung. Du musst nur einen Scan von deinem Fuß machen, was nur wenige Minuten dauert.</p>		
    <button id="mySF-continue-btn2" class="mySF-modal-continue-button">Jetzt Fuß vermessen</button>
		<div style="display:flex;flex-direction:row;justify-content:space-evenly;margin-top: 0.5em;">
		  <button id="continue-to-info-button" class="continue-to-info-button">So funktioniert's</button>
		  <button id="mySF-continue-btn" class="mySF-modal-continue-to-id-button">Mit Scan-ID fortfahren</button>
		</div>
	  </div>
  
	  <div id="mysf_size" style="display:none">
	  <div class="mySF-circle">
		<h2 class="mySF-shoe-size">35</h2>
	  </div>
	  <div class="mySF-specs">
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
    } else {
        mySFModal.innerHTML = `
  <style>
	/* montserrat-100 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 100;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-100.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-200 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 200;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-200.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-300 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 300;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-300.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-regular - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 400;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-regular.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-500 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 500;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-500.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-600 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 600;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-600.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-700 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 700;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-700.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-800 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 800;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-800.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
	/* montserrat-900 - latin */
	@font-face {
	  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 900;
	  src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-900.woff2') mySF-modal-format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
	}
  
	.mySF-modal-overlay {
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
  
	.mySF-modal-content {
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
  
	.mySF-modal-header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  width: 100%;
	}
  
	.mySF-modal-close {
	  color: #ff7d4f;
	  font-size: 64px;
	  font-weight: 300;
	  cursor: pointer;
	}
  
	.mySF-modal-close:hover,
	.mySF-modal-close:focus {
	  color: #aaa;
	  text-decoration: none;
	  cursor: pointer;
	}
  
	.mySF-modal-inner-content {
	  display: flex;
	  flex-direction: row;
	  padding: 0px 70px;
	  width: -webkit-fill-available;
	  justify-content: space-between;
	  margin: auto;
	  z-index:1;
	}
  
	.mySF-modal-left-section {
	  display: flex;
	  flex-direction: column;
	  justify-content: space-around;
	  align-items: flex-start;
	  width: 50%;
	}
  
	.mySF-modal-right-section {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	}
  
	.mySF-modal-button-container {
	  display:flex;
	  width: max-content;
	}
  
	.mySF-modal-continue-button {
	  background-color: #ff7d4f;
	  padding: 10px 20px;
	  font-family: 'Montserrat', sans-serif;
	  font-size: 12px;
	  color: #ffffff;
	  border-radius: 20px;
	  border: 1px solid #ff7d4f;
	  margin-bottom: 1em;
	}
  
	.mySF-modal-continue-button:hover {
	  cursor:pointer;
	  background-color: transparent;
	  box-shadow: 0px 0px 32px 0 #f8f8f850;
	  color: #ff7d4f;
	  transition-duration: 250ms;
	}
	
	.mySF-modal-continue-to-id-button {
	  background-color: transparent;
	  padding: 10px 20px;
	  font-family: 'Montserrat', sans-serif;
	  font-size: 12px;
	  color: #ff7d4f;
	  border-radius: 20px;
	  border: 1px solid #ff7d4f;
	  margin-bottom: 1em;
	  margin-left: 20px;
	}
  
	.mySF-modal-continue-to-id-button:hover {
	  cursor:pointer;
	  color: #aaa;
	  border: 0px;
	  margin-left: 21px;
	}
  
	.mySF-modal-form {
	  display:none;
	  width: 100%;
	  margin-bottom: 25px;
	  flex-direction: column;
	  align-items: flex-start;
	}
  
	.mySF-modal-form-fields {
	  display: flex;
	  flex-direction: row;
	  width: -webkit-fill-available;
	  border: 1px solid #d2d9e4;
	  padding: 1px;
	  border-radius: 20px;
	  background: #fff;
	}
  
	.mySF-modal-input {
	  border: none;
	  width: -webkit-fill-available;
	  padding-top: 10px;
	  padding-bottom: 10px;
	  padding-left: 16px;
	  border-radius: 20px;
	  background-color: transparent;
	  font-family: inherit;
	}
  
	.mySF-modal-input:focus {
	  outline: none;
	  background-color: transparent;
	}
  
	.mySF-modal-input:-webkit-autofill,
	.mySF-modal-input:-webkit-autofill:hover,
	.mySF-modal-input:-webkit-autofill:focus {
	  -webkit-box-shadow: 0 0 0px 1000px white inset;
	  -webkit-text-fill-color: #333;
	}
  
	.mySF-modal-input:-moz-autofill {
	  -moz-box-shadow: 0 0 0px 1000px white inset;
	  -moz-text-fill-color: #333;
	}
  
	.mySF-modal-input:-ms-mySF-modal-input-placeholder {
	  background-color: transparent !important;
	}
  
	.mySF-submit-btn {
	  background-color: #ff7d4f;
	  font-size: 14px;
	  color: #ffffff;
	  border-radius: 20px;
	  border: 1px solid #ff7d4f;
	}
  
	.mySF-submit-btn:hover {
	  background-color: white;
	  border: 1px solid #ff7d4f;
	  box-shadow: 0px 0px 32px 0 #f8f8f850;
	  color: #ff7d4f;
	  cursor: pointer;
	  transition-duration: 250ms;
	}
  
	.mySF-modal-form-footer {
	  background-color: transparent;
	  width: 100%;
	  margin-top: 0.5em;
	  margin-bottom: 1em;
	}
  
	#mySF-forgot-button {
	  cursor: pointer;
	  float: right;
	  color: grey;
	}
  
	#mySF-info-text {
	  margin: 0;
	  float: left;
	  color: grey;
	  text-decoration: none;
	}
  
	.mySF-big-circle {
	  background: linear-gradient(#ff7d4f10, #ff7d4f40);
	  border-radius: 50%;
	  height: 300px;
	  position: absolute;
	  width: 300px;
	  z-index:0;
	  top:50%;
	  left:-100px;
	}
  
	.mySF-qr-circle {
	  background: linear-gradient(#ff7d4f10, #ff7d4f30);
	  border-radius: 50%;
	  height: 300px;
	  width: 300px;
	  z-index:0;
	  display:flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  margin-top:-100px;
	}
  
	.mySF-qr-background {
	  background-color:white;
	  box-shadow: 0 0 10px #0003;
	  border-radius:20px;
	  width:70%;
	  height:70%;
	  display:flex;
	  align-items: center;
	  justify-content: center;
	}
  
	.mySF-qr-code {
	  z-index:1;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	}
  
	.mySF-cut-border {
	  position: relative;
	  display: inline-block;
	  border: 2px solid #022652;
	  width: 90%;
	  height: 90%;
	  border-radius: 10px;
	}
	.mySF-cut-border::before {
	  content: "";
	  position: absolute;
	  height: calc(100% + 10px);
	  width: 50%;
	  background-color: white;
	  top: -5px;
	  left: 25%;
	}
	.mySF-cut-border::after {
	  content: "";
	  position: absolute;
	  height: 50%;
	  width: calc(100% + 10px);
	  background-color: white;
	  top: 25%;
	  left: -5px;
	}
  
	.mySF-circle {
	  position: relative;
	  background: #ff7d4f;
	  width: fit-content;
	  width: 160px;
	  height: 160px;
	  border-radius: 100%;
	  display: block;
	  margin: auto;
	}
  
	.mySF-shoe-size {
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
  
	.mySF-specs {
	  margin: 12px;
	  background-color: #f2f2f280;
	  padding: 10px;
	  border-radius: 12px;
	}
  
  </style>
  
  <div id="mySF-modal-overlay" class="mySF-modal-overlay" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
		document.querySelector('.mySF-modal-button-container').style.display = 'flex';
		document.getElementById('mysf_size').style.display = 'none';
		document.querySelector('.mySF-qr-circle').style.display = 'flex';
		document.getElementById('mySF-modal-form').style.display = 'none';">
	<div class="mySF-modal-content animate__animated animate__fadeInDown" onclick="event.stopPropagation()">
	<div class="mySF-big-circle"></div>
	  <div class="mySF-modal-header">
		<img src=" https://cdn.myshoefitter.com/images/logo.png" width="150px" style="margin-left:70px">
		<span class="mySF-modal-close" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
		document.querySelector('.mySF-modal-button-container').style.display = 'flex';
		document.getElementById('mysf_size').style.display = 'none';
		document.querySelector('.mySF-qr-circle').style.display = 'flex';
		document.getElementById('mySF-modal-form').style.display = 'none';
		">&times;</span>
	  </div>
	  <div class="mySF-modal-inner-content">
		<div class="mySF-modal-left-section">
		<h3>Einmal deinen Fuß scannen,<br>immer die richtige Größe bestellen.</h3>
    <p><b>Scanne den QR-Code</b> und starte mit der Messung. Du musst nur einen Scan von deinem Fuß machen, was nur wenige Minuten dauert.</p>
    	<div class="mySF-modal-button-container"> 
			<button class="mySF-modal-continue-button" id="continue-to-info-button">So funktioniert's</button>
			<button id="mySF-continue-btn" class="mySF-modal-continue-to-id-button">Mit Scan-ID fortfahren</button>
		  </div>
		  <div class="mySF-modal-form" id="mySF-modal-form">
			<div class="mySF-modal-form-fields">
			  <input type="text" class ="mySF-modal-input" id="mySF-modal-id-form-field" name="mySF-modal-id-form-field" placeholder="Enter your ID">
			  <input type="text" class ="mySF-modal-input" id="mySF-modal-email-form-field" name="mySF-modal-email-form-field" placeholder="Enter your Email" style="display:none">
			  <button id="mySF-submit-btn" class="mySF-submit-btn">Senden</button>
			</div>
			<div class="mySF-modal-form-footer">
			  <a id="mySF-forgot-button">ID vergessen?</a>
			  <p id="mySF-info-text"></p>
			</div>
		  </div>
		</div>
		<div class="mySF-modal-right-section">
		<div id="mysf_size" style="display:none;width: -webkit-fill-available;">
		<div class="mySF-circle">
		  <h2 class="mySF-shoe-size">35</h2>
		</div>
		<div class="mySF-specs">
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
		  <div class="mySF-qr-circle">
			<div class="mySF-qr-background">
			  <div class="mySF-cut-border">
			  <div id="mySF-qr-code" class="mySF-qr-code"/>
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
        document.querySelector(".mySF-modal-content").style.display = "flex";
        if (!isMobile) {
            draw();
        }
    };

    document.querySelector("#mySF-submit-btn").onclick = function() {
        var idField = document.querySelector("#mySF-modal-id-form-field");
        var emailField = document.querySelector("#mySF-modal-email-form-field");

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
            document.getElementById("mySF-forgot-button").textContent = "ID vergessen?";
            document.getElementById("mySF-modal-email-form-field").style.display = "none";
            document.getElementById("mySF-modal-id-form-field").style.display = "flex";
        }
    };


    if (isMobile) {
        document.querySelector("#mySF-continue-btn2").onclick = function() {
            window.open(url, '_blank');
        };

        document.querySelector("#mySF-continue-btn").onclick = function() {
            document.getElementById("mysf_mob").style.display = "none";
            document.getElementById("mySF-input").style.display = "block";
        };
    } else {
        document.querySelector("#mySF-continue-btn").onclick = function() {
            document.querySelector(".mySF-modal-button-container").style.display = "none";
            document.getElementById("mySF-modal-form").style.display = "flex";
        };
    }

    var back = false;

    document.querySelector("#mySF-forgot-button").onclick = function() {
        if (!back) {
            document.querySelector("#mySF-modal-email-form-field").style.display = "flex";
            document.querySelector("#mySF-modal-id-form-field").style.display = "none";
            //document.querySelector("#forgotButton").textContent = "ㅤ";
            document.querySelector("#mySF-forgot-button").textContent = "ID eingeben";
            document.querySelector("#mySF-info-text").textContent = " ";
            back = true;
            sentMail = true;
        } else {
            document.querySelector("#mySF-modal-email-form-field").style.display = "none";
            document.querySelector("#mySF-modal-id-form-field").style.display = "flex";
            document.querySelector("#mySF-forgot-button").textContent = "ID vergessen?";
            document.querySelector("#mySF-info-text").textContent = " ";
            back = false;
        }
    };



    document.querySelector("#mySF-modal-id-form-field").onclick = function() {
        document.querySelector("#mySF-info-text").textContent = " ";
    };

    window.addEventListener('resize', function() {
        checekDevice();
    });

    function fetchCode(Code) {
        //Appwrite code logic
    }

    function fetchEmail(Email) {
        //Appwrite Email logic
    }

    function draw() {
        var box = document.querySelector(".mySF-qr-background");
        if (!isMobile) {
            document.querySelector("#mySF-qr-code").innerHTML = "";
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
                document.querySelector("#mySF-qr-code")
            );
        }
    }

    if (document.getElementById('product_id')) {
        const product_id = document.getElementById('product_id').textContent;
        const shop = getSiteName();
        mySF.setvalues(product_id, shop);
    } else {
        mySF.setvalues("null", "null");
    };

    function getSiteName() {
        const fullUrlSplit = window.location.host.split(".");
        if (fullUrlSplit[0] !== "www")
            return fullUrlSplit[0];
        return fullUrlSplit[1];
    }

}

mySF_reload.reload();