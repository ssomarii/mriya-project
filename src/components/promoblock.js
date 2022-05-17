import {WavesIcon} from "../images/icons/waves-icon";
import {FacebookIcon} from "../images/icons/facebook-icon";
import {InstagramIcon} from "../images/icons/instagram-icon";
import {TwitterIcon} from "../images/icons/twitter-icon";
import {CloudlyIcon} from "../images/icons/cloudly-icon";
import "../style/promoblock.scss";
import "../style/buttons.scss"
import pin from "../images/pin.png";
// import React, { useEffect, useState } from 'react';
// import axios from "axios";

export function Promoblock() {
    return <div className="promoblock">
        <div className="promoblock__left">
            <div className="waves">
                <WavesIcon />
            </div>
            <div className="promoblock__left-up-title">
                <span>Family & Health Club</span>
            </div>
            <div className="promoblock__left-title">
                <span>Mriya<br/> Resort</span>
            </div>
            <div className="promoblock__left-sub-title">
                Российский курорт для всей семьи<br/>
                на берегу черного моря
            </div>
            <div className="promoblock__left-buttons">
                <a href={"link"} className="button_brown">
                    Найти номер
                </a>
                <a href={"link"} className="button_white">
                    3D тур
                </a>
            </div>
            <div className="promoblock__down-button button_down">
            </div>
        </div>
        <div className="promoblock__right">
            <div className="promoblock__right-share">
                <div className="button_share">
                    <FacebookIcon />
                </div>
                <div className="button_share">
                    <TwitterIcon />
                </div>
                <div className="button_share">
                    <InstagramIcon />
                </div>
            </div>
            <div className="promoblock__right-weather">
                <div className="promoblock__right-weather-icons">
                    <div className="promoblock__right-weather-icons-temperature">
                        <CloudlyIcon />
                    </div>
                    <div className="promoblock__right-weather-place-icon">
                        <img src={pin}/>
                    </div>
                </div>
                <div className="promoblock__right-weather-temperature">
                    <div className="promoblock__right-weather-temperature-number">
                        27°
                    </div>
                    <div className="promoblock__right-weather-temperature-statement">
                        Облачно
                    </div>
                    <div className="promoblock__right-weather-temperature-place">
                        Ялта, Россия
                    </div>
                </div>
            </div>
        </div>
    </div>
}

// export function Example() {
//     const [planetName, setPlanetName] = useState();
//
//     useEffect(() => {
//         axios.get("https://swapi.dev/api/planets/1/").then((resp) => {
//         setPlanetName(resp.data.name);
//         console.log(planetName);
//         });
//     }, [planetName, setPlanetName]);
//
//
//     return <div className="example">
//         {planetName}
//     </div>
// }
