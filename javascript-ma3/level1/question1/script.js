var button = document.getElementById("submission");
button.addEventListener("click", validateForm);
//Use RegEx to validate form



function validateForm() {
    
    function givenName() {   
        var nameValidation1 = /^[A-Z][a-z]/g;
        var fName = document.getElementById("firstName").value;
    
        if (nameValidation1.test(fName) == true) {
            document.getElementById("name-text1").innerHTML = "Your first name input is valid.";
        }else{
            document.getElementById("name-text1").innerHTML="Your first name input is NOT valid.";}
    }
    
    givenName();
    
    function surName() {
        var nameValidation2 = /^[A-Z][a-z]/g;
        var lName = document.getElementById("lastName").value;
        
        if (nameValidation2.test(lName)==true){
            document.getElementById("name-text2").innerHTML="Your last name input is valid.";
        }else{
            document.getElementById("name-text2").innerHTML="Your last name input is NOT valid.";}
        }
    
    surName();
    
    
    function testPhone(){
        var numberValidation = /^(0047|\+47|47)?[2-9]\d{7}$/;
        var pNumber = document.getElementById("phoneNumber").value;
        
        if (numberValidation.test(pNumber)==true){
            document.getElementById("phone-text").innerHTML = "You got this part right!";
        }else{
            document.getElementById("phone-text").innerHTML = "This ain't a norwegian phone number. Please try again!";
        }
    }
     testPhone();
    
    function testEmail(){
        var emailValidation = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
        var eMailAdress = document.getElementById("eMail").value;
        
        if (emailValidation.test(eMailAdress)==true){
            document.getElementById("email-text").innerHTML="This i probably a valid email adress.";
        }else{
            document.getElementById("email-text").innerHTML="It's pretty certan that tis is NOT an email adress.";
        }
    }
    testEmail();
}
    
    
    

