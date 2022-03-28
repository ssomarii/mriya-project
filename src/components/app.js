import React from "react";
import {Header} from "./header";
import {BackgroundImages} from "./background-images";
import {Promoblock} from "./promoblock";
import {Main} from "./main";


export function App() {
    return <>
        <Header />
        <BackgroundImages />
        <Promoblock />
        <Main />
    </>
}
