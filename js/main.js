window.addEventListener('load', function() {

   var titulo = document.querySelector('#titulo');

   var saludo = document.querySelector('#saludo');

   var span = document.querySelector('span');

   titulo.addEventListener('mouseover', ()=>{
      let nombre = prompt('¿COMO TE LLAMAS?');
      saludo.innerHTML = nombre ? `BIENVENID@ ${nombre}` : `BIENVENID@`;
      saludo.style.textTransform = 'uppercase';
      titulo.style.display = 'none';
      span.style.display = 'inline';
   });
   span.onclick = function(){
      document.querySelector('.bienvenida').style.display = 'none';
      document.querySelector('.personajes').style.display = 'flex';
   }
   let bart = document.querySelector('#bart');
   let lisa = document.querySelector('#lisa');
   let homero = document.querySelector('#homero');
   let marge = document.querySelector('#marge');
   let maggie = document.querySelector('#maggie');
   let milhouse = document.querySelector('#milhouse');
   let burns = document.querySelector('#burns');
   let bobPatinio = document.querySelector('#bobPatinio');
   let flanders = document.querySelector('#flanders');
   let duffman = document.querySelector('#duffman');
   let gorgory = document.querySelector('#gorgory');
   let nelson = document.querySelector('#nelson');
   
   const cambioPersonaje = function(event){
      event.currentTarget.classList.toggle('personaje-seleccionado');
      event.stopPropagation();
   };

   bart.addEventListener('click', cambioPersonaje);
   lisa.addEventListener('dblclick', cambioPersonaje);
   homero.addEventListener('click', cambioPersonaje);
   marge.addEventListener('mouseover', cambioPersonaje);
   maggie.addEventListener('mouseout', cambioPersonaje);
   milhouse.addEventListener('click', cambioPersonaje);
   burns.addEventListener('mouseover', cambioPersonaje);
   bobPatinio.addEventListener('dblclick', cambioPersonaje);
   flanders.addEventListener('mouseover', cambioPersonaje);
   duffman.addEventListener('dblclick', cambioPersonaje);
   gorgory.addEventListener('mouseover', cambioPersonaje);
   nelson.addEventListener('click', cambioPersonaje);

   let boton = document.querySelector('.boton');

   boton.onclick = function(){
      console.log(document.querySelectorAll('.personaje-seleccionado'));
   }


}) 