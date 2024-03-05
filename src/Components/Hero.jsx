import Learning from '../Components/Learning';
import Gallery from '../Components/Gallery';
import Contacts from '../Components/Contacts';
export default function Hero() {
    return (
      <>
        <section className="bg-primary/15 w-full">
            <div className="max-w-screen-xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="lg:text-6xl md:text-5xl text-3xl text-primary font-bold mb-3">Welcome to JMDiv Frontend Learning.</h2>
                    <p className="md:w-4/5 mb-5 text-sm text-gray-500 leading-relaxed">Provides engaging courses for aspiring developers to master frontend skills through hands-on, interactive learning experiences.</p>
                    <a href="#Learning">
                        <button className="py-2 px-6 rounded bg-primary hover:bg-primary/20 hover:text-primary text-white font-bold text-sm ease-in duration-200">Explore To Learn</button>
                    </a>
                </div>
                <div>
                    <img className="m-auto lg:w-full md:w-80" src="https://fullstackengineering.academy/wp-content/uploads/2022/05/1_vTLOUrJWoo4Kzj7ly8o0jA-1.png" alt="" />
                </div>
            </div>
        </section>

        <section className='Home-Page'>
            <Learning />
            <Gallery />
            <Contacts />
        </section>
      </>
    )
}