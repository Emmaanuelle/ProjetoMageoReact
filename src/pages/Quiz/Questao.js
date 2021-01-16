import React from "react";
import CustomizedDialogs from "./dialog";
import LinearWithValueLabel from "./Progresso";

const Questao = ({ mostrarResposta, irParaProximaQuestao,handleAnswer, data: { pergunta, resposta, answers,video } }) => {


    return (
            <div className="container">
                {video !== null?
                <div className="bg-white text-purple-800 p-10 rounded-lg shadow">
                <h3 className="text-2xl"
                        dangerouslySetInnerHTML={{ __html: video }} />
                </div>:
                <></>
                 }
                <CustomizedDialogs/>
                <LinearWithValueLabel/>
                <div className="bg-white text-purple-800 p-10 rounded-lg shadow">
                    <h3 className="text-2xl"
                        dangerouslySetInnerHTML={{ __html: pergunta }} />
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                    {answers.map((resposta_certa, id) => {
                        const bgColor = mostrarResposta ?
                        resposta_certa === resposta ? 'bg-green-500' : 'bg-red-500' : 'bg-white';
                        const textColor = mostrarResposta ? 'text-white' : 'text-purple-700';
                        return (
                            <button key={id} className={`${bgColor} rounded p-4
                shadow ${textColor} font-semibold`}
                                onClick={() => handleAnswer(resposta_certa)} dangerouslySetInnerHTML={{ __html: resposta_certa }} />
                        )
                    })}
                </div>
                {mostrarResposta && (
                    <button className="ml-auto bg-purple-700 
                    text-white p-4 font-semibold rounded shadow mt-6"
                    onClick={irParaProximaQuestao}>Próxima Questão</button>
                )}
            </div>
    )
}
export default Questao;