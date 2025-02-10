import { useEffect, useState } from "react";
import Input from "./Input";

export default function List({ }) {

    const notesText = JSON.parse(localStorage.getItem("notes")) || ['filler', 'filler'];

    console.log(Input);
    // console.log(Input)
    useEffect(_ => {
        console.log('labas');
    }, []);




    return (
        <>
            <div className="list-bin">
                {/* <Input /> */}
                {notesText.map((el, i) => <div className="list-item" key={i}> <button className="buttonX">x</button> <span>{el}</span></div>)}
            </div>
        </>


    );

}