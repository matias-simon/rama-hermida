document.addEventListener("DOMContentLoaded", function () {
    const englishToggle = document.getElementById("englishToggle");
    const htmlElement = document.getElementsByTagName("html")[0];
  
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage === "en") {
      htmlElement.setAttribute("lang", "en");
      englishToggle.checked = true;
      setText("en");
    }
  
    englishToggle.addEventListener("change", function () {
      if (englishToggle.checked) {
        htmlElement.setAttribute("lang", "en");
        localStorage.setItem("language", "en");
        setText("en");
      } else {
        htmlElement.setAttribute("lang", "es");
        localStorage.setItem("language", "es");
        setText("es");
      }
    });
  });
  
  const setText = (language) => {
    const text = {
      en: {
        navContact: "Contact",
        youtubeP: "My work on Youtube!!",
        spotifyP: "Check out my mixes!!",
        formh1: "Get in Touch",
        formName: "Name",
        phone: "Phone",
        formBtn: "Send",
        formMessage: "Message",
      },
      es: {
        navContact: "Contacto",
        youtubeP: "Mis Trabajos en Youtube!!",
        spotifyP: "Escucha mis mezclas!!",
        formh1: "Contactate",
        formName: "Nombre",
        phone: "Nro de Contacto",
        formBtn: "Enviar",
        formMessage: "Mensaje",
      },
    };
  
    let navContact = document.getElementById("navContact");
    let youtubeP = document.getElementById("youtubeP");
    let spotifyP = document.getElementById("spotifyP");
    let formh1 = document.getElementById("form-h1");
    let formName = document.getElementById("form-name");
    let phone = document.getElementById("form-phone");
    let formBtn = document.getElementById("form-btn");
    let formMessage = document.getElementById("form-message");
  
    navContact.innerHTML = text[language].navContact;
    youtubeP.innerHTML = text[language].youtubeP;
    spotifyP.innerHTML = text[language].spotifyP;
    formh1.innerHTML = text[language].formh1;
    formName.innerHTML = text[language].formName;
    phone.innerHTML = text[language].phone;
    formBtn.innerHTML = text[language].formBtn;
    formMessage.innerHTML = text[language].formMessage;
  };
  