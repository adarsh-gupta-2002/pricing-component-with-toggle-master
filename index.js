

const checkbox = document.getElementById('toggle-btn')
const label = document.getElementById('label')
const basic = document.getElementById('basic')
const professional = document.getElementById('professional')
const master = document.getElementById('master')

 
label.addEventListener('click' , () =>{

     
    if(checkbox.checked){
        basic.innerText = "199.99"
        professional.innerText = "249.99"
        master.innerText = "399.99"

    }else{
       

        basic.innerText = "19.99"
        professional.innerText = "24.99"
        master.innerText = "39.99"
    }
})