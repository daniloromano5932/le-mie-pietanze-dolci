import BiscottiDetails from "./BiscottiDetails";
import CheesecakesDetails from "./CheesecakesDetails";
import CiambelloniDetails from "./CiambelloniDetails";
import CrostateDetails from "./CrostateDetails";
import MuffinsAndCupcakes from "./MuffinsAndCupcakesDetails";
import FrittelleDetails from "./FrittelleDetails";
import RotoliDetails from "./RotoliDetails";
import TorteDetails from "./TorteDetails";

const HomePageCategories = [
  {
    id: 1,
    title: "Le mie pietanze dolci",
    name: "Torte",
    image: TorteDetails[Math.floor(Math.random()*TorteDetails.length)].image,
    alt: "Immagine Torta",
    href: "Torte",
    button: "Apri",
    total: TorteDetails.length 
  },
  {
    id: 2,
    name: "Crostate",
    image: CrostateDetails[Math.floor(Math.random()*CrostateDetails.length)].image,
    alt: "Immagine Crostate",
    href: "Crostate",
    button: "Apri",
    total: CrostateDetails.length
  },
  {
    id: 3,
    name: "Muffins & Cupcakes",
    image: MuffinsAndCupcakes[Math.floor(Math.random()*MuffinsAndCupcakes.length)].image,
    alt: "Immagine Muffins & Cupcakes",
    href: "MuffinsAndCupcakes",
    button: "Apri",
    total: MuffinsAndCupcakes.length
  },
  {
    id: 4,
    name: "Ciambelloni",
    image: CiambelloniDetails[Math.floor(Math.random()*CiambelloniDetails.length)].image,
    alt: "Immagine Ciambelloni",
    href: 'Ciambelloni',
    button: "Apri",
    total: CiambelloniDetails.length
  },
  {
    id: 5,
    name: "Cheesecakes",
    image: CheesecakesDetails[Math.floor(Math.random()*CheesecakesDetails.length)].image,
    alt: "Immagine Cheesecakes",
    href: "Cheesecakes",
    button: "Apri",
    total: CheesecakesDetails.length
  },
  {
    id: 6,
    name: "Frittelle",
    image: FrittelleDetails[Math.floor(Math.random()*FrittelleDetails.length)].image,
    alt: "Immagine Frittelle",
    href: "Frittelle",
    button: "Apri",
    total: FrittelleDetails.length
  },
  {
    id: 7,
    name: "Biscotti & Pasticcini",
    image: BiscottiDetails[Math.floor(Math.random()*BiscottiDetails.length)].image,
    alt: "Immagine Biscotti",
    href: "Biscotti",
    button: "Apri",
    total: BiscottiDetails.length
  },
  {
    id: 8,
    name: "Rotoli",
    image: RotoliDetails[Math.floor(Math.random()*RotoliDetails.length)].image,
    alt: "Immagine Rotoli",
    href: "Rotoli",
    button: "Apri",
    total: RotoliDetails.length
  }
]

export default HomePageCategories;