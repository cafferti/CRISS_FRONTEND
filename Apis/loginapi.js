disablelink = () => {
  const Station = document.getElementById(`station`).value;
  const Batchid = document.getElementById(`batchid`).value;
  const Password = document.getElementById(`password`).value;
  const AUpassword = document.getElementById(`2fa`).value;
  const signbtn = document.querySelector(`.navigate`);

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

const getInput = () => {
  const Station = document.getElementById(`station`).value;
  const Batchid = document.getElementById(`batchid`).value;
  const Password = document.getElementById(`password`).value;
  const AUpassword = document.getElementById(`2fa`).value;
  const signbtn = document.querySelector(`.navigate`);
  const errormessage = document.querySelector(`.errormessage`);

  let officerDetails = {
    station: ``,
    batchid: ``,
    reversePassword: ``,
    password: ``,
   
  };

  if (Station === `` || Station.length < 7) {
    errormessage.innerHTML = `<b>Invalid Station</b>`;
    return null;
  } else if (!/^[A-Z]+-\d+$/.test(Batchid) || Batchid.length != 9) {
    errormessage.innerHTML = `<b>Invalid BatchID</b>`;
    return null;
  } else if (Password.length != 8) {
    errormessage.innerHTML = `<b>Password must be 8 characters</b>`;
    return null;
  } else if (AUpassword.length != 8) {
    errormessage.innerHTML = `<b> OTP code must be 8 characters</b>`;
    return null;
  } else {
    errormessage.innerHTML = ``;
    officerDetails = {
      station: Station,
      batchId: Batchid,
      reversePassword: AUpassword,
      password: Password,
      
    };

    return officerDetails
  }
};

const validateUser = async (logindata) => {
    const successmessage = document.querySelector(`.successmessage`);
    const errormessage = document.querySelector(`.errormessage`);


    errormessage.innerHTML = ``
    successmessage.innerHTML =` <b>Processing....</b>`
    const   response = await fetch(`https://criss.onrender.com/api/users/login/`, {
        method: `POST`,
        headers: {
          "Content-type": `application/json`,
        },
        body: JSON.stringify(logindata),
      });
    try{
if(response.ok){
    successmessage.innerHTML = `login in...Please Wait..`
    officerDetails = await response.json(logindata)
    console.log(officerDetails)
    setTimeout(() => {
        window.location.href = "./dashboard.html";
      }, 4000);
}else{
    successmessage.innerHTML = ``
      errormessage.innerHTML = `<b>Login Failed..User does  Not Exist</b>`;
      console.error("Login failed:", response.statusText);
}

}catch (error) {
    console.error("Network error:", error);
  }};

  const executelogin = async () =>{
    officerDetails =   getInput()
    if(officerDetails === null){
        console.log(`Login failed`)
    }else{
     await validateUser(officerDetails)
    }
  }
  
  document.querySelector(`.navigate`).addEventListener("click", async (event) => {
    event.preventDefault(event);
    await executelogin();
  });
  
