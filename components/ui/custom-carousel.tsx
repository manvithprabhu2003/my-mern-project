"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CustomCarouselProps {
  children: React.ReactNode[]
  className?: string
}

export function CustomCarousel({ children, className = "" }: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {React.Children.toArray(children)[currentIndex]}
        </motion.div>
      </AnimatePresence>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          variant="outline"
          onClick={handlePrev}
          className="w-10 h-10 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          onClick={handleNext}
          className="w-10 h-10 rounded-full"
        >
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
