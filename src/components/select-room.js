import React from "react";
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
            {/*<div className="select__advertisement-tabs">*/}
            {/*    <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked />*/}
            {/*    <label htmlFor="tab-btn-1">Вкладка 1</label>*/}
            {/*    <input type="radio" name="tab-btn" id="tab-btn-2" value="" />*/}
            {/*    <label htmlFor="tab-btn-2">Вкладка 2</label>*/}
            {/*    <input type="radio" name="tab-btn" id="tab-btn-3" value="" />*/}
            {/*    <label htmlFor="tab-btn-3">Вкладка 3</label>*/}
            {/*    <div id="content-1">*/}
            {/*        Содержимое 1...*/}
            {/*    </div>*/}
            {/*    <div id="content-2">*/}
            {/*        Содержимое 2...*/}
            {/*    </div>*/}
            {/*    <div id="content-3">*/}
            {/*        Содержимое 3...*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="select__advertisement-tabs">
                <div className="select__advertisement-tabs-tab">
                    <a href={"link"} className="select__advertisement-tabs-tab-name">
                        Спецпредложения
                    </a>
                </div>
                <div className="select__advertisement-tabs-tab">
                    <a href={"link"} className="select__advertisement-tabs-tab-name">
                        Афиша
                    </a>
                </div>
                <div className="select__advertisement-tabs-tab">
                    <a href={"link"} className="select__advertisement-tabs-tab-name">
                        Категории отдыха
                    </a>
                </div>
            </div>
            <div className="select__advertisement-tabs-images">
                <a href={"link"} className="select__advertisement-tabs-images-image">
                    <img src={SelectImage1}/>
                </a>
                <a href={"link"} className="select__advertisement-tabs-images-image">
                    <img src={SelectImage2}/>
                </a>
            </div>
        </div>
    </div>
}
