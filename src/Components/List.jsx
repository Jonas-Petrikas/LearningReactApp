import { useEffect } from "react";

export default function List({ notes, setNotes }) {


    const remove = e => {
        setNotes(n => n = n.filter((el, i) => el = i !== e.target.id))
    };



    return (
        <>
            <div className="list-bin">
                {notes.map((el, i) => <div className="list-item" key={i}> <span>{el}</span> <button className="button-53 button-52" id={i} onClick={remove}>Edit</button><button className="button-53" id={i} onClick={remove}>x</button></div>)}
            </div>
        </>
    );
}