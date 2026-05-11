import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

function Hero({ isMobile }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"] 
    });
    const filter = useTransform(
        scrollYProgress,
        [0, 1],
        ["blur(0px)", "blur(10px)"]
    );
    return ( 
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${isMobile ? "background-sm" : "background-lg p-40"} h-full`} style={{ filter }} ref={ref}
        >
            <div className="text-stone-100 text-7xl font-bold px-14 lg:py-4 w-fit py-36">
                <h1 className="font-playfair">Osteria</h1>
                <h1 className="font-playfair">Del</h1>
                <h1 className="font-playfair">Naviglio</h1>
                <p className="italic text-sm font-normal pt-3">Cucina lombarda dal 1987 · Busto Arsizio</p>
                <a href="#contatti"
                    className="group relative inline-block overflow-hidden rounded bg-amber-700  px-4 py-2 text-sm font-medium focus:outline-none focus:ring">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-stone-100 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-stone-100 transition-all duration-200 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-stone-100 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-stone-100 transition-all duration-200 group-hover:h-full"></span>
                    Prenota un tavolo
                </a>
            </div>
        </motion.section>
    );
}

export default Hero;