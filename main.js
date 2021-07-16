// displaying and hidding the modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
// declaration of data to be feed by user

function myValidation(){
    var date=document.getElementById("date").Value;
    var month=document.getElementById("month").value;
    var year= document.getElementById("year").value;

    var dob=date+" /"+month+"/ "+year;

    date=document.form.date.value;
    month=document.form.month.value;
    year=document.form.year.value;


    if(date==="" || date<0 || date>=32){
        alert("date is not valid!!");
    }else if(month==="" || month<0 || month>12){
        alert("Unrecognized month enterd");
    }else if(year==="" || year<1900 || year>2100){
        alert("Year out of bound");
    } else{
        alert(dob)
    }
    
};

    // array decratation
    var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var daysOTheOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // formula to calculate the actual birth day
    const CC=year.slice(2);
    const YY=year.slice(0,2);
    const MM=month;
    const DD=date;    

    daysOTheOfWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;


    // function to return the names

     function akanNames(){
        

    };





  






