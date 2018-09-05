
const zodiacSigns = [...document.querySelectorAll('li')];
const horoscope = document.querySelector('.prediction');
const displaySign = document.querySelector('.sign-lg');
const date = document.querySelector('.date');

//show today's date
var currentDay = moment().format('LL'); 


//add Event Listener to each sign
zodiacSigns.forEach(sign => {
  sign.addEventListener('click', () => {
    
    //change h1 and date
    displaySign.innerHTML = sign.id;
    date.innerHTML = currentDay;

    //API call
    fetch(`https://aztro.sameerkumar.website/?sign=${sign.id}&day=today`, { method: 'POST' })
		.then(response => response.json())
    .then(data => horoscope.innerHTML = data.description )
    .catch(error => console.error('Error:', error));
  })
})