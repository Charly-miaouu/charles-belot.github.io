import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col items-center justify-between p-12 bg-gray text-black text-center">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2">

        <div className="lg:grid-rows-2">
          <h1 className="text-2xl font-bold lg:text-left">Bonjour, je m'appelle Charles Belot,</h1><br />
          <p className="text-lg text-m lg:text-left" style={{color:'#90918E'}} >J'ai 19 ans, je suis étudiant en informatique, j'ai des compétences en HTML, CSS, Javascript, C, Python, Java, SQL, Réseau & Cybersécurité.</p>
          <p className="text-lg text-m lg:text-left" style={{color:'#90918E'}}> Je parle Francais et Anglais (B2).</p>
          <p className="text-lg text-m lg:text-left" style={{color:'#90918E'}}>Je suis passionné par l'informatique et les nouvelles technologies, je suis rigoureux , autonome et curieux.</p>
        </div>

        <div className="bg-no-repeat bg-contain bg-center bg-[url('/pdp.avif')] relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert">
        </div>
      </div>

    </main>
  );
}
