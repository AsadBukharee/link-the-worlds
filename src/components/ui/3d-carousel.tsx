
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots } from "@/components/ui/carousel"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export interface CarouselCard {
  id: string
  title: string
  content: string
  image?: string
  color?: string
}

interface ThreeDCarouselProps {
  cards: CarouselCard[]
  className?: string
}

export const ThreeDCarousel = ({ cards, className }: ThreeDCarouselProps) => {
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Trigger mount animations
    setMounted(true)
  }, [])

  return (
    <div className={cn(
      "w-full flex flex-col md:flex-row items-center justify-between gap-8",
      className
    )}>
      {/* Left side: Title, tagline, and CTA - On mobile this appears at the bottom */}
      <div className={cn(
        "w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6 order-2 md:order-1",
        "px-6 py-8 md:py-0"
      )}>
        <h2 
          className={cn(
            "text-3xl md:text-5xl font-bold font-urdu text-right bg-gradient-primary text-transparent bg-clip-text transition-all duration-1000 transform",
            mounted ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          )}
        >
          اپنا گاؤں، اپنا مستقبل
        </h2>
        
        <p 
          className={cn(
            "text-lg md:text-xl text-right font-urdu max-w-md transition-all duration-1000 delay-300 transform",
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          آئیے مل کر اپنے گاؤں کو ایک بہتر مستقبل کی طرف لے جائیں
        </p>
        
        <Button 
          className={cn(
            "bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 delay-500 transform font-urdu text-xl",
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          شامل ہوں
        </Button>
      </div>

      {/* Right side: Advanced 3D Carousel - On mobile this appears at the top */}
      <div className={cn(
        "w-full md:w-1/2 h-[40vh] md:px-[15%] order-1 md:order-2 transition-all duration-700",
        mounted ? "opacity-100" : "opacity-0"
      )}>
        <Carousel
          className="w-full h-full"
          autoplay={true}
          autoplayInterval={5000}
          showDots={true}
          use3dEffect={true}
        >
          <CarouselContent className="h-full">
            {cards.map((card, index) => (
              <CarouselItem key={card.id} className="h-full pt-6 pb-10">
                <div
                  className={cn(
                    "relative h-full w-full rounded-xl overflow-hidden flex flex-col justify-end p-6",
                    "shadow-dual-color hover:shadow-dual-hover transition-all duration-500",
                    "transform-gpu backface-visibility-hidden"
                  )}
                  style={{ 
                    backgroundColor: card.color || "hsl(var(--background))",
                    backgroundImage: card.image ? `url(${card.image})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 text-white font-urdu text-right">{card.title}</h3>
                    <p className="text-white/90 font-urdu text-right">{card.content}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots className="absolute bottom-0 left-0 right-0" />
        </Carousel>
      </div>
    </div>
  )
}
