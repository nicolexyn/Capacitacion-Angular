
/*
Promesas con new Promises y funcion get con xhr

Promesas = objeto diferido

3 estados: ['pending', 'resolve', 'reject']

const promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve();
    reject(new Error('Se produjo un error'));
  }, 1000);
});

promise
  .then(function(){
  
  })
  .catch(function(err){
  
  });
*/

function get(URL) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            const DONE = 4;
            const OK = 200;
            if (this.readyState === DONE) {
                if (this.status === OK) {
                    resolve(JSON.parse(this.responseText))
                } else {
                    reject(new Error(`Se produjo un error al realizar el request: ${this.status}`));
                }
            }
        }

        xhr.open('GET', URL);
        xhr.send(null);
    });
}

function handleError(err) {
    console.log(`Request failed: ${err}`);
};

let luke;
get('https://swapi.co/api/people/1/')
    .then((response) => {
        //aca no se haria el otro get sino se anidan con then
        //get(luke.homeworld).then((data) => {});
        luke = response;
        return get(luke.homeworld);
    })
    .then((homeworld) => {
        luke.homeworld = homeworld;
        console.log(`${luke.name} nació en ${luke.homeworld.name}`);
    })
    .catch(err => handleError(err));


