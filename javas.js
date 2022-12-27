const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo1');
const btn = document.querySelector('#btnCalcular');
const btn2 = document.querySelector('#but')
const result = document.querySelector('#result')
const form = document.querySelector('#form')



form.addEventListener('submit', sumarInputs);


function sumarInputs(event){

    
    event.preventDefault();
    result.innerHTML=parseInt( input1.value)+ parseInt(input2.value);


}

btn2.addEventListener('click', calculoDos);

function calculoDos(){

    console.log('no sale nada')
    result.innerHTML= parseInt(input1.value)+parseInt(input2.value);
}







// h1.innerHTML=('patito Feo');
// h1.innerText=('patofeo')
// const img =document.createElement('img');
// img.setAttribute('src', 'https://descubrecomunicacion.com/wp-content/uploads/2019/07/forndend-backend-post2.jpg');
// console.log(img)



// img.style.width=('350px');
// img.style.height=('350px');

// h1.innerText= 'patoFeo';
