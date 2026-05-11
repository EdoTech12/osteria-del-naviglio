import SectionElement from "./SectionElement";

const sectionElements = [
    { title: "Ossobuco in Gremolata", description: "Stinco di vitello con gremolata e risotto", price: "€22" },
    { title: "Casoeula", description: "Costine di maiale e verza, piatto della tradizione", price: "€18" },
    { title: "Cotoletta alla Milanese", description: "Vitello impanato e fritto nel burro", price: "€22" }
]

function Secondi() {
    return ( 
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center mt-12">
            {sectionElements.map(element => (
                <SectionElement key={element.title} title={element.title} description={element.description} price={element.price}/>
            ))}
        </section>
    );
}

export default Secondi;