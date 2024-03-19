console.log("Signup frontend javascript file");

$(function() {});

function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confimPassword = $(".confirm-password").val();

    if(
    memberNick === "" || 
    memberPhone === "" || 
    memberPassword === "" || 
    confimPassword === ""
    ){
        alert("Please insert all required inputs");
        return false;
    }

    if(memberPassword !== confimPassword){
        alert("Password differs, please check!")
        return false;
    }
    //console.log("memberNick: ", memberNick);
}
