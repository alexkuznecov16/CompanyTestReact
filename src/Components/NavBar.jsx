import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavBar() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="navBar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/items">Items</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
      <div className="languages">
      <img onClick={() => changeLanguage('en')} src="https://flagcdn.com/gb.svg" alt="English" />
        <img onClick={() => changeLanguage('lv')} src="https://flagcdn.com/lv.svg" alt="Latvian" />
        <img onClick={() => changeLanguage('ru')} src="https://flagcdn.com/ru.svg" alt="Russian" />
      </div>
    </div>
  );
}
