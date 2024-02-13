document.addEventListener('DOMContentLoaded', () => {
    let openHam = document.querySelector('#openHam');
    let closeHam = document.querySelector('#closeHam');
    let navigationItems = document.querySelector('#navigation-items');

    const hamburgerEvent = (navigation, close, open) => {
        navigationItems.style.display = navigation;
        closeHam.style.display = close;
        openHam.style.display = open;
    };

    openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
    closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

    // Typewritter Effect
    var professions = ['Software Engineer', 'Fullstack Developer', 'Web Developer'];
    var professionElement = document.querySelector('.profession');
    var typingDelay = 200;
    var erasingDelay = 100;
    var newTextDelay = 2000; // Delay between current and next text
    var textArrayIndex = 0;
    var charIndex = 0;
  
    function type() {
      if (charIndex < professions[textArrayIndex].length) {
        professionElement.textContent += professions[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        // Pause before starting erasing
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        professionElement.textContent = professions[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        // Move to the next text after erasing is complete
        textArrayIndex++;
        if(textArrayIndex >= professions.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }
  
    // Start the typing effect on DOMContentLoaded
    if (professionElement) type();
});

  


