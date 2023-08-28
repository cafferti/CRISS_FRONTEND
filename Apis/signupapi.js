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

setInterval(disablelink, 1000);

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
  } else {
    if (Password != ConfirmPassword) {
      message.innerHTML = `password dont match`;
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
  try {
    const response = await fetch(`https://criss.onrender.com/api/users/`, {
      method: `POST`,
      headers: {
        "Content-type": `application/json`,
      },
      body: JSON.stringify(officerDetails),
    });
    if (response.ok) {
      officerDetails = await response.json();
      console.log(officerDetails);
    } else {
      console.error("Login failed:", response.statusText);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};
const executeSignup = async () => {
  officerDetails = await getSignUpInput();
  if(officerDetails === null){
    console.log(`unable to create user`)
  }else{
    sendingData(officerDetails)
    // window.location.href = './signin.html';

  }
};
document.querySelector(`.navigate`).addEventListener("click", (event) =>{
  event.preventDefault
  executeSignup()
});

