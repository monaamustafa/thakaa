import { useDispatch, useSelector } from 'react-redux';
import { Trans } from 'react-i18next';
import i18n from '../../../lib/i18n';
import { changeLang } from '../../../redux/slices/langSlice';
import { Navbar, MobileNav, Typography, IconButton } from '@material-tailwind/react';
import { logo } from '../../../assets';
import React from 'react';
import { useEffect } from 'react';

const Header = () => {
  const lang = useSelector((state) => state.language.lang);

  const dispatch = useDispatch();
  const switchLanguage = (lang) => {
    dispatch(changeLang(lang));
    i18n.changeLanguage(lang);
  };
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
useEffect(() => {
  
}, [lang])

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="a" href="#whoAreWe" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#whoAreWe" className="flex items-center scroll-smooth" >
          <Trans i18nKey="home.navbar.whoAreWe" />
        </a>
      </Typography>
      <Typography as="a" href="#whoAreWe"
       variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center scroll-smooth">
          <Trans i18nKey="home.navbar.services" />
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center scroll-smooth">
          <Trans i18nKey="home.navbar.contactUS" />
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center scroll-smooth">
          <Trans i18nKey="home.navbar.careers" />
        </a>
      </Typography>
    </ul>
  );
  return (
    <div>
      <Navbar className="mx-auto max-w-full py-1 px-4 lg:px-8 lg:py-1 rounded-none shadow-none">
        <div className="container mx-auto flex items-center justify-between">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium w-20">
            <img src={logo} alt="" />
          </Typography>
          <div className="hidden lg:block bg-transparent">{navList}</div>
          <span
            onClick={() => switchLanguage(lang == 'en' ? 'ar' : 'en')}
            className="border-2 p-1  rounded-lg px-4 text-black cursor-pointer"
          >
            {lang === 'ar' ? 'en' : 'ar'}
          </span>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <span onClick={() => switchLanguage(lang == 'en' ? 'ar' : 'en')}>{lang == 'ar' ? 'en' : 'ar'}</span>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
