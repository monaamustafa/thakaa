import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../redux/slices/counterSlice';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="bg-gradient-dark">
      <p>{t('home.home')}</p>
      <h2>Vite + React</h2>
      <div className="">
        <p>Try Redux Counter</p>
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
    </div>
  );
};

export default Home;
