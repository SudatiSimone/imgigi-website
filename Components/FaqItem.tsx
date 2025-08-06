'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FaqItemProps {
  question: string
  answer: string
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)

  const toggle = () => {
    const next = !isOpen
    setIsOpen(next)
    if (next) setHasOpened(true)
  }

  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700">
      <button
        onClick={toggle}
        className="w-full text-left cursor-pointer text-lg font-semibold text-white flex justify-between items-center"
      >
        {question}
        <span
          className={`ml-4 text-emerald-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          &#9660;
        </span>
      </button>
      {isOpen && (
        hasOpened ? (
          <p className="mt-3 text-gray-300">{answer}</p>
        ) : (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => setHasOpened(true)}
            className="mt-3 text-gray-300 overflow-hidden"
          >
            {answer}
          </motion.p>
        )
      )}
    </div>
  )
}

