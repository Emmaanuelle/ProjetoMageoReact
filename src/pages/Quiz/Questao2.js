import React from "react";

const Questao2 = ({ mostrarResposta, irParaProximaQuestao,handleAnswer, data: { question, correct_answer, answers } }) => {


    return (
        <div className="container">
            <div className="flex flex-col">
                <div className="bg-black text-white p-10 rounded-lg shadow">
                    <h3 className="text-2xl"
                        dangerouslySetInnerHTML={{ __html: question }} />
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                    {answers.map((resposta, id) => {
                        const bgColor = mostrarResposta ?
                            resposta === correct_answer ? 'bg-green-500' : 'bg-red-500' : 'bg-black';
                        const textColor = mostrarResposta ? 'text-white' : 'text-white';
                        return (
                            <button key={id} className={`${bgColor} rounded p-4
                shadow ${textColor} font-semibold`}
                                onClick={() => handleAnswer(resposta)} dangerouslySetInnerHTML={{ __html: resposta }} />
                        )
                    })}
                </div>
                {mostrarResposta && (
                    <button className="ml-auto bg-black 
                    text-white p-4 font-semibold rounded shadow mt-6"
                    onClick={irParaProximaQuestao}>Próxima Questão</button>
                )}
            </div>
        </div>
    )
}
export default Questao2;