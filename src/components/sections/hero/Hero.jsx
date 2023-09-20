import { hero } from '../../../assets';
import Typewriter from './Typewriter';

const Hero = () => {
  return (
    <div className="text-white h-[100vh] bg-cover flex align-bottom" style={{ backgroundImage: `url("${hero}")` }} id="Hero">
      <div className="p-5">
        <p className="p-5">ذكاء الدولية توفر لك …..</p>
        <Typewriter text="التطوير" repeat speed={300} />

        <p className="p-5 w-[55%]  text-xl">
          نقدم لك جميع خدمات المواقع الإلكترونية وتطبيقات الموبايل وبرامج إدارة المؤسسات وكل الحلول التقنية الذكية التي
          تحتاجها في إنشاء وتطوير أعمالك لتنقل أعمالك للمستقبل وتواكب تقنيات الذكاء الاصطناعي.
        </p>
        <div className="w-fit p-2 rounded-lg ">
          <p className="text-white p-2 bg-secondary rounded-lg  hover:bg-white hover:text-secondary">تواصل معنا</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
