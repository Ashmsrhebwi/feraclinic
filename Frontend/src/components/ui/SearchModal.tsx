import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, FileText, Activity, Image as ImageIcon, LayoutTemplate, ChevronRight, Sparkles } from 'lucide-react'
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

  // Quick suggestions for empty state
  const quickSuggestions = [
    { label: t('treatments.data.1.title', 'Dental Implants'), query: 'implants' },
    { label: t('treatments.data.2.title', 'Porcelain Veneers'), query: 'veneers' },
    { label: t('common.freeConsultation', 'Free Consultation'), query: 'consultation' }
  ]

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
        const maxIndex = query.trim() === '' ? quickSuggestions.length - 1 : filteredResults.length - 1
        setSelectedIndex(prev => (prev < maxIndex ? prev + 1 : prev))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (query.trim() === '') {
          // Handle quick suggestion selection
          if (quickSuggestions[selectedIndex]) {
            setQuery(quickSuggestions[selectedIndex].query)
            setSelectedIndex(0)
          }
        } else if (filteredResults.length > 0 && filteredResults[selectedIndex]) {
          handleSelect(filteredResults[selectedIndex])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, filteredResults, selectedIndex, query])

  const handleSelect = (item: SearchItem) => {
    // Navigate with current locale
    const currentLang = i18n.language || 'en'
    const cleanUrl = item.url.startsWith('/') ? item.url.slice(1) : item.url
    navigate(`/${currentLang}/${cleanUrl}`)
    onClose()
  }

  const handleQuickSuggestion = (suggestionQuery: string) => {
    setQuery(suggestionQuery)
    setSelectedIndex(0)
    inputRef.current?.focus()
  }

  const getIconForType = (type: string) => {
    const iconClass = "w-4 h-4"
    switch (type) {
      case 'Treatment': return <Activity className={iconClass} />
      case 'Blog': return <FileText className={iconClass} />
      case 'Gallery': return <ImageIcon className={iconClass} />
      default: return <LayoutTemplate className={iconClass} />
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-start justify-center px-4 pt-24 bg-[#13293D]/20 backdrop-blur-sm"
          onMouseDown={onClose}
          onTouchStart={onClose}
        >
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-[0_25px_80px_rgba(11,28,45,0.12)] border border-gray-100/60 overflow-hidden relative z-10 flex flex-col max-h-[85vh] sm:max-h-[80vh] lg:max-w-4xl sm:max-w-2xl max-[92vw]"
          >
            {/* Search Input Area */}
            <div className="relative border-b border-gray-100/60 bg-white/95 backdrop-blur-xl shrink-0">
              <div className="absolute start-6 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-7 h-7" />
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
                className="w-full px-20 py-7 bg-transparent text-[#13293D] text-xl font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#13293D]/20 focus:ring-inset transition-all"
              />
              <button
                onClick={onClose}
                className="absolute end-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#13293D] transition-all duration-200 p-2 rounded-xl hover:bg-gray-50"
                aria-label={t('a11y.closeSearch', 'Close search')}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Results Area */}
            <div className="overflow-y-auto flex-1 bg-gradient-to-b from-white/50 to-gray-50/30">
              {query.trim() === '' ? (
                <div className="px-8 py-16 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-50 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 text-[#13293D] shadow-lg">
                    <Search className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#13293D] mb-3">
                    {t('search.startTyping', 'What are you looking for?')}
                  </h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                    {t('search.suggestions', 'Try searching for "implants", "veneers", or "consultation".')}
                  </p>
                  
                  {/* Quick Suggestions */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    {quickSuggestions.map((suggestion, index) => (
                      <button
                        key={suggestion.query}
                        onClick={() => handleQuickSuggestion(suggestion.query)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                          selectedIndex === index 
                            ? 'bg-[#13293D] text-white shadow-lg scale-105' 
                            : 'bg-white text-[#13293D] border border-gray-100/60 hover:bg-gray-50 hover:border-[#13293D]/30 hover:shadow-md'
                        }`}
                      >
                        {suggestion.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="p-4 space-y-2">
                  {filteredResults.map((item, index) => {
                    const isSelected = index === selectedIndex
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`group w-full flex items-start gap-4 p-5 rounded-2xl text-start border transition-all duration-150 ease-out ${
                          isSelected 
                            ? 'bg-[#F3F7FB] border-[#D8E6F3] shadow-sm' 
                            : 'bg-white border-transparent hover:bg-slate-50 hover:border-[#D8E6F3]/50 hover:shadow-sm'
                        }`}
                      >
                        <div className={`shrink-0 p-3 rounded-xl transition-all duration-150 ease-out border ${
                          isSelected 
                            ? 'bg-[#EAF3FB] text-[#0B1C2D] border-[#D8E6F3]/60' 
                            : 'bg-[#F8FAFC] text-slate-500 border-gray-100 group-hover:bg-[#EAF3FB] group-hover:text-[#0B1C2D] group-hover:border-[#D8E6F3]/60'
                        }`}>
                          {getIconForType(item.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <h4 className="font-bold text-lg truncate transition-colors duration-150 ease-out text-[#0B1C2D]">
                              {item.title}
                            </h4>
                            <span className={`shrink-0 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-lg transition-all duration-150 ease-out ${
                              isSelected 
                                ? 'bg-white text-[#0B1C2D] border border-[#D8E6F3]' 
                                : 'bg-[#F1F5F9] text-slate-500 group-hover:bg-white group-hover:text-[#0B1C2D] group-hover:border border-[#D8E6F3]'
                            }`}>
                              {item.type}
                            </span>
                          </div>
                          <p className="text-slate-500 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="shrink-0 text-[#94A3B8] mt-1">
                          <ChevronRight className={`w-6 h-6 transition-all duration-150 ease-out ${
                            isSelected ? 'text-[#0B1C2D] translate-x-1' : 'group-hover:text-[#0B1C2D] group-hover:translate-x-1'
                          }`} />
                        </div>
                      </button>
                    )
                  })}
                </div>
              ) : (
                <div className="px-8 py-20 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                    <Search className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">
                    {t('search.noResults', 'No results found')}
                  </h3>
                  <p className="text-gray-500 mb-6">
                    {t('search.noResultsText', 'No results found for')} "<span className="text-[#0B1C2D] font-medium">{query}</span>"
                  </p>
                  <button 
                    onClick={() => { setQuery(''); inputRef.current?.focus() }}
                    className="px-6 py-3 bg-[#0B1C2D] text-white rounded-full font-medium hover:bg-[#13293D] transition-colors shadow-lg"
                  >
                    {t('search.clear', 'Clear search')}
                  </button>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100/60 px-8 py-4 flex items-center justify-between text-xs text-gray-500 font-medium shrink-0">
              <div className="hidden lg:flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <kbd className="px-2 py-1 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 font-mono text-xs">↑</kbd>
                  <kbd className="px-2 py-1 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 font-mono text-xs">↓</kbd>
                  <span className="text-gray-400">{t('search.footer.navigate', 'navigate')}</span>
                </span>
                <span className="flex items-center gap-2">
                  <kbd className="px-2 py-1 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 font-mono text-xs">{t('common.keyboard.enter')}</kbd>
                  <span className="text-gray-400">{t('search.footer.select', 'select')}</span>
                </span>
                <span className="flex items-center gap-2">
                  <kbd className="px-2 py-1 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 font-mono text-xs">{t('common.keyboard.esc')}</kbd>
                  <span className="text-gray-400">{t('search.footer.close', 'close')}</span>
                </span>
              </div>
              <span className="hidden lg:block text-[#0B1C2D]/30 font-medium">{t('search.globalSearch', 'FeRa Global Search')}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
