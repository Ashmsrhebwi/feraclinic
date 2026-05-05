import React, { useState, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  title?: string
  alt?: string
  className?: string
}

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  title, 
  alt = "Before and after comparison",
  className = "" 
}: BeforeAfterSliderProps) {
  const { t } = useTranslation()
  const [sliderPosition, setSliderPosition] = useState(50)
  const isDragging = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }, [])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault()
    isDragging.current = true
    updatePosition(e.clientX)
  }, [updatePosition])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    updatePosition(e.clientX)
  }, [updatePosition])

  const stopDragging = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-50 shadow-lg cursor-ew-resize select-none touch-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerLeave={stopDragging}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-transparent to-black/20 pointer-events-none z-5" />
      
      {/* After Image (Base layer - always fully visible) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={`${alt} - after`}
          className="w-full h-full object-cover"
          draggable={false}
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        />
      </div>

      {/* Before Image (Overlay with clipping - reveals from left) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          transition: 'clip-path 0.1s ease-out'
        }}
      >
        <img
          src={beforeImage}
          alt={`${alt} - before`}
          className="w-full h-full object-cover"
          draggable={false}
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        />
      </div>

      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-white/80 pointer-events-none z-10"
        style={{ 
          left: `calc(${sliderPosition}% - 1px)`,
          transition: 'left 0.1s ease-out'
        }}
      />

      {/* Handle */}
      <div 
        className="absolute top-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none z-20 transition-transform duration-200 ease-out"
        style={{ 
          left: `${sliderPosition}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Handle indicator dots */}
        <div className="flex items-center gap-1">
          <div className="w-1 h-3 bg-gray-500 rounded-full" />
          <div className="w-1 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 pointer-events-none z-10">
        <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-[10px] font-medium">
          {t('common.before')}
        </span>
      </div>
      
      <div className="absolute top-3 right-3 pointer-events-none z-10">
        <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-[10px] font-medium">
          {t('common.after')}
        </span>
      </div>

    </div>
  )
}
