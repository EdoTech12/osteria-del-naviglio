import { UtensilsCrossed } from 'lucide-react';

function Logo() {
    return ( 
        <a className='flex items-center gap-2 cursor-pointer' href='#'>
            <UtensilsCrossed className='text-amber-700' size={24}/>
            <span className="text-xl font-semibold font-playfair">
                Osteria del Naviglio
            </span>
        </a>
    );
}

export default Logo;