var savebtn=document.getElementById("save")
var namee=document.getElementById("name")
var age=document.getElementById("age")
var genderr=document.getElementsByName("gender")


var course=document.getElementById("course")
var email=document.getElementById("email")



savebtn.addEventListener("click",function(event){
    event.preventDefault()
    var selGender;
    for(var i=0; i<genderr.length; i++)
    {
    if(genderr[i].checked)
        selGender=genderr[i].value;
    }
    var tbody=document.createElement("tbody")
    tbody.setAttribute("class","body")
    tbody.innerHTML=`<tr><td>${namee.value}</td>
                <td>${age.value}</td>
                <td>${selGender}</td>
                <td>${course.value}</td>
                <td>${email.value}</td>
                <td><button onclick="delet(this)">Delete</button></td>
                <tr>`

    t2.append(tbody)
    tbody.style.backgroundColor="aquamarine"
})

function delet(button){
    var row=button.parentNode.parentNode
    row.parentNode.removeChild(row)
}