import React from 'react'; // we need this to make JSX compile

type Props = {
    title: string,
    content: string
    comentQty: number
    tags: string[]
}

export const DestructuringComGenerics : React.FC<Props> = ({title, content, comentQty, tags})=>{
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
            <hr/>
        </div>
    )
}