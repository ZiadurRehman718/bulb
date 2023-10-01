document.addEventListener("DOMContentLoaded", function(event) {

    const bulb = document.querySelector("#bulb");
  
    bulb.addEventListener("mouseover", turnOn);
    bulb.addEventListener("mouseout", turnOff);
  
    function turnOn(e) {
      bulb.src = "./assets/bulb_on.png";
    }
  
    function turnOff(e) {
      bulb.src = "./assets/bulb_off.png";
    }
  });
  