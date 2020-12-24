import React, {useState,useEffect} from "react";
import Start from "../Componentes/start"

import "./style.css"
import Questao from "./Questao";
import resultado from "./resultado";
// importa as questões da base de dados

let interval;
const Quiz = () => {
    const [step,setStep] = useState(1);
    const[activeQuestao, setActiveQuestao] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [time, setTime] = useState(0);


    useEffect(() => {
        if(step === 3) {
          clearInterval(interval);
        }
      }, [step]);
    
      const quizStartHandler = () => {
        setStep(2);
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      }
    
      const resetClickHandler = () => {
        setActiveQuestao(0);
        setAnswers([]);
        setStep(2);
        setTime(0);
        interval = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      }
  
    return (
        <div className="Quiz">
            {step === 1 && <Start onQuizStart={quizStartHandler} /> }
            {step === 2 && <Questao 
                    
                    onAnswerUpdate={setAnswers}
                   // numberOfQuestao={quizData.data.length}
                    activeQuestao={activeQuestao}
                    setActiveQuestao={setActiveQuestao}
                    onSetStep={setStep}
                />}
               {/*} {step === 3 && <End 
                    results={answers}
                     data={quizData.data}
                    onReset={resetClickHandler}
                    onAnswersCheck={() => setShowModal(true)}
                    time={time}
                />}

                {showModal && <Modal 
                    onClose={() => setShowModal(false)}
                    results={answers}
                    data={quizData.data}
                />}
                {*/}
                </div>
    )
            
}

export default Quiz;

