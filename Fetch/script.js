console.log('Script is connected!')

/*# Homework

1. Return and print every property with their values from 23 user
2. Show all albums that have "omnis" in their title
3. Create new user
4. Delete random TODO

Use https://jsonplaceholder.typicode.com/*/

//1. Return and print every property with their values from 23 post

function printElement(response, storeResult) {

    if (response !== undefined && response.length > 0) {
        let newResponse=response.slice(23,100);
        for (const post of newResponse) {
            storeResult.innerHTML += `<li>User Id: ${post.userId}, ID: ${post.id}, Title:${post.title} </li>`;
        }
    }
}

document.getElementById('one').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
         method:'GET'
        })
        .then(response => response.json())
        .then(response => {
            let printPostsFrom23Onwards=document.getElementById('ulOne');
            printElement(response,printPostsFrom23Onwards)
            
           
        })
        .catch(error => console.error(error))
})

// 2. Show all albums that have "omnis" in their title

// function showPostsWithOmnis(element,albums,array){
   
     
// }
function albumTitleWithOmnis(element,response){
    if(response!==undefined && response.length>0){
        for( item of response){
            if(item.title.includes('omnis')){
                element.innerHTML+= `<li>Album with userID: ${item.userId},   Album ID: ${item.id},    Album Title: ${item.title}</li>`
            }
         }
    }
}

document.getElementById('two').addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/albums',{
        method:'GET'
    })
    .then(response => response.json())
    .then(response => {
        let printAlbumsWithOmnis=document.getElementById('ulTwo');
        albumTitleWithOmnis(printAlbumsWithOmnis,response);
          
    })
    .catch(error => console.error(error))
})

// 3. Create new user



document.getElementById('three').addEventListener('click', function(){
 let nameOfNewUser=document.getElementById('a').value;
let usernameOfNewUser=document.getElementById('b').value;
let emailOfNewUser=document.getElementById('c').value;
let addressOfNewUser=document.getElementById('d').value;
let streetOfNewUser=document.getElementById('e').value;
let suiteOfNewUser=document.getElementById('f').value;
let cityOfNewUser=document.getElementById('g').value;

    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        body: JSON.stringify({
            name:nameOfNewUser,
            username:usernameOfNewUser,
            email:emailOfNewUser,
            address:{
                street:addressOfNewUser,
                suite: suiteOfNewUser,
                city:cityOfNewUser,
                zipcode:'1000',
                geo:{
                    lat:'-345.67',
                    lng:'12.34567'
                }

            },
            website:'https://seavusedu.talentlms.com',
            
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    })
    .then((response => response.json()))
    .then(response => {
        let printNewUser=document.getElementById('paragraphThree');
    
        printNewUser.innerText= `New User has been successfully created with user data: ID: ${response.id}, name: ${response.name}, username:${response.username}, email: ${response.email}, address: ${response.address.street}, ${response.address.suite}, ${response.address.city}`
    })
    .catch(error => console.error(error))
})

// 4. Delete random TODO

let randomToDo=Math.floor(Math.random()*202.5);

document.getElementById('four').addEventListener('click',function(){
    fetch(`https://jsonplaceholder.typicode.com/todos/${randomToDo}`,{
        method:'DELETE',
    })
    .then(response => response.json())
    .then(deletedTodo => {
        console.log(`The random number is ${randomToDo} and the deleted todo is:`,deletedTodo)
       
    })
    .catch(error => console.log(error))
})


