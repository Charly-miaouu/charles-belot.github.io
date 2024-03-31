import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col items-center justify-between p-12 bg-gray text-black text-center">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-rows-2">

        <div className="text-lg text-m lg:text-left">
          <h1 className="text-2xl font-bold lg:text-left">Comment me contacter ?</h1><br />
          <p style={{color:'#90918E'}}>Vous pouvez me contacter par mail à l'adresse suivante : <a href="mailto:xai.charly@gmail.com" className="underline"> xai.charly@gmail.com</a>
          <p style={{color:'#90918E'}}>Vous pouvez aussi me contacter par téléphone au +33.7.83.88.01.92</p>
          </p>
        </div>
        <div>
        </div>
      </div>

    </main>
  );
}
