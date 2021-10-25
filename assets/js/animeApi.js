// URL Api
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";
const anime = document.getElementById("anime");
let animes = document.getElementById("animes"); //INPUT
let html = "";

// Obtener los resultados de la API
const getData = (api) => {
  //LA URL ES = A LA URL + LO QUE TENGA EL INPUT
  api = api + animes.value.toLowerCase();
  animes.value = ""; //ESTO ES PARA QUE SE BORRE EL INPUT CUANDO SE ENVIE
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const getData1 = (api, name, final) => {
  //LA URL ES = A LA URL + LO QUE TENGA EL INPUT
  console.log(api);
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      resultados(json, name, final);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const resultados = (data, name, final) => {
  console.log("dataDos:", data, name);
  html = "";
  html += '<div class="col">';
  html += '<div class="card h-100" style="width: 12rem;">';
  html += `<img src="${
    data.sprites.other["official-artwork"].front_default
  }" class="card-img-top" alt="${"pj.title"}">`;
  html += '<div class="card-body">';
  html += `<h5 class="card-title">${name}</h5>`;
  html += `<h5 class="card-title">Status:${data.weight}</h5>`;
  html += `<h5 class="card-title">Experiencia:${data.base_experience}</h5>`;
  html += "</div>";
  html += "</div>";
  html += "</div>";
  console.log(final);

  document.getElementById("dataPoke").innerHTML += html;
};

// Dibujar cards de personajes
const fillData = (data) => {
  var cont = 0;
  data.forEach((pj) => {
    cont++;
    getData1(pj.url, pj.name, cont);
  });
};

// Se ejecuta la API
anime.onclick = function () {
  getData(API);
};
