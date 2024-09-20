// script.js
document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('#likes');

  likeButtons.forEach(button => {
      let likesCount = 0;

      button.addEventListener('click', () => {
          likesCount++;
          button.querySelector('a').textContent = likesCount;
          button.classList.toggle('liked');
      });
  });
});

let scrollUp = document.getElementById("scrollup");

scrollUp.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
      scrollUp.style.display = "block";
  }
  else {
      scrollUp.style.display = "none";
  }
});

scrollUp.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



// var inp1=document.querySelector('#inp1');
// var inp2=document.querySelector('#inp2');
// var h4=document.querySelector('h4');
// var form = document.querySelector('form');

// form.addEventListener("submit",function(event){
// event.preventDefault();
// if(inp1.value ==='' || inp2.value===''){
//     h4.textContent="errors";
//     h4.style.color="red";
// }
// else{
//     h4.textContent="hk";
//     h4.style.color="";
// }
// })

// function businfo1(){
//   for (i=0;i<10;i++){
//       var h3 = document.querySelector('.businfo1');
//   setTimeout(() => {
      
  
//       h3.textContent="The bus reached Bandra";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 5000);
  
  
  
//   // var h3 = document.querySelector('.businfo');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus is at the Stop1";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 10000);
  
  
  
//   // var h3 = document.querySelector('.businfo1');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus reached the TSEC";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 15_000);
//   i++
//   }
// }
// // businfo1();

// function businfo2(){
//   for (i=0;i<10;i++){
//       var h3 = document.querySelector('.businfo2');
//   setTimeout(() => {
      
  
//       h3.textContent="The bus reached Bandra";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 5000);
  
  
  
//   // var h3 = document.querySelector('.businfo');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus is at the Stop1";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 10000);
  
  
  
//   // var h3 = document.querySelector('.businfo1');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus reached the TSEC";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 15_000);
//   i++
//   }
// }
// businfo2();


// function businfo3(){
//   for (i=0;i<10;i++){
//       var h3 = document.querySelector('.businfo3');
//   setTimeout(() => {
      
  
//       h3.textContent="The bus reached Bandra";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 5000);
  
  
  
//   // var h3 = document.querySelector('.businfo');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus is at the Stop1";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 10000);
  
  
  
//   // var h3 = document.querySelector('.businfo1');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus reached the TSEC";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 15_000);
//   i++
//   }
// }
// businfo3();

// function businfo4(){
//   for (i=0;i<10;i++){
//       var h3 = document.querySelector('.businfo4');
//   setTimeout(() => {
      
  
//       h3.textContent="The bus reached Bandra";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 5000);
  
  
  
//   // var h3 = document.querySelector('.businfo');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus is at the Stop1";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 10000);
  
  
  
//   // var h3 = document.querySelector('.businfo1');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus reached the TSEC";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 15_000);
//   i++
//   }
// }
// businfo4();

// function businfo5(){
//   for (i=0;i<10;i++){
//       var h3 = document.querySelector('.businfo5');
//   setTimeout(() => {
      
  
//       h3.textContent="The bus reached Bandra";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 5000);
  
  
  
//   // var h3 = document.querySelector('.businfo');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus is at the Stop1";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 10000);
  
  
  
//   // var h3 = document.querySelector('.businfo1');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus reached the TSEC";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 15_000);
//   i++
//   }
// }
// businfo5();
// function businfo6(){
//   for (i=0;i<10;i++){
//       var h3 = document.querySelector('.businfo6');
//   setTimeout(() => {
      
  
//       h3.textContent="The bus reached Bandra";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 5000);
  
  
  
//   // var h3 = document.querySelector('.businfo');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus is at the Stop1";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 10000);
  
  
  
//   // var h3 = document.querySelector('.businfo1');
//   setTimeout(() => {
      
  
//       h3.textContent="The Bus reached the TSEC";
//       h3.style.color="pink";
//       h3.style.width="13vw";
//       h3.style.height="1vw";
//       h3.style.paddingLeft="1vw";
//   }, 15_000);
//   i++
//   }
// }
// businfo6();
function businfo1(){
    for (i=0;i<10;i++){
        var h3 = document.querySelector('.businfo1');
    setTimeout(() => {
        
    
        h3.textContent="The bus reached Bandra";
        h3.style.color="pink";
        h3.style.width="13vw";
        h3.style.height="1vw";
        h3.style.paddingLeft="1vw";
    }, 500);
    
    
    
    // var h3 = document.querySelector('.businfo');
    setTimeout(() => {
        
    
        h3.textContent="The Bus is at the Stop1";
        h3.style.color="pink";
        h3.style.width="13vw";
        h3.style.height="1vw";
        h3.style.paddingLeft="1vw";
    }, 1000);
    
    
    
    // var h3 = document.querySelector('.businfo1');
    setTimeout(() => {
        
    
        h3.textContent="The Bus reached the TSEC";
        h3.style.color="pink";
        h3.style.width="13vw";
        h3.style.height="1vw";
        h3.style.paddingLeft="1vw";
    }, 2000);
    i++
    }
}
businfo1();