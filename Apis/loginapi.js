

disablelink = () => {
    const Station = document.getElementById(`station`).value
    const Batchid = document.getElementById(`batchid`).value
    const Password = document.getElementById(`password`).value
    const AUpassword = document.getElementById(`2fa`).value
    const   signbtn = document.querySelector(`.navigate`)
      
    if (
      Station === `` ||
      Batchid === `` ||
      Password === `` ||
      AUpassword === `` 
    
    ) {
      signbtn.classList.add("disabled-link");
      signbtn.style.pointerEvents = "none";
    } else {
      signbtn.classList.remove("disabled-link");
      signbtn.style.pointerEvents = "auto";
    }
  };
  
  const form = document.querySelector(".form");
  
  // Attach the event listener to the form
  form.addEventListener("keydown", () => {
    disablelink();
  });
  
  // Call disablelink function on page load
  window.addEventListener("load", () => {
    disablelink();
  });