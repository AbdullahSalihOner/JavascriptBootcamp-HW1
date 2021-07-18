function userName(){
    var name = prompt("Your Name ?");
    document.getElementById("myName").innerText = name;
}

function nowTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = date.getDay();
    var x =session

    //I fixed day name show problem.
    if(session == 1){
        x = "Monday";
    }else if(session == 2){
        x = "Tuesday";
    }else if(session == 3){
        x = "Wendsday";
    }else if(session == 4){
        x = "Thursday";
    }else if(session == 5){
        x = "Friday";

    }else if(session == 6){
        x = "Saturday";
    }else if(session == 0){
        x = "Sunday";
    }

    h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
 
   var time = h + ":" + m + ":" + s + " " + x ;
   document.getElementById("myClock").innerText = time;
   document.getElementById("myClock").textContent = time;



   setTimeout( nowTime , 1000);


}
 
userName();
nowTime();

