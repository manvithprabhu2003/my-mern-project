"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ArrowRight, Eye } from "lucide-react"
import { getStatusColor } from "@/app/collections/page"

interface Collection {
  id: string
  name: string
  subtitle: string
  description: string
  image: string
  pieces: number
  priceRange: string
  status: string
  theme: string
  inspiration: string
  colors: string[]
  featured: boolean
}

interface CollectionsCarouselProps {
  collections: Collection[]
}

export function CollectionsCarousel({ collections }: CollectionsCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }

  return (
    <div className="relative">
      <Slider {...settings}>
        {collections
          .filter((c) => c.featured)
          .map((collection) => (
            <div key={collection.id} className="w-full">
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden h-80">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <Badge
                      className={`absolute top-4 left-4 ${getStatusColor(collection.status)} text-white font-bold text-xs`}
                    >
                      {collection.status}
                    </Badge>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="ghost" className="bg-black/50 backdrop-blur-sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <Badge className="mb-2 bg-white/10 text-white text-xs">{collection.subtitle}</Badge>
                    <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{collection.description}</p>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                        <span>Theme: {collection.theme}</span>
                        <span>{collection.pieces} pieces</span>
                      </div>
                      <div className="text-sm text-gray-400 mb-3">{collection.priceRange}</div>

                      {/* Color Palette */}
                      <div className="flex space-x-1 mb-4">
                        {collection.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full border border-gray-600"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-black font-bold hover:scale-105 transition-transform"
                      disabled={collection.status === "SOLD OUT"}
                    >
                      {collection.status === "SOLD OUT"
                        ? "SOLD OUT"
                        : collection.status === "COMING SOON"
                          ? "NOTIFY ME"
                          : collection.status === "PRE-ORDER"
                            ? "PRE-ORDER"
                            : "EXPLORE COLLECTION"}
                      {collection.status !== "SOLD OUT" && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
      </Slider>
    </div>
  )
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <button
      className={`${className} slick-prev slick-arrow z-10`}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    >
      <ArrowLeft className="w-6 h-6 text-white" />
    </button>
  )
}

function NextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <button
      className={`${className} slick-next slick-arrow z-10`}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    >
      <ArrowRight className="w-6 h-6 text-white" />
    </button>
  )
}
