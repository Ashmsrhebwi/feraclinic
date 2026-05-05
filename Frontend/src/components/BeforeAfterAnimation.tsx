import React, { useState, useEffect } from 'react'

interface BeforeAfterAnimationProps {
  beforeImage: string
  afterImage: string
  title?: string
  alt?: string
  className?: string
}

export function BeforeAfterAnimation({ 
  beforeImage, 
  afterImage, 
  title, 
  alt = "Before and after comparison",
  className = "" 
}: BeforeAfterAnimationProps) {
  const [showAfter, setShowAfter] = useState(false)

  useEffect(() => {
    // Start with "before" image, then cycle to "after" after 1 second
    const interval = setInterval(() => {
      setShowAfter(prev => !prev)
    }, 5000) // 5 seconds per state

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-50 shadow-lg group transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* Subtle gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-transparent to-black/20 pointer-events-none z-5" />
      
      {/* Before Image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          showAfter ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <img
          src={beforeImage}
          alt={`${alt} - before`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          draggable={false}
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        />
      </div>

      {/* After Image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          showAfter ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={afterImage}
          alt={`${alt} - after`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          draggable={false}
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        />
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-4 left-4 pointer-events-none z-10">
        <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md">
          {showAfter ? 'After Result' : 'Before'}
        </span>
      </div>

      {/* Real Transformation text */}
      <div className="absolute bottom-4 right-4 pointer-events-none z-10">
        <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md">
          Real Transformation
        </span>
      </div>
    </div>
  )
}
