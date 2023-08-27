import {  FaBullseye, FaCog, FaEye, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import Solar1 from '.././images/solar1.jpg';
import Solar2 from '.././images/solar2.jpg';
import Solar3 from '.././images/solar3.jpg';
import Solar4 from '.././images/solar4.jpg';
import Solar5 from '.././images/solar5.jpg';
import Solar6 from '.././images/solar6.jpg';
import Comp from '.././images/comp-repair.jpg';
import Comp2 from '.././images/comp-repair2.jpg';
import Comp3 from '.././images/comp3.jpg';
import Cctv from '.././images/cctv1.jpg';
import Cctv1 from '.././images/cctv-1.jpg';
import Cctv2 from '.././images/cctv-2.jpg';
import Cctv3 from '.././images/cctv-3.jpg';
import pos from '.././images/POS.jpg';
import pos1 from '.././images/pos1.jpg';
import Mouse from '.././images/mouse.jpg';
import Accessories from ".././images/ACCESORIES.png";
import pos3 from '.././images/pos3.jpg';
import electric1 from '.././images/electric1.jpg';
import electric2 from '.././images/electric2.jpg';
import pos4 from '.././images/pos4.jpg';
import web from '.././images/web.jpg';
import web2 from '.././images/web2.jpg';
import web1 from '.././images/web1.jpg';
import web3 from '.././images/web3.jpg';
import Network from '.././images/networking.jpg';
import Network1 from '.././images/network1.jpg';
import Network2 from '.././images/outdoor.jpg';
import Network3 from '.././images/router.jpg';
import Network4 from '.././images/switch1.jpg';
import Network5 from '.././images/switch2.jpg';
// import Network4 from '.././images/switch.jpg';
import { nanoid } from "nanoid";

// CLients images
import Asumbi from "../images/clients/Asumbi.jpg";
import Iterio from "../images/clients/Iterio.jpeg";
import Kcg from "../images/clients/KCG.jpg";
import KisiM from "../images/clients/kisiiMatt.png";
import Kericho from "../images/clients/Kericho.jpeg";
import GlobalHealth from "../images/clients/globalHealth.png";
import KenyaPower from "../images/clients/KenyaPower.jpg";
import powerHive from "../images/clients/powerHive.png";
import CatholicUni from "../images/clients/CatholicUni.png";


export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/service",
    text: "services",
  },
  {
    id: 3,  
    url: "/about",
    text: "about us",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },

];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/kwintechdigitalsolutionscentre?mibextid=ZbWKwL",
    icon: <FaFacebook />,
  },

  {
    id: 3,
    url: "https://www.linkedin.com/in/kwintech-d-solutions-7b728a281",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://instagram.com/kwintech?igshid=NGExMmI2YTkyZg==",
    icon: <FaInstagram />,
  },
];

export const services = [
  {
    id: nanoid(),
    icon: [Solar1, Solar2, Solar3, Solar4, Solar5, Solar6],
    heading: "Solar installation",
    text: "Our team of experts at Kwintech specializes in designing and installing solar systems tailored to your specific needs. We ensure seamless integration of solar panels, inverters, and monitoring systems, maximizing energy efficiency and cost savings.",
  },
  {
    id: nanoid(),
    icon: [Comp3, Comp2, Comp],
    heading: "Computer repair",
    text: "Get your computer back on track with Kwintech's expert repair services. Our skilled technicians diagnose and resolve hardware, software, and performance issues promptly.",
  },
  {
    id: nanoid(),
    icon: [Network, Network1, Network2, Network3, Network4, Network5],
    heading: "Network installation",
    text: "Get seamless connectivity with our expert technicians. We design, install, and optimize networks for optimal performance. Enhance your business with fast, secure, and scalable connectivity.",
  },
  {
    id: nanoid(),
    icon: [Cctv, Cctv2, Cctv3, Cctv1],
    heading: "CCTV installation",
    text: "Secure your property with Kwintech's professional CCTV installation. Trust our experts for reliable, integrated systems. Contact us today.",
  },
  {
    id: nanoid(),
    icon: [web, web1, web2, web3],
    heading: "Web design & development",
    text: "Unlock your online potential with Kwintech's exceptional web design services. Our expert designers create visually stunning and user-friendly websites that captivate your audience and drive results.",
  },
  {
    id: nanoid(),
    icon: [pos1, pos, pos3, pos4],
    heading: "Point of Sales System",
    text: "Enhance your business with Kwintech's streamlined point-of-sale solutions. Maximize efficiency and improve sales. Contact us today.",
  },
  {
    id: nanoid(),
    icon: [electric1, electric2],
    heading: "Electrical works",
    text: "Experience top-quality electrical works with Kwintech. Our skilled electricians provide reliable electrical installation, repairs, and maintenance services for residential and commercial properties. ",
  },
  {
    id: nanoid(),
    icon: [Accessories, Mouse],
    heading: "Computer Accessories",
    text: "Upgrade your computing setup with Kwintech's high-quality accessories. From keyboards to reliable storage solutions, we have what you need for enhanced performance. Shop now for a better computing experience.",
  },
];
export const AboutUsCards = [
  {
    id: nanoid(),
    title: "Our mission",
    text: "  At Kwintech, our mission is to empower businesses with innovative and sustainable ICT solutions",
    icon: <FaBullseye />,
  },
  {
    id: nanoid(),
    title: "Our vision",
    text: "To become a global leader in driving digital transformation for a better tomorrow",
    icon: <FaEye />,
  },
  {
    id: nanoid(),
    title: "Core values",
    text: [
      {
        id: nanoid(),
        value: "Competency",
      },
      {
        id: nanoid(),
        value: "Hard work",
      },
      {
        id: nanoid(),
        value: "Integrity and trust",
      },
      {
        id: nanoid(),
        value: "Quality",
      },
    ],
    icon: <FaCog />,
  },
];

export const clientsImages = [
  {
    id: nanoid(),
    image: Iterio,
  },
  {
    id: nanoid(),
    image: KisiM,
  },
  {
    id: nanoid(),
    image: Kcg,
  },
  {
    id: nanoid(),
    image: Asumbi,
  },
  {
    id: nanoid(),
    image: Kericho,
  },
  {
    id: nanoid(),
    image: GlobalHealth,
  },
  {
    id: nanoid(),
    image: KenyaPower,
  },
  {
    id: nanoid(),
    image: powerHive,
  },
  {
    id: nanoid(),
    image: CatholicUni,
  },
];