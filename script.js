const blank=document.getElementById("blank")
blank.addEventListener("submit", function(event){
    event.preventDefault()
    FIO=document.getElementById("FIO").value 

    Strana=document.getElementById("strana").value 

    Data=document.getElementById("date").value 
    
    Night=document.getElementById("night").value
    
    Person=document.getElementById("person").value 
    
    document.getElementById("FIO2").innerHTML="FIO:"+FIO 
    document.getElementById("strana2").innerHTML="strana"+Strana
    document.getElementById("date2").innerHTML="date"+Data
    document.getElementById("night2").innerHTML="night"+Night
    document.getElementById("person2").innerHTML="person"+Person

    document.getElementById("modal").style.display="block"
})

function zakrit() {
    document.getElementById("modal").style.display="none"
}