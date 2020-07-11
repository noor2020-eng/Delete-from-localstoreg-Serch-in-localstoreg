
var reg=document.getElementById("reg");
var searchName=document.getElementById("searchName");
var input=[];
var elementLocal=[];
var object={};
var values=[];
var x=document.createElement("button");
var inputPasswordCon = document.getElementById('passwordCon');
var sp = document.createElement("SPAN");
sp.className="activ";
sp.style.backgroundColor="red";
sp.style.color="white";
var t = document.createTextNode("Passwords do not match.");

function addSp(){
    sp.appendChild(t);
    inputPasswordCon.after(sp); 
}

function removeSp(){
    if(sp.className){
        sp.remove();
    }
}




reg.addEventListener('click',function(e){

    e.preventDefault()
    var password=document.getElementById("password").value;
       var passwordCon=document.getElementById("passwordCon").value;
       if(password==passwordCon){
            object={
                username:document.getElementById("username").value,
                password:password,
                passwordCon:passwordCon,
                email:document.getElementById("email").value,
                phone:document.getElementById("phone").value,
                gender:document.getElementById("gender").value = 0 ? "male" : "female"
            };
            
            var myTable=document.getElementById('myTable');
            if(localStorage.getItem(object.email)){

            }else{
                var r1=myTable.insertRow(1);
                r1.id=object.email;
                var col0=r1.insertCell(0);
                var col1=r1.insertCell(1);
                var col2=r1.insertCell(2);
                var col3=r1.insertCell(3);
                var col4=r1.insertCell(4);
                var col5=r1.insertCell(5);
                col0.innerHTML=object.username;
                col1.innerHTML=object.password;
                col2.innerHTML=object.email;
                col3.innerHTML=object.phone;
                col4.innerHTML=object.gender;
                x.textContent="Delete Element!";
                x.id=object.email;
                col5.appendChild(x);
                input.push(object);
                x.addEventListener('click',function(e){
                    e.preventDefault()
                   // var con = confirm("do you want to delete this object?!");
                    
                    localStorage.removeItem(x.id);
                    document.getElementById(r1.id).remove();
                    
                });
                
            }
                          
    }else{     
       addSp();
    }

});

inputPasswordCon.addEventListener('click',removeSp);

reg.addEventListener('click',function(e){

    e.preventDefault();
    input.forEach(x => {
        if(localStorage.getItem(x.email)){
        
        }else{
            localStorage.setItem(x.email,JSON.stringify(x));  
        }
        
    });

});

for (var i = 0; i < localStorage.length; i++) {

    var key = localStorage.key(i);
      var value = localStorage.getItem(key);
    values.push(value);
 }

var btnSerch=document.getElementById("btnSerch");

btnSerch.addEventListener('click',function(e){

    e.preventDefault()
    values.forEach(element => {
        var i=searchName.value;
        var j=(JSON.parse(element)).username;
        if(i==j ){
            console.log(element);
            var ul=document.getElementById("listOfSerch");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(element));
            ul.appendChild(li);
        }
    });

});
