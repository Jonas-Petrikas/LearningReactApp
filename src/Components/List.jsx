import { useEffect } from "react";

export default function List({ notes }) {


    const remove = e => {
        notes = notes.filter((el, i) => el = i != e.target.id);
        console.log(notes);
        // notes.map((el, i) => {
        // if (i == e.target.id) {
        //     notes.filter((el, i) => el[i] != e.target.id);
        //     console.log(el, i, e.target.id)
        // }
        // })
        // console.log(notes);
        // return notes;
    };

    return (
        <>
            <div className="list-bin">
                {notes.map((el, i) => <div className="list-item" key={i}> <button className="buttonX" id={i} onClick={remove}>x</button> <span>{el}</span></div>)}
            </div>
        </>
    );
}