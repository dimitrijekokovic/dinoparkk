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
                ["Deca od 3 do 16 godina – 1.000,00 din", "Children (3–16 yrs) – 1,000 RSD"],
                ["Odrasli – 1.700,00 din", "Adults – 1,700 RSD"],
                ["1 odrasla + 1 dete – 2.500,00 din", "1 Adult + 1 Child – 2,500 RSD"],
                ["1 odrasla + 2 dece – 3.200,00 din", "1 Adult + 2 Children – 3,200 RSD"],
                ["2 odrasle + 1 dete – 3.600,00 din", "2 Adults + 1 Child – 3,600 RSD"],
                ["2 odrasle + 2 dece – 4.000,00 din", "2 Adults + 2 Children – 4,000 RSD"],
                ["2 odrasle + 3 dece – 4.300,00 din", "2 Adults + 3 Children – 4,300 RSD"],
                ["2 odrasle osobe sa decom do 3 godine – 3.000,00 din", "2 Adults with children under 3 – 3,000 RSD"],
                ["Penzioneri – 1.000,00 din", "Seniors – 1,000 RSD"],
                ["Ekskurzije – deca uzrasta do 7 godina (više od 20 dece) – 700,00 din", "School trips – children up to 7 years (more than 20 children) – 700 RSD"],
                ["Ekskurzije – deca uzrasta iznad 7 godina (više od 20 dece) – 900,00 din", "School trips – children over 7 years (more than 20 children) – 900 RSD"],
              ].map(([sr, en]) => (
                <li key={sr}>{language === "sr" ? sr : en}</li>
              ))}
            </ul>

            <p className="mt-6 text-lg font-semibold text-green-300">
              {language === "sr"
                ? "Uz ulaznicu su svi sadržaji na otvorenom i zatvorenom besplatni."
                : "All outdoor and indoor attractions are free with your ticket."}
            </p>
          </div>

          {/* Sadržaji uz ulaznicu */}
          <div className="lg:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-xl p-8 hover:scale-[1.01] transition-transform duration-300">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              {language === "sr" ? "Šta dobijate uz ulaznicu" : "Included With Your Ticket"}
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              {language === "sr"
                ? "Svi sadržaji na otvorenom i zatvorenom su besplatni uz ulaznicu:"
                : "All outdoor and indoor attractions are free with your ticket:"}
            </p>
            <ul className="text-lg space-y-2 text-gray-300 list-disc list-inside">
              {[
                ["Avantura park", "Adventure park"],
                ["Veliki i mali zip line", "Big and small zip line"],
                ["Veštačka stena", "Climbing wall"],
                ["Dečije dino selo", "Kids' dino village"],
                ["Bandži trambolina", "Bungee trampoline"],
                ["Dečiji bioskop", "Kids' cinema"],
                ["Salon interaktivnih igara", "Interactive games room"],
                ["Jahanje dinosaurusa", "Dinosaur riding"],
                ["Streličarstvo", "Archery"],
                ["Air soft", "Airsoft"],
                ["Tubing", "Tubing"],
                ["Sportski tereni", "Sports courts"],
                ["Avanturističko-zabavno kompleksno igralište", "Adventure playground complex"],
                ["Mini električni kvadovi", "Mini electric quads"],
                ["Šah", "Chess"],
                ["Stoni tenis", "Table tennis"],
                ["Golf", "Golf"],
                ["Ergela jelena", "Deer farm"],
                ["Zoološki vrt", "Zoo"],
                [
                  "Fany kids caffe – hokej, stoni fudbal, salon raznih interaktivnih i arkadnih igara, svakodnevne tematske radionice sa animatorima",
                  "Fany kids caffe – air hockey, table football, interactive and arcade games room, daily themed workshops with animators",
                ],
                [
                  "Tokom zime sankalište uz besplatno korišćenje kliska, guma i sanki",
                  "In winter, a sledding area with free use of sleds, tubes and toboggans",
                ],
              ].map(([sr, en]) => (
                <li key={sr}>{language === "sr" ? sr : en}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
