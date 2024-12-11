import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Options from "./components/options";
import Preview from "./components/preview";

function App() {
  const movies = [
    {
      id: 1,
      title: "Cobra Kai",
      capa: require("./assets/capa-cobrakai.jpeg"),
      video: require("./assets/videos/cobrakai.mp4"),
      descricao:
        "Décadas após o torneio que mudou suas vidas, Johnny e Daniel reacendem a rivalidade no dojo de caratê, agora com uma nova geração.",
    },
    {
      id: 2,
      title: "Round 6",
      capa: require("./assets/round6.jpg"),
      video: require("./assets/videos/round6.mp4"),
      descricao:
        "Desesperados por dinheiro, competidores aceitam um convite para um jogo mortal de sobrevivência que oferece um prêmio milionário.",
    },
    {
      id: 3,
      title: "Outer Banks",
      capa: require("./assets/oater-banks.jpg"),
      video: require("./assets/videos/oaterbanks.mp4"),
      descricao:
        "Um grupo de adolescentes se envolve em uma caça ao tesouro misteriosa enquanto enfrentam segredos e perigos em uma ilha costeira.",
    },
    {
      id: 4,
      title: "Stranger Things",
      capa: require("./assets/stranger-things.jpg"),
      video: require("./assets/videos/strangerthings.mp4"),
      descricao:
        "Quando um garoto desaparece, sua mãe, amigos e um xerife local enfrentam forças sobrenaturais e segredos sombrios de uma pequena cidade.",
    },
  ];
const [selectMovie,setSelectMovie] = useState(movies[0])

  return (
    <div className="w-full h-full bg-dark overflow-x-hidden">
      <Header />
      <Preview selectMovie={selectMovie} />
      <Options movies={movies} setSelectMovie={setSelectMovie}/>
    </div>
  );
}

export default App;
