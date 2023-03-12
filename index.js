const marked=document.getElementById('mark')
const newMessage=document.querySelectorAll('.newmsg')
const num3=document.querySelector(".num3")
const rizkyName=document.getElementById('rizky-name')
const rizkyMessage=document.querySelector('.rizky-msg')

marked.addEventListener("click", function(){
 for (var i = 0; i < newMessage.length; i++) {
   newMessage[i].style.background="white"
 }
 num3.style.display="none"
})
let clicked=false;
rizkyName.addEventListener('click', function(){
clicked=!clicked;

if(clicked){
  rizkyMessage.style.display="block";
}
else{
  rizkyMessage.style.display="none";
}
})
