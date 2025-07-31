function greeting(){
    let l =document.querySelector('input[name="left"]');
    left=l.value;
    let leftnumber =Number(left);
    let r =document.querySelector('input[name="right"]');
    right=r.value;
    let rightnumber =Number(right);
     N =leftnumber+rightnumber;
    
    let p=document.querySelector('span#answer');
    
    p.textContent=N;
}
let b=document.querySelector('button#calc');
b.addEventListener('click',greeting);