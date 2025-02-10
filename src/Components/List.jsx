import { useEffect, useState } from "react";

export default function List({ notes }) {
    const remove = (e, id) => {
        console.log(e.target)

    }


    return (
        <>
            <div className="list-bin">
                {notes.map((el, i) => <div className="list-item" key={i}> <button className="buttonX" onClick={remove}>x</button> <span>{el}</span></div>)}
            </div>
        </>


    );

}