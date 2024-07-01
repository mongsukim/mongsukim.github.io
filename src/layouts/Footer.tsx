import Link from 'next/link';

import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';

export const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center gap-4 pb-16 pt-20 text-center'>
      <div className='flex justify-center gap-4'>
        <Link href='https://github.com/mongsukim' target='_blank'>
          <IconGithub
            className='fill-foreground transition hover:fill-pink-600'
            height={30}
            width={30}
          />
        </Link>

      </div>
       <a target="_blank" href='https://hits.dwyl.com/mongsukim/mongsukim.svg?style=flat&show=unique'>
        <img
          alt='Hits'
          src='https://hits.dwyl.com/mongsukim/mongsukim.svg?view=today-total&style=for-the-badge&label=visitors&extraCount=0&color=db2777&labelColor=db2777'
        />
      </a>
      <div>
          forked from <span className='font-semibold'>d5br5.blog</span>
      </div>
    </footer>
  );
};
