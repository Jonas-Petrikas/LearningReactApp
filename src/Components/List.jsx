import { useEffect, useState } from "react";

export default function List({ notes }) {

    let notesText = JSON.parse(localStorage.getItem("notes"));

    useEffect(_ => {
        notesText = JSON.parse(localStorage.getItem("notes")) || ['filler', 'filler'];
    }, [notes]);


    return (
        <>
            <div className="list-bin">
                {notesText.map((el, i) => <div className="list-item" key={i}> <button className="buttonX">x</button> <span>{el}</span></div>)}
            </div>
        </>


    );

}