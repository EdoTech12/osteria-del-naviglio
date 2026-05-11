import SectionElement from "./SectionElement";

const sectionElements = [
    { title: "Risotto alla Milanese", description: "Il classico risotto con zafferano e midollo", price: "€14" },
    { title: "Tagliatelle al Ragù", description: " Pasta fresca con ragù di carne lombardo ", price: "€12" },
    { title: "Minestrone della Nonna", description: " Verdure di stagione e legumi ", price: "€10" }
]

function Primi() {
    return ( 
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center mt-12">
            {sectionElements.map(element => (
                <SectionElement key={element.title} title={element.title} description={element.description} price={element.price}/>
            ))}
        </section>
    );
}

export default Primi;