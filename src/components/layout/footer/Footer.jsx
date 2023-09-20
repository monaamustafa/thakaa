import { logo } from '../../../assets';

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 bg-navy mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4">
      <div>
        <img src={logo} alt="" />
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
