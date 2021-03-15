const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//get marker lat and lng from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng 

const map = L.map("mapid", options).setView([lat, lng], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
L.marker([lat, lng], { icon }).addTo(map);

function selectImage(event) {
  //target o botão que está sendo clicado e joga na var button
  const button = event.currentTarget;
  //retira classe ativa
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  //selecionar imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");
  //atualizar container da imagem
  imageContainer.src = image.src;
  //adicionar .active pro botão clicado
  button.classList.add("active");
}
