import { motion } from "framer-motion";

function Location() {
    return ( 
        <section className="p-4 bg-stone-900" id="dove-siamo">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-36"
            >
                <h2 className="font-playfair text-4xl text-white text-center">Dove siamo</h2>
                <div className="w-16 mt-3 mb-6 mx-auto border-b-2 border-amber-700"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
                    <div className="flex flex-col gap-2 mt-8 w-full px-12 lg:w-auto">
                        <h3 className="text-amber-700 font-semibold uppercase tracking-widest text-sm">Orari</h3>
                        <span className="text-stone-300 mt-3">Mar — Ven: 12:00&ndash;14:30 / 19:00&ndash;22:30</span>
                        <span className="text-stone-300">Sab — Dom: 12:00&ndash;15:00 / 19:00&ndash;23:00</span>
                        <span className="text-stone-500">Lunedì: Chiuso</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-8 w-full px-12 lg:w-auto">
                        <h3 className="text-amber-700 font-semibold uppercase tracking-widest text-sm">Indirizzo</h3>
                        <span className="text-stone-300 mt-3">Via Roma 14, Busto Arsizio (VA)</span>
                        <span className="text-amber-700 hover:underline cursor-pointer">+39 0331 123456</span>
                        <span className="text-amber-700 hover:underline cursor-pointer">info@osteriadelnaviglio.it</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Location;