export default function Header() {
    return (
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex" style={{color: '#B20D30'}} >
                    <a href="/CV_Charles_Belot.pdf"
                    target="_blank"
                    ><button className="underline group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 hover:text-black">Appuyez ici pour voir mon CV</button></a>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"
                 style={{color: '#B20D30'}}>
                Par Charles Belot
            </div>
            </div>
    )
}