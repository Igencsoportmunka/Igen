/* slideshow */
let si = 1;
shows(si);

function ps(n) {
  shows(si += n);
}

function cs(n) {
  shows(si = n);
}

function shows(n) {
  let i;
  let slides = document.getElementsByClassName("ss");
  let current = document.getElementsByClassName("ss");
  let desc = document.getElementsByClassName("desc");
  if (n > slides.length) {
    si = 1
  }    
  if (n < 1) {
    si = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < current.length; i++) {
    current[i].className = current[i].className.replace(" active", "");
  }
  for (i = 0; i < desc.length; i++) {
    desc[i].style.display = "none";  
  }
  slides[si-1].style.display = "block";  
  current[si-1].className += " active";
  desc[si-1].style.display = "block";  
}

/*shop*/

const plu = document.querySelector(".plu");
const min = document.querySelector(".min");
const num = document.querySelector(".num");
let a = 0;

  plu.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
    console.log(a);
  });

  min.addEventListener("click", ()=>{
    if(a > 0){
      a--;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
      console.log(a);
    }
  });

const plu2 = document.querySelector(".plu2");
const min2 = document.querySelector(".min2");
const num2 = document.querySelector(".num2");
let a2 = 0;

  plu2.addEventListener("click", ()=>{
    a2++;
    a2 = (a2 < 10) ? "0" + a2 : a2;
    num2.innerText = a2;
    console.log(a2);
  });

  min2.addEventListener("click", ()=>{
    if(a2 > 0){
      a2--;
      a2 = (a2 < 10) ? "0" + a2 : a2;
      num2.innerText = a2;
      console.log(a2);
    }
  });

const plu3 = document.querySelector(".plu3");
const min3 = document.querySelector(".min3");
const num3 = document.querySelector(".num3");
let a3 = 0;

  plu3.addEventListener("click", ()=>{
    a3++;
    a3 = (a3 < 10) ? "0" + a3 : a3;
    num3.innerText = a3;
    console.log(a3);
  });

  min3.addEventListener("click", ()=>{
    if(a3 > 0){
      a3--;
      a3 = (a3 < 10) ? "0" + a3 : a3;
      num3.innerText = a3;
      console.log(a3);
    }
  });

let tv = 0;
let v1 = 5000;
let v2 = 15000;
let v3 = 20000;
const kosar = document.querySelector(".kosar");
const vosszeg = document.querySelector(".vosszeg");

  vosszeg.addEventListener("click", ()=>{
    if (a > 0){
      if (a2 > 0){
        if(a3 > 0){
          tv = v1 * a + v2 * a2 + v3 * a3;
        } else {
          tv = v1 * a + v2 * a2;
        }
      } else if(a3 > 0){
        tv = v1 * a + v3 * a3;
      } else {
        tv = v1 * a 
      }
    } else if(a2 > 0){
      if(a3 > 0){
        tv = v2 * a2 + v3 * a3; 
      } else {
        tv = v2 * a2;
      }
    } else if (a3 > 0){
      tv = v3 * a3;
    } else {
      tv = 0;
    }
    kosar.innerText = tv;
      console.log(tv);
  })