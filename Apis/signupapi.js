 disablelink = () =>{
    const Name = document.getElementById(`name`).value;
    const Email = document.getElementById(`email`).value;
    const Rank = document.getElementById(`rank`).value;
    const Station = document.getElementById(`station`).value;
    const Batchid = document.getElementById(`batchid`).value;
    const Password = document.getElementById(`password`).value;
    const ConfirmPassword = document.getElementById(`compassword`).value;
    const message = document.querySelector(`.message`)
    const link = document.querySelector(`.navigate`)
    const signbtn = document.querySelector('.signbtn')
     
    if(Name === `` ||
       Email === `` ||
       Rank === `` ||
       Station === `` ||
       Batchid  === `` ||
       Password === `` ||
       ConfirmPassword  === `` 
      ){
        thefunction = link.onclick;
        link.onclick = null; 
        signbtn.classList.add('disabled-link'); 
        link.style.pointerEvents = "none"
      } else{
        link.onclick = thefunction
        signbtn.classList.remove('disabled-link');
        link.style.pointerEvents = "auto"
      }
 }

 setInterval(disablelink, 1000)


const getSignUpInput = (event) =>{
    event.preventDefault()
    OfficerDetails = {
        name: ``,
        email: ``,
        rank:``,
        station: ``,
        batchId: ``,
        password: ``,
    }
    const Name = document.getElementById(`name`).value;
    const Email = document.getElementById(`email`).value;
    const Rank = document.getElementById(`rank`).value;
    const Station = document.getElementById(`station`).value;
    const Batchid = document.getElementById(`batchid`).value;
    const Password = document.getElementById(`password`).value;
    const ConfirmPassword = document.getElementById(`compassword`).value;
    const message = document.querySelector(`.message`)
    const link = document.querySelector(`.navigate`)
    

    if(Name === `` ||
       Email === `` ||
       Rank === `` ||
       Station === `` ||
       Batchid  === `` ||
       Password === `` ||
       ConfirmPassword  === `` 
      ){
        message.innerHTML = `please fill all Details`
      }else{
        if(Password != ConfirmPassword){
            message.innerHTML = `password dont match`
        }else{
         message.innerHTML = ``
         OfficerDetails.name = Name
         OfficerDetails.email = Email
         OfficerDetails.rank = Rank
         OfficerDetails.Station = Station
         OfficerDetails.BatchId = Batchid
         OfficerDetails.password = Password
         console.log(OfficerDetails)
         window.location.href = './signin.html';
         return OfficerDetails
        }
        
      }
}

