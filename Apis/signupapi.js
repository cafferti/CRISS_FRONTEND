disablelink = () => {
  const Name = document.getElementById(`name`).value;
  const Email = document.getElementById(`email`).value;
  const Rank = document.getElementById(`rank`).value;
  const Station = document.getElementById(`station`).value;
  const Batchid = document.getElementById(`batchid`).value;
  const Password = document.getElementById(`password`).value;
  const ConfirmPassword = document.getElementById(`compassword`).value;
  const message = document.querySelector(`.message`);
  const link = document.querySelector(`.navigate`);
  const signbtn = document.querySelector(".signbtn");

  if (
    Name === `` ||
    Email === `` ||
    Rank === `` ||
    Station === `` ||
    Batchid === `` ||
    Password === `` ||
    ConfirmPassword === ``
  ) {
    thefunction = link.onclick;
    link.onclick = null;
    signbtn.classList.add("disabled-link");
    link.style.pointerEvents = "none";
  } else {
    link.onclick = thefunction;
    signbtn.classList.remove("disabled-link");
    link.style.pointerEvents = "auto";
  }
};

const form = document.querySelector(".main");

// Attach the event listener to the form
form.addEventListener("keydown", () => {
  disablelink();
});

// Call disablelink function on page load
window.addEventListener("load", () => {
  disablelink();
});

const getSignUpInput = () => {
  OfficerDetails = {
    name: ``,
    email: ``,
    rank: ``,
    station: ``,
    batchId: ``,
    password: ``,
  };
  const Name = document.getElementById(`name`).value;
  const Email = document.getElementById(`email`).value;
  const Rank = document.getElementById(`rank`).value;
  const Station = document.getElementById(`station`).value;
  const Batchid = document.getElementById(`batchid`).value;
  const Password = document.getElementById(`password`).value;
  const ConfirmPassword = document.getElementById(`compassword`).value;
  const message = document.querySelector(`.message`);
  const link = document.querySelector(`.navigate`);

  if (
    Name === `` ||
    Email === `` ||
    Rank === `` ||
    Station === `` ||
    Batchid === `` ||
    Password === `` ||
    ConfirmPassword === ``
  ) {
    message.innerHTML = `please fill all Details`;
    return null;
  } else if (Password.length != 8) {
    message.innerHTML = `<b>password must be more than 8 characters</b>`;
    return null;
  } else if (!/^[^\s]+(\s[^\s]+)$/.test(Name)) {
    message.innerHTML = `<b>Please Input Surname</b>`;
    return null
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(Email)) {
    message.innerHTML = `<b>Please enter a Valid email</b>`;
    return null;
  } else if (
    !/^[A-Z]+-\d+$/.test(Batchid) ||
    Batchid.length != 9 ||
    Batchid != Batchid.toUpperCase()
  ) {
    message.innerHTML = `<b>Please enter a valid batch ID (e.g., NPF-44378)</b>`;
    return null;
  } else {
    if (Password != ConfirmPassword) {
      message.innerHTML = `<b>password dont match<b>`;
      return null;
    } else {
      message.innerHTML = ``;
      OfficerDetails.name = Name;
      OfficerDetails.email = Email;
      OfficerDetails.rank = Rank;
      OfficerDetails.station = Station;
      OfficerDetails.batchId = Batchid;
      OfficerDetails.password = Password;
      console.log(OfficerDetails);
      return OfficerDetails;
    }
  }
};

const sendingData = async (officerDetails) => {
  const message = document.querySelector(`.message`);
  const successmessage = document.querySelector(`.successmessage`);
  successmessage.innerHTML = `<b>creating officer...</b>`
 
  try {
    const response = await fetch(`https://criss.onrender.com/api/users/`, {
      method: `POST`,
      headers: {
        "Content-type": `application/json`,
      },
      body: JSON.stringify(officerDetails),
    });
   
    if (response.ok) {
      message.innerHTML = `please Wait`
      officerDetails = await response.json();
      console.log(officerDetails);
      successmessage.innerHTML = `<b>Creating Officer!...please wait..</b>`;
      message.innerHTML = ``;
      setTimeout(() => {
        window.location.href = "./signin.html";
      }, 4000);
    } else {
      successmessage.innerHTML = ``
      message.innerHTML = `<b>There ia an existing profile attached to this email or BatchID</b>`;
      
      console.error("Login failed:", response.statusText);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};
const executeSignup = async () => {
  officerDetails = await getSignUpInput();
  if (officerDetails === null) {
    console.log(`unable to create user`);
  } else {
    await sendingData(officerDetails);
  }
};
document.querySelector(`.navigate`).addEventListener("click", async (event) => {
  event.preventDefault(event);
  await executeSignup();
});
