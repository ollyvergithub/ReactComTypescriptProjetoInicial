// Referencia: https://www.youtube.com/watch?v=GOB-lawExXc

import React, {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
    useContext,
    useImperativeHandle,
    useReducer
} from "react";

interface User {
    name: string
    login: string
    avatar_url: string
}

export const StateRocketseat: React.FC = () => {

    const [users, setUsers] = useState<[User]>()

    const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users])

    const inputRef = useRef<HTMLInputElement>(null)

    inputRef.current?.focus()


    const greeting = useCallback((user: User)=>
        alert(`Hello ${user.name}`), []
    )

    async function loadData(){
        const response = await fetch('https://api.github.com/users/ollyvergithub')
        const data = await response.json()
        setUsers(data)
    }

    return (
        <>
            <form>
                <input type='text' ref={inputRef} />
                <p>Seque no arquivo StateRocketseatUseContext</p>
            </form>

        </>
    );
};