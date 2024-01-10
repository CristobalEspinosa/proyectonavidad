//slider
import { getSlider } from 'simple-slider';
 
getSlider();

// cookies
import cookieConsent from 'vanilla-cookieconsent';

cookieConsent({
  message: 'Este sitio web utiliza cookies para mejorar la experiencia del usuario.',
  dismiss: 'Aceptar',
  link: 'Leer más',
  href: 'https://www.example.com/cookies',
  container: document.body,
  theme: 'light',
  domain: 'example.com',
  secure: true,
  sameSite: 'strict'
});

// fecha
import flatpickr from "flatpickr";

const datepicker = flatpickr("#myDatepicker", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
});
