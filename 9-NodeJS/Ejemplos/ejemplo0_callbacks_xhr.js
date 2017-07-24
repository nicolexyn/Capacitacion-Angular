function get(URL, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        const DONE = 4;
        const OK = 200;
        if (this.readyState === DONE) {
            if (this.status === OK) {
                callback(null, JSON.parse(this.responseText))
            } else {
                callback(new Error(`Se produjo un error al realizar el request: ${this.status}`));
            }
        }
    }

    xhr.open('GET', URL);
    xhr.send(null);
}

function handleError(err) {
    console.log(`Request failed: ${err}`);
};

let luke;
get('https://swapi.co/api/people/1/', function onResponse(err, luke){
    if(err) return handleError(err);

    get(luke.homeworld, function onHomeworldResponse(err, homeworld){
        if(err) return handleError(err);

        luke.homeworld = homeworld;

        console.log(`${luke.name} nació en ${luke.homeworld.name}`);
    });
});
