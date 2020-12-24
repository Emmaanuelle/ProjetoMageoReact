import React, { useState, useEffect, useRef } from "react";
import api from "../../services/api"




const Questao = ({ data, onAnswerUpdate, numberOfQuestao, activeQuestao, onSetActiveQuestao, onSetStep }) => {

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();
    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value)
    }
    const nextClickHandler = (e) => {
        if (selected === '') {
            return setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.resposta, a: selected }]);
        setSelected('');
        if (activeQuestao < numberOfQuestao - 1) {
            onSetActiveQuestao(activeQuestao + 1);
        } else {
            onSetStep(3);
        }
    }




const [Perguntas, setPerguntas] = useState([]);
useEffect(() => {
    const getPerguntas = async () => {
        try {
            const resposta = await api.get("/questao");
            setPerguntas(resposta.data)
            console.log(resposta)


        } catch (error) {
            alert("Erro ao Carregar")
            console.log(error)

        }

    }

    getPerguntas()
}, []

)

const alternativas = Perguntas.map(i => {
    return (
        <span>{i.pergunta}, {i.resposta},{i.dica},{i.tipo}</span>

    );
})


return (
    <div className="card">
        <div className="card-content">
            <div className="content">
                <h1 className="mb-5"> Questao aqui</h1>
                <div className="control"></div>
                <label className="radio has-backuground-light">
                    <input type="radio" name="answer" value="" onChange={() => { }} />
                </label>
                {alternativas}
                <label className="radio has-backuground-light">
                    <input type="radio" name="answer" value="" onChange={() => { }} />
                </label>
                {alternativas}
                <label className="radio has-backuground-light">
                    <input type="radio" name="answer" value="" onChange={() => { }} />
                </label>
                {alternativas}
                <div className="control" ref={radiosWrapper}>
                {alternativas.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="pergunta" value={choice} onChange={changeHandler} />
                {choice}
              </label>
            ))}
          </div>
                {alternativas}
            </div>
            {error && <div className="has-text-danger">{error} erro aqui</div>}
            <button className="button is-link is-medium is-fullwidth mt-4" onClick={nextClickHandler}>Proxímo</button>

        </div>

    </div>

);

    }

export default Questao;