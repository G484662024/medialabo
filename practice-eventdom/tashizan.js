function greeting(){
    let l =document.querySelector('input[name="left"]');
    left=l.value;
    let leftnumber =Number(left);
    let r =document.querySelector('input[name="right"]');
    right=l.value;
    let rightnumber =Number(right);
     N =leftnumber+rightnumber;
     console.log(N);
    let p=document.querySelector('span#answer');
    console.log(p);
    p.textContent=N;
}
let b=document.querySelector('button#calc');
b.addEventListener('click',greeting);