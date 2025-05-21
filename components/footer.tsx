import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; {t('title')}</small>
      <p className="text-xs ">
        <span className="font-semibold">{t('text1')}</span>
        {t('text2')}
      </p>
    </footer>
  );
}
