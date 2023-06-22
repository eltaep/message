let input=document.querySelector('.input');
let submit =document.querySelector('.show');
let result =document.querySelector('.result');
let showMessge=(even)=>{

    if(input.value!=''){
        result.innerHTML=input.value;
        input.value=''

    }
}
submit.addEventListener('click',showMessge)
input.addEventListener('keyup',(even)=>{
    if(input.value!='' && even.key=='Enter'){
        result.innerHTML=input.value;
        input.value=''
        
    }

})
onload=()=>{
    input.focus()
}