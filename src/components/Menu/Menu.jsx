import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MenuElement from "../Buttons/MenuElement/MenuElement";
import Primi from "./Sections/Primi";
import Secondi from "./Sections/Secondi";
import Dolci from "./Sections/Dolci";

const menuElements = [
    { id: 1, title: "Primi", section: "primi"},
    { id: 2, title: "Secondi", section: "secondi"},
    { id: 3, title: "Dolci", section: "dolci"}
]

const menu = [
    { section: "primi", component: <Primi />},
    { section: "secondi", component: <Secondi />},
    { section: "dolci", component: <Dolci />}
]

function Menu() {
    const [ sectionActive, setSectionActive] = useState("primi")

    return ( 
        <section className="p-4 bg-stone-100" id="menu">
            <motion.div className="py-36">
                <h2 className="font-playfair text-4xl text-stone-800 text-center">Menu</h2>
                <div className="w-16 mt-3 mb-6 mx-auto border-b-2 border-amber-700"></div>
                <div className="flex gap-6 justify-center mt-6">
                    {menuElements.map( element => (
                        <MenuElement key={element.id} section={element.section} sectionActive={sectionActive} setSectionActive={setSectionActive} textColor={"text-stone-900"}>{element.title}</MenuElement>
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={sectionActive}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                    >
                        {menu.find(e => e.section === sectionActive)?.component}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
}

export default Menu;