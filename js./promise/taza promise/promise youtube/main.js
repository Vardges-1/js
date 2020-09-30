console.log("Request data.....")

// setTimeout(() => {
//     console.log("Preparing data....")

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }


//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data recevied', backendData)
//     }, 2000)

// }, 2000)


// --------------------- esela tarberak

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Preparing data...")
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
// })

// // p.then(data => {
// //     const p2 = new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             data.modified = true
// //             resolve(data)
// //         }, 2000)
// //     })
// //     p2.then(clienData => {
// //         console.log("Data recevied", clienData)
// //     })
// // })


// //----- esi verevini aveli lav dezvna
// p.then(data => {
//     // taza promise tex@ uxaki returna anum
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
//     // p2.then(clienData => {
//     //     console.log("Data recevied", clienData)
//     // })
//     // stanumenq verchin resolve mechi drac datan
// }).then(clientData => {
//     console.log("Data recevied", clientData)
//     clientData.fromPromise = true
//     return clientData
// }).then( data => {
//     console.log("Modified", data)
// }).catch( err => {
//     console.error("Error", err)
//     // inchel lini finaly katarveluya
// }).finally(() => console.log("Finaly"))


////////-------dobavlyaet opredelyonuyu zaderjku

// -------budet vazvrashat nam novi promise katori prenemyet v sebya resolve cherez opredelyonie
//  milisikundi
const sleep = ms =>{
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}



// sleep(2000).then(() => console.log("After 2sec"))
// sleep(5000).then(() => console.log("After 3 sec")) 


// method all immeyet toje then cach finaly. etot method budet vipolnen togda kogda budut vipolni vse promise
Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log("All promise")

})

// vipolnyayet sami pervi promise
Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log("Race promise")
})