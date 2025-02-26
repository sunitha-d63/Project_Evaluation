const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address=document.querySelector('#address');
const subject=document.querySelector('#subject')
const name_error=document.querySelector('#name_error')
const email_error=document.querySelector('#email_error')
const address_error=document.querySelector('#address_error')
const subject_error=document.querySelector('#subject_error')


form.addEventListener("submit",(e)=>{
    const emailcheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(username.value===''|| username.value== null){
        e.preventDefault();
        name_error.innerHTML='Name is required';
    }
    else{
        name_error.innerHTML=' ';
    }
    if(!email.value.match(emailcheck)){
        e.preventDefault();
        email_error.innerHTML='Valid email is required';
    }
    else{
        email_error.innerHTML=' ';
    }
    if(address.value===''|| address.value== null){
        e.preventDefault();
        address_error.innerHTML='Address is required';
    }
    else{
        address_error.innerHTML=' ';
    }
    if(subject.value===''|| subject.value== null){
        e.preventDefault();
        subject_error.innerHTML='Message required';
    }
    else{
        subject_error.innerHTML=' ';
    }
    
})