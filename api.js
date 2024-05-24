const apiKey = "fc73ab4b8ee68ca19bbd3c13c8d98110";
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    mostrarPeliculas(data.results);
  })
  .catch((error) => console.error("Error fetching data:", error));

function mostrarPeliculas(peliculas) {
  const contenedorPeliculas = document.getElementById("contenedor-peliculas");
  peliculas.forEach((pelicula) => {
    const peliculaDiv = document.createElement("div");
    peliculaDiv.classList.add("pelicula");
    peliculaDiv.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
      <p>${pelicula.overview}</p>
    `;
    peliculaDiv.addEventListener("click", () => {
      window.location.href = `detalle.html?id=${pelicula.id}`;
    });
    contenedorPeliculas.appendChild(peliculaDiv);
  });
}
