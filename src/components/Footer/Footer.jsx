import { motion } from "framer-motion";
import Logo from "../NavigationUtiles/Logo";

const linkElements = [
    { id: 1, section: "chi-siamo", title: "Chi siamo"},
    { id: 2, section: "menu", title: "Menu"},
    { id: 3, section: "dove-siamo", title: "Dove siamo"},
    { id: 4, section: "contatti", title: "Contatti"}
]

function Footer({ activeSection, setActiveSection}) {
    return ( 
        <footer className="p-4 bg-stone-900 border-t border-stone-700" id="footer">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-20"
            >
                <div className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-4">
                    <div className="text-stone-100 m-auto my-auto">
                        <Logo/>
                        <p className="text-stone-400 text-sm mt-2">Cucina lombarda autentica dal 1987</p>
                    </div>
                    <div>
                        <h3 className="text-amber-700 font-semibold uppercase tracking-widest text-sm mb-2">Link Rapidi</h3>
                        <div className="flex flex-col gap-1">
                            {linkElements.map( element => (
                                <a href={`#${element.section}`} key={element.id} className={`flex flex-col gap-1 text-stone-400 hover:text-white text-sm`}>
                                    <span>{element.title}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-amber-700 font-semibold uppercase tracking-widest text-sm mb-2">Contatti</h3>
                        <div className="flex flex-col gap-1">
                            <p className="text-stone-400 text-sm">Via Roma 14, Busto Arsizio (VA)</p>
                            <p className="text-stone-400 text-sm">+39 0331 123456</p>
                            <p className="text-stone-400 text-sm">info@osteriadelnaviglio.it</p>
                        </div>
                    </div>
                </div>
                <p className="border-t border-stone-800 mt-8 pt-6 text-stone-500 text-sm text-center">© 2026 Osteria del Naviglio · P.IVA 12345678901 · Tutti i diritti riservati</p>
            </motion.div>
        </footer>
    );
}

export default Footer;