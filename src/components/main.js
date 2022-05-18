import React from "react";
import "../style/select.scss"
import {SelectRoom} from "./select-room";
import {Seo} from "./seo";
import {Articles} from "./articles";

export function Main() {
    return <>
        <SelectRoom />
        <Seo />
        <Articles />
    </>
}
