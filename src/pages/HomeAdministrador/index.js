import React from 'react';
import Navbar from '../NavbarAdministrador';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../images/et.jpg';
import logoNova from '../../images/logonova.png';
import reta  from '../../images/icons/qu.svg';
import Retang from '../../images/icons/ret.svg';
import fig3 from '../../images/icons/arr.svg';
import fig4 from '../../images/icons/si.svg';

const useStyles = makeStyles((theme) => ({
  imagem: {
    marginTop:"7%",
    borderRadius: 20,
    height: 350,
    width: 500,
  },
}));
const Homeadmin = (props) => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">


            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline"> O que é MaGeo Quiz!?</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  MaGeo! è uma plataforma educacional voltado para o ensino e aprendizagem de Geometria Plana por meio de um Quiz Gamificado.
                  Para saber mais sobre como quiz funciona, leia abaixo como cadastrar as questões.
                  
          </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#regras" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                      Como Funciona
              </a>
                  </div>
                  {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#fases" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10">
                     Cadastro das Questões
              </a>
                  </div> */}
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img alt="Imagem" src={logo} width="300px" className={classes.imagem} />
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " id="regras">
          <div className="lg:text-center">
            {/* <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase"></h2> */}
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
             Cadastro das Questões
      </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              
      </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"> I
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Primeiro
            </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Para realizar o cadastro das questão, se direcione para o menu lateral e click na opção cadastrar questão.
            </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">II
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Segundo
            </dt>
                  <dd className="mt-2 text-base text-gray-500">
                   Ao ter acesso ao cadastro das questões, adicionei a pergunta, a resposta, a dica, as alternativas, o link do youtube, a fase da questão e o seu nivel(facil,medio,dificil ou desafio.)
            </dd>
                </div>
              </div>

             {/*  <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"> III
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Terceiro
            </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Se jogador acertar as 5 primeiras perguntas, recebe 50 pontos + o dobro de pontos ganho e vence o 1º desafio da fase.
            </dd>
                </div>
              </div> */}

              {/* <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"> IV
                 </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Quarto
            </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Se jogador vencer as 5 próximas perguntas, recebe 50 pontos + o dobro de pontos ganho e vence o 2º desafio da fase.
            </dd>
                </div>
              </div> */}

              {/* <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"> V
                 </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Quinto
            </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Ao vencer os 2 desafios o jogador conquista  o emblema da fase.
            </dd>
                </div>
              </div> */}
            </dl>
          </div>
        </div>
      </div>
     
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center" id="fases">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase"></h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
             Fases do Quiz
      </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              As Fases do Quiz estão divida em 4 etapas
      </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"> 
                  <img alt="Imagem" src={reta } />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                  Quadrado

                    
            </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Primeira fase do Quiz ao longo do jogo terá 2 desafios, se todas as perguntas no total de 10 estiverem corretos o usuario receberá 1 emblema.
            </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <img alt="Imagem" src={Retang} />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                  Retângulo
                  
            </dt>
                  <dd className="mt-2 text-base text-gray-500">
                  Segunda fase do Quiz ao longo do jogo terá 2 desafios, se todas as perguntas no total de 10 estiverem corretos o usuario receberá 1 emblema.

            </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <img alt="Imagem" src={fig3} />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                  Triângulo
            </dt>
                  <dd className="mt-2 text-base text-gray-500">
                  Terecira fase do Quiz ao longo do jogo terá 2 desafios, se todas as perguntas no total de 10 estiverem corretos o usuario receberá 1 emblema.

            </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"> 
                  <img alt="Imagem" src={fig4} />
                 </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Círculo
            </dt>
                  <dd className="mt-2 text-base text-gray-500">
                 Quarta fase do Quiz ao longo do jogo terá 2 desafios, se todas as perguntas no total de 10 estiverem corretos o usuario receberá 1 emblema.

            </dd>
                </div>
              </div>  
            </dl>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Homeadmin;