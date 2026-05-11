import { motion } from "framer-motion";
import aboutImg from "../../assets/about.jpg"

function About() {
    return ( 
        <section className="bg-stone-50 p-4" id="chi-siamo">
            <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-36 flex flex-col lg:flex-row lg:items-center"
            >
                
                <div className="flex flex-col gap-3 w-full lg:w-1/2 m-auto px-4 lg:px-36 justify-center">
                    <h2 className="font-playfair text-4xl text-stone-800">La nostra storia</h2>
                    <div className="w-16 mt-3 mb-6 border-b-2 border-amber-700"></div>
                    <p className="text-stone-500 leading-relaxed">L'Osteria del Naviglio nasce nel 1987 dalla passione di famiglia per la cucina lombarda autentica. Da oltre trent'anni portiamo in tavola i sapori della tradizione dalla casoeula dell'inverno al risotto alla milanese, preparato ogni giorno con lo stesso amore di sempre. Una cucina semplice, onesta, fatta di ingredienti veri e ricette tramandate.</p>
                </div>
                <div className="flex justify-center w-full lg:w-1/2 m-auto px-4 mt-8 lg:mt-0 lg:px-36">
                    <img src={aboutImg} alt="" className="rounded-2xl shadow-lg shadow-stone-900 w-2/3"/>
                </div>
            </motion.div>
        </section>
    );
}

export default About;