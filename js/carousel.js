$('.owl--testimonial').owlCarousel({
  loop: true,
  margin: 10,
  nav: 0,
  smartSpeed: 2000,
  autoplay: true,
  autoplayTimeout: 5000,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

// home
$('.owl--home').owlCarousel({
  loop: true,
  nav: 0,
  smartSpeed: 2000,
  autoplay: true,
  autoplayTimeout: 3500,
  dots: 0,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})



// const images = {
//   back1: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1080&q=80",
//   back2: "/images/hotel-background.jpg",
//   back3: "/images/hotel-background-2.jpg"
// };

// const backImage = document.getElementById('backImage');

// function updateImage(key) {
//   const image = images[key];
//   backImage.style.backgroundImage = `url('${image}')`;
//   backImage.style.backgroundSize = 'cover';
//   backImage.style.backgroundPosition = 'center';
// }

// window.addEventListener('load', () => {
//   updateImage('back1');
// });