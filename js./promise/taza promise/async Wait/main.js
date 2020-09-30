//  var fetch = require("node-fetch");




//   async function getUser(id) {
//      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//      let data = await response.json();
//      //  .then(response => response.json())

//      return data;
//  }

//  //partavor chenq await grenq asyinqron funktiaic arach karevor@ et functian promise unena
//  async function main() {
//      let user = getUser(1);

//      console.log(user);
//  }

//  main()



///////-----------------
// let fetch = require('node-fetch');


// async function getUser(id) {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         let data = await response.json();
//         //  .then(response => response.json())

//         return data;
//     }catch(error){
//     throw new Error("ne udalos poluchit dannieye ot servera")
//     }
// }
// // try obrabotkaenq anum awaiti oshibken
// async function main() {
//     try {
//         let user = getUser(1);
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }

// }

// main()


/////////////////-----------------



let fetch = require('node-fetch');

// let dataService = tex@ class anem
class DataService {
    async getUser(id) {
        try {
            let response = await fetch(`${this.url}/users/${id}`)
            let data = await response.json();
            //  .then(response => response.json())

            return data;
        } catch (error) {
            throw new Error("ne udalos poluchit dannieye users")
        }
    }
    async getPosts(userId) {
        try {
            let response = await fetch(`${this.url}/posts?userId=${userId}`)
            let data = await response.json();
            //  .then(response => response.json())

            return data;
        } catch (error) {
            throw new Error("ne udalos poluchit  posti")
        }
    }
    async getComments(postId) {
        try {
            let response = await fetch(`${this.url}/comments?postId=${userId}`)
            let data = await response.json();
            //  .then(response => response.json())

            return data;
        } catch (error) {
            throw new Error("ne udalos poluchit  comment")
        }
    }
};


// try obrabotkaenq anum awaiti oshibken
(async () => {
    let dataService = new DataService(`https://jsonplaceholder.typicode.com`)


    try {
        let user = await dataService.getUser(1);
        let posts = await dataService.getPosts(user.id);
        let comments = await dataService.getComments(post[0].id);

        console.log(comments);
    } catch (error) {
        console.log(error);
    }
    // try {
    //     let user = dataService.getUser(1);
    //     console.log(user);
    // } catch (error) {
    //     console.log(error);
    // }

})();