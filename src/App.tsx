import React from 'react';

// 4 - Importacao de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturando Props
import SecondComponent from "./components/SecondComponent";
import {Destructuring} from "./components/Destructuring";
import {DestructuringComGenerics} from "./components/DestructuringComGenerics";

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
            <h2>Chamando componente SecondComponent</h2>
            <SecondComponent name={'Ollyver'} />
            <h2>Chamando componente Destructuring</h2>
            <Destructuring
                title={'Título passado'}
                content={'Content passado. Content passado.'}
                comentQty={5}
                tags={['tag1', 'tag2']}
            />

            <DestructuringComGenerics
                title={'Título passado DestructuringComGenerics'}
                content={'Content passado DestructuringComGenerics. Content passado DestructuringComGenerics.'}
                comentQty={10}
                tags={['python', 'react']}
            />
        </div>
    );
}

export default App;
