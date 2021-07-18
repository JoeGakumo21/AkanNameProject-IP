// displaying and hidding the modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})




//new declaration

function myValidation(){
    var year=document.getElementById("year").value;
    var date=document.getElementById("date").value;
    var month=document.getElementById("month").value;


    if(date=="" || month=="" || year==""){
        return false;
    }else{
        var cc=year.slice(0,1);
        var yy=year.slice(2,3);
        var dayOfTheWeek= Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7);
         
        return dayOfTheWeek;
        
    }
    
}

// function for gender

function genderAll() {
    // check which gender is checked
    var genderCheck=document.getElementsByName("gender");
    var genderMale= document.getElementById("genderMale");
    var genderFemale=document.getElementById("genderFemale");

    // if statement to check if radio button are empty or checked
    if(!(genderCheck[0].checked || genderCheck[1].checked)){
        return false;
    }else if(genderMale.checked){
        genderCheck=genderMale.value;
        return genderCheck;
    }else if(genderFemale.checked){
        genderCheck=genderFemale.value;
        return genderCheck;
    }
    
}


// function to give akan names

function akanNames() {
    var akanNameMale=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var akanNameFemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  

    if(genderAll()==="male"){
        document.querySelector(".display").innerHTML="Your Akan name is "+akanNameMale[myValidation()];
        document.querySelector(".text").innerHTML="Born on "+weekDays[myValidation()];
        
    
    }else if(genderAll()==="female"){
        document.querySelector(".display").innerHTML="Your Akan name is "+akanNameFemale[myValidation()];
        document.querySelector(".text").innerHTML="Born on "+weekDays[myValidation()];
        
    }

}



