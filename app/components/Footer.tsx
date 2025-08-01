"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { language } = useContext(LanguageContext); // Dobijamo jezik iz globalnog konteksta

  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between">
        {/* Leva strana - Logo i opis */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image src="/logo.png" alt="DinoPark Logo" width={120} height={60} />
          <p className="mt-4 text-sm">
            {language === "sr"
              ? "Dino Park Zlatibor - Najveći zabavno-edukativni park na Balkanu. Doživite neverovatne avanture!"
              : "Dino Park Zlatibor - The largest educational and entertainment park in the Balkans. Experience incredible adventures!"}
          </p>
        </div>

        {/* Sredina - Navigacija */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold text-white">
            {language === "sr" ? "Navigacija" : "Navigation"}
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              { sr: "Početna", en: "Home", id: "home" },
              { sr: "O nama", en: "About", id: "about" },
              { sr: "Galerija", en: "Gallery", id: "gallery" },
              { sr: "Kontakt", en: "Contact", id: "contact" },
              { sr: "Aktivnosti", en: "Activities", id: "activities" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={`#${item.id}`}
                  className="hover:text-green-400 transition"
                >
                  {language === "sr" ? item.sr : item.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desna strana - Kontakt i društvene mreže */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-white">
            {language === "sr" ? "Kontakt" : "Contact"}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-green-400 text-lg"
              />
              <span>
                {language === "sr" ? "Zlatibor, Srbija" : "Zlatibor, Serbia"}
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-green-400 text-lg"
              />
              <span>+381 63 115 5825</span>
              <FontAwesomeIcon
                icon={faPhone}
                className="text-green-400 text-lg"
              />
              <span>+381 (0)31 640 901</span>
            </li>
            <li className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-green-400 text-lg"
              />
              <span>info@dinopark.rs</span>
            </li>
          </ul>

          {/* Društvene mreže */}
          <div className="mt-6 flex space-x-5">
            {[
              {
                icon: faFacebook,
                url: "https://www.facebook.com/dinoparkzlatibor/?locale=sr_RS",
              },
              {
                icon: faInstagram,
                url: "https://www.instagram.com/dinoparkzlatibor/",
              },
              {
                icon: faYoutube,
                url: "https://www.youtube.com/@dinoparkzlatibor2324",
              },
              {
                icon: faTiktok,
                url: "https://www.tiktok.com/@dinoparkzlatibor?is_from_webapp=1&sender_device=pc",
              }
            ].map((social, index) => (
              <Link key={index} href={social.url} target="_blank">
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-gray-400 text-2xl hover:text-green-400 transition-transform hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Donji deo - Prava & Copy */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-5">
        © {new Date().getFullYear()} Dino Park Zlatibor.{" "}
        {language === "sr" ? "Sva prava zadržana." : "All rights reserved."}
      </div>
    </footer>
  );
};

export default Footer;
