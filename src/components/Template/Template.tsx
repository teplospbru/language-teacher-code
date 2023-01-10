import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";


export const Template = () => {
    return (
        <>
            <Header />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}