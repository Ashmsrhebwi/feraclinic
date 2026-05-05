import { ReactNode } from 'react'

interface FormInputProps {
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  required?: boolean
  className?: string
  rows?: number
}

export function FormInput({ 
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  className = '',
  rows = 4
}: FormInputProps) {
  const inputClasses = `
    w-full rounded-xl border bg-white px-4 py-4
    text-[#334155] placeholder-[#64748B]
    focus:outline-none focus:ring-2 focus:ring-[#0B1C2D]/20 focus:border-[#0B1C2D] focus:shadow-[0_4px_12px_rgba(11,28,45,0.10)]
    transition-all duration-300 ease
    hover:border-[rgba(11,28,45,0.18)] hover:shadow-[0_4px_12px_rgba(11,28,45,0.08)]
    ${error ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-[rgba(11,28,45,0.10)]'}
    ${className}
  `

  const labelClasses = `
    block text-sm font-semibold text-[#334155] mb-3
  `

  if (type === 'textarea') {
    return (
      <div className="space-y-3">
        {label && <label className={labelClasses}>{label}</label>}
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={`${inputClasses} resize-none`}
          required={required}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {label && <label className={labelClasses}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        required={required}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
