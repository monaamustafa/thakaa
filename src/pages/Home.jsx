import { useTranslation } from 'react-i18next';
import Hero from '../components/sections/hero/Hero';
import WhoAreWe from '../components/sections/whoAreWe/WhoAreWe';
import Services from '../components/sections/services/Services';

const Home = () => {
 useTranslation();
  return (
    <div className='scroll-smooth"'>
      <Hero/>
      <WhoAreWe/>
      <Services/>
    </div>
  );
};

export default Home;
