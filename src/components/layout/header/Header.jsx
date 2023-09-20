import { useDispatch, useSelector } from "react-redux";
import { Trans } from "react-i18next";
import i18n from "../../../lib/i18n";
import { changeLang } from "../../../redux/slices/langSlice";

const Header = () => {
  const lang = useSelector((state) => state.language.lang);

  const dispatch = useDispatch();
  const switchLanguage = (lang) => {
    dispatch(changeLang(lang));
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <p>language:{lang}</p>
      <Trans i18nKey="home.home" />
      <ul className="flex justify-between">
        <li onClick={() => switchLanguage("en")}>en</li>
        <li onClick={() => switchLanguage("ar")}>ar</li>
      </ul>
    </div>
  );
};

export default Header;
