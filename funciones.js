function CargarPokemones() {

  document.querySelector("#boton").style.display = 'none';
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=30")
    .then((result) => {
      const pokemones = result.data.results;

      pokemones.map((pokemon, index) => {
        const { name, url } = pokemon;

        document.querySelector(
          "#listado"
        ).innerHTML += `<div class="card centerr columna rounded " style="width: 18rem;">

        <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png " alt="Card image cap">
     
        <div class="card-body" >
          <h5 class="card-title">${name}</h5>
          <a href="#" onclick="CargarDatos('${url}',${index})" class="btn btn-success rounded"  data-toggle="modal" data-target="#exampleModal">Ver datos</a>
          </div>
      </div>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

function CargarDatos(url, index) {
  axios
    .get(url)
    .then((result) => {
      const datosPokemon = result.data;
      const { name, height, id, base_experience, weight} = datosPokemon;

      document.querySelector("#info").innerHTML = "";
      document.querySelector(
        "#info"
      ).innerHTML += `<center><div class="card">
    
    <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      index + 1
    }.png">
    <div class="card-body">
      <p class="card-text">Nombre: ${name}</p>
      <p class="card-text">Numero de la pokedex: ${id}</p>
      <p class="card-text">Altura: ${height/10} metros</p>
      <p class="card-text">Peso: ${weight/10} kilogramos</p>
      <p class="card-text">Experiencia: ${base_experience} XP</p>
       </div>
  </div><center>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
