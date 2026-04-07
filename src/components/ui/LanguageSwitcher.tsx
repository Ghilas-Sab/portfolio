import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const current = i18n.language?.startsWith('fr') ? 'fr' : 'en'

  function handleChange(code: string) {
    i18n.changeLanguage(code)
    document.documentElement.setAttribute('lang', code)
  }

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={t('lang.switchLabel')}
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          aria-pressed={current === code}
          className={[
            'px-2.5 py-1 rounded-md text-sm font-medium transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center',
            current === code
              ? 'bg-accent text-white'
              : 'text-gray-400 hover:text-white hover:bg-surface-hover',
          ].join(' ')}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
