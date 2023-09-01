// "caseRefNumber": "473828OE",
// "notifyingOfficer": "Ahmed",
// "notificationRecipient": "Justice",
// "incidentDescription": "Raoe",
// "notificationType": "Assault",
// "notificationContent": "Warning i see his type",
// "additionalNotes": "Just use girls that are under age you can catch the criminal",
// "_id": "64f0086c8b1d9d4c4e796079",
// "date": "2023-08-31T03:26:36.410Z",
// "__v": 0
// }

disablelink = () => {
  const caseRefNumber = document.getElementById(`casenum`).value;
  const Notifyingofficer = document.getElementById(`notofficer`).value;
  const Recipient = document.getElementById(`recipient`).value;
  const Date = document.getElementById(`date`).value;
  const IncidentDes = document.getElementById(`incidentdes`).value;
  const Notetype = document.getElementById(`nottype`).value;
  const Content = document.getElementById(`notificationcon`).value;
  const Addnote = document.getElementById(`addnote`).value;
  const signbtn = document.querySelector(`.navigate`);

  if (
    caseRefNumber === `` ||
    Notifyingofficer === `` ||
    Recipient === `` ||
    Date === `` ||
    IncidentDes === `` ||
    Notetype === `` ||
    Content === ``
  ) {
    signbtn.classList.add("disabled-link");
  } else {
    signbtn.classList.remove("disabled-link");
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

const getData = () => {
  const caseRefNumber = document.getElementById(`casenum`).value;
  const Notifyingofficer = document.getElementById(`notofficer`).value;
  const Recipient = document.getElementById(`recipient`).value;
  const Date = document.getElementById(`date`).value;
  const IncidentDes = document.getElementById(`incidentdes`).value;
  const Notetype = document.getElementById(`nottype`).value;
  const Content = document.getElementById(`notificationcon`).value;
  let Addnote = document.getElementById(`addnote`).value;
  const errormessage = document.querySelector(`.errormessage`);

  let Notification = {
    caseRefNumber: ``,
    notifyingOfficer: ``,
    notificationRecipient: ``,
    Date: ``,
    incidentDescription: ``,
    notificationType: ``,
    notificationContent: ``,
    additionalNotes: ``,
  };
  if (caseRefNumber.length < 10 || !/^Casefile \d+$/.test(caseRefNumber)) {
    errormessage.innerHTML = `<b>Invalid Case Reference Number</b>`;
    return null;
  } else if (!/^[^\s]+(\s[^\s]+)$/.test(Notifyingofficer)) {
    errormessage.innerHTML = `<b>Please Input Surname Of sender</b>`;
    return null;
  } else {
    errormessage.innerHTML = ``;
    if (Addnote === ``) {
      Addnote = `nil`;
    }
    Notification = {
      caseRefNumber: caseRefNumber,
      notifyingOfficer: Notifyingofficer,
      notificationRecipient: Recipient,
      Date: Date,
      incidentDescription: IncidentDes,
      notificationType: Notetype,
      notificationContent: Content,
      additionalNotes: Addnote,
    };
    console.log(Notification);
    return Notification;
  }
};

const sendNotification = async (notedetails) => {
  const errormessage = document.querySelector(`.errormessage`);
  const successmessage = document.querySelector(`.successmessage`);

  successmessage.innerHTML = `<b>Sending Notification........<b/>`;
  try {
    const response = await fetch(`url`, {
      method: `POST`,
      headers: {
        "Content-type": `application/json`,
      },
      body: JSON.stringify(notedetails),
    });
    if (response.ok) {
      errormessage.innerHTML = ``;
      notedetails = await response.JSON();
      console.log(notedetails);
      successmessage = `<b>Notification sent Succesfully...<b/>`;
      setTimeout(() => {
        successmessage = ``;
      }, 300);
    } else {
      successmessage.innerHTML = ``;
      errormessage.innerHTML = `<b>Failed To Send Notification..</b>`;
      console.error("failed:", response.statusText);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};

const executeNotification = async () => {
  notedetails = getData();
  if (notedetails != null) {
    await sendNotification(notedetails);
  }
};

const submitbtn = document.querySelector(`.navigate`);
submitbtn.addEventListener(`click`, async (event) => {
  event.preventDefault();
  await executeNotification();
});
