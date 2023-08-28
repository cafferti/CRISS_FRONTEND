

var timeout;

function hideSidebar() {
  document.body.classList.remove('show-sidebar');
}

function resetTimeout() {
  document.body.classList.add('show-sidebar');
  clearTimeout(timeout);
  timeout = setTimeout(hideSidebar, 25000); // Hide sidebar after 5 seconds of inactivity
}

window.onload = function() {
  // Add the "show-sidebar" class unconditionally for 5 seconds
  document.body.classList.add('show-sidebar');
  timeout = setTimeout(hideSidebar, 5000); // Hide sidebar after 5 seconds

  document.body.addEventListener('mousemove', resetTimeout);
  document.body.addEventListener('keydown', resetTimeout);
  document.body.addEventListener('click', resetTimeout);
}

//treansition 






    // dropdown
   function toggleDropdown() {
  var dropdown = document.querySelector('.dropdown');
  var arrow = dropdown.querySelector('.arrow');
  var dropdownContent = dropdown.querySelector('.dropdown-content');
  dropdown.classList.toggle('active');
  
  if (dropdown.classList.contains('active')) {
    arrow.innerHTML = '&#9650;';
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
  } else {
    arrow.innerHTML = '&#9660;';
    dropdownContent.style.maxHeight = '0';
  }
};

// log out js
let btn = document.getElementById("logout");
let logup = document.getElementById("logup");
let profile = document.getElementById("sideprofile")
let addelement = logup.style.display;
function active(){
if(logup.style.display === addelement){
    logup.style.display = "block"
    profile.style.marginBottom = "2rem"
    btn.style.display = "none"
    // blur.style.background= "linear-gradient(to bottom,hsl(233, 26%, 24%),hsl(0, 0%, 100%))"

    }else{gphones.style.display = removelement;
        profile.style.paddingTop = "1rem"
        logup.style.display = "none"

    }

}


  
 