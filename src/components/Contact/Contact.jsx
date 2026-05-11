import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
    const [ formData, setFormData ] = useState({ name: "", email: "", message: ""})
    const [ inviato, setInviato ] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setFormData({name: "", email: "", message: ""})
        setInviato(true)
        console.log("Messaggio inviato")
    }

    return ( 
        <section className="p-4 bg-stone-50" id="contatti">
            <motion.div className="py-36 ">
                <h2 className=" font-playfair text-4xl text-stone-800 text-center">Contatti</h2>
                <div className="w-16 mt-3 mb-6 mx-auto border-b-2 border-amber-700"></div>
                <p className="text-stone-500 text-center mb-8">Hai domande o vuoi prenotare un tavolo? Scrivici, ti risponderemo al più presto.</p>

                <form className="lg:max-w-lg w-full flex flex-col m-auto gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-stone-600 text-sm font-medium">Nome: </label> 
                        <input type="text" required name="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="bg-white border px-2 py-1 border-stone-300 rounded-xl focus:border-amber-700 focus:outline-none transition-colors duration-300 placeholder:text-stone-400"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-stone-600 text-sm font-medium">Email: </label> 
                        <input type="email" required name="name" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-white border px-2 py-1 border-stone-300 rounded-xl focus:border-amber-700 focus:outline-none transition-colors duration-300 placeholder:text-stone-400"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-stone-600 text-sm font-medium">Messaggio:</label>
                        <textarea name="message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}  className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-stone-800 placeholder-stone-400 focus:border-amber-700 focus:outline-none resize-none h-32"></textarea>
                    </div>
                    <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white rounded-xl px-6 py-3 w-full cursor-pointer">Invia messaggio</button>
                </form>

                {inviato && 
                    <p className="text-amber-700 text-center text-sm mt-3">
                        Messaggio inviato! Ti risponderemo al più presto.
                    </p>
                }
            </motion.div>
        </section>
    );
}

export default Contact;