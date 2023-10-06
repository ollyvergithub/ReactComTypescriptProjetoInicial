import React, {useState, ChangeEvent} from "react";

export const State = () => {

  const [text, setText] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return(
      <div>
        <p>o Texto é: {text}</p>
        <input type='text' onChange={handleChange}/>
        <hr/>
      </div>
  )
}