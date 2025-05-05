import {
  faAt,
  faClipboard,
  faCookie,
  faEnvelope,
  faHeart,
  faHomeUser,
  faLocationDot,
  faLock,
  faLuggageCart,
  faPhone,
  faQuestion,
  faTrademark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Visa from "./../../assets/visa.jpg";
import Mastercard from "./../../assets/master.jpg";
import AmericanExpress from "./../../assets/americanExpress.jpg";
import Paypal from "./../../assets/paypal.jpg";

export const footer = [
  {
    title: "Contact information",
    element: [
      {
        icon: faPhone,
        text: "+123 456 789 000",
        path: "tel:+123 456 789 000",
      },
      {
        icon: faEnvelope,
        text: "sales@gmail.com",
        path: "mailto:sales@gmail.com",
      },
      {
        icon: faEnvelope,
        text: "services@gmail.com",
        path: "mailto:services@gmail.com",
      },
    ],
  },
  {
    title: "Quick Links",
    element: [
      {
        icon: faUser,
        text: "My Account",
        path: "/UserDashboard",
      },
      {
        icon: faHeart,
        text: "Wishlist",
        path: "/Wishlist",
      },
      {
        icon: faTrademark,
        text: "Track My Order",
        path: "/TrackOrder",
      },
      {
        icon: faLocationDot,
        text: "Location",
        path: "https://www.google.com.kh/maps/place/Phnom+Penh/@11.5793176,104.7253762,11z/data=!3m1!4b1!4m6!3m5!1s0x3109513dc76a6be3:0x9c010ee85ab525bb!8m2!3d11.5563738!4d104.9282099!16zL20vMGRsd2o?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
  },
  {
    title: "Useful Links",
    element: [
      {
        icon: faHomeUser,
        text: "About Company",
        path: "/AboutUs",
      },
      {
        icon: faLuggageCart,
        text: "Careers",
        path: "/Career",
      },
      {
        icon: faAt,
        text: "Contact Us",
        path: "/Contact",
      },
    ],
  },
  {
    title: "Privacy Policy",
    element: [
      {
        icon: faCookie,
        text: "Cookies",
        path: "/Cookie",
      },
      {
        icon: faLock,
        text: "Terms & Conditions",
        path: "/Terms-Conditions",
      },
      {
        icon: faClipboard,
        text: "Privacy Policy",
        path: "/Privacy-Policy",
      },
    ],
  },
];
export const iconPayment = [Visa, Mastercard, AmericanExpress, Paypal];
export const iconSocial = [
  {
    icon: faFacebookF,
    path: "https://facebook.com",
  },
  {
    icon: faInstagram,
    path: "https://instagram.com",
  },
  {
    icon: faTelegramPlane,
    path: "https://telegram.org/",
  },
  {
    icon: faTwitter,
    path: "https://twitter.com",
  },
];
