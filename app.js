const $silueta=document.getElementById('silueta'),
$obstaculo=document.getElementById('obstaculo'),
$time=document.getElementById('time'),
$gameOver=document.getElementById('final'),
$score=document.getElementById('score');

let time=0
let timeSalto=1500
let estado='url(img/saltar.png'


document.addEventListener('keydown',saltar)

function saltar(e){ 
  if(e.keyCode==32){  
   $silueta.classList.add('saltar')
   $silueta.style.backgroundImage='url(img/saltar.png'   
  setTimeout(()=>{    
    $silueta.classList.remove('saltar')
    $silueta.style.backgroundImage='url(img/perfil.png'
  },timeSalto)

  }

}



 let inteval=setInterval(() => {
  time++
  $time.textContent=time

 
  const silueta=$silueta.getBoundingClientRect();
  let  sLEFT=Math.floor(silueta.left) 
  let  sBOTON=Math.floor(silueta.bottom)
  let  sRIGTH=Math.floor(silueta.right)

  const obstaculo=$obstaculo.getBoundingClientRect();
  let  sbLEFT=Math.floor(obstaculo.left)
  let  sbTOP=Math.floor(obstaculo.top)



  if(sRIGTH>sbLEFT+30&&sBOTON>sbTOP+20&&sLEFT<sbLEFT+200){    
    $silueta.style.backgroundImage='url(img/atropellado.png'
    $obstaculo.style.animation='none'
    $obstaculo.style.left=(sLEFT-140)+'px'
    setTimeout(() => {     
      $silueta.classList.remove('saltar')
      $silueta.style.backgroundImage='url(img/angel.png'
      $silueta.classList.add('morir')    
      $silueta.style.animationDuration='3s'   
      
      $gameOver.style.opacity=1
      $score.textContent=time
    },timeSalto);
    clearInterval(inteval) 
  }
  


  if(time >=200 &&sbLEFT>1100){     
    timeSalto=1000
   
    $silueta.style.animationDuration='1s' 
    $obstaculo.style.animationDuration='2.5s' 
   }
   if(time >=400 &&sbLEFT>1100){     
    timeSalto=800
   
    $silueta.style.animationDuration='0.8s' 
    $obstaculo.style.animationDuration='1.8s' 
   }
   if(time >=700 &&sbLEFT>1100){     
    timeSalto=500
   
    $silueta.style.animationDuration='0.5s' 
    $obstaculo.style.animationDuration='1s' 
   }

}, 100);


