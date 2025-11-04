const catGrid = document.getElementById("catGrid");
const catGrid2 = document.getElementById("catGrid2");

export function showBreeds(breeds) {
  catGrid.innerHTML = ""; // Limpiar cuadrícula
  breeds.forEach((breed) => {
    const catCard = document.createElement("div");
    catCard.classList.add("cat-card");
    catCard.innerHTML = `
            <img src="${
              breed.image?.url || "https://via.placeholder.com/150"
            }" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.temperament || "Temperamento no disponible"}</p>
            <a class="see-details-button" href="details.html?id=${
              breed.reference_image_id
            }" target="_blank">Ver detalles 
        `;
    catGrid.appendChild(catCard);
  });
}

export function showBreed(breed) {
  catGrid2.innerHTML = "";
  const catCard = document.createElement("div");
  catCard.classList.add("cat-card-details");
  catCard.innerHTML = `
    <img src="${
      breed.url || "https://via.placeholder.com/300"
    }" alt="Gato seleccionado">
    <p id="cat-text">${breed.breeds?.[0]?.name || "Sin nombre"}</p>
    <p id="cat-text">Temperamento: ${
      breed.breeds?.[0]?.temperament || "Sin temperamento"
    }</p>
    <p id="cat-text">Años de vida: ${
      breed.breeds?.[0]?.life_span || "Sin años de vida"
    }</p>
    <p id="cat-text">Description: ${
      breed.breeds?.[0]?.description || "Sin descripcion"
    }</p>
    <p id="cat-text">Amigable con niños: ${
      breed.breeds?.[0]?.child_friendly || "Sin info"
    }</p>
    <p id="cat-text">Amigable con perros: ${
      breed.breeds?.[0]?.dog_friendly || "Sin info"
    }</p>
    <p id="cat-text">Origen: ${breed.breeds?.[0]?.origin || "Sin origen"}</p>
    <p id="cat-text">Enlace a wikipedia: ${
      breed.breeds?.[0]?.wikipedia_url || "Sin enlace disponible"
    }</p>
  `;
  catGrid2.appendChild(catCard);
}
export function updateButtons(currentPage, pageCount) {
  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = pageCount <= currentPage;
}
