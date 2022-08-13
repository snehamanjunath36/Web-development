const hr = document.getElementById("hour")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
const ampm = document.getElementById("ampm")

function clock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let amm = "AM"
    if(h>12){
        h = h -12
        amm = "PM"
    }

    h = h<10 ? "0" +h :h;
    m = m<10 ? "0" +m :m;
    s = s <10 ? "0" +s :s;
   
    hr.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampm.innerText = amm ;
    setTimeout( ()=>{
        clock()
    },1000)

}
clock()