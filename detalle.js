const params = new URLSearchParams(window.location.search);
const peliculaId = params.get("id");

const apiKey = "fc73ab4b8ee68ca19bbd3c13c8d98110";
const apiUrl = `https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}&language=es-ES`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((pelicula) => {
    console.log(pelicula);
    mostrarDetallePelicula(pelicula);
  })
  .catch((error) => console.error("Error fetching data:", error));

function mostrarDetallePelicula(pelicula) {
  const titulo = document.getElementById("titulo");
  const detallePelicula = document.getElementById("detalle-pelicula");

  titulo.textContent = pelicula.title;
  detallePelicula.innerHTML = `
      
        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}" class="img-fluid mb-4">
    
        <div>
            <p>${pelicula.overview}</p>
            <p><strong>Fecha de lanzamiento:</strong> ${pelicula.release_date}</p>
            <p><strong>Calificación:</strong> ${pelicula.vote_average}</p>
        </div> 
      `;
}
