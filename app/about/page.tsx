import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
        <div>
        <h1 className="text-2xl font-bold lg:text-left underline">Mes Passions :</h1><br /><br />
        <p className="text-lg opacity-50 text-sm lg:text-left">Je suis passionné par le vélo, la course à pied, les sports automobile, le ski. Ce que j'aime dans le sport c'est me lancer des défis pour trouver mes limites.</p><br />
        <br /><br />
        <p className="text-lg opacity-50 text-sm lg:text-left">Plus d'infos en dessous</p>
        </div>
        <div className="bg-no-repeat bg-contain bg-center bg-[url('/semi.jpg')]">
        </div>

      </div><br />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
        <h1 className="text-2xl font-bold lg:text-left underline">
          Sport :
        </h1>
        <h2 className="text-2xl font-bold lg:text-left underline">
          Mes PR :
        </h2><br />
      </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
        <p className="text-lg opacity-50 text-m lg:text-left underline">
          Course à pied :
        </p>
        <p className="text-lg opacity-50 text-sm lg:text-left">
          1 Km : 3'42" (en cours d'amélioration)<br />
          5 Km : 23'55" (en cours d'amélioration)<br />
          10 Km : 51'31" (en cours d'amélioration)<br />
          15 Km : 1h26'47"<br />
          20 km : 1h56'44" <br />
          Semi : 2h03'18"<br />
          Marathon : Work in progress...<br />
        </p>
      </div><br />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
        <p className="text-lg opacity-50 text-m lg:text-left underline">
          Vélo :
        </p>
        <p className="text-lg opacity-50 text-sm lg:text-left">
          20 Km : 49'55" (en cours d'amélioration)<br />
          40 Km : 2h10'35" (en cours d'amélioration)<br />
          60 Km : ------ (en cours d'amélioration)<br />
          80 Km : ------ (en cours d'amélioration)<br />
          100 Km : ----- (en cours d'amélioration)<br />
          Plus long : 112.4 km 5h21' (Paris-Roubaix 145km bientot)<br /><br />
          *En raison de la préparation du semi-marathon et par manque de temps, je n'ai pas pu m'entraîner correctement pour le vélo. Les vrais temps sont à venir.
        </p>
      </div><br />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">
        <div>
        <h1 className="text-2xl font-bold lg:text-left underline">
          Mes équipements :
        </h1><br />
        <p className="text-lg opacity-50 text-sm lg:text-left">
          - Vélo : <button className="underline" style={{color:'#337ADE'}}><a href="/velo.jpg">Pinarello Crossista FCX T700</a></button>, Groupe GRX 1x12V<br />
          - Compteur : <button className="underline" style={{color:'#337ADE'}}><a href="https://www.garmin.com/fr-FR/p/621224">Garmin Edge 530</a></button><br />
          - Chaussures de course à pied : <button className="underline" style={{color:'#337ADE'}}><a href="https://www.saucony.com/FR/fr_FR/ride-15-tr/53002M.html">Saucony Ride 15 TR</a></button><br />
          - Montre de course à pied : <button className="underline" style={{color:'#337ADE'}}><a href="https://www.garmin.com/fr-FR/p/780196/pn/010-02641-30">Garmin Forerunner 255 Music</a></button><br />
        </p>
        </div>
        <div>
        <h1 className="text-2xl font-bold lg:text-left underline">
          Mes objectifs :
        </h1><br />
        <p className="text-lg opacity-50 text-sm lg:text-left">
          - Courir un marathon<br />
          - Finir un Gravelman 350<br />
          - Améliorer mes temps sur toute les distances en course à pied et en vélo<br />
          - Faire un vrai tour de France en vélo<br />
        </p>
      </div>
      </div>

    </main>
  );
}
