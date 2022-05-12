const $busqueda = document.getElementById('busqueda');
const $botonEvento = document.getElementById('botonEvento');
const $randomizador = document.getElementById('randomizador');
const $contenedor = document.getElementById('contenedor');
const $borrar = document.getElementById('borrar');

$randomizador.addEventListener('click',e =>{
    e.preventDefault()
    peticionRandom()
})

$botonEvento.addEventListener('click',e =>{
    e.preventDefault();
    const nombrePokemon = $busqueda.value;
    peticionApi(nombrePokemon); 
});

$borrar.addEventListener('click',e =>{
    e.preventDefault();
    $contenedor.innerHTML = '';
})

async function peticionRandom(){
    try {
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1126`);   
       const datos = res.data.results
       const formula = datos[Math.floor(Math.random() * datos.length)];
       const nombreRandom = formula.name
       peticionImagen(nombreRandom)
    } catch (error) {
        
    }
}

async function peticionImagen(nombreRandom){
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombreRandom}`)
        const imagenPokemon = res.data.sprites["front_default"];
        pintarPokemonRandom(nombreRandom,imagenPokemon)
    } catch (error) {
        
    }
}

function pintarPokemonRandom(nombreRandom,imagenPokemon){
    $contenedor.innerHTML += ` <div  id="imagen"class="card" style="width: 18rem; height: 22rem;">
    <img src="${imagenPokemon}" class="cardContainer card-img-top" alt="...">
    <div class="title card-body d-flex align-items-center flex-column justify-content-center">
      <h3 class="card-title" id="nombre">${nombreRandom}</h3>
    </div>
</div>`
}



async function peticionApi(nombrePokemon){
    try {
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);   
       const imagenPokemon2 = res.data.sprites["front_default"]
       pintarPokemon(imagenPokemon2,nombrePokemon)
    } catch (error) {
        
    }
}

function pintarPokemon(imagenPokemon2, nombrePokemon){
    $contenedor.innerHTML ='';
    $contenedor.innerHTML = `<div  id="imagen"class="card" style="width: 18rem; height: 22rem;">
    <img src="${imagenPokemon2}" class="cardContainer card-img-top" alt="...">
    <div class="title card-body d-flex align-items-center flex-column justify-content-center">
      <h3 class="card-title" id="nombre">${nombrePokemon}</h3>
    </div>
</div>`
}






















