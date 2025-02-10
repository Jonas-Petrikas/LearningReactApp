import { useState, useEffect } from "react";

export default function Input({ note, setNote, notes, setNotes }) {

    const add = txt => {
        setNote(t => t = txt.target.value);
    }

    const add2 = _ => {
        setNotes(prev => [...prev, note]);
        setNote(t => t = '');
    }

    useEffect(_ => {
        const tekstai = JSON.stringify(notes)
        localStorage.setItem("notes", tekstai);
    }, [notes]);

    return (

        <div>
            <textarea onChange={add} value={note}></textarea>
            <button onClick={add2}>Add</button>
        </div>
    )
}
