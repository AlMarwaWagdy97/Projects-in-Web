var name;
var list1 = ["AlMArwa", "Amal"];
function validemail(){
     var e = document.getElementById("email").value;
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-09]+\.)+[a-zA-Z]{2,}))$/;
    if(!(re.test(e))){
        alert("email not  valid");
        return false;
    }
    else {return true;} 
}
function validpass(){
    var p = document.getElementById("pass").value;
    var re =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(!(re.test(p))){
        alert("password not  valid");
        return false;
    }
    else {return true;}
}
function validform(){
     n = document.getElementById("name").value;
    name+=n+"<br>";
    if(validemail() && validpass() && n != ""){
        alert("submit succed");
        
    }
   /* else{
        alert("not valid");
    }*/
    
}
document.getElementById("submit").addEventListener("click",validform);
//--------------------------------------------------------------------------------------

function putreg (){document.getElementById("reg").innerHTML = name; }
document.getElementById("rev").addEventListener("click", putreg);

function remreg (){document.getElementById("reg").innerHTML = ""; }
document.getElementById("rem").addEventListener("click", remreg);
//-----------------------------------------------------------------------------------
function selcolor(){
    var y = document.getElementById("selec").value; 
    document.body.style.background = y;
}

function removecolor(){
    var y = document.getElementById("selec"); 
    
    var v = document.getElementById("remo").value;
    var vv = document.getElementById("remo");
    var f = 1;
    for(i = 0; i<y.length; i++){
        if(y[i].value == v){
            y.remove(i);
            f = 0; 
        }
    }
    if(f)alert("already not exist");
    vv.value = "";
    document.getElementById("remove").disabled = true;
    document.getElementById("add").disabled = true;
     
    document.body.style.background = y.value;
    
}
function addcolor(){
    var y = document.getElementById("selec"); 
    var v = document.getElementById("remo").value; 
    var vv = document.getElementById("remo");
    var f = 1;
    for(i = 0; i<y.length; i++){
        if(y[i].value == v){
            alert("color already found");
            f = 0;
        }
    }
    if(f){
        y.options[y.options.length] = new Option(v, v);
    }
    vv.value = "";
    document.getElementById("remove").disabled = true;
    document.getElementById("add").disabled = true;
}
function disa(){
     var v = document.getElementById("remo").value;
    if(v != ""){
        document.getElementById("remove").disabled = false;
        document.getElementById("add").disabled = false;
    }
    else{
         document.getElementById("remove").disabled = true;
         document.getElementById("add").disabled = true;
    }
}
//---------------------------------------------------------------------------------------
function checkname(){
    var v = document.getElementById("namess");
    var f = 1;
    for(i = 0 ; i < list1.length; i++){
        if(list1[i] == v.value){
            alert("Name is found");
            f = 0;
        }
    }
    if(f){
        list1.push(v.value);
        alert("Name is added");
    }
    v.value="";
}
function displaynames(){
    var names = "";
    names +="<ul>";
    for(i=0; i<list1.length;i++)names += "<li>"+  list1[i] + "</li>";
    names += "</ul>";
    document.getElementById("item").innerHTML = names;
}



