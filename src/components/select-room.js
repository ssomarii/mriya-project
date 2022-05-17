import React, {useState} from "react";
import {CalendarIcon} from "../images/icons/calendar-icon";
import {SubstractIcon} from "../images/icons/subtract-icon";
import {ArrowIcon} from "../images/icons/arrow-icon";
import SelectImage1 from "../images/select-pic-1.png";
import SelectImage2 from "../images/select-pic-2.png";



export function SelectRoom() {

    return <div className="select">
        <div className="select__container">
            <div className="select__title">
                Выберите свой отдых
            </div>
            <div className="select__search">
                <div className="select__search-room">
                    <div className="select__search-room-type">
                        <div className="select__search-room-type-container">
                            <span className="select__search-room-type-day">
                                Семейный отдых
                            </span>
                            <ArrowIcon />
                        </div>
                        <div className="select__search-room-type-droplist">
                            <div className="select__search-room-type-droplist-item">
                                <span className="select__search-room-type-droplist-item-name">
                                    Семейный отдых
                                </span>
                            </div>
                            <div className="select__search-room-type-droplist-item">
                                <span className="select__search-room-type-droplist-item-name">
                                    Семейный отдых
                                </span>
                            </div>
                            <div className="select__search-room-type-droplist-item">
                                <span className="select__search-room-type-droplist-item-name">
                                    Семейный отдых
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="select__search-room-date">
                        <div className="select__search-room-date-container">
                            <span className="select__search-room-date-day">
                                пт, 8 мая — вс, 17 мая
                            </span>
                            <CalendarIcon />
                        </div>
                    </div>
                    <div className="select__search-room-description">
                        <div className="select__search-room-description-container">
                            <span className="select__search-room-date-day">
                                2 взрослых  •  без детей  •  1 номер
                            </span>
                            <SubstractIcon />
                        </div>
                    </div>
                    <button className="select__search-button">
                        Найти
                    </button>
                </div>
            </div>
            <div className="select__offer">
                <div className="select__offer-tabs">
                    <a className="select__offer-tabs-tab" >
                        <span>
                            Спецпредложения
                        </span>
                    </a>
                    <a className="select__offer-tabs-tab">
                        <span>
                            Афиша
                        </span>
                    </a>
                    <a className="select__offer-tabs-tab">
                        <span>
                            Категории отдыха
                        </span>
                    </a>
                </div>
                <div className="select__offer-banners">
                    <a className="select__offer-banners-banner">
                        <img className="select__offer-banners-banner-image" src={SelectImage1}/>
                    </a>
                    <a className="select__offer-banners-banner">
                        <img className="select__offer-banners-banner-image" src={SelectImage2}/>
                        {/*<span className="select__offer-banners-banner-description">*/}
                        {/*    10% Раннее бронирование*/}
                        {/*</span>*/}
                    </a>
                </div>
            </div>
        </div>
    </div>
}



