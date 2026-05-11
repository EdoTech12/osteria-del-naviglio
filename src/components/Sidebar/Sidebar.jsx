import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Logo from '../NavigationUtiles/Logo';
import NavigationElement from '../Buttons/MenuElement/NavigationElement';

const sidebarElements = [
    { id: 1, section: "chi-siamo", title: "Chi siamo"},
    { id: 2, section: "menu", title: "Menu"},
    { id: 3, section: "dove-siamo", title: "Dove siamo"},
    { id: 4, section: "contatti", title: "Contatti"}

]

function Sidebar({ activeSection, setActiveSection}) {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
            <nav className='fixed flex gap-2 w-full text-stone-100 bg-stone-900 z-60 p-1'>
                <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} color='#f5f5f4'/>
                <Logo />
            </nav>
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden ${
                    isOpen ? "block" : "hidden"
                }`}
                onClick={() => setIsOpen(!isOpen)}
            />

            <aside
                className={`
                    fixed top-0 left-0 h-screen w-80
                    bg-stone-900 text-stone-100
                    z-50
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    transform transition-transform duration-300
                    lg:translate-x-0
                `}
            >
                <div className="flex flex-col mt-24 gap-4 items-center justify-center">
                    {sidebarElements.map(element => (
                        <NavigationElement key={element.id} link={element.section} section={element.section} sectionActive={activeSection} setSectionActive={setActiveSection}>{element.title}</NavigationElement>
                    ))}

                    <a href="#contatti"
                        className="group relative inline-block overflow-hidden rounded bg-amber-700  px-4 py-2 text-sm font-medium focus:outline-none focus:ring">
                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-stone-100 transition-all duration-200 group-hover:w-full"></span>
                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-stone-100 transition-all duration-200 group-hover:h-full"></span>
                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-stone-100 transition-all duration-200 group-hover:w-full"></span>
                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-stone-100 transition-all duration-200 group-hover:h-full"></span>
                        Prenota un tavolo
                    </a>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;