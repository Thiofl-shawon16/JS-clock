
setInterval(myfunc,500);
          
function myfunc(){
   var x= new Date();
  
   var y=x.toLocaleTimeString();
   

  
   
   document.querySelector("h1").innerHTML=y

   document.querySelector("h5").innerHTML=x.toDateString()
   
   
}