import React from "react";
import "../style/articles.scss";
import Slider1 from "../images/slider1.png";
import Slider2 from "../images/slider2.png";
import Slider3 from "../images/slider3.png";

export function Articles() {
    return <div className="articles">
        <div className="articles__block">
            <div className="articles__block-background-left" />
            <div className="articles__block-background-right" />
            <div className="articles__container">
                <div className="articles__content">
                    <div className="articles__header">
                        <div className="articles__title">
                        <span>
                            Всё включено
                        </span>
                        </div>
                        <div className="articles__slider-buttons">
                            <div className="articles__slider-button button_slider-left" />
                            <div className="articles__slider-button button_slider-right" />
                        </div>
                    </div>
                    <div className="articles__slider">
                        <div className="articles__slider-blocks">
                            <div className="articles__slider-blocks-first">
                                <div className="articles__slider-blocks-first-image">
                                    <img src={Slider1}/>
                                </div>
                                <div className="articles__slider-blocks-first-text">
                                    <span>Заниматесь в тренажерном зале и посещайте групповые тренировки</span>
                                </div>
                                <div className="articles__slider-blocks-read-more">
                                    <a href="link">Читать больше</a>
                                </div>
                            </div>
                            <div className="articles__slider-blocks-second">
                                <div className="articles__slider-description">
                                    <div className="articles__slider-description-title">
                                        <span>
                                            Оздоровление
                                        </span>
                                    </div>
                                    <div className="articles__slider-description-text">
                                        <span>
                                            Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу
                                        </span>
                                    </div>
                                </div>
                                <div className="articles__slider-blocks-second-content">
                                    <div className="articles__slider-blocks-second-image">
                                        <img src={Slider2}/>
                                    </div>
                                    <div className="articles__slider-blocks-second-text">
                                        <span>Питаться в ресторане шведской линии согласно выбранному варианту</span>
                                    </div>
                                    <div className="articles__slider-blocks-read-more">
                                        <a href="link">Читать больше</a>
                                    </div>
                                </div>
                            </div>
                            <div className="articles__slider-blocks-third">
                                <div className="articles__slider-blocks-third-image">
                                    <img src={Slider3}/>
                                </div>
                                <div className="articles__slider-blocks-third-text">
                                    <span>Исследовать все общедоступные зоны и территории комплексау</span>
                                </div>
                                <div className="articles__slider-blocks-read-more">
                                    <a href="link">Читать больше</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}