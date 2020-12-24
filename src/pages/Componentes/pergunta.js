import ract, { useState} from "react";
import { view, text} from "react-dom";




function Quiz(){
    const[carregando, SetCarregando]= useState(); // mostrar para o usuario a outra opção que esta carregando
    const[pergunta, setPergunta] = useState();   // pergunta que sera exibida ao usuario ser 
    const[resposta, setResposta] = useState([]);
    const[pontuacao, setPontuacao] = useState(0);
    const[ gameOver, setGameOver] = useState(true);
    const[Total_Perguntas] = useState(5);
    const setAnwer = useRef(null);
     

async function startQuiz(){

}

   


}

  