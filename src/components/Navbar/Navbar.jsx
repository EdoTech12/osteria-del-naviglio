import { useState } from 'react';
import NavigationElement from '../Buttons/MenuElement/NavigationElement';
import Logo from '../NavigationUtiles/Logo';

const navbarElements = [
    { id: 1, section: "chi-siamo", title: "Chi siamo"},
    { id: 2, section: "menu", title: "Menu"},
    { id: 3, section: "dove-siamo", title: "Dove siamo"},
    { id: 4, section: "contatti", title: "Contatti"}

]

function Navbar({ activeSection, setActiveSection}) {

    return ( 
        <nav className="fixed w-full bg-stone-900 text-stone-100 p-4 grid grid-cols-3 z-60">
            <Logo />
            <div className="flex gap-4 items-center justify-center">
                {navbarElements.map(element => (
                    <NavigationElement key={element.id} link={element.section} textColor={"text-stone-100"} section={element.section} sectionActive={activeSection} setSectionActive={setActiveSection}>{element.title}</NavigationElement>
                ))}
            </div>
            <div className='flex justify-end'>
                <a href="#contatti"
                    class="group relative inline-block overflow-hidden rounded bg-amber-700  px-4 py-2 text-sm font-medium focus:outline-none focus:ring">
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-stone-100 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-stone-100 transition-all duration-200 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-stone-100 transition-all duration-200 group-hover:w-full"></span>
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-stone-100 transition-all duration-200 group-hover:h-full"></span>
                    Prenota un tavolo
                </a>
            </div>
        </nav>
    );
}

export default Navbar;