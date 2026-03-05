let h=document.querySelector(".hourhand")
let m=document.querySelector(".minutehand")
let s=document.querySelector(".secondhand")

function Time(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if(hour<10){
        hour = "0" + hour;
    }
    if(minute<10){
        minute = "0" + minute;
    }
    if(second<10){
        second = "0" + second;
    }
    h.textContent=hour;
    m.textContent=minute;
    s.textContent=second;
}
setInterval(Time,1000);
Time();

function date(){
    let date = new Date();
    let year=date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if(month<10){
        month = "0" + month;
    }
    if(day<10){
        day = "0" + day;
    }

    document.getElementById("date").textContent ="Date: " + day + "/" + month + "/" + year;

    const dayoftheweek = date.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("day").textContent ="Day: " + dayNames[dayoftheweek];
}

date();