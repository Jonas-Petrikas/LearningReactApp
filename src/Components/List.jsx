import { useEffect, useState } from "react";

export default function List({ notes, setNotes, show, setShow }) {


    const remove = e => {
        setNotes(n => n = n.filter((el, i) => el = i !== e.target.id))
    };

    const edit = e => {
        setShow(t => 'true');
    }



    return (
        <>
            <div className="list-bin">
                {notes.map((el, i) => <div className="list-item" key={i}> <span>{el}</span> <button className="button-53 button-52" id={i} onClick={edit}>Edit</button><button className="button-53" id={i} onClick={remove}>x</button></div>)}
            </div>
        </>
    );
}