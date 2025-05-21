import { useTranslations } from 'next-intl';

import { useFormStatus } from 'react-dom';

import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const t = useTranslations('Contact');

  return (
    <div className="flex items-center justify-center">
      <button
        className="group flex h-[3rem] w-[12rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
        type="submit"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            {t('email_button')}
            <FaPaperPlane className="ml-1 text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </div>
  );
}
