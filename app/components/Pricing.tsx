"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Pricing = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section
      id="pricing"
      className="relative bg-black text-white overflow-visible py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-green-400 drop-shadow-lg mb-16 text-center">
          {language === "sr"
            ? "Cene Ulaznica i Sadržaja"
            : "Ticket and Attraction Prices"}
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-lg">
          {language === "sr"
            ? "Kupovina ulaznice omogućava jedan ulazak u park. Nakon izlaska iz parka, povratak nije moguć bez kupovine nove ulaznice."
            : "Each ticket grants a single entry into the park. Re-entry after exiting is not permitted without purchasing a new ticket."}
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cene ulaznica */}
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-8 hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              {language === "sr" ? "Cene ulaznica" : "Ticket Prices"}
            </h3>

            
            <ul className="text-lg space-y-2 text-gray-300">
              {[
                ["Deca do 3 godine – besplatno", "Children under 3 – Free"],
                ["Deca od 3 do 16 godina – 1.000,00 dinara", "Children (3–16 yrs) – 1,000 RSD"],
                ["Odrasli – 1.700,00 dinara", "Adults – 1,700 RSD"],
                ["1 odrasla osoba + 1 dete – 2.500,00 dinara", "1 Adult + 1 Child – 2,500 RSD"],
                ["1 odrasla osoba + 2 deteta – 3.200,00 dinara", "1 Adult + 2 Children – 3,200 RSD"],
                ["2 odrasle osobe + 1 dete – 3.600,00 dinara", "2 Adults + 1 Child – 3,600 RSD"],
                ["2 odrasle osobe + 2 deteta – 4.000,00 dinara", "2 Adults + 2 Children – 4,000 RSD"],
                ["2 odrasle osobe + 3 deteta – 4.300,00 dinara", "2 Adults + 3 Children – 4,300 RSD"],
                ["2 odrasle osobe sa decom do 3 godine – 3.000,00 dinara", "2 Adults with children under 3 – 3,000 RSD"],
                ["Penzioneri – 1.000,00 dinara", "Seniors – 1,000 RSD"],
                ["Ekskurzije – deca uzrasta do 7 godina (više od 20 dece) – 700,00 dinara", "School trips – children up to 7 years (more than 20 children) – 700 RSD"],
                ["Ekskurzije – deca uzrasta iznad 7 godina (više od 20 dece) – 900,00 dinara", "School trips – children over 7 years (more than 20 children) – 900 RSD"],
              ].map(([sr, en]) => (
                <li key={sr}>{language === "sr" ? sr : en}</li>
              ))}
            </ul>
          </div>

          {/* Cene sadržaja */}
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-8 hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              {language === "sr" ? "Cene sadržaja" : "Attraction Prices"}
            </h3>
            <ul className="text-lg space-y-2 text-gray-300">
              <li>
                {language === "sr"
                  ? "Jahanje konja – 500,00 din."
                  : "Horse Riding – 500 RSD"}
              </li>
              <li>
                {language === "sr"
                  ? "Vožnja kvadom – 400,00 din. (10 minuta)"
                  : "Quad Ride – 400 RSD (10 min)"}
              </li>
              <li>
                {language === "sr"
                  ? "Trambolina – 200,00 din. (5 minuta)"
                  : "Trampoline – 200 RSD (5 min)"}
              </li>
              <li>
                {language === "sr"
                  ? "Golf – 100,00 din. po štapu (30 min)"
                  : "Mini Golf – 100 RSD per club (30 min)"}
              </li>
              <li>
                {language === "sr"
                  ? "Streličarstvo – 100,00 din. (3 strele)"
                  : "Archery – 100 RSD (3 arrows)"}
              </li>
              <li>
                {language === "sr"
                  ? "Air soft – 250,00 din."
                  : "Airsoft – 250 RSD"}
              </li>
              <li>
                {language === "sr"
                  ? "Žetoni – 150,00 din."
                  : "Tokens – 150 RSD"}
              </li>
              <li>
                {language === "sr"
                  ? "Avantura – 500,00 din."
                  : "Adventure – 500 RSD"}
              </li>
              <li>
                {language === "sr"
                  ? "Mala avantura – 200,00 din."
                  : "Mini Adventure – 200 RSD"}
              </li>
              <li>
                {language === "sr"
                  ? "Veštačka stena – 400,00 din."
                  : "Climbing Wall – 400 RSD"}
              </li>
              <li>
                {language === "sr"
                  ? "Tjubing – 300,00 din. (5 spustova)"
                  : "Tubing – 300 RSD (5 runs)"}
              </li>
              <li>
                {language === "sr"
                  ? "Zip line – 250,00 din."
                  : "Zip Line – 250 RSD"}
              </li>
              <li>
                {language === "sr"
                  ? "Električni mini kvad – 200,00 din. (5 minuta)"
                  : "Electric Mini Quad – 200 RSD (5 min)"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
