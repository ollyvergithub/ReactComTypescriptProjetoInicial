import React from 'react';

// 4 - Importacao de componentes
import FirstComponent from "./components/FirstComponent";

function App() {

    // 1 - Variaveis
    const name: string = "Ollyver"
    const age: number = 51
    const isWorking: boolean = true


    // 2 - Funções
    const userGreeting = (name: string): string =>{
        return `Olá, ${name}!`
    }

    return (
        <div className="App">
            <h1>Seção 11 React com Typescript</h1>
            <h2>Exibindo a variavel nome: {name}</h2>
            <h2>Exibindo a variavel age: {age}</h2>
            {isWorking && (
                <p>Está trabalhando</p>
            )}
            <h2>Chamando função userGreeting: {userGreeting(name)}</h2>
            <h2>Chamando componente FirstComponent</h2>
            <FirstComponent/>
        </div>
    );
}

export default App;
