import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
  steps: string[]
}

export function ProgressIndicator({ currentStep, totalSteps, steps }: ProgressIndicatorProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Step Labels */}
      <div className="flex justify-between mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`
              flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm
              transition-all duration-300
              ${index < currentStep 
                ? 'bg-[#13293D] text-white' 
                : index === currentStep 
                  ? 'bg-[#13293D] text-white ring-2 ring-[#13293D]/20' 
                  : 'bg-gray-200 text-gray-500'
              }
            `}
          >
            {index < currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              index + 1
            )}
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="absolute h-full bg-[#13293D] rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Step Names */}
      <div className="flex justify-between mt-2">
        {steps.map((step, index) => (
          <span
            key={index}
            className={`
              text-xs font-medium transition-colors duration-300
              ${index <= currentStep ? 'text-[#13293D]' : 'text-gray-400'}
            `}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  )
}
