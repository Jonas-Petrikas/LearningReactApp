import List from "./List"
import { useEffect } from "react";

export default function Edit({ show, setShow }) {

    console.log(show);

    useEffect(_ => {
        console.log('woo')
    }, [show]);

    const cancel = e => {
        setShow(t => 'none');
    }

    return (

        <div style={{ display: show }} className="edit-modal" >
            <div className="box">
                <div>
                    <textarea name="" id=""></textarea>
                </div>
                <div className="btns"><button className="button-53" >Save</button>
                    <button className="button-53 button-54" onClick={cancel}>Cancel</button></div>
            </div>
        </div >

    )

}