/*
## Consegna
Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione
Creare un carosello ispirandosi alla foto allegata. Potete anche usare come base il carosello dell'esercizio precedente
## Milstone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
## Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
## Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
*/

const images = [
    {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  
    {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
  ];


let courrentActiveIndex = 0;
const gallery = document.getElementById('gallery');
let cards = '';

for( let i = 0; i < images.length; i++){
    cards += `<div>
                 <h2>${images[i].title}</h2>
                 <p>${images[i].description}</p>
                 <img src="${images[i].url}" alt="svezia">
              </div> `
}

gallery.innerHTML = cards;


const photo = document.getElementsByClassName('photo');
photo [courrentActiveIndex].classList.add('active')

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

nextButton.addEventListener('click' , function(){
    photo[courrentActiveIndex].classList.remove('active');
    courrentActiveIndex++;

    if (courrentActiveIndex === photo.length){
        courrentActiveIndex = 0;
    }

    photo[courrentActiveIndex].classList.add('active');
})


prevButton.addEventListener('click' , function(){
    photo[courrentActiveIndex].classList.remove('active');
    courrentActiveIndex--;

    if (courrentActiveIndex === photo.length){
        courrentActiveIndex = 0
    }

    photo[courrentActiveIndex].classList.add('active');
})