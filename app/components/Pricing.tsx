"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Pricing = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="pricing" className="relative bg-black text-white overflow-visible py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-400 drop-shadow-lg mb-10 text-center">
          {language === "sr" ? "Cene Ulaznica i Sadržaja" : "Ticket and Attraction Prices"}
        </h2>

        {/* Cene ulaznica */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            {language === "sr" ? "Cene ulaznica" : "Ticket Prices"}
          </h3>
          <ul className="text-lg space-y-2 text-gray-300">
            <li>Odrasli – 1.300,00 dinara</li>
            <li>Deca od 3 do 16 godina – 800,00 dinara</li>
            <li>Deca do 3 godine – besplatno</li>
            <li>1 odrasla osoba + 1 dete – 1.800,00 dinara</li>
            <li>1 odrasla osoba + 2 deteta – 2.200,00 dinara</li>
            <li>2 odrasle osobe + 1 dete – 2.700,00 dinara</li>
            <li>2 odrasle osobe + 2 deteta – 2.900,00 dinara</li>
            <li>2 odrasle osobe + 3 deteta – 3.200,00 dinara</li>
            <li>Penzioneri – 800,00 dinara</li>
            <li>Dečije grupe (20+) osnovni paket – 500,00 dinara</li>
            <li>Dečije grupe (20+) paket + sadržaji – 600,00 dinara</li>
          </ul>
        </div>

        {/* Cene sadržaja */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">
            {language === "sr" ? "Cene sadržaja" : "Attraction Prices"}
          </h3>
          <ul className="text-lg space-y-2 text-gray-300">
            <li>Jahanje konja – 300,00 din.</li>
            <li>Vožnja kvadom – 400,00 din. (10 minuta)</li>
            <li>Trambolina – 200,00 din. (5 minuta)</li>
            <li>Golf – 100,00 din. po štapu (30 min)</li>
            <li>Streličarstvo – 100,00 din. (3 strele)</li>
            <li>Air soft – 250,00 din.</li>
            <li>Žetoni – 150,00 din.</li>
            <li>Avantura – 500,00 din.</li>
            <li>Mala avantura – 200,00 din.</li>
            <li>Veštačka stena – 400,00 din.</li>
            <li>Tjubing – 300,00 din. (5 spustova)</li>
            <li>Zip line – 250,00 din.</li>
            <li>Električni mini kvad – 200,00 din. (5 minuta)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
