import QrCreator from "qr-creator";
import {nanoid} from 'nanoid';
import {Client,Account,Functions} from "appwrite";
import 'animate.css';
const translations = {
	en: {
		title: "Scan your foot once, always order the right size.",
		description: "Scan the QR code and start the measurement. You only need to scan your foot, which takes just a few minutes.",
		descriptionMobile: "Click 'Measure Foot Now' and start the measurement. You only need to scan your foot, which takes just a few minutes.",
		continueButton: "Measure Foot Now",
		continueToIdButton: "Continue with Scan ID",
		howItWorksButton: "How it works",
		sendButton: "Submit",
		forgotButton: "Forgot ID?",
		forgotButton1: "Back to ID",
		idFieldPlaceholder: "Enter your ID",
		emailFieldPlaceholder: "Enter your E-mail",
		length:"Length:",
		width:"Width:",
		brand:"Brand:",
		model:"Model:",
	  },
	es: {
		title: "Escanea tu pie una vez, siempre pide el tamaño correcto.",
		description: "Escanea el código QR y comienza la medición. Solo necesitas escanear tu pie, lo cual solo toma unos minutos.",
		descriptionMobile: "Haz clic en 'Medir pie ahora' y comienza la medición. Solo necesitas escanear tu pie, lo cual solo toma unos minutos.",
		continueButton: "Medir pie ahora",
		continueToIdButton: "Continuar con ID de escaneo",
		howItWorksButton: "Cómo funciona",
		sendButton: "Enviar",
		forgotButton: "¿Olvidaste tu ID?",
		forgotButton1: "Volver a la ID",
		idFieldPlaceholder: "Ingresa tu ID",
  		emailFieldPlaceholder: "Ingresa tu correo electrónico",
		length: "Longitud:",
		width: "Ancho:",
		brand: "Marca:",
		model: "Modelo:",
	  },
	it: {
		title: "Scansiona il tuo piede una volta, ordina sempre la taglia giusta.",
		description: "Scansiona il codice QR e avvia la misurazione. Devi solo scansionare il tuo piede, che richiede solo pochi minuti.",
		descriptionMobile: "Clicca su 'Misura piede ora' e avvia la misurazione. Devi solo scansionare il tuo piede, che richiede solo pochi minuti.",
		continueButton: "Misura piede ora",
		continueToIdButton: "Continua con ID di scansione",
		howItWorksButton: "Come funziona",
		sendButton: "Invia",
		forgotButton: "ID dimenticato?",
		forgotButton1: "Torna all'ID",
		idFieldPlaceholder: "Inserisci il tuo ID",
		emailFieldPlaceholder: "Inserisci la tua Email",
		length: "Lunghezza:",
		width: "Larghezza:",
		brand: "Marca:",
		model: "Modello:",
	  },
	pt: {
		title: "Digitalize seu pé uma vez, sempre peça o tamanho correto.",
		description: "Digitalize o código QR e inicie a medição. Você só precisa digitalizar o seu pé, o que leva apenas alguns minutos.",
		descriptionMobile: "Clique em 'Medir pé agora' e inicie a medição. Você só precisa digitalizar o seu pé, o que leva apenas alguns minutos.",
		continueButton: "Medir pé agora",
		continueToIdButton: "Continuar com ID de digitalização",
		howItWorksButton: "Como funciona",
		sendButton: "Enviar",
		forgotButton: "Esqueceu o ID?",
		forgotButton1: "Voltar para o ID",
		idFieldPlaceholder: "Digite seu ID",
		emailFieldPlaceholder: "Digite seu E-mail",
		length: "Comprimento:",
		width: "Largura:",
		brand: "Marca:",
		model: "Modelo:",
	  },
	fr: {
		title: "Numérisez votre pied une fois, commandez toujours la bonne taille.",
		description: "Numérisez le code QR et commencez la mesure. Vous n'avez qu'à numériser votre pied, ce qui ne prend que quelques minutes.",
		descriptionMobile: "Cliquez sur 'Mesurer le pied maintenant' et commencez la mesure. Vous n'avez qu'à numériser votre pied, ce qui ne prend que quelques minutes.",
		continueButton: "Mesurer le pied maintenant",
		continueToIdButton: "Continuer avec l'ID de numérisation",
		howItWorksButton: "Comment ça marche",
		sendButton: "Soumettre",
		forgotButton: "ID oublié?",
		forgotButton1: "Retour à l'ID",
		idFieldPlaceholder: "Entrez votre ID",
  		emailFieldPlaceholder: "Entrez votre adresse e-mail",
		length: "Longueur:",
		width: "Largeur:",
		brand: "Marque:",
		model: "Modèle:",
	  },
	de: {
		title: "Einmal deinen Fuß scannen, immer die richtige Größe bestellen.",
		description: "Scanne den QR-Code und starte mit der Messung. Du musst nur einen Scan von deinem Fuß machen, was nur wenige Minuten dauert.",
		descriptionMobile: "Klicke auf 'Jetzt Fuß vermessen' und starte mit der Messung. Du musst nur einen Scan von deinem Fuß machen, was nur wenige Minuten dauert.",
		continueButton: "Jetzt Fuß vermessen",
		continueToIdButton: "Mit Scan-ID fortfahren",
		howItWorksButton: "So funktioniert's",
		sendButton: "Senden",
		forgotButton: "ID vergessen?",
		forgotButton1: "Zurück zur ID",
		idFieldPlaceholder: "ID eingeben",
  		emailFieldPlaceholder: "E-mail eingeben",
		length:"Länge:",
		width:"Breite:",
		brand:"Marke:",
		model:"Model:",
	  },
	pl: {
		title: "Zeskanuj swój stopę raz, zawsze zamawiaj odpowiedni rozmiar.",
		description: "Zeskanuj kod QR i rozpocznij pomiar. Wystarczy zeskanować swoją stopę, co zajmuje tylko kilka minut.",
		descriptionMobile: "Kliknij 'Zmierz teraz stopę' i rozpocznij pomiar. Wystarczy zeskanować swoją stopę, co zajmuje tylko kilka minut.",
		continueButton: "Zmierz teraz stopę",
		continueToIdButton: "Kontynuuj ze skanowaniem ID",
		howItWorksButton: "Jak to działa",
		sendButton: "Wyślij",
		forgotButton: "Zapomniałeś ID?",
		forgotButton1: "Powrót do ID",
		idFieldPlaceholder: "Wprowadź swoje ID",
  		emailFieldPlaceholder: "Wprowadź swój adres e-mail",
		length: "Długość:",
		width: "Szerokość:",
		brand: "Marka:",
		model: "Model:",
	  },
	ru: {
		title: "Сканируйте вашу ногу один раз, всегда заказывайте правильный размер.",
		description: "Сканируйте QR-код и начните измерение. Вам нужно всего лишь просканировать ногу, что займет всего несколько минут.",
		descriptionMobile: "Нажмите 'Измерить ногу сейчас' и начните измерение. Вам нужно всего лишь просканировать ногу, что займет всего несколько минут.",
		continueButton: "Измерить ногу сейчас",
		continueToIdButton: "Продолжить с идентификатором сканирования",
		howItWorksButton: "Как это работает",
		sendButton: "Отправить",
		forgotButton: "Забыли ID?",
		forgotButton1: "Вернуться к ID",
		idFieldPlaceholder: "Введите ваш ID",
  		emailFieldPlaceholder: "Введите ваш адрес электронной почты",
		length: "Длина:",
		width: "Ширина:",
		brand: "Бренд:",
		model: "Модель:",
	  },
	tr: {
		title: "Ayaklarınızı bir kez tarayın, her zaman doğru bedeni sipariş edin.",
		description: "QR kodunu tarayın ve ölçümü başlatın. Sadece ayaklarınızı taramanız gerekiyor, bu sadece birkaç dakika sürer.",
		descriptionMobile: "Şimdi ayaklarınızı ölç düğmesine tıklayın ve ölçümü başlatın. Sadece ayaklarınızı taramanız gerekiyor, bu sadece birkaç dakika sürer.",
		continueButton: "Şimdi ayaklarınızı ölç",
		continueToIdButton: "Tarama Kimliği ile Devam Et",
		howItWorksButton: "Nasıl çalışır",
		sendButton: "Gönder",
		forgotButton: "Kimliği unuttunuz mu?",
		forgotButton1: "Kimliğe geri dön",
		idFieldPlaceholder: "Kimliğinizi girin",
  		emailFieldPlaceholder: "E-postanızı girin",
		length: "Uzunluk:",
		width: "Genişlik:",
		brand: "Marka:",
		model: "Model:",
	  },
	ar: {
		title: "امسح قدمك مرة واحدة ، واطلب دائمًا الحجم الصحيح.",
		description: "امسح الرمز الاستجابة السريعة وابدأ القياس. تحتاج فقط إلى مسح قدمك ، والأمر يستغرق بضع دقائق فقط.",
		descriptionMobile: "انقر فوق 'قيس الآن القدم' وابدأ القياس. تحتاج فقط إلى مسح قدمك ، والأمر يستغرق بضع دقائق فقط.",
		continueButton: "قيس الآن القدم",
		continueToIdButton: "المتابعة باستخدام معرف المسح",
		howItWorksButton: "كيف يعمل",
		sendButton: "إرسال",
		forgotButton: "نسيت المعرف؟",
		forgotButton1: "العودة إلى المعرف",
		idFieldPlaceholder: "أدخل هويتك",
  		emailFieldPlaceholder: "أدخل بريدك الإلكتروني",
		length: "الطول:",
		width: "العرض:",
		brand: "العلامة التجارية:",
		model: "الموديل:",
	  },
	in: {
		title: "एक बार अपने पैरों को स्कैन करें, हमेशा सही साइज़ का ऑर्डर दें।",
		description: "क्यूआर कोड स्कैन करें और मापन शुरू करें। आपको सिर्फ अपने पैरों को स्कैन करने की आवश्यकता है, जो कुछ ही मिनट लगता है।",
		descriptionMobile: "'अब पैर मापें' पर क्लिक करें और मापन शुरू करें। आपको सिर्फ अपने पैरों को स्कैन करने की आवश्यकता है, जो कुछ ही मिनट लगता है।",
		continueButton: "अब पैर मापें",
		continueToIdButton: "स्कैन आईडी के साथ जारी रखें",
		howItWorksButton: "यह कैसे काम करता है",
		sendButton: "भेजें",
		forgotButton: "आईडी भूल गए?",
		forgotButton1: "आईडी पर वापस जाएं",
		idFieldPlaceholder: "अपना आईडी दर्ज करें",
  		emailFieldPlaceholder: "अपना ईमेल दर्ज करें",
		length: "लंबाई:",
		width: "चौड़ाई:",
		brand: "ब्रांड:",
		model: "मॉडल:",
	  },
	zh: {
		title: "一次扫描您的脚，永远订购正确尺寸。",
		description: "扫描QR码并开始测量。您只需扫描您的脚，仅需几分钟。",
		descriptionMobile: "点击“立即测量脚”，开始测量。您只需扫描您的脚，仅需几分钟。",
		continueButton: "立即测量脚",
		continueToIdButton: "继续扫描ID",
		howItWorksButton: "它是如何工作的",
		sendButton: "提交",
		forgotButton: "忘记ID？",
		forgotButton1: "返回ID",
		idFieldPlaceholder: "输入您的身份证",
  		emailFieldPlaceholder: "输入您的电子邮件",
		length: "长度：",
		width: "宽度：",
		brand: "品牌：",
		model: "型号：",
	  },
	ja: {
		title: "足を一度スキャンするだけで、常に正しいサイズを注文します。",
		description: "QRコードをスキャンして測定を開始します。足をスキャンするだけで、わずか数分で済みます。",
		descriptionMobile: "「今すぐ足を測定」をクリックして測定を開始します。足をスキャンするだけで、わずか数分で済みます。",
		continueButton: "今すぐ足を測定",
		continueToIdButton: "スキャンIDで続行",
		howItWorksButton: "使い方",
		sendButton: "送信",
		forgotButton: "IDを忘れましたか？",
		forgotButton1: "IDに戻る",
		idFieldPlaceholder: "IDを入力してください",
  		emailFieldPlaceholder: "メールアドレスを入力してください",
		length: "長さ：",
		width: "幅：",
		brand: "ブランド：",
		model: "モデル：",
	  },
	ko: {
		title: "한 번 발을 스캔하면 항상 올바른 사이즈를 주문합니다.",
		description: "QR 코드를 스캔하고 측정을 시작하세요. 발만 스캔하면 몇 분 만에 끝납니다.",
		descriptionMobile: "지금 발을 측정 버튼을 클릭하여 측정을 시작하세요. 발만 스캔하면 몇 분 만에 끝납니다.",
		continueButton: "지금 발 측정",
		continueToIdButton: "스캔 ID로 계속하기",
		howItWorksButton: "사용 방법",
		sendButton: "제출",
		forgotButton: "ID를 잊어버렸나요?",
		forgotButton1: "ID로 돌아가기",
		idFieldPlaceholder: "ID를 입력하세요",
  		emailFieldPlaceholder: "이메일을 입력하세요",
		length: "길이:",
		width: "너비:",
		brand: "브랜드:",
		model: "모델:",
	  },
    } 

class MySF {

  constructor() {
    // Initialisieren von Eigenschaften
    this.client = new Client();
    this.client
      .setEndpoint('https://api.myshoefitter.com/v1')
      .setProject('mysf');
	this.account = new Account(this.client);
	this.functions = new Functions(this.client);

    this.isMobile = false;
	  this.back = false;
    this.sentMail = false;
    this.device;

    this.qrRadius = 0;
    this.qreEcLevel = "L";
    this.qrFill = "#022652";

    this.url;
    this.hostURL = window.location.protocol + "//" + window.location.host;
    this.uuid = nanoid(32);
	  this.product_id;

    this.currentLanguage = navigator.language.slice(0, 2);

    console.log('mySHOEFITTER init');


    // EventListener und andere Initialisierungen
	this.checkDevice();
	this.runScript();
    this.setupListeners();
    this.updateLanguage(navigator.language.slice(0, 2));
  }

  setupListeners() {
    window.addEventListener('loaded', function() {
      runScript();
    })

    document.querySelector("#mySF-modal-id-form-field").onclick = () => {
      this.clearInfoText();
    };

    window.addEventListener('resize', () => {
      this.checkDevice();
    });

  }

  clearInfoText() {
    document.querySelector("#mySF-info-text").textContent = " ";
  }

  checkDevice() {
    if (screen.width <= 768) {
      // Apply mobile styles or behaviors
      this.isMobile = true;
      this.device = "mobile";
    } else {
      // Code for desktop devices
      this.isMobile = false;
    }
  }

  generateURL(product_id, shopID) {
    const urlObj = {
      uid: this.uuid,
      host: this.hostURL,
      shop: shopID,
      model: product_id,
      client: this.device
    };
    const json = JSON.stringify(urlObj);
    const encoded = btoa(json);
    this.url = `https://app.myshoefitter.com/?hash=${encoded}`;
  }

  updateLanguage(language) {
    if (this.isMobile) {
      const descriptionElement = document.getElementById('mySF-description-mobile');
      const toPWAElement = document.getElementById('mySF-continue-btn2');
      descriptionElement.textContent = translations[language].descriptionMobile;
      toPWAElement.textContent = translations[language].continueButton;
    } else {
      const descriptionElement = document.getElementById('mySF-description');
      descriptionElement.textContent = translations[language].description;
    }
    const titleElement = document.getElementById('mySF-title');
    const continueElement = document.getElementById('mySF-continue-btn');
    const howItWorksElement = document.getElementById('continue-to-info-button');
    const continueToIdElement = document.getElementById('mySF-continue-btn');
    const sendElement = document.getElementById('mySF-submit-btn');
    const forgotElement = document.getElementById('mySF-forgot-button');
    const idField = document.getElementById('mySF-modal-id-form-field');
    const emailField = document.getElementById('mySF-modal-email-form-field');
    const lengthText = document.querySelector('.mySF-text-length');
    const widthText = document.querySelector('.mySF-text-width');
    const brandText = document.querySelector('.mySF-text-brand');
    const modelText = document.querySelector('.mySF-text-model');

    lengthText.textContent = translations[language].length;
    widthText.textContent = translations[language].width;
    brandText.textContent = translations[language].brand;
    modelText.textContent = translations[language].model;
    titleElement.textContent = translations[language].title;
    continueElement.textContent = translations[language].continueButton;
    continueToIdElement.textContent = translations[language].continueToIdButton;
    howItWorksElement.textContent = translations[language].howItWorksButton;
    sendElement.textContent = translations[language].sendButton;
    forgotElement.textContent = translations[language].forgotButton;
    idField.placeholder = translations[language].idFieldPlaceholder;
    emailField.placeholder = translations[language].emailFieldPlaceholder;

    this.currentLanguage = language;
  }

  fetchCode(Code) {
	const self = this;
    // Construct the payload object
    const payload = {
      "model_id": this.product_id, // Replace with the actual value
      "scan_code": Code // Use the Code parameter directly
    };

    // Convert the payload to a JSON string
    const payloadString = JSON.stringify(payload);
	console.log('MySF script payload: ',payloadString);

    // Appwrite code logic
    let promise = this.functions.createExecution('64b7f975bc6fb063472b', payloadString);
    promise.then(function(response) {
      try {
        const responseData = response; // Parse the response as JSON
        const responseBody = JSON.parse(responseData.response); // Parse the nested JSON string
		console.log('Appwrite response: ',responseBody);

        if (responseBody.success && responseBody.response && responseBody.response.found) {
          const eurValue = responseBody.response.eur;
          const footLengthValue = responseBody.response.length;
          const footWidthValue = responseBody.response.width;
          const brandNameValue = responseBody.response.brand;
          const modelNameValue = responseBody.response.model;

          console.log('EUR value:', eurValue);
          console.log('length value:', footLengthValue);
          console.log('width value:', footWidthValue);
          console.log('brand value:', brandNameValue);
          console.log('model value:', modelNameValue);

          document.querySelector('.mySF-shoe-size').textContent = eurValue;
          document.querySelector('.mySF-shoe-length').textContent = Math.round(footLengthValue) + " mm";
          document.querySelector('.mySF-shoe-width').textContent = Math.round(footWidthValue) + " mm";
          document.querySelector('.mySF-shoe-brand').textContent = brandNameValue;
          document.querySelector('.mySF-shoe-model').textContent = modelNameValue;

          document.querySelector('#mysf_size').style.display = 'block';
          document.querySelector(".mySF-back-button").style.display = "inline-flex";
          if (!self.isMobile) {
            document.querySelector('.mySF-modal-left-section').style.display = 'none';
            document.querySelector('.mySF-modal-right-section').style.display = 'none';
            document.getElementById('mySF-languageSelector').value = self.currentLanguage;
          } else {
            document.querySelector('#mySF-input').style.display = 'none';
          }
        } else {
          console.log('EUR value not found in the response.');
          alert('Fitting size not found for this shoe model');
        }
      } catch (error) {
        console.error('Error parsing response:', error);
        alert('Scan-ID does not exist');
      }
    }).catch(function(error) {
      console.log(error); // Failure
      alert('Runtime error');
    });
  }

  fetchEmail(Email) {
    //Appwrite Email logic
    this.account.createMagicURLSession('unique()', Email, 'https://app.myshoefitter.com/scans')
      .then(response => {
        console.log(response); // Success
        alert('Email sent');
      }, error => {
        console.log(error); // Failure
        alert('Email does not exist');
      });
  }

  draw() {
    var box = document.querySelector(".mySF-qr-background");
    if (!this.isMobile) {
      document.querySelector("#mySF-qr-code").innerHTML = "";
      var x = box.clientWidth * .8;
      QrCreator.render({
          text: this.url,
          radius: this.qrRadius, // 0.0 to 0.5
          ecLevel: this.qreEcLevel, // L, M, Q, H
          fill: this.qrFill, // foreground color
          background: null, // color or null for transparent
          size: x, // in pixels
        },
        document.querySelector("#mySF-qr-code")
      );
    }
  }

  getSiteName() {
    const fullUrlSplit = window.location.host.split(".");
    if (fullUrlSplit[0] !== "www")
      return fullUrlSplit[0];
    return fullUrlSplit[1];
  }

  runScript() {
	const self = this; // Store the reference to the class instance
    var mySFModal = document.createElement("div");
    document.body.appendChild(mySFModal);
    mySFModal.id = "mySF-modal-overlay";
    mySFModal.className = "animate__fadeInUp";
    mySFModal.style.display = "none";

    if (self.isMobile) {
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
          font-size: 46px;
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
    
        #mySF-languageSelector {
            border: 1px solid #ccc;
            background-color: #fff;
            outline: none;
            margin-top: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            border-radius: 10px;
            min-height: 30px;
            padding: 0 20px;
            margin-right: 10px;
            font-size: 1.2em;
          }
          
        #mySF-languageSelector option {
            padding: 5px;
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
        
          #mysf_size {
              display:none;
              width: -webkit-fill-available;
              font-family: 'Montserrat', sans-serif;
          }
          
          .mySF-circle {
              position: relative;
              background: #ff7d4f; /* This is a placeholder color, adjust accordingly */
              width: 160px;
              height: 160px;
              border-radius: 100%;
              display: block;
              margin: auto;
          }
          
          .mySF-shoe-size {
              position: absolute;
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
          
          .mySF-card-row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin: 0 16px;
          }
          
          .mySF-card {
            margin: 10px;
              text-align: center;
              width: 100%;
              height: min-content;
              --background: transparent;
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border-radius: 16px;
              font-size: 14px;
              box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
          }
          
          .mySF-specs {
            margin: 0 26px;
              --background: transparent;
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border-radius: 16px;
              box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
          }
          
          .mySF-card-content {
              padding: 0 20px; /* Adjust padding as required */
          }
          
          .mySF-specs ul {
              list-style-type: none;
              justify-content: space-around;
              padding: 26px 0;
          }
          
          .mySF-specs li {
              display: flex;
              justify-content: space-around;
              padding: 10px 0;
          }
          
          .mySF-specs div {
              width: 50%;
              
          }
          
          .mySF-start {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
                text-align: start;
                margin-left: 5%;
              }
              
              .mySF-end {
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
                text-align: end;
                margin-right: 5%;
              }
      
          .mySF-text-length {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            margin: 10px;
          }
      
          .mySF-text-width {
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            margin: 10px;
          }
      
          .mySF-shoe-length {
            font-family: 'Montserrat', sans-serif;
            font-weight: 300;
            margin: 10px;
          }
      
          .mySF-shoe-width {
            font-family: 'Montserrat', sans-serif;
            font-weight: 300;
            margin: 10px;
          }
      
          .mySF-back-button {
              display: flex;
              visibility:hidden;
              align-items: center;
              padding: 10px 10px;
              background-color: transparent;
              border: none;
              border-radius: 50px;
              cursor: pointer;
              transition: background-color 0.3s;  
          }
      
          .mySF-back-button:hover {
              background-color: #e0e0e0;
          }
      
          .mySF-arrow {
              display: inline-block;
              width: 24px;
              height: 24px;
          }
      
         .mySF-back-button svg {
             fill: #ff7d4f;
              width: 100%;
              height: 100%;
          }
      
          /* Target iOS Safari */
          @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
            .mySF-back-button svg {
              transform: scaleX(-1);
            }
          }

          #mySF-video {
              display:none;
              width: -webkit-fill-available;
              justify-content: center;
          }
      
          .mySF-video-en {
            position:relative;
              height: 80vh; /* 80% of the viewport height */
              width: fit-content;
               object-fit: contain; /* Maintain aspect ratio */
               border-radius: 30px;
             }
              .mySF-video-de {
            position:relative;
              height: 80vh; /* 80% of the viewport height */
              width: fit-content;
               object-fit: contain; /* Maintain aspect ratio */
               border-radius: 30px;
             }

             #mySF-title {
              font-size: 20px;
              font-weight: bold;
            }
            #mySF-description-mobile {
              font-weight: normal;
              margin: 12px 0 12px 0px;
            }
      </style>
      
      <div id="mySF-modal-overlay" class="mySF-modal-overlay" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
      document.getElementById('mysf_mob').style.display = 'block';
      document.querySelector('.mySF-back-button').style.visibility = 'hidden';
      document.getElementById('mysf_size').style.display = 'none';
      document.getElementById('mySF-video').style.display = 'none';
      document.querySelector('.mySF-video-en').pause();
      document.querySelector('.mySF-video-de').pause();
      document.getElementById('mySF-input').style.display = 'none'";>
        <div class="mySF-modal-content animate__animated animate__fadeInDown" onclick="event.stopPropagation()">
          <div class="mySF-big-circle"></div>
          <div class="mySF-big-circle-top"></div>
          <div class="mySF-modal-header">
          <div style="display: flex;flex-direction: row;align-items: center;">		
          <button class="mySF-back-button">
        <span class="mySF-arrow">
          <svg viewBox="0 0 44.952 44.952" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M44.952,22.108c0-1.25-0.478-2.424-1.362-3.308L30.627,5.831c-0.977-0.977-2.561-0.977-3.536,0 c-0.978,0.977-0.976,2.568,0,3.546l10.574,10.57H2.484C1.102,19.948,0,21.081,0,22.464c0,0.003,0,0.025,0,0.028 c0,1.382,1.102,2.523,2.484,2.523h35.182L27.094,35.579c-0.978,0.978-0.978,2.564,0,3.541c0.977,0.979,2.561,0.978,3.538-0.001 l12.958-12.97c0.885-0.882,1.362-2.059,1.362-3.309C44.952,22.717,44.952,22.231,44.952,22.108z"></path>
              </g>
            </g>
          </svg>
        </span>
      </button>
      </div>
      <div>
          <img src=" https://cdn.myshoefitter.com/images/logo.png" width="150px">
          </div>
            <span class="mySF-modal-close" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
             document.getElementById('mysf_mob').style.display = 'block';
             document.querySelector('.mySF-back-button').style.visibility = 'hidden';
             document.getElementById('mySF-video').style.display = 'none';
             document.querySelector('.mySF-video-en').pause();
             document.querySelector('.mySF-video-de').pause();
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
            <h3 id="mySF-title">Einmal deinen Fuß scannen,<br>immer die richtige Größe bestellen.</h3>
        <p id="mySF-description-mobile">Scanne den QR-Code und starte mit der Messung. Du musst nur einen Scan von deinem Fuß machen, was nur wenige Minuten dauert.</p>		
        <button id="mySF-continue-btn2" class="mySF-modal-continue-button">Jetzt Fuß vermessen</button>
            <div style="display:flex;flex-direction:row;justify-content:space-evenly;margin-top: 0.5em;align-items: center;">
              <button id="continue-to-info-button" class="continue-to-info-button">So funktioniert's</button>
              <button id="mySF-continue-btn" class="mySF-modal-continue-to-id-button">Mit Scan-ID fortfahren</button>
            </div>
          </div>
    
      <div id="mysf_size">
      <!-- Shoe Size Circle -->
      <div class="mySF-circle">
          <h2 class="mySF-shoe-size">35</h2>
      </div>
    
      <!-- Foot Dimensions -->
      <div class="mySF-card-row">
          <div class="mySF-card">
              <div class="mySF-card-content">
                  <p class="mySF-text-length mySF-text">Length:</p>
                  <p class="mySF-text mySF-shoe-length">Length:<br>285 mm</p>
              </div>
          </div>
          <div class="mySF-card">
              <div class="mySF-card-content">
                  <p class="mySF-text-width mySF-text">Width:</p>
                  <p class="mySF-text mySF-shoe-width">111 mm</p>
              </div>
          </div>
      </div>
    
      <!-- Specifications -->
      <div class="mySF-specs">
          <ul>
              <li>
                  <div class="mySF-text-brand mySF-start">
                      Brand:
                  </div>
                  <div class="mySF-shoe-brand mySF-end">
                      Groundies
                  </div>
              </li>
              <hr style="width: -webkit-fill-available;height: 0px;border: 0.55px solid #00000020;border-radius: 50%;margin: 5% 0;" />
              <li>
                  <div class="mySF-text-model mySF-start">
                      Model:
                  </div>
                  <div class="mySF-shoe-model mySF-end">
                      Balance Vegan Women
                  </div>
              </li>
          </ul>
      </div>
    </div>
    <div id="mySF-video">
    <div id="mySF-video-overlay">
      <video class="mySF-video-en" poster="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-img-en/view?project=mysf" controls>
      <source src="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-video-en-webm/view?project=mysf" type="video/webm">
      <source src="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-video-en-mp4/view?project=mysf" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video class="mySF-video-de" poster="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-img-de/view?project=mysf" controls>
      <source src="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-video-de-webm/view?project=mysf" type="video/webm">
      <source src="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-video-de-mp4/view?project=mysf" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    </div>
    </div>
    <select id="mySF-languageSelector">
    <option value="en">🇺🇸 English</option>
      <option value="es">🇪🇸 Español</option>
      <option value="fr">🇫🇷 Français</option>
      <option value="it">🇮🇹 Italiano</option>
      <option value="pt">🇵🇹 Português</option>
    <option value="de">🇩🇪 Deutsch</option>
    <option value="pl">🇵🇱 Polski</option>
    <option value="ru">🇷🇺 Русский</option>
    <option value="tr">🇹🇷 Türkçe</option>
    <option value="ar">🇸🇦 العربية</option>
    <option value="in">🇮🇳 हिन्दी</option>
    <option value="zh">🇨🇳 中文</option>
    <option value="ja">🇯🇵 日本語</option>
    <option value="ko">🇰🇷 한국어</option>
    </select>
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
		  min-height:350px;
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
          font-size: 46px;
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
		  max-width:50%;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
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
		  font-weight:600;
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
		  font-weight:600;
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
		  height: min-content;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 16px;
          border-radius: 20px;
          background-color: transparent;
          font-family: inherit;
		  font-weight:600;
		  font-size: 14px;
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
		  font-weight:600;
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
      
        #mySF-languageSelector {
            border: 1px solid #ccc;
            background-color: #fff;
            outline: none;
            margin-top: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
            border-radius: 10px;
            min-height: 30px;
            padding: 0 15px;
            margin-right: 10px;
            font-size: 14px;
			font-weight: 600;
          }
          
        #mySF-languageSelector option {
            padding: 5px;
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
      
        #mysf_size {
            display:none;
			font-family: 'Montserrat', sans-serif;
            width: -webkit-fill-available;
        }
        
        .mySF-circle {
            position: relative;
            background: #ff7d4f; /* This is a placeholder color, adjust accordingly */
            width: 160px;
            height: 160px;
            border-radius: 100%;
            display: block;
            margin: auto;
        }
        
        .mySF-shoe-size {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            padding: 0;
            margin: 0;
			font-family: 'Montserrat', sans-serif;
            font-size: 70px;
            width: 100%;
            text-align: center;
        }
        
        .mySF-card-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0 16px;
        }
        
        .mySF-card {
          margin: 10px;
            text-align: center;
            width: 100%;
            height: min-content;
            --background: transparent;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 16px;
            font-size: 14px;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
        }
        
        .mySF-specs {
          margin: 0 26px;
            --background: transparent;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 16px;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;
        }
        
        .mySF-card-content {
            padding: 0 20px; /* Adjust padding as required */
        }
        
        .mySF-specs ul {
            list-style-type: none;
            justify-content: space-around;
            padding: 26px 0;
        }
        
        .mySF-specs li {
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
        }
        
        .mySF-specs div {
            width: 50%;
            
        }
        
        .mySF-start {
			font-family: 'Montserrat', sans-serif;
			font-weight: 400;
          text-align: start;
          margin-left: 5%;
        }
        
        .mySF-end {
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
          text-align: end;
          margin-right: 5%;
        }

		.mySF-text-length {
			font-family: 'Montserrat', sans-serif;
			font-weight: 400;
      margin: 10px;
		}

		.mySF-text-width {
			font-family: 'Montserrat', sans-serif;
			font-weight: 400;
      margin: 10px;
		}

		.mySF-shoe-length {
			font-family: 'Montserrat', sans-serif;
			font-weight: 300;
      margin: 10px;
		}

		.mySF-shoe-width {
			font-family: 'Montserrat', sans-serif;
			font-weight: 300;
      margin: 10px;
		}

        .mySF-back-button {
            display: flex;
            visibility: hidden;
            align-items: center;
            padding: 10px 10px;
            background-color: transparent;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: background-color 0.3s;
            
        }
    
        .mySF-back-button:hover {
            background-color: #e0e0e0;
        }
    
        .mySF-arrow {
            display: inline-block;
            width: 24px;
            height: 24px;
        }
    
       .mySF-back-button svg {
           fill: #ff7d4f;
            width: 100%;
            height: 100%;
        }
    
        #mySF-video {
            display:none;
            width: -webkit-fill-available;
            justify-content: center;
        }
    
        .mySF-video-en{
          height: 80vh; /* 80% of the viewport height */
          width: fit-content;
           object-fit: contain; /* Maintain aspect ratio */
           border-radius: 30px;
         }
         
         .mySF-video-de{
            height: 80vh; /* 80% of the viewport height */
            width: fit-content;
             object-fit: contain; /* Maintain aspect ratio */
             border-radius: 30px;
           }

        #mySF-title {
          font-size: 20px;
          font-weight: bold;
        }
        #mySF-description  {
          font-weight: normal;
        }
      
      </style>
      
      <div id="mySF-modal-overlay" class="mySF-modal-overlay" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
            document.querySelector('.mySF-modal-button-container').style.display = 'flex';
            document.getElementById('mysf_size').style.display = 'none';
            document.getElementById('mySF-video').style.display = 'none';
            document.querySelector('.mySF-video-en').pause();
            document.querySelector('.mySF-video-de').pause();
            document.querySelector('.mySF-back-button').style.visibility = 'hidden';
            document.querySelector('.mySF-qr-circle').style.display = 'flex';
            document.querySelector('.mySF-modal-left-section').style.display = 'flex';
            document.querySelector('.mySF-modal-right-section').style.display = 'flex';
            document.getElementById('mySF-modal-form').style.display = 'none';">
        <div class="mySF-modal-content animate__animated animate__fadeInDown" onclick="event.stopPropagation()">
        <div class="mySF-big-circle"></div>
          <div class="mySF-modal-header">
        <div style="display: flex;flex-direction: row;align-items: center;">		
        <button class="mySF-back-button">
      <span class="mySF-arrow">
        <svg viewBox="0 0 44.952 44.952" xml:space="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M44.952,22.108c0-1.25-0.478-2.424-1.362-3.308L30.627,5.831c-0.977-0.977-2.561-0.977-3.536,0 c-0.978,0.977-0.976,2.568,0,3.546l10.574,10.57H2.484C1.102,19.948,0,21.081,0,22.464c0,0.003,0,0.025,0,0.028 c0,1.382,1.102,2.523,2.484,2.523h35.182L27.094,35.579c-0.978,0.978-0.978,2.564,0,3.541c0.977,0.979,2.561,0.978,3.538-0.001 l12.958-12.97c0.885-0.882,1.362-2.059,1.362-3.309C44.952,22.717,44.952,22.231,44.952,22.108z"></path>
            </g>
          </g>
        </svg>
      </span>
    </button>
        <img src=" https://cdn.myshoefitter.com/images/logo.png" width="150px" style="margin-left:26px">
        
        </div>
          <span class="mySF-modal-close" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
            document.querySelector('.mySF-modal-button-container').style.display = 'flex';
            document.getElementById('mysf_size').style.display = 'none';
            document.getElementById('mySF-video').style.display = 'none';
            document.querySelector('.mySF-video-en').pause();
            document.querySelector('.mySF-video-de').pause();
            document.querySelector('.mySF-back-button').style.visibility = 'hidden';
            document.querySelector('.mySF-modal-left-section').style.display = 'flex';
            document.querySelector('.mySF-modal-right-section').style.display = 'flex';
            document.querySelector('.mySF-qr-circle').style.display = 'flex';
            document.getElementById('mySF-modal-form').style.display = 'none';
            ">&times;</span>
          </div>
          <div class="mySF-modal-inner-content">
            <div class="mySF-modal-left-section">
            <h3 id="mySF-title">Einmal deinen Fuß scannen,<br>immer die richtige Größe bestellen.</h3>
        <p style="margin-top:0;font-weight:500" id="mySF-description"><b>Scanne den QR-Code</b> und starte mit der Messung. Du musst nur einen Scan von deinem Fuß machen, was nur wenige Minuten dauert.</p>
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
              <div class="mySF-qr-circle">
                <div class="mySF-qr-background">
                  <div class="mySF-cut-border">
                  <div id="mySF-qr-code" class="mySF-qr-code"/>
                  </div>
                </div>
              </div>
          </div>
          <select id="mySF-languageSelector">
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="it">🇮🇹 Italiano</option>
              <option value="pt">🇵🇹 Português</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="pl">🇵🇱 Polski</option>
            <option value="ru">🇷🇺 Русский</option>
            <option value="tr">🇹🇷 Türkçe</option>
            <option value="ar">🇸🇦 العربية</option>
            <option value="in">🇮🇳 हिन्दी</option>
            <option value="zh">🇨🇳 中文</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="ko">🇰🇷 한국어</option>
        </select>
        </div>
        <div id="mysf_size">
        <!-- Shoe Size Circle -->
        <div class="mySF-circle">
            <h2 class="mySF-shoe-size">35</h2>
        </div>
    
        <!-- Foot Dimensions -->
        <div class="mySF-card-row">
            <div class="mySF-card">
                <div class="mySF-card-content">
                    <p class="mySF-text-length mysf-text">Length:</p>
                    <p class="mysf-text mySF-shoe-length">285 mm</p>
                </div>
            </div>
            <div class="mySF-card">
                <div class="mySF-card-content">
                    <p class="mySF-text-width mysf-text">Width:</p>
                    <p class="text mySF-shoe-width">111 mm</p>
                </div>
            </div>
        </div>
    
        <!-- Specifications -->
        <div class="mySF-specs">
            <ul>
                <li>
                    <div class="mySF-text-brand mySF-start">
                        Brand:
                    </div>
                    <div class="mySF-shoe-brand mySF-end">
                        Groundies
                    </div>
                </li>
                <hr style="width: -webkit-fill-available;height: 0px;border: 0.55px solid #00000020;border-radius: 50%;margin: 5% 0;" />
                <li>
                    <div class="mySF-text-model mySF-start">
                        Model:
                    </div>
                    <div class="mySF-shoe-model mySF-end">
                        Balance Vegan Women
                    </div>
                </li>
            </ul>
        </div>
        <div style="display:flex;justify-content:center;">
        <select id="mySF-languageSelector">
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Español</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="it">🇮🇹 Italiano</option>
        <option value="pt">🇵🇹 Português</option>
      <option value="de">🇩🇪 Deutsch</option>
      <option value="pl">🇵🇱 Polski</option>
      <option value="ru">🇷🇺 Русский</option>
      <option value="tr">🇹🇷 Türkçe</option>
      <option value="ar">🇸🇦 العربية</option>
      <option value="in">🇮🇳 हिन्दी</option>
      <option value="zh">🇨🇳 中文</option>
      <option value="ja">🇯🇵 日本語</option>
      <option value="ko">🇰🇷 한국어</option>
    </select>
        </div>
    </div>
    <div id="mySF-video">
    <div id="mySF-video-overlay">
        <video class="mySF-video-en" controls>
        <source src="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-video-en-webm/view?project=mysf" type="video/webm">
        <source src="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-video-en-mp4/view?project=mysf" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <video class="mySF-video-de" controls style="display:none">
      <source src="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-video-de-webm/view?project=mysf" type="video/webm">
      <source src="https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-video-de-mp4/view?project=mysf" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    </div>
    </div>
      </div>
            `;
    }

    if(self.currentLanguage === 'de') {
      document.querySelector('.mySF-video-de').style.display = 'block';
      document.querySelector('.mySF-video-en').style.display = 'none';
    } else {
      document.querySelector('.mySF-video-de').style.display = 'none';
      document.querySelector('.mySF-video-en').style.display = 'block';
    }

    document.querySelectorAll('#mySF-languageSelector')[0].value = self.currentLanguage;
	console.log('Current language: ',self.currentLanguage);
    if (!self.isMobile) {
      document.querySelectorAll('#mySF-languageSelector')[1].value = self.currentLanguage;
    }
    document.querySelectorAll('#mySF-languageSelector')[0].addEventListener('change', function() {
      const selectedLanguage = document.querySelectorAll('#mySF-languageSelector')[0].value;
      if(selectedLanguage === 'de') {
        document.querySelector('.mySF-video-de').style.display = 'block';
        document.querySelector('.mySF-video-en').style.display = 'none';
      } else {
        document.querySelector('.mySF-video-de').style.display = 'none';
        document.querySelector('.mySF-video-en').style.display = 'block';
      }
      if (!self.isMobile) {
        document.querySelectorAll('#mySF-languageSelector')[1].value = document.querySelectorAll('#mySF-languageSelector')[0].value;
      }
      self.updateLanguage(selectedLanguage);
    });
    if (!self.isMobile) {
      document.querySelectorAll('#mySF-languageSelector')[1].addEventListener('change', function() {
        const selectedLanguage = document.querySelectorAll('#mySF-languageSelector')[1].value;
        document.querySelectorAll('#mySF-languageSelector')[0].value = document.querySelectorAll('#mySF-languageSelector')[1].value;
        if(selectedLanguage === 'de') {
          document.querySelector('.mySF-video-de').style.display = 'block';
          document.querySelector('.mySF-video-en').style.display = 'none';
        } else {
          document.querySelector('.mySF-video-de').style.display = 'none';
          document.querySelector('.mySF-video-en').style.display = 'block';
        }
        self.updateLanguage(selectedLanguage);
      });
    }
    document.querySelector("#continue-to-info-button").onclick = function() {
      if (self.isMobile) {
        document.querySelector('#mysf_mob').style.display = 'none';
      } else {
        document.querySelector('.mySF-modal-left-section').style.display = 'none';
        document.querySelector('.mySF-modal-right-section').style.display = 'none';
      }
      document.getElementById('mySF-video').style.display = "flex";
      document.querySelector(".mySF-back-button").style.visibility = "visible";
    };


    document.querySelector(".mySF-back-button").onclick = function() {
      document.querySelector('#mysf_size').style.display = 'none';
      document.getElementById('mySF-video').style.display = "none";
      document.querySelector('.mySF-video-en').pause();
      document.querySelector('.mySF-video-de').pause();
      if (!self.isMobile) {
        document.querySelector('.mySF-modal-left-section').style.display = 'flex';
        document.querySelector('.mySF-modal-right-section').style.display = 'flex';
        document.querySelector(".mySF-modal-button-container").style.display = "flex";
        document.getElementById("mySF-modal-form").style.display = "none";
        document.querySelector(".mySF-back-button").style.visibility = "hidden";
      } else {
        document.querySelector('#mysf_mob').style.display = 'block';
        document.getElementById("mySF-input").style.display = "none";
        document.querySelector("#mySF-video").style.display = "none";
        document.querySelector(".mySF-back-button").style.visibility = "hidden";
      }
    };

    document.querySelector("#mySF_Widget_Button").onclick = function() {
      mySFModal.style.display = "flex";
      document.querySelector(".mySF-modal-content").style.display = "flex";
      if (!self.isMobile) {
        self.draw();
      }
    };

    document.querySelector("#mySF-submit-btn").onclick = function() {
      var idField = document.querySelector("#mySF-modal-id-form-field");
      var emailField = document.querySelector("#mySF-modal-email-form-field");

      var userCode = idField.value;
      var userEmail = emailField.value;

      if (userCode != "") {
        self.fetchCode(userCode);
      }
      if (userEmail != "") {
        self.fetchEmail(userEmail);
      }
      if (self.sentMail) {
        document.getElementById("mySF-forgot-button").textContent = translations[self.currentLanguage].forgotButton;
        document.getElementById("mySF-modal-email-form-field").style.display = "none";
        document.getElementById("mySF-modal-id-form-field").style.display = "flex";
      }
    };


    if (this.isMobile) {
      document.querySelector("#mySF-continue-btn2").onclick = function() {
        window.open(self.url, '_blank');
      };

      document.querySelector("#mySF-continue-btn").onclick = function() {
        document.getElementById("mysf_mob").style.display = "none";
        document.getElementById("mySF-input").style.display = "block";
        document.querySelector(".mySF-back-button").style.visibility = "visible";
      };
    } else {
      document.querySelector("#mySF-continue-btn").onclick = function() {
        document.querySelector(".mySF-modal-button-container").style.display = "none";
        document.getElementById("mySF-modal-form").style.display = "flex";
        document.querySelector(".mySF-back-button").style.visibility = "visible";
      };
    }


    document.querySelector("#mySF-forgot-button").onclick = function() {
      if (!self.back) {
        document.querySelector("#mySF-modal-email-form-field").style.display = "flex";
        document.querySelector("#mySF-modal-id-form-field").style.display = "none";
        //document.querySelector("#forgotButton").textContent = "ㅤ";
        document.querySelector("#mySF-forgot-button").textContent = translations[self.currentLanguage].forgotButton1;
        document.querySelector("#mySF-info-text").textContent = " ";
        self.back = true;
        self.sentMail = true;
      } else {
        document.querySelector("#mySF-modal-email-form-field").style.display = "none";
        document.querySelector("#mySF-modal-id-form-field").style.display = "flex";
        document.querySelector("#mySF-forgot-button").textContent = translations[self.currentLanguage].forgotButton;
        document.querySelector("#mySF-info-text").textContent = " ";
        self.back = false;
      }
    };



    document.querySelector("#mySF-modal-id-form-field").onclick = function() {
      document.querySelector("#mySF-info-text").textContent = " ";
    };

    if (document.getElementById('product_id')) {
      this.product_id = document.getElementById('product_id').textContent;
      const shop = this.getSiteName();
      this.generateURL(this.product_id, shop);
	  console.log('Product_ID: ',product_id);
	  console.log('Shop_ID: ', shop);
    } else {
	  console.log('Could not parse product_id and shop_id');	
      this.generateURL("null", "null");
    };

  }

  reload() {
    if (document.querySelector('#mySF-modal-overlay')) {
      document.querySelector('#mySF-modal-overlay').remove();
    }
    this.runScript();
  }
}

// Instanz der Klasse erstellen und verwenden
const mySFInstance = new MySF();