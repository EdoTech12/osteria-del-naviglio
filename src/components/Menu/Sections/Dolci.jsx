import SectionElement from "./SectionElement";

const sectionElements = [
    { title: "Tiramisù della Casa", description: "Il classico risotto con zafferano e midollo", price: "€14" },
    { title: "Panna Cotta al Caramello", description: " Pasta fresca con ragù di carne lombardo ", price: "€12" },
    { title: "Torta di Mele", description: " Verdure di stagione e legumi ", price: "€10" }
]

function Dolci() {
    return ( 
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center mt-12">
            {sectionElements.map(element => (
                <SectionElement key={element.title} title={element.title} description={element.description} price={element.price}/>
            ))}
        </section>
    );
}

export default Dolci;