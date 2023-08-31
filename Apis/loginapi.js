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
    password: ``,
    AUpassword: ``,
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
      batchid: Batchid,
      password: Password,
      uapassword: AUpassword,
    };

    console.log(officerDetails);
  }
};

const validateUser = async (data) => {
  respose = await fetch(`https://criss.onrender.com/api/users/login/`, {
    method: `POST`,
    headers: {
      "Content-type": `application/json`,
    },
    body: JSON.stringify(officerDetails),
  });
  
};
