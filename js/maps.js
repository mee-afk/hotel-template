const places = {
  hotel: {
    title: "Our Hotel",
    desc: "Located in the heart of the city, our hotel offers top-class services and comfort. Experience luxury and convenience like never before, with easy access to local attractions, gourmet dining, and state-of-the-art amenities tailored to your needs.",
    img: "images/hotel.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.126062703566!2d85.3168528!3d27.6782363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cbbeac9357%3A0x8f35a679609cb5b9!2sPulchowk%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1751967623330!5m2!1sen!2snp"
  },
  pulchowk: {
    title: "Pulchowk",
    desc: "A beautiful place near the hotel with scenic views and culture.",
    img: "https://via.placeholder.com/600x400?text=Pulchowk",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.126062703566!2d85.3168528!3d27.6782363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cbbeac9357%3A0x8f35a679609cb5b9!2sPulchowk%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1751967623330!5m2!1sen!2snp"
  },
  kathgodam: {
    title: "Kathgodam",
    desc: "A gateway to the hills with beautiful landscapes.",
    img: "https://via.placeholder.com/600x400?text=Kathgodam",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.827758997854!2d79.54411979999999!3d29.269326399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09a104f620a3b%3A0xec5b3bc6756ce0d8!2sKathgodam!5e0!3m2!1sen!2snp!4v1751967623330!5m2!1sen!2snp"
  },
  temple: {
    title: "Nearby Temple",
    desc: "A historic temple known for its architecture and tranquility.",
    img: "../images/temple-nepal.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.126062703566!2d85.3168528!3d27.6782363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cbbeac9357%3A0x8f35a679609cb5b9!2sTemple!5e0!3m2!1sen!2snp!4v1751967623330!5m2!1sen!2snp"
  },
  lake: {
    title: "Beautiful Lake",
    desc: "A serene lake perfect for relaxation and boating.",
    img: "https://via.placeholder.com/600x400?text=Beautiful+Lake",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.126062703566!2d85.3168528!3d27.6782363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cbbeac9357%3A0x8f35a679609cb5b9!2sLake!5e0!3m2!1sen!2snp!4v1751967623330!5m2!1sen!2snp"
  }
};

const buttons = document.querySelectorAll('#placeList button');
const placeTitle = document.getElementById('placeTitle');
const placeDesc = document.getElementById('placeDesc');
const placeImage = document.getElementById('placeImage');
const modalMap = document.getElementById('modalMap');
const getHereBtn = document.getElementById('getHereBtn');
const mapModalLabel = document.getElementById('mapModalLabel');
const readMoreBtn = document.getElementById('readMoreBtn');

const maxLength = 150;
let activeKey = 'hotel'; // default active place

function updatePlace(key) {
  const place = places[key];
  activeKey = key;

  placeTitle.textContent = place.title;
  placeImage.src = place.img;
  placeImage.alt = place.title;
  getHereBtn.dataset.mapSrc = place.map;
  mapModalLabel.textContent = `${place.title} - Location Map`;

  if (place.desc.length > maxLength) {
    placeDesc.textContent = place.desc.slice(0, maxLength) + "...";
    readMoreBtn.style.display = "inline-block";
    readMoreBtn.dataset.expanded = "false";
    readMoreBtn.textContent = "Read More";
  } else {
    placeDesc.textContent = place.desc;
    readMoreBtn.style.display = "none";
  }
}

readMoreBtn.addEventListener('click', () => {
  const isExpanded = readMoreBtn.dataset.expanded === "true";
  const fullDesc = places[activeKey].desc;

  if (isExpanded) {
    placeDesc.textContent = fullDesc.slice(0, maxLength) + "...";
    readMoreBtn.textContent = "Read More";
    readMoreBtn.dataset.expanded = "false";
  } else {
    placeDesc.textContent = fullDesc;
    readMoreBtn.textContent = "Read Less";
    readMoreBtn.dataset.expanded = "true";
  }
});
console.log("Maps.js loaded successfully");
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updatePlace(btn.getAttribute('data-place'));
  });
});

getHereBtn.addEventListener('click', () => {
  modalMap.src = getHereBtn.dataset.mapSrc;
});

const mapModal = document.getElementById('mapModal');
mapModal.addEventListener('hidden.bs.modal', () => {
  modalMap.src = '';
});

window.addEventListener('load', () => {
  updatePlace('hotel'); // initial place
});