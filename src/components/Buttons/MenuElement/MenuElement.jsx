import { motion } from "framer-motion";

function MenuElement({ children, sectionActive, section, setSectionActive, textColor }) {
    return ( 
        <button className={`flex flex-col items-center gap-1 hover:text-amber-700 ${sectionActive === section ? "text-amber-700" : textColor} transition-colors duration-300 cursor-pointer`} onClick={() => setSectionActive(section)}>
            <span>{children}</span>
            <div className="h-0.5 w-full relative">
                {sectionActive === section && (
                    <motion.div
                        layoutId="menu-indicator"
                        className={`absolute inset-0 rounded-full bg-amber-700`}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />

                )}
            </div>
        </button>
    );
}

export default MenuElement;