function CargarPokemones() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then((result) => {
      const pokemones = result.data.results;

      pokemones.map((pokemon, index) => {
        const { name, url } = pokemon;

        document.querySelector("#listado").innerHTML += `<div class="card" style="width: 18rem;">

        <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png " alt="Card image cap">
        <div class="row">
        <div class="col-4">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          </div>
      </div>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
