import React from 'react';

function App() {

    // 1 - Variaveis
    const name: string = "Ollyver"
    const age: number = 51
    const isWorking: boolean = true

    return (
        <div className="App">
            <h1>Seção 11 React com Typescript</h1>
            <h2>Exibindo a variavel nome: {name}</h2>
            <h2>Exibindo a variavel age: {age}</h2>
            {isWorking && (
                <p>Está trabalhando</p>
            )}
        </div>
    );
}

export default App;
