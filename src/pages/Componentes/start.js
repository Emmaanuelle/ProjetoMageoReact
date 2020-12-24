import React from "react";

const Start = ({onQuizStart}) => {

    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                <h1> Jogar</h1>
                <p> Bom jogo</p>
                <button className="button is-info is-mediun" onClick={onQuizStart}>Start</button>
                </div>
            </div>
        </div>



    )
}

export default Start;