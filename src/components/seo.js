import React from "react";
import "../style/seo.scss";
import {WavesOneIcon} from "../images/icons/WavesOne";
import {FlowerIcon} from "../images/icons/FlowerIcon";


export function Seo() {
    return <div className="seo">
        <div className="seo__background-image-left">

        </div>
        <div className="seo__background-image-right">

        </div>
       <div className="seo__container">
           <div className="seo__content">
               <div className="seo__icon--wave">
                   <WavesOneIcon />
               </div>
               <div className="seo__title">
                <span>
                    Mriya Resort & SPA — <br/><mark className="seo__mark">больше чем просто отдых</mark>
                </span>
               </div>
               <div className="seo__icon-flower">
                   <FlowerIcon />
               </div>
               <div className="seo__text">
               <span className="seo__text-block">
                   В окружении необычного природного ландшафта курорт <br/>становится по-настоящему уникальным. Это место идеально для <br/>тех, кто больше гор любит только море.
               </span>
               </div>
               <a href={"link"} className="button_white">
                   О компании
               </a>
           </div>
       </div>
    </div>
}