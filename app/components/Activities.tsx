"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

const activities = [
  {
    titleSr: "Mnogobrojni sadržaji za decu",
    titleEn: "Numerous Attractions for Kids",
    descriptionSr:
      "Dino Park nudi brojne aktivnosti prilagođene najmlađima - od igrališta, zabavnih zona, pa do interaktivnih edukativnih programa.",
    descriptionEn:
      "Dino Park offers numerous activities tailored for the youngest - from playgrounds, fun zones, to interactive educational programs.",
    image: "/jezero.jpg",
  },
  {
    titleSr: "Edukacija",
    titleEn: "Education",
    descriptionSr:
      "Naučite više o dinosaurima, prirodnim pojavama i arheološkim iskopinama kroz naše edukativne radionice i interaktivne eksponate.",
    descriptionEn:
      "Learn more about dinosaurs, natural phenomena, and archaeological excavations through our educational workshops and interactive exhibits.",
    image: "/edukacija.jpg",
  },
  {
    titleSr: "Avantura Park",
    titleEn: "Adventure Park",
    descriptionSr:
      "Isprobajte adrenalinske staze i izazove u našem avantura parku, savršenom za one koji vole akciju i uzbuđenje.",
    descriptionEn:
      "Try adrenaline tracks and challenges in our adventure park, perfect for those who love action and excitement.",
    image: "/avantura.jpg",
  },
  {
    titleSr: "Streličarstvo i Paintball",
    titleEn: "Archery & Paintball",
    descriptionSr:
      "Testirajte svoje veštine u streličarstvu ili uživajte u paintball borbama sa prijateljima u posebno opremljenom terenu.",
    descriptionEn:
      "Test your skills in archery or enjoy paintball battles with friends in a specially equipped field.",
    image: "/strelicarstvo.jpg",
  },
  {
    titleSr: "Vožnja kvadova",
    titleEn: "Quad Biking",
    descriptionSr:
      "Istražite Zlatibor na potpuno novi način - vožnja kvadova kroz prirodu pruža nezaboravno iskustvo.",
    descriptionEn:
      "Explore Zlatibor in a whole new way - quad biking through nature provides an unforgettable experience.",
    image: "/kvad.jpg",
  },
  {
    titleSr: "Životinje i jahanje konja",
    titleEn: "Animals & Horse Riding",
    descriptionSr:
      "Upoznajte domaće životinje, nahranite ih i uživajte u jahanju konja kroz prelepe pejzaže Zlatibora.",
    descriptionEn:
      "Meet domestic animals, feed them, and enjoy horse riding through the beautiful landscapes of Zlatibor.",
    image: "/zoo.jpg",
  },
];

const Activities = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="activities" className="relative bg-black text-white overflow-visible py-20">
    <div className="max-w-7xl mx-auto px-6 space-y-20">
      {activities.map((activity, index) => (
        <motion.div
          key={index}
          className={`lg:flex lg:items-center relative z-10 ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Tekst sekcija */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-green-400 drop-shadow-lg">
              {language === "sr" ? activity.titleSr : activity.titleEn}
            </h2>
            <p className="text-lg mt-6 text-gray-300 leading-relaxed drop-shadow-lg">
              {language === "sr" ? activity.descriptionSr : activity.descriptionEn}
            </p>
          </div>
  
          {/* Slika sekcija - IDENTIČNA kao u About.tsx */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg">
              {/* Glow efekat */}  
              <div className="absolute -inset-10 bg-green-500 blur-[40px] opacity-50 rounded-lg z-0"></div>
              <Image
                src={activity.image}
                alt={language === "sr" ? activity.titleSr : activity.titleEn}
                width={460}
                height={340}
                className="rounded-lg shadow-xl transform hover:scale-105 transition duration-500 relative z-10 object-cover"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
  
  
  );
};

export default Activities;
