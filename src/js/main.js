//slider
import { getSlider } from "simple-slider";

getSlider();

// cookies
window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: "#000",
      },
      button: {
        background: "#f1d600",
      },
    },
    content: {
      message:
        "Este sitio web utiliza cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web.",
      dismiss: "Aceptar",
      link: "Leer más",
      href: "/cookies",
    },
  });
});

// fecha en identificarse.html
import flatpickr from "flatpickr";

const datepicker = flatpickr("#myDatepicker", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
});

// galeria
lightGallery(document.getElementById("lightgallery"));
