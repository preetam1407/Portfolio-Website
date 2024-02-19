import Link from 'next/link';

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiGithubLine,
  RiMediumFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
  <div className='flex items-center gap-x-4 text-2xl ' >
    <Link href={'https://www.linkedin.com/in/preetam-chhimpa/'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine/>
    </Link>
    <Link href={'https://github.com/preetam1407'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine/>
    </Link>
    <Link href={'https://medium.com/@preetamchhimpa2022'} className='hover:text-accent transition-all duration-300'>
      <RiMediumFill/>
    </Link>
  </div>
  );
};

export default Socials;
