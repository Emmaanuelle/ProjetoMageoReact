import React, { useEffect, useState } from "react";

const resultado = ({resultado,data,onReset, onAnswerCheck,time}) => {

    const[correctAnwers,setCorrectAnwers] = useState(0);

    useEffect(() => {

        let correct = 0;
        resultado.forEach(resultado,index=> {
            if(resultado.a === data[index].answer){
                correct++;
            }
            
        });
        setCorrectAnwers(correct);
    }, [])

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h3> Seu Resultado</h3>
                    <p>{correctAnwers}de {data.length}</p>
                    <p><strong>{Math.floor((correctAnwers/data.length)*100)}%</strong></p>
                    <p><strong>Seu tempo</strong> 15s</p>
                    <button className="button is-info mr-2" onClink={onAnswerCheck}>Confira sua Resposta</button>
                    <button className="button is-info-sucess" onClick={onReset}> Tente Novamente</button>
                </div>
            </div>
        </div>
    )
}

export default resultado;