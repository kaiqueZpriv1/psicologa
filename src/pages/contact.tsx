import React from "react";
import { HeaderC } from "../components/header/HeaderC";
import { ContactC } from "../components/contact/ContactC";
import Global from "../style/Global";


export const Contact = () => {
    return(
        <>
        <Global/>
            <HeaderC/>
            <ContactC/>
        </>
    )
}