import { useEffect } from "react";

export default function List({ notes, setNotes }) {


    const remove = e => {
        setNotes(n => n = n.filter((el, i) => el = i != e.target.id))
    };

    // notes.map((el, i) => {
    // if (i == e.target.id) {
    //     notes.filter((el, i) => el[i] != e.target.id);
    //     console.log(el, i, e.target.id)
    // }
    // })
    // console.log(notes);
    // return notes;


    return (
        <>
            <div className="list-bin">
                {notes.map((el, i) => <div className="list-item" key={i}> <span>{el}</span> <button className="button-53" id={i} onClick={remove}>x</button></div>)}
            </div>
        </>
    );
}