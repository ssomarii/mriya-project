import React from "react";
import {SelectRoom} from "./select-room";
import "../style/select.scss"
import {Seo} from "./seo";

export function Main() {
    return <>
        <SelectRoom />
        <Seo />
    </>
}
