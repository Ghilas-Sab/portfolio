import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language?.startsWith('fr') ? 'fr' : 'en'

  function handleChange(code: string) {
    i18n.changeLanguage(code)
    document.documentElement.setAttribute('lang', code)
  }

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Sélection de langue">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          aria-pressed={current === code}
          className={[
            'px-2 py-1 rounded text-sm font-medium transition-colors',
            current === code
              ? 'bg-accent text-white'
              : 'text-muted hover:text-white hover:bg-surface-hover',
          ].join(' ')}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
