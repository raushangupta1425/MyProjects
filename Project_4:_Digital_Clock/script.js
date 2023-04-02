setInterval(() => {
    let  Hours = document.getElementById('Hours');
    let  Minutes = document.getElementById('Minutes');
    let  Seconds = document.getElementById('Seconds');
    let  Days = document.getElementById('Days');
    let  Dat = document.getElementById('Dat');
    let  ampm = document.getElementById('ampm');
    
        let dateTime = new Date();
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();
        let dat = dateTime.toDateString().slice(3, );
        let days = dateTime.toLocaleString('default', {
            weekday: "long"});
    
        let am = hours >= 12 ? "PM" : "AM";
        if(hours > 12){
            hours -= 12;
        }
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
        Hours.innerText = hours;
        Minutes.innerText = minutes;    
        Seconds.innerText = seconds;    
        Dat.innerText = dat; 
        Days.innerText = days;    
        ampm.innerText = am;    
    });