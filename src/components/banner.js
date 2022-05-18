import React from "react";

export function BannerList({img}) {
    let imgBanner = img.map((imageItem, index) => <a key={index} className="select__offer-banners-banner">
        <img className="select__offer-banners-banner-image" src={imageItem}/>
    </a>)

    return <div className="select__offer-banners">
        {imgBanner}
        {/*<a className="select__offer-banners-banner">*/}
        {/*    <img className="select__offer-banners-banner-image" src={img[1]}/>*/}
        {/*    /!*<span className="select__offer-banners-banner-description">*!/*/}
        {/*    /!*    10% Раннее бронирование*!/*/}
        {/*    /!*</span>*!/*/}
        {/*</a>*/}
    </div>
}