import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, FileText, Activity, Image as ImageIcon, LayoutTemplate, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getSearchIndex, SearchItem } from '../../data/searchIndex'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  
  const searchIndex = getSearchIndex(t)

  // Filter logic
  const filteredResults = query.trim() === '' ? [] : searchIndex.filter(item => {
    const searchStr = query.toLowerCase()
    const matchTitle = item.title.toLowerCase().includes(searchStr)
    const matchDesc = item.description.toLowerCase().includes(searchStr)
    const matchKeywords = item.keywords.some(k => k.includes(searchStr))
    return matchTitle || matchDesc || matchKeywords
  }).slice(0, 8) // Limit to 8 results for clean UI

  // Reset state on open
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      // Small timeout to allow modal to render before focusing
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : prev))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredResults.length > 0 && filteredResults[selectedIndex]) {
          handleSelect(filteredResults[selectedIndex])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredResults, selectedIndex])

  const handleSelect = (item: SearchItem) => {
    // Navigate with current locale
    const currentLang = i18n.language || 'en'
    const cleanUrl = item.url.startsWith('/') ? item.url.slice(1) : item.url
    navigate(`/${currentLang}/${cleanUrl}`)
    onClose()
  }

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Treatment': return <Activity className="w-4 h-4 text-[#1b4698]" />
      case 'Blog': return <FileText className="w-4 h-4 text-[#1b4698]" />
      case 'Gallery': return <ImageIcon className="w-4 h-4 text-[#1b4698]" />
      default: return <LayoutTemplate className="w-4 h-4 text-[#1b4698]" />
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-32 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1b4698]/30 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-luxury-2xl border border-gray-100 overflow-hidden relative z-10 flex flex-col max-h-[80vh]"
          >
            {/* Search Input Area */}
            <div className="relative border-b border-gray-100 bg-white shrink-0">
              <div className="absolute start-6 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setSelectedIndex(0)
                }}
                placeholder={t('search.placeholder', 'Search treatments, articles, pages...')}
                className="w-full px-16 py-6 bg-transparent text-[#1b4698] text-lg font-medium placeholder:text-gray-300 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="absolute end-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#1b4698] transition-colors p-1"
                aria-label={t('a11y.closeSearch', 'Close search')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results Area */}
            <div className="overflow-y-auto flex-1 bg-gray-50/50">
              {query.trim() === '' ? (
                <div className="px-8 py-12 text-center">
                  <div className="w-16 h-16 bg-[#1b4698]/5 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1b4698]">
                    <Search className="w-8 h-8 opacity-50" />
                  </div>
                  <p className="text-[#1b4698] font-medium mb-2">{t('search.startTyping', 'What are you looking for?')}</p>
                  <p className="text-sm text-gray-500">{t('search.suggestions', 'Try searching for "implants", "veneers", or "consultation".')}</p>
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="p-3 space-y-2">
                  {filteredResults.map((item, index) => {
                    const isSelected = index === selectedIndex
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-start gap-4 p-4 rounded-xl text-start transition-all duration-300 ${
                          isSelected ? 'bg-white shadow-md border border-gray-100 ring-1 ring-[#1b4698]/10 -translate-y-0.5 scale-[1.01]' : 'hover:bg-white hover:shadow-sm border border-transparent'
                        }`}
                      >
                        <div className={`mt-1 shrink-0 p-2 rounded-lg transition-colors ${isSelected ? 'bg-[#1b4698]/10' : 'bg-[#1b4698]/5'}`}>
                          {getIconForType(item.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-4 mb-1">
                            <h4 className={`font-semibold truncate transition-colors ${isSelected ? 'text-[#1b4698]' : 'text-gray-900'}`}>
                              {item.title}
                            </h4>
                            <span className="shrink-0 text-[10px] font-bold tracking-wider uppercase text-[#1b4698] bg-[#1b4698]/5 px-2 py-1 rounded-md">
                              {item.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="mt-2 shrink-0 text-gray-300">
                          <ChevronRight className={`w-5 h-5 transition-all duration-300 ${isSelected ? 'text-[#1b4698] translate-x-1' : ''}`} />
                        </div>
                      </button>
                    )
                  })}
                </div>
              ) : (
                <div className="px-8 py-16 text-center">
                  <p className="text-gray-500 text-sm mb-4">
                    {t('search.noResults', 'No results found for')} "<span className="text-[#1b4698] font-medium">{query}</span>"
                  </p>
                  <button 
                    onClick={() => { setQuery(''); inputRef.current?.focus() }}
                    className="text-sm font-medium text-[#1b4698] hover:underline"
                  >
                    {t('search.clear', 'Clear search')}
                  </button>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="bg-white border-t border-gray-100 px-6 py-4 flex items-center justify-between text-xs text-gray-400 font-medium shrink-0">
              <div className="hidden sm:flex items-center gap-4">
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-gray-50 text-gray-500 border border-gray-200">↑</kbd><kbd className="px-1.5 py-0.5 rounded bg-gray-50 text-gray-500 border border-gray-200">↓</kbd> navigate</span>
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-gray-50 text-gray-500 border border-gray-200">Enter</kbd> select</span>
                <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-gray-50 text-gray-500 border border-gray-200">Esc</kbd> close</span>
              </div>
              <span className="sm:hidden">{t('search.mobileHint', 'Tap a result to navigate')}</span>
              <span className="text-[#1b4698]/40">{t('search.globalSearch', 'FeRa Global Search')}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
