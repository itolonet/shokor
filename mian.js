let tab = 3;

function setCurrentDate(){
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var currentMonth = now.getFullYear()+"-"+(month) ;

    document.getElementById('date1').value = currentMonth;
    document.getElementById("date2").value = currentMonth;
    document.getElementById("date3").value = currentMonth;
    document.getElementById("date4").value = currentMonth;
    document.getElementById("date5").value = currentMonth;
    document.getElementById("dateEnd1").value = currentMonth;
    document.getElementById("dateEnd2").value = currentMonth;
    document.getElementById("dateEnd3").value = currentMonth;
    document.getElementById("dateEnd4").value = currentMonth;
    document.getElementById("dateEnd5").value = currentMonth;
     

    let MonthsOfYear = [ '' ,'January', 'Febuary', 'March', 'April' , 'May', 'June',
        'July', 'August', 'September', 'October', 'Novemver', 'December'];
}


function hideShow(val){
    tab = val;
    if (val==1){
        document.getElementById("salary_id").style.display = "block";
        document.getElementById("brt_id").style.display = "none";
        document.getElementById("rent_id").style.display = "none";
        document.getElementById("vendor_id").style.display = "none";
        document.getElementById("annualIncome_id").style.display = "none";
    }
    else if (val==2){
        document.getElementById("brt_id").style.display = "block";
        document.getElementById("salary_id").style.display = "none";
        document.getElementById("rent_id").style.display = "none";
        document.getElementById("vendor_id").style.display = "none";
        document.getElementById("annualIncome_id").style.display = "none";
    }
    else if (val==3){
        document.getElementById("brt_id").style.display = "none";
        document.getElementById("salary_id").style.display = "none";
        document.getElementById("rent_id").style.display = "block";
        document.getElementById("vendor_id").style.display = "none";
        document.getElementById("annualIncome_id").style.display = "none";
   }  
   else if (val==4){
        document.getElementById("brt_id").style.display = "none";
        document.getElementById("salary_id").style.display = "none";
        document.getElementById("rent_id").style.display = "none";
        document.getElementById("vendor_id").style.display = "block";
        document.getElementById("annualIncome_id").style.display = "none";
   }
   else if (val==5){
        document.getElementById("brt_id").style.display = "none";
        document.getElementById("salary_id").style.display = "none";
        document.getElementById("rent_id").style.display = "none";
        document.getElementById("vendor_id").style.display = "none";
        document.getElementById("annualIncome_id").style.display = "block";
   }
}

function addEndDate(){
    let checkBOX1 = document.getElementById("checkBOX1");
    let checkBOX2 = document.getElementById("checkBOX2");
    let checkBOX3 = document.getElementById("checkBOX3");
    let checkBOX4 = document.getElementById("checkBOX4");
    let checkBOX5 = document.getElementById("checkBOX5");
    
    if(tab==1){
        if (checkBOX1.checked == true){
            document.getElementById("addDateSalary").style.display = 'block'
        }
        else{
            document.getElementById("addDateSalary").style.display = 'none';
        }
    }
    else if(tab==2){
        if (checkBOX2.checked == true){
            document.getElementById("addDateBrt").style.display = 'block'
        }
        else{
            document.getElementById("addDateBrt").style.display = 'none';
        }
    }
    else if(tab==3){
        if (checkBOX3.checked == true){
            document.getElementById("addDateRent").style.display = 'block'
        }
        else{
            document.getElementById("addDateRent").style.display = 'none';
        }
    }
    else if(tab==4){
        if (checkBOX4.checked == true){
            document.getElementById("addDateVendor").style.display = 'block'
        }
        else{
            document.getElementById("addDateVendor").style.display = 'none';
        }
    }
    else if(tab==5){
        if (checkBOX5.checked == true){
            document.getElementById("addDateAnnualIncome").style.display = 'block'
        }
        else{
            document.getElementById("addDateAnnualIncome").style.display = 'none';
        }
    }
}


