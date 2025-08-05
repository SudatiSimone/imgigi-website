'use client'

import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export default function SocialSidebar() {
  return (
    <div className="fixed top-1/3 left-4 hidden lg:flex flex-col gap-4 z-50">
      <Link href="https://www.instagram.com/i.m.gigi_" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-primary text-2xl hover:scale-110 transition" />
      </Link>
      <Link href="https://www.linkedin.com/in/gianluigi-merisio-22a04912b" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-primary text-2xl hover:scale-110 transition" />
      </Link>
      <Link href="https://www.youtube.com/@i.m.Gigi_" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-primary text-2xl hover:scale-110 transition" />
      </Link>
      <Link href="https://wa.me/3489841408?text=Ciao%20Gianluigi%2C%20vorrei%20maggiori%20info%20sul%20percorso" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-primary text-2xl hover:scale-110 transition"/>
      </Link>
    </div>
  )
}
