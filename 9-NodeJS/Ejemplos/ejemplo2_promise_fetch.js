// Promesas con new Promises y funcion fetch

function handleError(err){
 console.log(`Request failed: ${err}`); 
};

let luke;
fetch('https://swapi.co/api/people/1/')
  .then(response => response.json())
  .then((json) => {
    luke = json;
    return fetch(luke.homeworld);
  })
  .then(response => response.json())
  .then((json) => {
    luke.homeworld = json;
    console.log(`${luke.name} nació en ${luke.homeworld.name}`);
  })
  .catch(err => handleError(err));