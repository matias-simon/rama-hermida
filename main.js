document.addEventListener("DOMContentLoaded", function () {
    const englishToggle = document.getElementById("englishToggle");
    const htmlElement = document.getElementsByTagName("html")[0];
  
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage === "en") {
      htmlElement.setAttribute("lang", "en");
      englishToggle.checked = true;
      setEnglish(); // Call the setEnglish() function to update the text
    }
  
    englishToggle.addEventListener("change", function () {
      if (englishToggle.checked) {
        htmlElement.setAttribute("lang", "en");
        localStorage.setItem("language", "en");
        setEnglish();
      } else {
        htmlElement.setAttribute("lang", "es");
        localStorage.setItem("language", "es");
        setSpanish(); // Call the setSpanish() function to reset the text to Spanish
      }
    });
  });
  
  const setEnglish = () => {
    // Update text to English
    let navContact = document.getElementById("navContact");
    let youtubeP = document.getElementById("youtubeP");
    let spotifyP = document.getElementById("spotifyP");
    let formh1 = document.getElementById("form-h1");
    let formName = document.getElementById("form-name");
    let phone = document.getElementById("form-phone");
    let formBtn = document.getElementById("form-btn");
    let formMessage = document.getElementById("form-message");
  
    navContact.innerHTML = "Contact";
    youtubeP.innerHTML = "My work on Youtube!!";
    spotifyP.innerHTML = "Check out my mixes!!";
    formh1.innerHTML = "Get in Touch";
    formName.innerHTML = "Name";
    phone.innerHTML = "Phone";
    formBtn.innerHTML = "Send";
    formMessage.innerHTML = "Message";
  };
  
  const setSpanish = () => {
    // Reset text to Spanish
    let navContact = document.getElementById("navContact");
    let youtubeP = document.getElementById("youtubeP");
    let spotifyP = document.getElementById("spotifyP");
    let formh1 = document.getElementById("form-h1");
    let formName = document.getElementById("form-name");
    let phone = document.getElementById("form-phone");
    let formBtn = document.getElementById("form-btn");
    let formMessage = document.getElementById("form-message");
  
    navContact.innerHTML = "Contacto";
    youtubeP.innerHTML = "Mis Trabajos en Youtube!!";
    spotifyP.innerHTML = "Escucha mis mezclas!!";
    formh1.innerHTML = "Contactate";
    formName.innerHTML = "Nombre";
    phone.innerHTML = "Nro de Contacto";
    formBtn.innerHTML = "Enviar";
    formMessage.innerHTML = "Mensaje";
  };
  