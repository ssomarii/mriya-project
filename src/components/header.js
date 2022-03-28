import React from "react";
import {LogoIcon} from "../images/icons/logo-icon";
import {StarsIcon} from "../images/icons/stars-icon";
import "../style/header.scss";

export function Header() {
    return <header className="header">
        <div className="burger-menu">
        </div>
        <div className="header__container">
            <div className="header__left">
                <nav className="header__left-navigation">
                    <ul className="header__left-navigation-list">
                        <li className="header__left-navigation-list-item">
                            <a href="javascript:;" className="header__left-navigation-list-item-link">
                                О комплексе
                            </a>
                        </li>
                        <li className="header__left-navigation-list-item">
                            <a href="javascript:;" className="header__left-navigation-list-item-link">
                                Блог
                            </a>
                        </li>
                        <li className="header__left-navigation-list-item">
                            <a href="javascript:;" className="header__left-navigation-list-item-link">
                                FAQ
                            </a>
                        </li>
                        <li className="header__left-navigation-list-item">
                            <a href="javascript:;" className="header__left-navigation-list-item-link">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__middle">
                <div className="logo">
                    <a href="javascript:;" className="logo__link">
                        <LogoIcon />
                        <StarsIcon />
                    </a>
                </div>
            </div>
            <div className="header__right">
                <div className="header__right-language">
                    <a href="javascript:;" className="header__right-language-link">RU</a>
                    <a href="javascript:;" className="header__right-language-link">ENG</a>
                </div>
                <div className="header__right-login">
                    <a href="javascript:;" className="header__right-login-link">
                        <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M7.87398 5C7.42994 6.72523 5.86384 8 4 8C1.79086 8 0 6.20914 0 4C0 1.79086 1.79086 0 4 0C5.86384 0 7.42994 1.27477 7.87398 3H11V1H14V3H15V5L7.87398 5ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                                  fill="white"/>
                        </svg>
                        <span className="header__right-login-link-title">Вход</span>
                    </a>
                </div>
                <div className="header__right-phone">
                    <a href="javascript:;" className="header__right-phone-link">8 800 500 6847</a>
                </div>
            </div>
        </div>
    </header>
}