import { useEffect, useState } from "react";

export default function List({ note }) {

    let notesText = JSON.parse(localStorage.getItem("notes"));

    useEffect(_ => {
        notesText = JSON.parse(localStorage.getItem("notes")) || ['filler', 'filler'];
    }, [note]);


    return (
        <>
            <div className="list-bin">
                {notesText.map((el, i) => <div className="list-item" key={i}> <button className="buttonX">x</button> <span>{el}</span></div>)}
            </div>
        </>


    );

}