const ausgabe = document.querySelector('.ausgabe')
const eingabe = document.querySelector('.eingabe')
const senden  = document.querySelector('.senden')
​
ausgabe.innerHTML = 'hallo welt'
// ausgabe.innerHTML = ausgabe.innerHTML + '<div>asd</div>'
// ausgabe.innerHTML += '<div>asd</div>'
// let div = document.createElement('div');
​
// http://localhost:9922
// POST /message
// {
//   msg:<String>||<NULL>,
//   name:<String>
// }
​
fetch(
  'http://localhost:9922' + '/message',
  {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:
      JSON.stringify({
        msg:'hallooooo!',
        name:'anx'
      })
  }
)
.then( response => response.json() )
.then( (daten)=>{
  ausgabe.innerHTML = daten;
})
​
const fetchMessages = async ()=> {
  let response = await fetch(
    'http://localhost:9922' + '/message',
    {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:
        JSON.stringify({
          msg:'hallooooo!',
          name:'anx'
        })
  });
  let daten = await response.json();
}