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

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cene ulaznica */}
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-8 hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              {language === "sr" ? "Cene ulaznica" : "Ticket Prices"}
            </h3>
            <ul className="text-lg space-y-2 text-gray-300">
              <li>{language === "sr" ? "Odrasli – 1.300,00 dinara" : "Adults – 1,300 RSD"}</li>
              <li>{language === "sr" ? "Deca od 3 do 16 godina – 800,00 dinara" : "Children (3–16 yrs) – 800 RSD"}</li>
              <li>{language === "sr" ? "Deca do 3 godine – besplatno" : "Children under 3 – Free"}</li>
              <li>{language === "sr" ? "1 odrasla osoba + 1 dete – 1.800,00 dinara" : "1 Adult + 1 Child – 1,800 RSD"}</li>
              <li>{language === "sr" ? "1 odrasla osoba + 2 deteta – 2.200,00 dinara" : "1 Adult + 2 Children – 2,200 RSD"}</li>
              <li>{language === "sr" ? "2 odrasle osobe + 1 dete – 2.700,00 dinara" : "2 Adults + 1 Child – 2,700 RSD"}</li>
              <li>{language === "sr" ? "2 odrasle osobe + 2 deteta – 2.900,00 dinara" : "2 Adults + 2 Children – 2,900 RSD"}</li>
              <li>{language === "sr" ? "2 odrasle osobe + 3 deteta – 3.200,00 dinara" : "2 Adults + 3 Children – 3,200 RSD"}</li>
              <li>{language === "sr" ? "Penzioneri – 800,00 dinara" : "Seniors – 800 RSD"}</li>
              <li>{language === "sr" ? "Dečije grupe (20+) osnovni paket – 500,00 dinara" : "Children Groups (20+) Basic – 500 RSD"}</li>
              <li>{language === "sr" ? "Dečije grupe (20+) paket + sadržaji – 600,00 dinara" : "Children Groups (20+) w/ Attractions – 600 RSD"}</li>
            </ul>
          </div>

          {/* Cene sadržaja */}
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-8 hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              {language === "sr" ? "Cene sadržaja" : "Attraction Prices"}
            </h3>
            <ul className="text-lg space-y-2 text-gray-300">
              <li>{language === "sr" ? "Jahanje konja – 300,00 din." : "Horse Riding – 300 RSD"}</li>
              <li>{language === "sr" ? "Vožnja kvadom – 400,00 din. (10 minuta)" : "Quad Ride – 400 RSD (10 min)"}</li>
              <li>{language === "sr" ? "Trambolina – 200,00 din. (5 minuta)" : "Trampoline – 200 RSD (5 min)"}</li>
              <li>{language === "sr" ? "Golf – 100,00 din. po štapu (30 min)" : "Mini Golf – 100 RSD per club (30 min)"}</li>
              <li>{language === "sr" ? "Streličarstvo – 100,00 din. (3 strele)" : "Archery – 100 RSD (3 arrows)"}</li>
              <li>{language === "sr" ? "Air soft – 250,00 din." : "Airsoft – 250 RSD"}</li>
              <li>{language === "sr" ? "Žetoni – 150,00 din." : "Tokens – 150 RSD"}</li>
              <li>{language === "sr" ? "Avantura – 500,00 din." : "Adventure – 500 RSD"}</li>
              <li>{language === "sr" ? "Mala avantura – 200,00 din." : "Mini Adventure – 200 RSD"}</li>
              <li>{language === "sr" ? "Veštačka stena – 400,00 din." : "Climbing Wall – 400 RSD"}</li>
              <li>{language === "sr" ? "Tjubing – 300,00 din. (5 spustova)" : "Tubing – 300 RSD (5 runs)"}</li>
              <li>{language === "sr" ? "Zip line – 250,00 din." : "Zip Line – 250 RSD"}</li>
              <li>{language === "sr" ? "Električni mini kvad – 200,00 din. (5 minuta)" : "Electric Mini Quad – 200 RSD (5 min)"}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
