import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="intro">
        <h3>{t('HomeTitle')}</h3>
        <p>{t('HomeParagraph')}</p>
        <button>{t('HomeButton')}</button>
      </div>
      <div className="haha">
        {t('Here you can see...')}
      </div>
    </>
  )
}
