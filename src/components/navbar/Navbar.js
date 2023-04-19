import React, { useEffect, useRef, useState } from "react";

import { MdFavoriteBorder } from "react-icons/md";
import { BsPerson, BsPeople } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  const [expandHamburger, setExpandHamburger] = useState(false);
  const wordRef = useRef("");
  const [mainIndex, setMainIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const inputSearchRef = useRef(null);

  //const phrase = "Куртка";
  const phrases = [
    "Куртка",
    "Кросівки",
    "Штани",
    "Футболка",
    "Шорти",
    "Тут є все",
    "Тут є Fara",
  ];

  useEffect(() => {
    const typeLetter = () => {
      if (subIndex < phrases[mainIndex].length) {
        wordRef.current = wordRef.current + phrases[mainIndex][subIndex];
        setSubIndex((subIndex) => subIndex + 1);
      } else if (
        subIndex >= phrases[mainIndex].length &&
        subIndex < phrases[mainIndex].length * 2
      ) {
        wordRef.current = wordRef.current.slice(0, wordRef.current.length - 1);
        setSubIndex((subIndex) => subIndex + 1);
      } else if (subIndex == phrases[mainIndex].length * 2) {
        wordRef.current = "";
        setSubIndex(0);
        mainIndex < phrases.length - 1
          ? setMainIndex((mainIndex) => mainIndex + 1)
          : setMainIndex(0);
      }
    };

    setTimeout(() => {
      typeLetter();
    }, 200);
  }, [subIndex]);

  return (
    <header>
      {/* Mobile Header */}
      <section className="header__mobile">
        <section className="header__mobile__container">
          <div className="header__mobile__container__header">
            <div>FARA</div>
            <div
              className="header__mobile__container__header__hamburger"
              aria-expanded={expandHamburger}
              onClick={() => setExpandHamburger(!expandHamburger)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className="header__mobile__container__main"
            aria-expanded={expandHamburger}
          >
            <div className="header__mobile__container__main__sub">
              <div className="header__mobile__container__main__sub__icons">
                <div>
                  <BsPeople />
                </div>
                <div>
                  <BsPerson />
                </div>
                <div>
                  <MdFavoriteBorder />
                </div>
                <div>
                  <AiOutlineShopping />
                </div>
              </div>
              <div className="header__mobile__container__main__sub__list">
                <ul>
                  <li>
                    <a>Вона</a>
                  </li>
                  <li>
                    <a>Він</a>
                  </li>
                  <li>
                    <a>Діти</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__mobile__container__main__banner">
              <a>Безкоштовна доставка з ЄС (від 1500 грн)</a>
              <a>Лише оригінальні товари</a>
              <a>Заощаджуй з Fara Club</a>
              <a>-15% на перше замовлення</a>
            </div>
          </div>
        </section>
        <section className="header__mobile__navigation">
          <nav>
            <a>Новинки</a>
            <a>Одяг</a>
            <a>Взуття</a>
            <a>Аксесуари</a>
            <a>Спорт</a>
            <a>Преміум</a>
            <a>Дім та Лайфстайл</a>
            <a>Бренди</a>
            <a>Розпродаж</a>
            <a>Журнал</a>
          </nav>
          <div className="header__mobile__navigation__search">
            <div>
              <span>
                <label htmlFor="searchMobile">
                  <HiOutlineSearch />
                </label>
              </span>
              <input
                type="text"
                id="searchMobile"
                placeholder={wordRef.current}
                ref={inputSearchRef}
              />
            </div>
          </div>
        </section>
      </section>

      {/* Computer Header */}
      <section className="header__computer">
        <section className="header__computer__banner">
          <a>Безкоштовна доставка з ЄС (від 1500 грн)</a>
          <a>Лише оригінальні товари</a>
          <a>Заощаджуй з Fara Club</a>
          <a>-15% на перше замовлення</a>
        </section>
        <section className="header__computer__main">
          <div className="header__computer__main__category">
            <ul>
              <li>
                <a>Вона</a>
              </li>
              <li>
                <a>Він</a>
              </li>
              <li>
                <a>Діти</a>
              </li>
            </ul>
          </div>
          <div className="header__computer__main__logo">FARA</div>
          <div className="header__computer__main__icons">
            <div>
              <BsPeople />
            </div>
            <div>
              <BsPerson />
            </div>
            <div>
              <MdFavoriteBorder />
            </div>
            <div>
              <AiOutlineShopping />
            </div>
          </div>
        </section>
        <section className="header__computer__navigation">
          <nav>
            <a>Новинки</a>
            <a>Одяг</a>
            <a>Взуття</a>
            <a>Аксесуари</a>
            <a>Спорт</a>
            <a>Преміум</a>
            <a>Дім та Лайфстайл</a>
            <a>Бренди</a>
            <a>Розпродаж</a>
            <a>Журнал</a>
          </nav>
          <div className="header__computer__navigation__search">
            <div>
              <span>
                <label htmlFor="searchComputer">
                  <HiOutlineSearch />
                </label>
              </span>
              <input
                type="text"
                id="searchComputer"
                placeholder={wordRef.current}
                ref={inputSearchRef}
              />
            </div>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Navbar;
