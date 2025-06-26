function greeting() {  
    let i =document.querySelector('input[name="shimei"]');
    shimei =i.value;
    aisatu = "こんにちは、"+shimei+"さん";
  let p =document.querySelector('p#message');
    p.textContent =aisatu;
  }
  
  let b =document.querySelector('button#print');
  b.addEventListener('click', greeting);