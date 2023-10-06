import React from 'react'; // we need this to make JSX compile

type Props = {
    title: string,
    content: string
    comentQty: number
    tags: string[]
    // 8 Enum
    category: Category
}

export enum Category {
    JS = "Javascript",
    TS = "Typescript",
    P = "Python"
}

export const Destructuring = ({ title, content, comentQty, tags, category }: Props) => {
    return(
        <div>
            <h2><strong>Titulo:</strong> { title }</h2>
            <p><strong>Content:</strong> { content }</p>
            <div>
                <p><strong>Array de Tags:</strong></p>
                {tags.map((tag, index)=>(
                    <span key={index}>Tag: {tag}</span>
                ))}
            </div>
            <p><strong>Quantidade de Likes: {comentQty}</strong></p>
            <p>Enum Category {category}</p>
            <hr/>
        </div>
    )
}
