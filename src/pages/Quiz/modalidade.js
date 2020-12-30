import React from 'react';
import resultado from './resultado';

const Modal = ({ onClose, results, data }) => {

    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={onClose}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title"> Seus acertos</p>
                    <button className="delete" onClick={onclose}></button>
                </header>
                <section className="modal-card-body content">
                    <ul>
                    {resultado.map((result, i) =>(
                        <li key={i} className="mb-6">
                            <p><strong>{result.q}</strong></p>
                            <p className={result.a === data[i].answer ? ` has-background-sucess has-text-white p-2`: 'has-backgroubd-danger has-text-white p-2'}> Seus Acertos:{result.a}</p>
                            {result.a !== data[i]. answer && <p className="has-background-link has-text-white p-2"> Alternativas corretas:{data[i].answer}</p>}
                        </li>
                    ))}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Modal;