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


    {/* HERO — RUGGINE (desktop: pannello bianco; mobile: card bianca) */}
    <section
      id="hero"
      className="relative overflow-hidden bg-brand-rust text-white pt-28 md:pt-44 pb-16 px-4 sm:px-6 md:px-12 xl:px-24"
    >
      {/* Pannello bianco SOLO desktop */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-y-0 right-0 w-[54%] bg-brand-white"
        style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0 100%)' }}
      />

      {/* DESKTOP */}
      <div className="hidden md:grid relative max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="relative z-10 text-left space-y-6">
          <h1 className="font-display text-4xl md:text-5xl xl:text-6xl leading-tight">
            Diventa un <br /> Terapista D&apos;Elite
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Il Metodo Terapisti d’Élite nasce per un motivo semplice: smettere di lavorare tanto e valere poco.
            È per chi ha competenze vere, ma è ancora incastrato in un lavoro precario, frammentato e sottopagato.<br/>
            Per chi sa fare il suo mestiere, ma non sa farlo funzionare.<br/>
            Non è l’ennesimo corso motivazionale.<br/>
            È un sistema pratico che ti costringe a fare ordine e a costruire un lavoro serio:
            sapere cosa offri, quanto vali, a chi ti rivolgi e come farti pagare.
            <br />
            Qui trasformi il talento in identità professionale.<br/>
            Offerta, clienti, tempo, soldi e comunicazione: tutto torna sotto controllo.
            <br/>
            Il Metodo non ti coccola.<br/>
            Ti sveglia.<br/>
            Ti fa prendere decisioni e iniziare a ragionare da professionista d&apos;élite, non da operatore qualunque.
          </p>
          <a
            href="#percorso"
            className="inline-block mt-2 px-8 py-3 bg-brand-white text-brand-black font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Scopri il percorso
          </a>
        </div>

        <div className="relative z-10 flex justify-center md:justify-end">
          <img
            src="/hero.jpg"
            alt="Gianluigi Merisio"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,.25)]"
          />
        </div>
      </div>

      {/* MOBILE — immagine su ruggine + CARD bianca per testo/CTA */}
      <div className="md:hidden">
        <div className="px-4 pt-2">
          <img
            src="/hero.jpg"
            alt="Gianluigi Merisio"
            className="mx-auto w-56 sm:w-64 h-auto object-contain"
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, rgba(0,0,0,.28) 84%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, rgba(0,0,0,.28) 84%, transparent 100%)',
            }}
          />
        </div>

        {/* Card bianca che crea lo stacco netto dal ruggine */}
        <div className="-mt-2 bg-brand-white text-brand-black rounded-t-[28px] shadow-[0_-10px_30px_rgba(0,0,0,.08)] px-5 pt-6 pb-10 text-left">
          <h1 className="font-display text-[26px] leading-tight">
            Diventa un <br /> Terapista D&apos;Elite
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-brand-black/70">
                Il Metodo Terapisti d’Élite nasce per un motivo semplice: smettere di lavorare tanto e valere poco.
                È per chi ha competenze vere, ma è ancora incastrato in un lavoro precario, frammentato e sottopagato. <br/>
                Per chi sa fare il suo mestiere, ma non sa farlo funzionare.
                Non è l’ennesimo corso motivazionale.<br/>
                È un sistema pratico che ti costringe a fare ordine e a costruire un lavoro serio:
                sapere cosa offri, quanto vali, a chi ti rivolgi e come farti pagare.
                Qui trasformi il talento in identità professionale.<br/>
                Offerta, clienti, tempo, soldi e comunicazione: tutto torna sotto controllo.<br/>
                Il Metodo non ti coccola. Ti sveglia.<br/>
                Ti fa prendere decisioni e iniziare a ragionare da professionista d&apos;élite, non da operatore qualunque.
          </p>
          <a
            href="#percorso"
            className="mt-5 inline-block px-6 py-3 bg-brand-rust text-white font-semibold rounded-full shadow hover:scale-105 transition"
          >
            Scopri il percorso
          </a>
        </div>

        {/* sottile fascia bianca per raccordare alla sezione successiva */}
        <div aria-hidden className="h-4 bg-brand-white" />
      </div>

      {/* SEPARATORE DESKTOP: obliquo verso il bianco */}
      <svg
        aria-hidden
        className="hidden md:block absolute bottom-0 left-0 right-0 w-full h-20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d="M0,120 L1440,0 L1440,120 Z" fill="#FFFFFF" />
      </svg>
    </section>

      {/* PERCORSO — BIANCO */}
      <section id="percorso" className="bg-brand-white text-brand-black py-24 px-6 md:px-12 xl:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl mb-8 text-center text-brand-black">METODO ELITE</h2>

          {/* TIMELINE */}
          <section className="py-12">
            <div className="max-w-5xl mx-auto px-6 md:px-12 xl:px-24">
              <h3 className="font-display text-2xl mb-8 text-center text-brand-rust">Le 5 Fasi del Percorso Strategico Evolutivo</h3>
              <div className="relative border-l border-brand-sand/40 ml-4 space-y-10">

                {/* Fase 1 */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-brand-rust rounded-full"></div>
                    <h4 className="text-xl font-semibold text-brand-black">1. ESPLORA</h4>
                    <p className="text-brand-black/70">Capire esattamente chi sei come professionista, cosa vuoi ottenere e quali ostacoli ti stanno bloccando.</p>
                  </div>
                </motion.div>

                {/* Fase 2 */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-brand-rust rounded-full"></div>
                    <h4 className="text-xl font-semibold text-brand-black">2. LANCIA</h4>
                    <p className="text-brand-black/70">Tradurre la nuova consapevolezza in un piano concreto per raggiungere i tuoi obiettivi e iniziare a vedere i primi risultati.</p>
                  </div>
                </motion.div>

                {/* Fase 3 */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-brand-rust rounded-full"></div>
                    <h4 className="text-xl font-semibold text-brand-black">3. IMPOSTA</h4>
                    <p className="text-brand-black/70">Creare un tuo stile professionale unico che ti distingua e renda riconoscibile sul mercato.</p>
                  </div>
                </motion.div>

                {/* Fase 4 */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-brand-rust rounded-full"></div>
                    <h4 className="text-xl font-semibold text-brand-black">4. TESTA</h4>
                    <p className="text-brand-black/70">Capire cosa funziona meglio per te, migliorare continuamente e far crescere la tua attività in modo sostenibile.</p>
                  </div>
                </motion.div>

                {/* Fase 5 */}
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
                  <div className="pl-6 relative">
                    <div className="absolute left-[-14px] top-1 w-4 h-4 bg-brand-rust rounded-full"></div>
                    <h4 className="text-xl font-semibold text-brand-black">5. EVOLVI</h4>
                    <p className="text-brand-black/70">Consolidare i risultati ottenuti e avere un piano chiaro per continuare a crescere in autonomia.</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>

          {/* Card riassuntiva sabbia */}
          <div className="bg-brand-sand text-brand-black p-6 md:p-8 rounded-xl shadow-xl space-y-8 text-left max-w-xl mx-auto">
            {/* A chi è rivolto */}
            <div className="flex items-center gap-4">
              <div className="min-w-[2rem] flex justify-center items-center">
                <Target className="text-brand-rust w-7 h-7" />
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>A chi è rivolto:</strong> Terapisti che vogliono portare il proprio lavoro a un nuovo livello: più autenticità, più visibilità, più risultati - anche economici..
              </p>
            </div>

            {/* Include */}
            <div className="flex items-center gap-4">
              <div className="min-w-[2rem] flex justify-center items-center">
                <ClipboardList className="text-brand-rust w-7 h-7" />
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>Include:</strong> 12 sessioni 1:1, strumenti pratici, supporto WhatsApp, test iniziali e materiali personalizzati.
              </p>
            </div>

            {/* Investimento */}
            <div className="flex items-center gap-4">
              <div className="min-w-[2rem] flex justify-center items-center">
                <Wallet className="text-brand-rust w-7 h-7" />
              </div>
              <p className="text-base md:text-lg leading-relaxed">
                <strong>Investimento:</strong> Lavoro solo con chi può davvero trarre beneficio dal percorso. Per questo motivo, prima di parlarti di costi e dettagli pratici, preferisco conoscerti meglio e capire insieme se è ciò di cui hai davvero bisogno.  
              </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <a
                href="https://wa.me/3489841408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-rust hover:bg-brand-rust/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5" />
                Richiedi una Call Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — SABBIA */}
      <section id="about" className="bg-brand-sand text-brand-black">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl mb-8 text-center">About Me</h2>
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
                <h3 className="font-display text-2xl mb-4">Merisio Gianluigi</h3>
                <p className="text-brand-black/80 text-lg leading-relaxed">
                  Ho iniziato come terapista, poi sono cresciuto fino a diventare spa manager su navi da crociera, guidando team internazionali e gestendo realtà complesse del settore beauty & wellness. Negli anni ho sviluppato competenze tecniche e manageriali che oggi metto al servizio di professionisti e aziende: dalla leadership alla pianificazione strategica, fino alla capacità di trasformare passione e talento in risultati concreti. Amo costruire relazioni autentiche, stimolare il cambiamento e accompagnare chi lavora nel benessere a fare un salto di qualità, diventando più consapevole, strutturato e riconosciuto..
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIANZE — BIANCO */}
      <section id="testimonianze" className="bg-brand-white text-brand-black py-20 px-6 md:px-12 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl text-center mb-12 text-brand-black">Dicono di me</h2>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <div className="bg-brand-white p-6 rounded-xl shadow border border-brand-sand/60 hover:scale-[1.02] transition duration-300 ease-out">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente 1" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="text-lg font-semibold text-brand-black">Chiara R.</h4>
                    <p className="text-sm text-brand-black/60">Estetista professionale</p>
                  </div>
                </div>
                <p className="text-brand-black/80 italic">
                  “Il percorso con Gianluigi è stato una svolta. Ho capito chi sono, cosa voglio e ho finalmente una strategia concreta.”
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <div className="bg-brand-white p-6 rounded-xl shadow border border-brand-sand/60 hover:scale-[1.02] transition duration-300 ease-out">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Cliente 2" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="text-lg font-semibold text-brand-black">Luca M.</h4>
                    <p className="text-sm text-brand-black/60">Massoterapista</p>
                  </div>
                </div>
                <p className="text-brand-black/80 italic">
                  “Mi sono smarcato dal ‘faccio tutto per tutti’. Ora lavoro solo con i clienti giusti, e guadagno di più con meno stress.”
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              <div className="bg-brand-white p-6 rounded-xl shadow border border-brand-sand/60 hover:scale-[1.02] transition duration-300 ease-out">
                <div className="flex items-center gap-4 mb-4">
                  <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Cliente 3" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="text-lg font-semibold text-brand-black">Francesca D.</h4>
                    <p className="text-sm text-brand-black/60">Coach Olistica</p>
                  </div>
                </div>
                <p className="text-brand-black/80 italic">
                  “Gianluigi ha un dono: ti aiuta a vedere quello che non vedi. Ho ricostruito la mia offerta da zero, con autenticità.”
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ — RUGGINE */}
      <section id="faq" className="bg-brand-rust text-white py-20 px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl text-center mb-3">Domande Frequenti</h2>
          <p className="text-center text-white/80 mb-10">Le risposte rapide alle domande più comuni.</p>

          <div className="space-y-5">
            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
              <FaqItem
                question="Devo avere già un’attività avviata per accedere al percorso?"
                answer="No, puoi iniziare anche se sei in fase di transizione o apertura. Il percorso ti aiuterà proprio a partire con consapevolezza e metodo."
              />
            </motion.section>

            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
              <FaqItem
                question="Posso pagare in due rate?"
                answer="Sì, puoi versare in 2 o 3 comode rate."
              />
            </motion.section>

            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
              <FaqItem
                question="Cosa succede se salto una sessione?"
                answer="Nessun problema: possiamo riprogrammarla entro 10 giorni. La flessibilità fa parte del mio metodo."
              />
            </motion.section>
          </div>
        </div>
      </section>


      {/* VIDEO — BIANCO */}
      <section id="video" className="bg-brand-white text-brand-black py-20 px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl text-brand-black mb-4">Guarda il video</h2>
          <p className="text-lg text-brand-black/70 mb-10">Chi sono, da dove parto e il mio percorso!</p>

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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="https://wa.me/3489841408?text=Ciao%20Gianluigi%2C%20ho%20visto%20il%20video%20e%20voglio%20saperne%20di%20pi%C3%B9%20sul%20percorso%20evolutivo."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block bg-brand-rust text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-rust/90 hover:scale-105 transition"
            >
              Scrivimi su WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTATTI — RUGGINE */}
      <section id="contatti" className="bg-brand-rust text-white py-24 px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl text-center mb-12 text-white">Contattami</h2>
          <p className="text-lg text-white/90 mb-12">
            Scrivimi per richiedere una call gratuita o avere maggiori informazioni sul percorso.
          </p>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          >
            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium">Nome</label>
              <input
                type="text"
                name="nome"
                required
                className="w-full px-4 py-3 rounded-md bg-brand-white text-brand-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="col-span-1">
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md bg-brand-white text-brand-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 text-sm font-medium">Messaggio</label>
              <textarea
                name="messaggio"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-md bg-brand-white text-brand-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                className="mt-4 inline-block bg-brand-black hover:bg-brand-black/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                Invia Messaggio
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER — BIANCO */}
      <footer className="bg-brand-white border-t border-brand-sand/40 py-10 text-center text-sm text-brand-black/70">
        <div className="mb-6">
          <p className="text-base font-semibold text-brand-black mb-4">Seguimi sui social</p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://www.instagram.com/i.m.gigi_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-rust transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/gianluigi-merisio-22a04912b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-rust transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@i.m.Gigi_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-rust transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <p className="mt-6">© 2025 Merisio Gianluigi. Tutti i diritti riservati.</p>
      </footer>
    </>
  )
}
