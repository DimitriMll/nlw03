const map = L.map("mapid").setView([-30.0504916, -51.2146206], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

map.on("click", (event) => {
  //get lat and lng by click
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  //store lat and lng values
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //clear map icons
  marker && map.removeLayer(marker);

  //add map icon
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//Photo upload
function addPhotoField() {
  //pegar container #images
  const container = document.querySelector("#images");
  //pegar todos os containers .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //clonar ultimo container .new-upload
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se está vazio para add novo field, se estiver não add
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  //limpar o clone antes de add ele
  newFieldContainer.children[0].value = "";
  //add clone no #images container
  container.appendChild(newFieldContainer);
}

//botão de delete
function deleteField(event) {
  //pega o click no botão delete
  const span = event.currentTarget;
  //ler quantas caixar de texto tem
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //se tiver só uma não deixar excluir
  if (fieldsContainer.length <= 1) {
    //limpar valor do campo
    span.parentNode.children[0].value = "";
    return;
  }
  //deletar valor do campo
  span.parentNode.remove();
}

//trocar sim e não
function toggleSelect(event) {
  //retirar a classe active dos dois botões
  document
    .querySelectorAll(".button-select button")
    //aqui embaixo seria: function(button) => {button....tal tal tal}
    .forEach((button) => button.classList.remove("active"));
  //colocar a classe active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");
  //atualizar input hidden com sim ou não
  const input = document.querySelector('[name="open_on_weekends"]');
  //verificar se sim ou não
  input.value = button.dataset.value;
}
