const url = 'adresse'
const method = 'GET'

main()

function main(){
    const request = new XMLHttpRequest()
    request.open(method, url)

    request.send()

    const data = JSON.parse(request.response)
    console.log(data)
}

function main2(){
    const request = $.ajax({
        method,
        url
    })

   request.done(data => {
       console.log(data)
   })
}


function main3(){
    const params = {method, url}

   $
   .ajax(params)
   .done(data => {
       data = JSON.parse(data)
       console.log(data)
       console.log(data)
   })
}

async function main4(){
    const params = await {method, url}
    
    const request = await $.ajax(params)
   const data = await JSON.parse(request)

   console.log(data)
}


async function main5(){
   const request =  fetch(url)
    
    const jsonStream =  request.then(response => {
       response.json()
    })
    jsonStream.then(data => {
        console.log(data)
    })
}



async function main6(){
 fetch(url)
     
     then(response =>  response.json())
    .then(data => console.log(data))
 }