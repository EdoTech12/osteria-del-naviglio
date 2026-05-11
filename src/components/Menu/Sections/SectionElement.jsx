function SectionElement({ title, description, price }) {
    return ( 
        <div className="flex items-center justify-between w-full lg:w-1/2 px-8">
            <div className="">
                <h3 className="text-stone-800 font-semibold text-lg">{ title }</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{ description }</p>
            </div>
            <h2 className="text-amber-700 font-semibold">{ price }</h2>
        </div>
    );
}

export default SectionElement;