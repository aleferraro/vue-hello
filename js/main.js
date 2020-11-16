/*
Utilizzando il framework Vue
- Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
- Aggiungere un’immagine presa anch’essa da un data.
*/

var app = new Vue({
  el: '#root',
  data: {
    message: 'Hello Vue!',
    imageUrl: 'https://www.fotoeffetti.com/efectos/grandes/foto-marco-editar-negro-circulo-efecto-recortar.jpg'
  }
});
