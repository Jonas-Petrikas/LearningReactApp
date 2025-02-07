export default function List({ }) {
    // const tekstai = JSON.stringify(['random tekstas kuris yra mano note', 'kitas random tekstas', 'trečias random tekstas'])

    // localStorage.setItem("notes", tekstai);


    const notes = JSON.parse(localStorage.getItem("notes"));

    console.log(notes);


    return (
        <>
            <div className="list-bin">
                {notes.map((el, i) => <div className="list-item" key={i}> <button className="buttonX">x</button> <span>{el}</span></div>)}
            </div>
        </>


    );

}