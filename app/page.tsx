'use client';

import Header from '../Components/Header'

import SocialSidebar from '../Components/SocialSidebar'
import { Target, ClipboardList, Wallet, PhoneCall } from 'lucide-react'

import FaqItem from '../Components/FaqItem'

import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Header />
      <SocialSidebar />

      {/* HERO */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden pt-5 md:pt-16 pb-16 px-4 sm:px-6 md:px-12 xl:px-24"
      >
      {/* Layout desktop */}
      <div className="hidden md:grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Testo Hero con animazione slide-in da sinistra */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            Diventa un <br />
            Terapista D&apos;Elite
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Percorsi per operatori olistici e del benessere che vogliono distinguersi e crescere davvero.
          </p>
          <motion.a
            href="#percorso"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-2 px-8 py-3 bg-emerald-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition duration-300"
          >
            Scopri il percorso
          </motion.a>
        </motion.div>

        {/* Immagine desktop con fade-in leggero e zoom-in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative flex justify-center md:justify-end z-0"
        >
          <img
            src="/hero.jpg"
            alt="Gianluigi Merisio"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain opacity-95"
          />
        </motion.div>
      </div>



      {/* MOBILE HERO - solo su mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center text-center md:hidden px-4 pt-0 pb-16 bg-gradient-to-br from-gray-900 to-black text-white"
      >
        {/* Immagine con sfumatura rialzata */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-72 relative -mb-14 z-10"
        >
          <img
            src="/hero.jpg"
            alt="Gianluigi Merisio"
            className="w-full object-contain"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, rgba(0, 0, 0, 0.4) 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, rgba(0, 0, 0, 0.4) 85%, transparent 100%)',
            }}
          />
        </motion.div>

        {/* Testo sovrapposto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative z-20 mt-2 space-y-4"
        >
          <h1 className="text-3xl font-extrabold leading-snug">
            Diventa un <br />
            Professionista Consapevole
          </h1>
          <p className="text-base text-gray-300">
            Percorsi per operatori olistici e del benessere che vogliono distinguersi e crescere davvero.
          </p>
          <motion.a
            href="#percorso"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-full shadow hover:scale-105 transition"
          >
            Scopri il percorso
          </motion.a>
        </motion.div>
      </motion.div>


      </section>


      {/* PERCORSO */}
      <section id="percorso" className="bg-gray-900 py-20 px-6 md:px-12 xl:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Percorso Strategico Evolutivo</h2>

          {/* TIMELINE DEL PERCORSO */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-24">
              <h3 className="text-2xl font-bold mb-8 text-center text-emerald-400">Le 5 Fasi del Percorso Strategico Evolutivo</h3>
              <div className="relative border-l border-gray-700 ml-4 space-y-10">

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >

                  {/* Fase 1 */}
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                    <h4 className="text-xl font-semibold text-white">1. Sbatti la testa contro lo specchio™</h4>
                    <p className="text-gray-300">Consapevolezza, verità, roadmap iniziale — test diagnostici e mappatura punti ciechi.</p>
                  </div>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >

                  {/* Fase 2 */}
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                    <h4 className="text-xl font-semibold text-white">2. La strategia: dalla coscienza all’azione</h4>
                    <p className="text-gray-300">Posizionamento, mindset strategico, bio professionale e piano d’azione personalizzato.</p>
                  </div>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >

                  {/* Fase 3 */}
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                    <h4 className="text-xl font-semibold text-white">3. Costruisci e differenziati</h4>
                    <p className="text-gray-300">Routine produttiva, strategia personale, verticalità e impatto reale sul tuo mercato.</p>
                  </div>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >

                  {/* Fase 4 */}
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                    <h4 className="text-xl font-semibold text-white">4. Analizza, ottimizza e scala</h4>
                    <p className="text-gray-300">KPI, miglioramento continuo e creazione di un sistema sostenibile di crescita.</p>
                  </div>

                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >

                  {/* Fase 5 */}
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                    <h4 className="text-xl font-semibold text-white">5. Realizza e valorizza il cambiamento</h4>
                    <p className="text-gray-300">Consolidamento, piano di sviluppo personale, toolkit operativo e piena autonomia.</p>
                  </div>

                </motion.div>

              </div>
            </div>
          </section>

          <div className="bg-white text-black p-6 md:p-8 rounded-xl shadow-xl space-y-8 text-left max-w-xl mx-auto">

            {/* A chi è rivolto */}
            <div className="flex items-center gap-4">
              <div className="min-w-[2rem] flex justify-center items-center">
                <Target className="text-emerald-500 w-7 h-7" />
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>A chi è rivolto:</strong> terapisti, operatori del benessere e professionisti olistici che vogliono <span className="underline underline-offset-4">posizionarsi con autenticità</span> e ottenere risultati reali.
              </p>
            </div>

            {/* Include */}
            <div className="flex items-center gap-4">
              <div className="min-w-[2rem] flex justify-center items-center">
                <ClipboardList className="text-emerald-500 w-7 h-7" />
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>Include:</strong> 12 sessioni 1:1, strumenti pratici, supporto WhatsApp, test iniziali e materiali personalizzati.
              </p>
            </div>

            {/* Investimento */}
            <div className="flex items-center gap-4">
              <div className="min-w-[2rem] flex justify-center items-center">
                <Wallet className="text-emerald-500 w-7 h-7" />
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>Investimento:</strong> <span className="font-semibold">880€</span> (2 tranche da 440€)
              </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <a
                href="https://wa.me/3489841408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5" />
                Richiedi una Call Gratuita
              </a>
            </div>
          </div>



        </div>
      </section>

      {/* ABOUT M2E */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/fotoprofilo.jpg"
            alt="Foto di Merisio Gianluigi"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Merisio Gianluigi</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Professionista con eccellenti competenze tecniche e manageriali, maturate in molti anni nel settore delle vendite e del beauty.
                Mi distinguo per leadership, pianificazione strategica e capacità di aiutare aziende e persone a raggiungere risultati concreti.
                Amo costruire relazioni autentiche, stimolare il cambiamento e accompagnare professionisti nella loro evoluzione.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIANZE */}
      <section id="testimonianze" className="bg-black py-20 px-6 md:px-12 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Dicono di me</h2>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

              {/* Testimonianza 1 */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:scale-[1.02] transition duration-300 ease-out">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente 1" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Chiara R.</h4>
                    <p className="text-sm text-gray-400">Estetista professionale</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  “Il percorso con Gianluigi è stato una svolta. Ho capito chi sono, cosa voglio e ho finalmente una strategia concreta.”
                </p>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

              {/* Testimonianza 2 */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:scale-[1.02] transition duration-300 ease-out">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Cliente 2" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Luca M.</h4>
                    <p className="text-sm text-gray-400">Massoterapista</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  “Mi sono smarcato dal ‘faccio tutto per tutti’. Ora lavoro solo con i clienti giusti, e guadagno di più con meno stress.”
                </p>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

              {/* Testimonianza 3 */}
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:scale-[1.02] transition duration-300 ease-out">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Cliente 3" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Francesca D.</h4>
                    <p className="text-sm text-gray-400">Coach Olistica</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  “Gianluigi ha un dono: ti aiuta a vedere quello che non vedi. Ho ricostruito la mia offerta da zero, con autenticità.”
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      </section>






      {/* FAQ */}
      <section id="faq" className="bg-gray-900 py-20 px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Domande Frequenti</h2>

          <div className="space-y-6">

              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaqItem
                  question="Devo avere già un’attività avviata per accedere al percorso?"
                  answer="No, puoi iniziare anche se sei in fase di transizione o apertura. Il percorso ti aiuterà proprio a partire con consapevolezza e metodo."
                />
              </motion.section>

              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaqItem
                  question="Posso pagare in due rate?"
                  answer="Sì, puoi versare 440€ all’inizio e i restanti 440€ dopo la seconda fase. Il pagamento può essere effettuato via bonifico o PayPal."
                />
              </motion.section>

              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FaqItem
                  question="Cosa succede se salto una sessione?"
                  answer="Nessun problema: possiamo riprogrammarla entro 10 giorni. La flessibilità fa parte del mio metodo."
                />
              </motion.section>

          </div>
        </div>
      </section>


      {/* VIDEO + CTA WHATSAPP */}
      <section id="video" className="bg-black py-20 px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Guarda il video</h2>
          <p className="text-lg text-gray-300 mb-10">Chi sono, da dove parto e il mio percorso!</p>

          <div className="relative pb-[56.25%] h-0 mb-10">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/5zmUll1XwvI"
              title="Merisio Gianluigi - Percorso Strategico Evolutivo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/nTbx_ynapZg"
                title="Video 1"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dlxFpYoP-hk"
                title="Video 2"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/2m78egHsUJM"
                title="Video 3"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="..."
          >


            <a
              href="https://wa.me/3489841408?text=Ciao%20Gianluigi%2C%20ho%20visto%20il%20video%20e%20voglio%20saperne%20di%20pi%C3%B9%20sul%20percorso%20evolutivo."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block bg-emerald-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition"
            >
              Scrivimi su WhatsApp
            </a>

          </motion.a>
        </div>
      </section>

      {/* CONTATTI */}
      {/* FORM */}
      <section id="contatti" className="bg-black text-white py-24 px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Contattami</h2>
          <p className="text-lg text-gray-400 mb-12">
            Scrivimi per richiedere una call gratuita o avere maggiori informazioni sul percorso.
          </p>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID" // ⬅️ sostituisci con il tuo endpoint Formspree o simile
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          >
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium">Nome</label>
              <input
                type="text"
                name="nome"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium">Messaggio</label>
              <textarea
                name="messaggio"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="mt-4 inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                Invia Messaggio
              </button>
            </div>
          </form>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800 py-10 text-center text-sm text-gray-400">
        <div className="mb-6">
          <p className="text-base font-semibold text-white mb-4">Seguimi sui social</p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://www.instagram.com/i.m.gigi_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/gianluigi-merisio-22a04912b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@i.m.Gigi_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <p className="mt-6 text-gray-500">&copy; 2025 Merisio Gianluigi. Tutti i diritti riservati.</p>
      </footer>

    </>
  )
}
