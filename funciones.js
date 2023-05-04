function CargarPokemones() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((result) => {
      const pokemones = result.data.results;

      pokemones.map((pokemon, index) => {
        const { name, url } = pokemon;

        document.querySelector("#listado").innerHTML += `<div class="card centerr columna" style="width: 18rem;">

        <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png " alt="Card image cap">
     
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <a href="#" onclick="CargarDatos('${url}',${index})" class="btn btn-success"  data-toggle="modal" data-target="#exampleModal">Go somewhere</a>
          </div>
          
      </div>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function CargarDatos(url, index){

  axios
  .get(url)
  .then((result) => {
    const datosPoke = result.data;
    const { name, stats, types } = datosPoke
    console.log(url)
    document.querySelector("#datos").innerHTML = "";
    document.querySelector("#datos").innerHTML += `<center><div class="card" style="width: 18rem;">
    
    <img class="card-img-top" id="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title pb-1">${name}</h4>
      
      <p class="card-text">HP: ${stats[0].base_stat}</p>
     
      <p class="card-text">Ataque: ${stats[1].base_stat}</p>
    
      <p class="card-text">Velocidad: ${stats[5].base_stat}</p>
     
      <p class="card-text">Tipo: ${datosPoke.types[0].type.name}</p>
       </div>
  </div><center>`

  

  })
  .catch((error) => {
    console.log(error);
  })
}