import List from "./List"

export default function Edit({ show }) {

    console.log(show);

    return (

        <div style={{ display: { show } }} className="edit-modal" >
            <div className="box">
                <div>
                    <textarea name="" id=""></textarea>
                </div>
                <div className="btns"><button className="button-53" >Save</button>
                    <button className="button-53 button-54" >Cancel</button></div>
            </div>
        </div >

    )

}