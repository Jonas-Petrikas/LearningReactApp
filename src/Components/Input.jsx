import { useState, useEffect } from "react";

export default function Input() {


    let note = [];
    const [notes, setNotes] = useState([]);

    const add = t => {
        note = t.target.value;
    }

    const add2 = _ => {
        setNotes(prev => [...prev, note])
    }

    useEffect(_ => {
        const tekstai = JSON.stringify(notes)
        localStorage.setItem("notes", tekstai);
        console.log(localStorage);
    }, [notes]);

    return (

        <div>
            <textarea onChange={add}></textarea>
            <button onClick={add2}>Add</button>
        </div>
    )
}
