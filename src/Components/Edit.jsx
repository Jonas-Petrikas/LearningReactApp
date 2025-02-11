import List from "./List"
import { useEffect } from "react";

export default function Edit({ show, setShow, notes, setNote, setNotes, temp, setTemp }) {

    const cancel = e => {
        setShow(t => 'none');
        setTemp(notes);
    }

    const add = txt => {
        setTemp(t => t = txt.target.value);
    }

    const add2 = e => {
        console.log(e.target.id);
        setShow('none');
    }

    return (

        <div style={{ display: show }} className="edit-modal" >
            <div className="box">
                <div>
                    <textarea onChange={add} value={temp}></textarea>
                </div>
                <div className="btns">
                    <button className="button-53" onClick={add2}>Save</button>
                    <button className="button-53 button-54" onClick={cancel}>Cancel</button></div>
            </div>
        </div >

    )

}