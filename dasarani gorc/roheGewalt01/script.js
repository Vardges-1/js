
const probiere = document.querySelector('.probiere');
const ausgabe  = document.querySelector('.ausgabe');
const hack     = document.querySelector('.hack');

const fetchJSON = async (query,body)=> {
  let response = await fetch(
    'http://localhost:9922' + query, {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    body: JSON.stringify(body)
  });
  return await response.json();
};



hack.onclick = async ()=>{
  
function aha(){
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@_-'
  ​
  for ( let x = 0; x < alpha.length ; x++ ){
    for ( let y = 0; y < alpha.length ; y++ ){
      let pass = alpha[x] + alpha[y]
      
        if ( pass.status === 'success' ) {
         
        }
   

  }
  
}


}
aha()
}
