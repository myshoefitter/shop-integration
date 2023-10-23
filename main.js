import QrCreator from "qr-creator";
import {
  nanoid
} from 'nanoid';
import {
  Client,
  Account,
  Functions
} from "appwrite";
import 'animate.css';
const translations = {
  en: {
    title: "Order the right shoe size with a photo of your foot.",
    description: "We will now do a scan of your foot together. You will then receive your perfect size for the selected shoe. Save the ID to get your size directly next time. Scan the QR code and let's go!",
    descriptionMobile: "We will now do a scan of your foot together. You will then receive your perfect size for the selected shoe. Save the ID to get your size directly next time.",
    continueButton: "Measure foot now",
    continueToIdButton: "Proceed with Scan-ID",
    howItWorksButton: "How it works",
    sendButton: "Send",
    forgotButton: "Forgot ID?",
    forgotButton1: "Back to ID input",
    idFieldPlaceholder: "Enter ID",
    emailFieldPlaceholder: "Enter email",
    length: "Length:",
    width: "Width:",
    brand: "Brand:",
    model: "Model:",
    successEmail:"We have sent your IDs to your email! :-)",
    errorGlobal:"Oops, something went wrong, please try again.",
    errorNoModel:"We did not find any data for the desired model.",
    errorNoID:"This ID does not exist. Press Forgot ID.",
    errorNoEmail:"We don't recognize this email. A new scan is quickly done :-)",
    errorNoFit:"This shoe is not available in your matching size.",
    errorTooSmall:"The model is unfortunately too big for your feet.",
    errorTooLarge:"The model is unfortunately too small for your large feet.",
    errorTooWide:"This shoe model is too narrow for your feet.",
    errorTooNarrow:"This shoe model is too wide for your feet.",
  },
  es: {
    title: "Ordena la talla de zapato correcta con una foto de tu pie.",
    description: "Ahora haremos un escaneo de tu pie juntos. Luego recibirás tu talla perfecta para el zapato seleccionado. Guarda la ID para obtener tu talla directamente la próxima vez. ¡Escanea el código QR y vamos!",
    descriptionMobile: "Ahora haremos un escaneo de tu pie juntos. Luego recibirás tu talla perfecta para el zapato seleccionado. Guarda la ID para obtener tu talla directamente la próxima vez.",
    continueButton: "Medir pie ahora",
    continueToIdButton: "Continuar con Scan-ID",
    howItWorksButton: "Cómo funciona",
    sendButton: "Enviar",
    forgotButton: "¿Olvidaste la ID?",
    forgotButton1: "Regresar a la entrada de ID",
    idFieldPlaceholder: "Introduce la ID",
    emailFieldPlaceholder: "Introduce el correo electrónico",
    length: "Longitud:",
    width: "Ancho:",
    brand: "Marca:",
    model: "Modelo:",
    successEmail:"¡Hemos enviado tus ID a tu correo electrónico! :-)",
    errorGlobal:"Vaya, algo salió mal, por favor intenta nuevamente.",
    errorNoModel:"No encontramos datos para el modelo deseado.",
    errorNoID:"Esta ID no existe. Presiona ¿Olvidaste la ID?",
    errorNoEmail:"No reconocemos este correo electrónico. Un nuevo escaneo se hace rápidamente :-)",
    errorNoFit:"Este zapato no está disponible en tu talla adecuada.",
    errorTooSmall:"El modelo es demasiado grande para tus pies.",
    errorTooLarge:"El modelo es demasiado pequeño para tus pies grandes.",
    errorTooWide:"Este modelo de zapato es demasiado estrecho para tus pies.",
    errorTooNarrow:"Este modelo de zapato es demasiado ancho para tus pies.",
  },
  it: {
    title: "Ordina la giusta misura di scarpa con una foto del tuo piede.",
    description: "Ora effettueremo una scansione del tuo piede insieme. Riceverai quindi la tua misura perfetta per la scarpa selezionata. Salva l'ID per ricevere direttamente la tua misura la prossima volta. Scansiona il codice QR e iniziamo!",
    descriptionMobile: "Ora effettueremo una scansione del tuo piede insieme. Riceverai quindi la tua misura perfetta per la scarpa selezionata. Salva l'ID per ricevere direttamente la tua misura la prossima volta.",
    continueButton: "Misura il piede ora",
    continueToIdButton: "Prosegui con Scan-ID",
    howItWorksButton: "Come funziona",
    sendButton: "Invia",
    forgotButton: "Hai dimenticato l'ID?",
    forgotButton1: "Torna all'inserimento dell'ID",
    idFieldPlaceholder: "Inserisci l'ID",
    emailFieldPlaceholder: "Inserisci l'email",
    length: "Lunghezza:",
    width: "Larghezza:",
    brand: "Marca:",
    model: "Modello:",
    successEmail:"Abbiamo inviato le tue ID alla tua email! :-)",
    errorGlobal:"Ops, qualcosa è andato storto, riprova.",
    errorNoModel:"Non abbiamo trovato dati per il modello desiderato.",
    errorNoID:"Questo ID non esiste. Premi 'Hai dimenticato l'ID?'.",
    errorNoEmail:"Non riconosciamo questa email. Una nuova scansione è fatta in fretta :-)",
    errorNoFit:"Questa scarpa non è disponibile nella tua misura corrispondente.",
    errorTooSmall:"Il modello è purtroppo troppo grande per i tuoi piedi.",
    errorTooLarge:"Il modello è purtroppo troppo piccolo per i tuoi piedi grandi.",
    errorTooWide:"Questo modello di scarpa è troppo stretto per i tuoi piedi.",
    errorTooNarrow:"Questo modello di scarpa è troppo largo per i tuoi piedi.",
  },
  pt: {
    title: "Peça o tamanho correto de sapato com uma foto do seu pé.",
    description: "Agora faremos uma digitalização do seu pé juntos. Você receberá o tamanho perfeito para o sapato selecionado. Salve o ID para obter o seu tamanho diretamente da próxima vez. Digitalize o código QR e vamos começar!",
    descriptionMobile: "Agora faremos uma digitalização do seu pé juntos. Você receberá o tamanho perfeito para o sapato selecionado. Salve o ID para obter o seu tamanho diretamente da próxima vez.",
    continueButton: "Medir pé agora",
    continueToIdButton: "Continuar com Scan-ID",
    howItWorksButton: "Como funciona",
    sendButton: "Enviar",
    forgotButton: "Esqueceu a ID?",
    forgotButton1: "Voltar à entrada de ID",
    idFieldPlaceholder: "Insira a ID",
    emailFieldPlaceholder: "Insira o email",
    length: "Comprimento:",
    width: "Largura:",
    brand: "Marca:",
    model: "Modelo:",
    successEmail:"Enviamos as suas IDs para o seu e-mail! :-)",
    errorGlobal:"Oops, algo deu errado, tente novamente.",
    errorNoModel:"Não encontramos dados para o modelo desejado.",
    errorNoID:"Esta ID não existe. Pressione 'Esqueceu a ID?'.",
    errorNoEmail:"Não reconhecemos este e-mail. Uma nova digitalização é feita rapidamente :-)",
    errorNoFit:"Este sapato não está disponível no seu tamanho correspondente.",
    errorTooSmall:"O modelo é infelizmente grande demais para os seus pés.",
    errorTooLarge:"O modelo é infelizmente pequeno demais para os seus pés grandes.",
    errorTooWide:"Este modelo de sapato é muito estreito para os seus pés.",
    errorTooNarrow:"Este modelo de sapato é muito largo para os seus pés.",
  },
  fr: {
    title: "Commandez la bonne pointure avec une photo de votre pied.",
    description: "Nous allons maintenant scanner votre pied ensemble. Vous recevrez ensuite votre pointure parfaite pour la chaussure sélectionnée. Sauvegardez l'ID pour obtenir directement votre taille la prochaine fois. Scannez le code QR et c'est parti!",
    descriptionMobile: "Nous allons maintenant scanner votre pied ensemble. Vous recevrez ensuite votre pointure parfaite pour la chaussure sélectionnée. Sauvegardez l'ID pour obtenir directement votre taille la prochaine fois.",
    continueButton: "Mesurer le pied maintenant",
    continueToIdButton: "Continuer avec Scan-ID",
    howItWorksButton: "Comment ça marche",
    sendButton: "Envoyer",
    forgotButton: "ID oublié?",
    forgotButton1: "Retour à la saisie de l'ID",
    idFieldPlaceholder: "Saisir l'ID",
    emailFieldPlaceholder: "Saisir l'email",
    length: "Longueur:",
    width: "Largeur:",
    brand: "Marque:",
    model: "Modèle:",
    successEmail:"Nous avons envoyé vos ID à votre email ! :-)",
    errorGlobal:"Oups, quelque chose s'est mal passé, veuillez réessayer.",
    errorNoModel:"Nous n'avons trouvé aucune donnée pour le modèle souhaité.",
    errorNoID:"Cette ID n'existe pas. Appuyez sur 'ID oublié?'.",
    errorNoEmail:"Nous ne reconnaissons pas cet email. Un nouveau scan est vite fait :-)",
    errorNoFit:"Cette chaussure n'est pas disponible dans votre pointure.",
    errorTooSmall:"Le modèle est malheureusement trop grand pour vos pieds.",
    errorTooLarge:"Le modèle est malheureusement trop petit pour vos grands pieds.",
    errorTooWide:"Ce modèle de chaussure est trop étroit pour vos pieds.",
    errorTooNarrow:"Ce modèle de chaussure est trop large pour vos pieds.",
  },
  de: {
    title: "Mit einem Foto von deinem Fuß immer die richtige Schuhgröße bestellen.",
    description: "Wir machen jetzt zusammen einen Scan von deinem Fuß. Für den ausgewählten Schuh erhältst du dann deine perfekte Größe. Speicher die ID, um beim nächsten Mal direkt deine Größe zu erhalten. Scanne den QR-Code uns los geht's!",
    descriptionMobile: "Wir machen jetzt zusammen einen Scan von deinem Fuß. Für den ausgewählten Schuh erhältst du dann deine perfekte Größe. Speicher die ID, um beim nächsten Mal direkt deine Größe zu erhalten.",
    continueButton: "Jetzt Fuß vermessen",
    continueToIdButton: "Mit Scan-ID fortfahren",
    howItWorksButton: "So funktioniert's",
    sendButton: "Senden",
    forgotButton: "ID vergessen?",
    forgotButton1: "Zurück zur ID-Eingabe",
    idFieldPlaceholder: "ID eingeben",
    emailFieldPlaceholder: "E-Mail eingeben",
    length: "Länge:",
    width: "Breite:",
    brand: "Marke:",
    model: "Model:",
    successEmail:"Wir haben dir deine IDs an deine Mail gesendet! :-)",
    errorGlobal:"Hoppla, da ist etwas schief gelaufen, bitte versuche es erneut.",
    errorNoModel:"Zum gewünschten Modell haben wir keine Daten gefunden.",
    errorNoID:"Diese ID existiert nicht. Drücke ID vergessen.",
    errorNoEmail:"Diese E-Mail ist uns nicht bekannt. Ein neuer Scan ist schnell erledigt :-)",
    errorNoFit:"Diesen Schuh gibt es nicht in deiner passenden Größe.",
    errorTooSmall:"Das Modell ist leider zu groß für deine Füße.",
    errorTooLarge:"Das Modell ist leider zu klein für deine großen Füße.",
    errorTooWide:"Dieses Schuh-Modell ist zu schmal für deine Füße.",
    errorTooNarrow:"Dieses Schuh-Modell ist zu breit für deine Füße.",
  },
  pl: {
    title: "Zamów odpowiedni rozmiar buta za pomocą zdjęcia swojej stopy.",
    description: "Razem dokonamy teraz skanowania Twojej stopy. Następnie otrzymasz idealny rozmiar dla wybranego buta. Zapisz ID, aby za następnym razem od razu otrzymać swój rozmiar. Zeskanuj kod QR i zaczynajmy!",
    descriptionMobile: "Razem dokonamy teraz skanowania Twojej stopy. Następnie otrzymasz idealny rozmiar dla wybranego buta. Zapisz ID, aby za następnym razem od razu otrzymać swój rozmiar.",
    continueButton: "Zmierz stopę teraz",
    continueToIdButton: "Kontynuuj z Scan-ID",
    howItWorksButton: "Jak to działa",
    sendButton: "Wyślij",
    forgotButton: "Zapomniałeś ID?",
    forgotButton1: "Wróć do wprowadzania ID",
    idFieldPlaceholder: "Wprowadź ID",
    emailFieldPlaceholder: "Wprowadź e-mail",
    length: "Długość:",
    width: "Szerokość:",
    brand: "Marka:",
    model: "Model:",
    successEmail:"Wysłaliśmy Twoje ID na Twój adres e-mail! :-)",
    errorGlobal:"Ups, coś poszło nie tak, spróbuj ponownie.",
    errorNoModel:"Nie znaleźliśmy danych dla wybranego modelu.",
    errorNoID:"To ID nie istnieje. Kliknij 'Zapomniałeś ID?'.",
    errorNoEmail:"Nie rozpoznajemy tego e-maila. Nowe skanowanie jest szybkie :-)",
    errorNoFit:"Tego buta nie ma w Twoim odpowiednim rozmiarze.",
    errorTooSmall:"Model jest niestety za duży dla Twoich stóp.",
    errorTooLarge:"Model jest niestety za mały dla Twoich dużych stóp.",
    errorTooWide:"Ten model buta jest za wąski dla Twoich stóp.",
    errorTooNarrow:"Ten model buta jest za szeroki dla Twoich stóp.",
  },
  ru: {
    title: "Закажите обувь правильного размера с фотографией вашей стопы.",
    description: "Теперь мы вместе произведем сканирование вашей стопы. Затем вы получите идеальный размер для выбранной обуви. Сохраните ID, чтобы в следующий раз сразу получить ваш размер. Отсканируйте QR-код и начнем!",
    descriptionMobile: "Теперь мы вместе произведем сканирование вашей стопы. Затем вы получите идеальный размер для выбранной обуви. Сохраните ID, чтобы в следующий раз сразу получить ваш размер.",
    continueButton: "Измерить стопу сейчас",
    continueToIdButton: "Продолжить с Scan-ID",
    howItWorksButton: "Как это работает",
    sendButton: "Отправить",
    forgotButton: "Забыли ID?",
    forgotButton1: "Вернуться к вводу ID",
    idFieldPlaceholder: "Введите ID",
    emailFieldPlaceholder: "Введите эл. почту",
    length: "Длина:",
    width: "Ширина:",
    brand: "Бренд:",
    model: "Модель:",
    successEmail:"Мы отправили ваши ID на вашу электронную почту! :-)",
    errorGlobal:"Упс, что-то пошло не так, попробуйте еще раз.",
    errorNoModel:"Данные для выбранной модели не найдены.",
    errorNoID:"Этот ID не существует. Нажмите 'Забыли ID?'.",
    errorNoEmail:"Мы не распознаем эту электронную почту. Новое сканирование проходит быстро :-)",
    errorNoFit:"Эта обувь недоступна в вашем размере.",
    errorTooSmall:"Эта модель слишком большая для ваших ног.",
    errorTooLarge:"Эта модель слишком маленькая для ваших больших ног.",
    errorTooWide:"Эта модель обуви слишком узкая для ваших ног.",
    errorTooNarrow:"Эта модель обуви слишком широкая для ваших ног.",
  },
  tr: {
    title: "Ayağınızın fotoğrafıyla doğru ayakkabı numarasını sipariş edin.",
    description: "Şimdi ayağınızı birlikte tarayacağız. Seçilen ayakkabı için mükemmel numaranızı alacaksınız. Bir sonraki sefer doğrudan numaranızı almak için ID'yi kaydedin. QR kodunu tarayın ve başlayalım!",
    descriptionMobile: "Şimdi ayağınızı birlikte tarayacağız. Seçilen ayakkabı için mükemmel numaranızı alacaksınız. Bir sonraki sefer doğrudan numaranızı almak için ID'yi kaydedin.",
    continueButton: "Şimdi ayak ölçünüzü alın",
    continueToIdButton: "Scan-ID ile devam edin",
    howItWorksButton: "Nasıl çalışır?",
    sendButton: "Gönder",
    forgotButton: "ID'yi unuttum?",
    forgotButton1: "ID girişine geri dön",
    idFieldPlaceholder: "ID girin",
    emailFieldPlaceholder: "E-posta girin",
    length: "Uzunluk:",
    width: "Genişlik:",
    brand: "Marka:",
    model: "Model:",
    successEmail:"ID'lerinizi e-postanıza gönderdik! :-)",
    errorGlobal:"Hata oluştu, lütfen tekrar deneyin.",
    errorNoModel:"İstenen model için veri bulunamadı.",
    errorNoID:"Bu ID mevcut değil. 'ID'yi unuttum?' butonuna tıklayın.",
    errorNoEmail:"Bu e-posta adresini tanımıyoruz. Yeni bir tarama hızla yapılır :-)",
    errorNoFit:"Bu ayakkabı sizin uygun numaranızda mevcut değil.",
    errorTooSmall:"Model, ayağınız için maalesef çok büyük.",
    errorTooLarge:"Model, ayağınız için maalesef çok küçük.",
    errorTooWide:"Bu ayakkabı modeli, ayağınız için çok dar.",
    errorTooNarrow:"Bu ayakkabı modeli, ayağınız için çok geniş.",
  },
  ar: {
    title: "اطلب المقاس المناسب للحذاء باستخدام صورة لقدمك.",
    description: "سنقوم الآن بمسح قدمك معًا. ثم ستحصل على المقاس المثالي للحذاء المختار. قم بحفظ الرقم التعريفي للحصول على مقاسك مباشرة في المرة القادمة. امسح الرمز الاستجابة السريعة ولنبدأ!",
    descriptionMobile: "سنقوم الآن بمسح قدمك معًا. ثم ستحصل على المقاس المثالي للحذاء المختار. قم بحفظ الرقم التعريفي للحصول على مقاسك مباشرة في المرة القادمة.",
    continueButton: "قم بقياس القدم الآن",
    continueToIdButton: "استمر مع Scan-ID",
    howItWorksButton: "كيف يعمل؟",
    sendButton: "إرسال",
    forgotButton: "نسيت الرقم التعريفي؟",
    forgotButton1: "العودة لإدخال الرقم التعريفي",
    idFieldPlaceholder: "أدخل الرقم التعريفي",
    emailFieldPlaceholder: "أدخل البريد الإلكتروني",
    length: "الطول:",
    width: "العرض:",
    brand: "العلامة التجارية:",
    model: "النوع:",
    successEmail:"لقد أرسلنا الرقم التعريفي الخاص بك إلى بريدك الإلكتروني! :-)",
    errorGlobal:"عذرًا، حدث خطأ، يرجى المحاولة مرة أخرى.",
    errorNoModel:"لم نجد بيانات للنوع المطلوب.",
    errorNoID:"الرقم التعريفي هذا غير موجود. اضغط على 'نسيت الرقم التعريفي؟'.",
    errorNoEmail:"نحن لا نتعرف على هذا البريد الإلكتروني. إعادة المسح سريعة :-)",
    errorNoFit:"هذا الحذاء غير متوفر بمقاسك المناسب.",
    errorTooSmall:"هذا النوع كبير جدًا لأقدامك.",
    errorTooLarge:"هذا النوع صغير جدًا لأقدامك الكبيرة.",
    errorTooWide:"هذا النوع من الأحذية ضيق جدًا لأقدامك.",
    errorTooNarrow:"هذا النوع من الأحذية واسع جدًا لأقدامك.",
  },
  in: {
    title: "अपने पैर की फोटो के साथ सही जूते का आकार मंगाएं।",
    description: "अब हम मिलकर आपके पैर की स्कैनिंग करेंगे। फिर आपको चुने गए जूते के लिए आपका सही आकार मिलेगा। अगली बार सीधे अपना आकार पाने के लिए ID सहेजें। QR कोड स्कैन करें और शुरू हो जाएं!",
    descriptionMobile: "अब हम मिलकर आपके पैर की स्कैनिंग करेंगे। फिर आपको चुने गए जूते के लिए आपका सही आकार मिलेगा। अगली बार सीधे अपना आकार पाने के लिए ID सहेजें।",
    continueButton: "अब पैर का आकार जांचें",
    continueToIdButton: "Scan-ID के साथ जारी रखें",
    howItWorksButton: "यह कैसे काम करता है",
    sendButton: "भेजें",
    forgotButton: "ID भूल गए?",
    forgotButton1: "ID प्रवेश पर वापस जाएं",
    idFieldPlaceholder: "ID दर्ज करें",
    emailFieldPlaceholder: "ईमेल दर्ज करें",
    length: "लंबाई:",
    width: "चौड़ाई:",
    brand: "ब्रांड:",
    model: "मॉडल:",
    successEmail:"हमने आपकी ID को आपके मेल पर भेज दिया है! :-)",
    errorGlobal:"उप्स, कुछ गलत हो गया, कृपया पुनः प्रयास करें।",
    errorNoModel:"चयनित मॉडल के लिए कोई डेटा नहीं मिला।",
    errorNoID:"यह ID मौजूद नहीं है। ID भूल गए पर क्लिक करें।",
    errorNoEmail:"हमें इस ईमेल का पता नहीं है। एक नया स्कैन त्वरित है :-)",
    errorNoFit:"इस जूते का आकार आपके लिए उपलब्ध नहीं है।",
    errorTooSmall:"यह मॉडल आपके पैर के लिए बहुत बड़ा है।",
    errorTooLarge:"यह मॉडल आपके बड़े पैर के लिए बहुत छोटा है।",
    errorTooWide:"यह जूते का मॉडल आपके पैर के लिए बहुत पतला है।",
    errorTooNarrow:"यह जूते का मॉडल आपके पैर के लिए बहुत चौड़ा है।",
  },
  zh: {
    title: "使用脚的照片来正确地订购鞋子尺码。",
    description: "我们现在将一起扫描你的脚。然后你将为所选的鞋子得到完美的尺寸。保存ID，下次直接获取你的尺寸。扫描二维码，开始吧！",
    descriptionMobile: "我们现在将一起扫描你的脚。然后你将为所选的鞋子得到完美的尺寸。保存ID以便下次使用。",
    continueButton: "现在测量脚",
    continueToIdButton: "继续使用Scan-ID",
    howItWorksButton: "如何操作",
    sendButton: "发送",
    forgotButton: "忘记ID?",
    forgotButton1: "返回ID输入",
    idFieldPlaceholder: "输入ID",
    emailFieldPlaceholder: "输入邮箱",
    length: "长度:",
    width: "宽度:",
    brand: "品牌:",
    model: "型号:",
    successEmail:"我们已将你的ID发送到你的邮箱中! :-)",
    errorGlobal:"哎呀，出了些问题，请重试。",
    errorNoModel:"我们没有找到所需的型号数据。",
    errorNoID:"此ID不存在。点击忘记ID。",
    errorNoEmail:"我们不知道这个邮箱。重新扫描很快完成 :-)",
    errorNoFit:"这双鞋没有你合适的尺寸。",
    errorTooSmall:"这款型号对你的脚来说太大了。",
    errorTooLarge:"这款型号对你的大脚来说太小了。",
    errorTooWide:"这款鞋型号对你的脚来说太窄了。",
    errorTooNarrow:"这款鞋型号对你的脚来说太宽了。",
  },
  ja: {
    title: "足の写真で正確な靴のサイズを注文。",
    description: "私たちと一緒にあなたの足をスキャンします。選択した靴に最適なサイズを取得します。次回すぐにサイズを取得するためにIDを保存してください。QRコードをスキャンして、始めましょう！",
    descriptionMobile: "私たちと一緒にあなたの足をスキャンします。選択した靴に最適なサイズを取得します。次回のためにIDを保存してください。",
    continueButton: "足のサイズを計測",
    continueToIdButton: "Scan-IDで続ける",
    howItWorksButton: "使い方",
    sendButton: "送信",
    forgotButton: "IDを忘れた？",
    forgotButton1: "ID入力に戻る",
    idFieldPlaceholder: "IDを入力",
    emailFieldPlaceholder: "Eメールを入力",
    length: "長さ:",
    width: "幅:",
    brand: "ブランド:",
    model: "モデル:",
    successEmail:"あなたのIDをメールで送信しました! :-)",
    errorGlobal:"おっと、何かがうまくいかなかったようです。もう一度お試しください。",
    errorNoModel:"希望のモデルのデータは見つかりませんでした。",
    errorNoID:"このIDは存在しません。IDを忘れた場合はクリックしてください。",
    errorNoEmail:"このEメールは登録されていません。新しいスキャンはすぐに完了します :-)",
    errorNoFit:"この靴のサイズはあなたには合いません。",
    errorTooSmall:"このモデルはあなたの足には大きすぎます。",
    errorTooLarge:"このモデルはあなたの大きな足には小さすぎます。",
    errorTooWide:"この靴のモデルはあなたの足には狭すぎます。",
    errorTooNarrow:"この靴のモデルはあなたの足には広すぎます。",
  },
  ko: {
    title: "발의 사진으로 정확한 신발 사이즈 주문하기.",
    description: "이제 우리는 당신의 발을 스캔할 것입니다. 선택한 신발에 대해 완벽한 사이즈를 받게 됩니다. 다음 번에 바로 사이즈를 받기 위해 ID를 저장하세요. QR 코드를 스캔하고 시작하세요!",
    descriptionMobile: "이제 우리는 당신의 발을 스캔할 것입니다. 선택한 신발에 대해 완벽한 사이즈를 받게 됩니다. ID를 저장하여 다음 번 사용하세요.",
    continueButton: "발 사이즈 측정하기",
    continueToIdButton: "Scan-ID로 계속하기",
    howItWorksButton: "작동 방식",
    sendButton: "전송",
    forgotButton: "ID를 잊어버렸나요?",
    forgotButton1: "ID 입력으로 돌아가기",
    idFieldPlaceholder: "ID 입력하기",
    emailFieldPlaceholder: "이메일 입력하기",
    length: "길이:",
    width: "너비:",
    brand: "브랜드:",
    model: "모델:",
    successEmail:"당신의 ID를 이메일로 보냈습니다! :-)",
    errorGlobal:"이런, 문제가 발생했습니다. 다시 시도해 주세요.",
    errorNoModel:"요청된 모델의 데이터를 찾을 수 없습니다.",
    errorNoID:"이 ID는 존재하지 않습니다. ID를 잊어버렸다면 클릭하세요.",
    errorNoEmail:"이 이메일을 알 수 없습니다. 새로운 스캔은 빠르게 완료됩니다 :-)",
    errorNoFit:"이 신발은 당신의 사이즈로는 없습니다.",
    errorTooSmall:"이 모델은 당신의 발에는 너무 큽니다.",
    errorTooLarge:"이 모델은 당신의 큰 발에는 너무 작습니다.",
    errorTooWide:"이 신발 모델은 당신의 발에는 너무 좁습니다.",
    errorTooNarrow:"이 신발 모델은 당신의 발에는 너무 넓습니다.",
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

    this.reload = () => {
      console.log("reloading..");
      if (document.querySelector("#mySF-modal-overlay")) {
        document.querySelector("#mySF-modal-overlay").remove();
      }
      this.checkDevice();
      this.runScript();
      this.updateLanguage(navigator.language.slice(0, 2));
    };

    // EventListener und andere Initialisierungen
    this.checkDevice();
    this.runScript();
    this.setupListeners();
    this.updateLanguage(navigator.language.slice(0, 2));
    this.params;
    this.bannerOrigin = 'https://cdn.myshoefitter.com/script.js';
    this.config = {
      productId: this.product_id,
      ref: window.href,
      sessionId: this.generateSessionId(),
      shopId: "64be733131ccc3b6d79c",
    }
    this.init(this.config);
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


  addButtonClickListener() {
    const button = document.getElementById('mySF_Widget_Button');
    if (button) {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        this.trackEvent('Banner Open');
      });
    }
  }

  generateSessionId() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (parseInt(c, 10) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> parseInt(c, 10) / 4).toString(16)
    );
  }

   /**
   * Initialize the Script
   * @param config ScriptConfig
   */
  init(config) {

    if (config?.productId) {

      this.params = Object.assign(config,
        {
          sessionId: this.generateSessionId(),
          ref: location.href // Don't remove or encrypt! Needed for Analytics!
        });

      this.addButtonClickListener();
      this.trackEvent('Button Load');

      console.log('mySHOEFITTER Config:', config);
      console.log('mySHOEFITTER Session ID:', this.params.sessionId);
    } else {
      console.warn('mySHOEFITTER: productId is missing!');
    }
  }

  /**
   * Track script load event in Pirsch
   * Extracted from https://api.pirsch.io/pirsch-events.js
   */
  async trackEvent(eventName) {

    try {

      // Don't send request on localhost
      if ((/^localhost(.*)$|^127(\.[0-9]{1,3}){3}$/is.test(location.hostname) || location.protocol === "file:")) {
        console.info("Pirsch is ignored on localhost. Add the data-dev attribute to enable it.");
      }

      navigator.sendBeacon('https://usage.myshoefitter.com/p/e', JSON.stringify({
        url: 'https://dialog.myshoefitter.com',
        identification_code: 'kGhjVS9A2aJtLg6PWZx0h6OV8N23WqEy',
        title: document.title,
        referrer: encodeURIComponent(location.href),
        screen_width: screen.width,
        screen_height: screen.height,
        user_agent: navigator.userAgent,
        event_name: 'Button Load',
        event_duration: 0,
        event_meta: {
        sessionId: this.config.sessionId,
        }
      }));

    } catch (error) {

      // Send beacon as fallback, if fetch is not supported. Could be blocked by ad blockers.

      const data = {
        identification_code: 'kGhjVS9A2aJtLg6PWZx0h6OV8N23WqEy',
        url: this.bannerOrigin,
        title: document.title,
        referrer: encodeURIComponent(location.href),
        screen_width: screen.width,
        screen_height: screen.height,
        user_agent: navigator.userAgent,
        event_name: eventName,
        event_duration: 0,
        event_meta: this.params
      };

      try {
        navigator.sendBeacon('https://api.pirsch.io/event', JSON.stringify(data));
      } catch (error) {
        console.log('mySHOEFITTER Tracking Error:', error);
      }
    }
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
      "model_id": self.product_id, // Replace with the actual value
      "scan_code": Code // Use the Code parameter directly
    };

    // Convert the payload to a JSON string
    const payloadString = JSON.stringify(payload);
    console.log('MySF script payload: ', payloadString);

    // Appwrite code logic
    let promise = this.functions.createExecution('64b7f975bc6fb063472b', payloadString);
    promise.then(function(response) {
      try {
        const responseData = response; // Parse the response as JSON
        const responseBody = JSON.parse(responseData.response); // Parse the nested JSON string
        console.log('Appwrite response: ', responseBody);

        if (responseBody.success && responseBody.response && responseBody.exitStatus == "OK") {
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
            document.querySelector('.mySF-error').style.display = "none";
            document.querySelector('.mySF-success').style.display = "none";
            document.getElementById('mySF-languageSelector').value = self.currentLanguage;
          } else {
            document.querySelector('#mySF-input').style.display = 'none';
            document.querySelector('.mySF-error').style.display = "none";
          }
        } 

        if(responseBody.exitStatus === "WARN: SHOE MODEL NOT FOUND IN DATABANK") {
          if (!self.isMobile) {        
            document.querySelector('.mySF-modal-right-section').style.display = 'none';
          } else {
            document.getElementById("mySF-input").style.display = "none";
          }
          document.querySelector('.mySF-success').style.display = "none";
          document.querySelector('.mySF-error').style.display = "flex";
          document.querySelector(".mySF-back-button").style.visibility = "visible";
          document.querySelector(".mySF-error-text").textContent = translations[self.currentLanguage].errorNoModel;
          }

          if(responseBody.exitStatus === "WARN: SCAN_CODE NOT FOUND IN DATABANK") {
            if (!self.isMobile) {        
              document.querySelector('.mySF-modal-right-section').style.display = 'none';
            } else {
              document.getElementById("mySF-input").style.display = "none";
            }
            document.querySelector('.mySF-success').style.display = "none";
            document.querySelector('.mySF-error').style.display = "flex";
            document.querySelector(".mySF-back-button").style.visibility = "visible";
            document.querySelector(".mySF-error-text").textContent = translations[self.currentLanguage].errorNoID;
            }

            if(responseBody.exitStatus === "WARN: SIZE NOT FOUND AFTER FILTER") {
              if (!self.isMobile) {        
                document.querySelector('.mySF-modal-right-section').style.display = 'none';
              } else {
                document.getElementById("mySF-input").style.display = "none";
              }
              document.querySelector('.mySF-success').style.display = "none";
              document.querySelector('.mySF-error').style.display = "flex";
              document.querySelector(".mySF-back-button").style.visibility = "visible";
              document.querySelector(".mySF-error-text").textContent = translations[self.currentLanguage].errorNoFit;
              }

              if(responseBody.exitStatus === "WARN: FOOT TOO SMALL") {
                if (!self.isMobile) {        
                  document.querySelector('.mySF-modal-right-section').style.display = 'none';
                } else {
                  document.getElementById("mySF-input").style.display = "none";
                }
                document.querySelector('.mySF-success').style.display = "none";
                document.querySelector('.mySF-error').style.display = "flex";
                document.querySelector(".mySF-back-button").style.visibility = "visible";
                document.querySelector(".mySF-error-text").textContent = translations[self.currentLanguage].errorTooSmall;
                }
                
                if(responseBody.exitStatus === "WARN: FOOT TOO LARGE") {
                  if (!self.isMobile) {        
                    document.querySelector('.mySF-modal-right-section').style.display = 'none';
                  } else {
                    document.getElementById("mySF-input").style.display = "none";
                  }
                  document.querySelector('.mySF-success').style.display = "none";
                  document.querySelector('.mySF-error').style.display = "flex";
                  document.querySelector(".mySF-back-button").style.visibility = "visible";
                  document.querySelector(".mySF-error-text").textContent = translations[self.currentLanguage].errorTooLarge;
                  }
                  if(responseBody.exitStatus === "WARN: FOOT TOO WIDE") {
                    if (!self.isMobile) {        
                      document.querySelector('.mySF-modal-right-section').style.display = 'none';
                    } else {
                      document.getElementById("mySF-input").style.display = "none";
                    }
                    document.querySelector('.mySF-success').style.display = "none";
                    document.querySelector('.mySF-error').style.display = "flex";
                    document.querySelector(".mySF-back-button").style.visibility = "visible";
                    document.querySelector(".mySF-error-text").textContent = translations[self.currentLanguage].errorTooWide;
                    }
                    
                    if(responseBody.exitStatus === "WARN: FOOT TOO NARROW") {
                      if (!self.isMobile) {        
                        document.querySelector('.mySF-modal-right-section').style.display = 'none';
                      } else {
                        document.getElementById("mySF-input").style.display = "none";
                      }
                      document.querySelector('.mySF-success').style.display = "none";
                      document.querySelector('.mySF-error').style.display = "flex";
                      document.querySelector(".mySF-back-button").style.visibility = "visible";
                      document.querySelector(".mySF-error-text").textContent = translations[self.currentLanguage].errorTooNarrow;
                      }
            
      } catch (error) {
        //console.error('Error parsing response:', error);
        //alert('Scan-ID does not exist');
        if (!self.isMobile) {        
          document.querySelector('.mySF-modal-right-section').style.display = 'none';
        } else {
          document.getElementById("mySF-input").style.display = "none";
        }
        document.querySelector('.mySF-success').style.display = "none";
        document.querySelector('.mySF-error').style.display = "flex";
        document.querySelector(".mySF-back-button").style.visibility = "visible";
        document.querySelector(".mySF-error-text").textContent = translations[self.currentLanguage].errorGlobal;
      }
    }).catch(function(error) {
      console.log(error); // Failure
      //alert('Runtime error');
      if (!self.isMobile) {        
        document.querySelector('.mySF-modal-right-section').style.display = 'none';
        document.querySelector('.mySF-success').style.display = "none";
      } else {
        document.getElementById("mySF-input").style.display = "none";
        document.querySelector('.mySF-success').style.display = "none";
      }
      document.querySelector('.mySF-error').style.display = "flex";
      document.querySelector(".mySF-back-button").style.visibility = "visible";
    });
  }

  fetchEmail(Email) {
    const self = this;
    //Appwrite Email logic
    this.account.createMagicURLSession('unique()', Email, 'https://app.myshoefitter.com/scans')
      .then(response => {
        console.log(response); // Success
        if (!self.isMobile) {        
          document.querySelector('.mySF-modal-right-section').style.display = 'none';
          document.querySelector('.mySF-error').style.display = "none";
        } else {
          document.getElementById("mySF-input").style.display = "none";
          document.querySelector('.mySF-error').style.display = "none";
        }
        document.querySelector('.mySF-success').style.display = "flex";
        document.querySelector(".mySF-back-button").style.visibility = "visible";
        document.querySelector(".mySF-success-text").textContent = translations[self.currentLanguage].successEmail;
      }, error => {
        console.log(error); // Failure
        if (!self.isMobile) {        
          document.querySelector('.mySF-modal-right-section').style.display = 'none';
        } else {
          document.getElementById("mySF-input").style.display = "none";
        }
        document.querySelector('.mySF-success').style.display = "none";
        document.querySelector('.mySF-error').style.display = "flex";
        document.querySelector(".mySF-back-button").style.visibility = "visible";
        document.querySelector(".mySF-error-text").textContent = translations[self.currentLanguage].errorNoEmail;
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
      mySFModal.innerHTML = `
      <!-- Test Deploy Action (Remove) -->
      <style>
        /* montserrat-100 - latin */
        @font-face {
          font-display: swap;
          /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 100;
          src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-100.woff2') mySF-modal-format('woff2');
          /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
      
        /* montserrat-200 - latin */
        @font-face {
          font-display: swap;
          /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 200;
          src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-200.woff2') mySF-modal-format('woff2');
          /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
      
        /* montserrat-300 - latin */
        @font-face {
          font-display: swap;
          /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 300;
          src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-300.woff2') mySF-modal-format('woff2');
          /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
      
        /* montserrat-regular - latin */
        @font-face {
          font-display: swap;
          /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-regular.woff2') mySF-modal-format('woff2');
          /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
      
        /* montserrat-500 - latin */
        @font-face {
          font-display: swap;
          /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-500.woff2') mySF-modal-format('woff2');
          /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
      
        /* montserrat-600 - latin */
        @font-face {
          font-display: swap;
          /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-600.woff2') mySF-modal-format('woff2');
          /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
      
        /* montserrat-700 - latin */
        @font-face {
          font-display: swap;
          /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-700.woff2') mySF-modal-format('woff2');
          /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
      
        /* montserrat-800 - latin */
        @font-face {
          font-display: swap;
          /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 800;
          src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-800.woff2') mySF-modal-format('woff2');
          /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        }
      
        /* montserrat-900 - latin */
        @font-face {
          font-display: swap;
          /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 900;
          src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-900.woff2') mySF-modal-format('woff2');
          /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
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
          width: 100%;
          position: relative;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          background-color: white;
          box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.1);
          margin: auto;
          padding: 20px;
          border-radius: 40px;
          font-family: 'Montserrat', sans-serif;
          color: #333333;
        }
      
        #mysf_mob {
          z-index: 1;
        }
      
        .mySF-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          z-index: 1;
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
          z-index: 0;
          top: 50%;
          left: -100px;
        }
      
        .mySF-big-circle-top {
          background: linear-gradient(#ff7d4f10, #ff7d4f40);
          border-radius: 50%;
          height: 200px;
          position: absolute;
          width: 200px;
          z-index: 0;
          top: 15%;
          left: 90%;
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
          display: none;
          width: -webkit-fill-available;
          font-family: 'Montserrat', sans-serif;
        }
      
        .mySF-circle {
          position: relative;
          background: #ff7d4f;
          /* This is a placeholder color, adjust accordingly */
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
          padding: 0 20px;
          /* Adjust padding as required */
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
      
        /* Target iOS Safari */
        @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
          .mySF-back-button svg {
            transform: scaleX(-1);
          }
        }
      
        #mySF-video {
          display: none;
          width: -webkit-fill-available;
          justify-content: center;
        }
      
        .mySF-video-en {
          position: relative;
          height: 80vh;
          /* 80% of the viewport height */
          width: fit-content;
          object-fit: contain;
          /* Maintain aspect ratio */
          border-radius: 30px;
          overflow: hidden;
          background-image: url('https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-img-en/view?project=mysf');
          background-size: cover;
        }
      
        .mySF-video-de {
          position: relative;
          height: 80vh;
          /* 80% of the viewport height */
          width: fit-content;
          object-fit: contain;
          /* Maintain aspect ratio */
          border-radius: 30px;
          overflow: hidden;
          background-image: url('https://api.myshoefitter.com/v1/storage/buckets/pwa-assets/files/banner-img-de/view?project=mysf');
          background-size: cover;
        }
      
        #mySF-title {
          font-size: 20px;
          font-weight: bold;
        }
      
        #mySF-description-mobile {
          font-weight: normal;
          margin: 12px 0 12px 0px;
        }

        .mySF-error {
          display: none;
          font-family: Montserrat, sans-serif;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          margin: 5%;
        }
        
        .mySF-error-icon {
  
        }
        
        .mySF-error-icon svg {
          display: block;
        }
        
        .mySF-error-text {
          color: #ff7f50;
          text-align: center;
          font-size: 20px;
          margin: 0;
        }  
        
        .mySF-success {
          display: none;
          font-family: Montserrat, sans-serif;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          margin: 5%;
        }
        
        .mySF-success-icon {
  
        }
        
        .mySF-success-icon svg {
          display: block;
        }
        
        .mySF-success-text {
          color: #00cc44;
          text-align: center;
          font-size: 20px;
          margin: 0;
        }  
      
      </style>
      
      <div id="mySF-modal-overlay" class="mySF-modal-overlay" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
            document.getElementById('mysf_mob').style.display = 'block';
            document.querySelector('.mySF-back-button').style.visibility = 'hidden';
            document.getElementById('mysf_size').style.display = 'none';
            document.getElementById('mySF-video').style.display = 'none';
            document.querySelector('.mySF-error').style.display = 'none';
            document.querySelector('.mySF-video-en').pause();
            document.querySelector('.mySF-video-de').pause();
            document.getElementById('mySF-input').style.display = 'none'" ;>
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
                   document.querySelector('.mySF-error').style.display = 'none';
                   document.querySelector('.mySF-video-en').pause();
                   document.querySelector('.mySF-video-de').pause();
                   document.getElementById('mysf_size').style.display = 'none';
                   document.getElementById('mySF-input').style.display = 'none';
                  ">&times;</span>
          </div>
          <div id="mySF-input" style="display:none">
            <div class="mySF-modal-form-container">
              <div class="mySF-modal-form-fields">
                <input type="text" class="mySF-modal-input" id="mySF-modal-id-form-field" name="mySF-modal-id-form-field" placeholder="Enter your ID">
                <input type="text" class="mySF-modal-input" id="mySF-modal-email-form-field" name="mySF-modal-email-form-field" placeholder="Enter your Email" style="display:none;">
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
          <div class="mySF-success">
          <div class="mySF-success-icon">
            <svg viewBox="0 0 64 64" width="100" height="100">
              <circle cx="32" cy="32" r="28" fill="none" stroke="#00cc44" stroke-width="2" />
              <polyline points="16,32 28,44 48,20" fill="none" stroke="#00cc44" stroke-width="2" />
            </svg>
          </div>
          <p class="mySF-success-text">Success! Everything is correct.</p>
        </div>
          <div class="mySF-error">
          <div class="mySF-error-icon">
            <svg viewBox="0 0 64 64" width="100" height="100">
              <circle cx="32" cy="32" r="28" fill="none" stroke="#ff7f50" stroke-width="2" />
              <line x1="20" y1="20" x2="44" y2="44" stroke="#ff7f50" stroke-width="2" />
              <line x1="20" y1="44" x2="44" y2="20" stroke="#ff7f50" stroke-width="2" />
            </svg>
          </div>
          <p class="mySF-error-text">Oops! Something went wrong.</p>
        </div>
          <div id="mySF-video">
            <div id="mySF-video-overlay">
              <video class="mySF-video-en" preload="metadata" controls>
                <source src="https://banner.myshoefitter.com/video/video-guide-en.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <video class="mySF-video-de" preload="metadata" controls>
                <source src=" https://banner.myshoefitter.com/video/video-guide-de.mp4" type="video/mp4">
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
        font-display: swap;
        /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 100;
        src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-100.woff2') mySF-modal-format('woff2');
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
    
      /* montserrat-200 - latin */
      @font-face {
        font-display: swap;
        /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 200;
        src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-200.woff2') mySF-modal-format('woff2');
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
    
      /* montserrat-300 - latin */
      @font-face {
        font-display: swap;
        /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 300;
        src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-300.woff2') mySF-modal-format('woff2');
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
    
      /* montserrat-regular - latin */
      @font-face {
        font-display: swap;
        /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-regular.woff2') mySF-modal-format('woff2');
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
    
      /* montserrat-500 - latin */
      @font-face {
        font-display: swap;
        /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-500.woff2') mySF-modal-format('woff2');
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
    
      /* montserrat-600 - latin */
      @font-face {
        font-display: swap;
        /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-600.woff2') mySF-modal-format('woff2');
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
    
      /* montserrat-700 - latin */
      @font-face {
        font-display: swap;
        /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-700.woff2') mySF-modal-format('woff2');
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
    
      /* montserrat-800 - latin */
      @font-face {
        font-display: swap;
        /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-800.woff2') mySF-modal-format('woff2');
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
      }
    
      /* montserrat-900 - latin */
      @font-face {
        font-display: swap;
        /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 900;
        src: url('https://cdn.myshoefitter.com/fonts/montserrat-v25-latin-900.woff2') mySF-modal-format('woff2');
        /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
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
        min-height: 350px;
        max-width: 1200px;
        overflow: hidden;
        background-color: white;
        box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.1);
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
        z-index: 1;
      }
    
      .mySF-modal-left-section {
        display: flex;
        max-width: 50%;
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
        display: flex;
        width: max-content;
      }
    
      .mySF-modal-continue-button {
        background-color: #ff7d4f;
        padding: 10px 20px;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: #ffffff;
        border-radius: 20px;
        border: 1px solid #ff7d4f;
        margin-bottom: 1em;
      }
    
      .mySF-modal-continue-button:hover {
        cursor: pointer;
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
        font-weight: 600;
        color: #ff7d4f;
        border-radius: 20px;
        border: 1px solid #ff7d4f;
        margin-bottom: 1em;
        margin-left: 20px;
      }
    
      .mySF-modal-continue-to-id-button:hover {
        cursor: pointer;
        color: #aaa;
        border: 0px;
        margin-left: 21px;
      }
    
      .mySF-modal-form {
        display: none;
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
        font-weight: 600;
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
        font-weight: 600;
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
        z-index: 0;
        top: 50%;
        left: -100px;
      }
    
      .mySF-qr-circle {
        background: linear-gradient(#ff7d4f10, #ff7d4f30);
        border-radius: 50%;
        height: 300px;
        width: 300px;
        z-index: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -100px;
      }
    
      .mySF-qr-background {
        background-color: white;
        box-shadow: 0 0 10px #0003;
        border-radius: 20px;
        width: 70%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    
      .mySF-qr-code {
        z-index: 1;
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
        display: none;
        font-family: 'Montserrat', sans-serif;
        width: -webkit-fill-available;
      }
    
      .mySF-circle {
        position: relative;
        background: #ff7d4f;
        /* This is a placeholder color, adjust accordingly */
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
        padding: 0 20px;
        /* Adjust padding as required */
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
        display: none;
        width: -webkit-fill-available;
        justify-content: center;
      }
    
      .mySF-video-en {
        height: 80vh;
        /* 80% of the viewport height */
        width: fit-content;
        object-fit: contain;
        /* Maintain aspect ratio */
        border-radius: 30px;
      }
    
      .mySF-video-de {
        height: 80vh;
        /* 80% of the viewport height */
        width: fit-content;
        object-fit: contain;
        /* Maintain aspect ratio */
        border-radius: 30px;
      }
    
      #mySF-title {
        font-size: 20px;
        font-weight: bold;
      }
    
      #mySF-description {
        font-weight: normal;
      }

      .mySF-error {
        display: none;
        font-family: Montserrat, sans-serif;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8%;
      }
      
      .mySF-error-icon {

      }
      
      .mySF-error-icon svg {
        display: block;
      }
      
      .mySF-error-text {
        color: #ff7f50;
        text-align: center;
        font-size: 20px;
        margin: 0 10px;
      }  
      
      .mySF-success {
        display: none;
        font-family: Montserrat, sans-serif;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 8%;
      }
      
      .mySF-success-icon {

      }
      
      .mySF-success-icon svg {
        display: block;
      }
      
      .mySF-success-text {
        color: #00cc44;
        text-align: center;
        font-size: 20px;
        margin: 0 10px;
      }  
    
    </style>
    
    <div id="mySF-modal-overlay" class="mySF-modal-overlay" onclick="document.getElementById('mySF-modal-overlay').style.display='none';
                document.querySelector('.mySF-modal-button-container').style.display = 'flex';
                document.getElementById('mysf_size').style.display = 'none';
                document.getElementById('mySF-video').style.display = 'none';
                document.querySelector('.mySF-error').style.display = 'none';
                document.querySelector('.mySF-success').style.display = 'none';
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
                document.querySelector('.mySF-error').style.display = 'none';
                document.querySelector('.mySF-success').style.display = 'none';
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
                <input type="text" class="mySF-modal-input" id="mySF-modal-id-form-field" name="mySF-modal-id-form-field" placeholder="Enter your ID">
                <input type="text" class="mySF-modal-input" id="mySF-modal-email-form-field" name="mySF-modal-email-form-field" placeholder="Enter your Email" style="display:none">
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
                  <div id="mySF-qr-code" class="mySF-qr-code" />
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
        <div class="mySF-success">
        <div class="mySF-success-icon">
          <svg viewBox="0 0 64 64" width="100" height="100">
            <circle cx="32" cy="32" r="28" fill="none" stroke="#00cc44" stroke-width="2" />
            <polyline points="16,32 28,44 48,20" fill="none" stroke="#00cc44" stroke-width="2" />
          </svg>
        </div>
        <p class="mySF-success-text">Success! Everything is correct.</p>
      </div>
        <div class="mySF-error">
        <div class="mySF-error-icon">
          <svg viewBox="0 0 64 64" width="100" height="100">
            <circle cx="32" cy="32" r="28" fill="none" stroke="#ff7f50" stroke-width="2" />
            <line x1="20" y1="20" x2="44" y2="44" stroke="#ff7f50" stroke-width="2" />
            <line x1="20" y1="44" x2="44" y2="20" stroke="#ff7f50" stroke-width="2" />
          </svg>
        </div>
        <p class="mySF-error-text">Oops! Something went wrong.</p>
      </div>
        <div id="mySF-video">
          <div id="mySF-video-overlay">
            <video class="mySF-video-en" preload="metadata" controls>
              <source src=" https://banner.myshoefitter.com/video/video-guide-en.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <video class="mySF-video-de" preload="metadata" controls>
              <source src="https://banner.myshoefitter.com/video/video-guide-de.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    `;
    }

    if (self.currentLanguage === 'de') {
      document.querySelector('.mySF-video-de').style.display = 'block';
      document.querySelector('.mySF-video-en').style.display = 'none';
    } else {
      document.querySelector('.mySF-video-de').style.display = 'none';
      document.querySelector('.mySF-video-en').style.display = 'block';
    }

    document.querySelectorAll('#mySF-languageSelector')[0].value = self.currentLanguage;
    console.log('Current language: ', self.currentLanguage);
    if (!self.isMobile) {
      document.querySelectorAll('#mySF-languageSelector')[1].value = self.currentLanguage;
    }
    document.querySelectorAll('#mySF-languageSelector')[0].addEventListener('change', function() {
      const selectedLanguage = document.querySelectorAll('#mySF-languageSelector')[0].value;
      if (selectedLanguage === 'de') {
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
        if (selectedLanguage === 'de') {
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
      document.querySelector('.mySF-error').style.display = 'none';
      document.querySelector('.mySF-success').style.display = 'none';
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
      console.log('Product_ID: ', product_id);
      console.log('Shop_ID: ', shop);
    } else {
      console.log('Could not parse product_id and shop_id');
      this.generateURL("null", "null");
    };

  }

  reload() {
    self= this;
    console.log('reloading..');
    if (document.querySelector('#mySF-modal-overlay')) {
      document.querySelector('#mySF-modal-overlay').remove();
    }
    this.checkDevice();
    this.runScript();
    this.updateLanguage(navigator.language.slice(0, 2));
    this.bannerOrigin = 'https://cdn.myshoefitter.com/script.js';
    this.config = {
      productId: this.product_id,
      ref: window.href,
      sessionId: this.generateSessionId(),
      shopId: "64be733131ccc3b6d79c",
    }
    this.init(this.config);
  }
}

let mySF = new MySF();
mySF.reload()

const mySF_reload = mySF.reload.bind(mySF);
console.log(mySF_reload);