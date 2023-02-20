import React, { useEffect, useState } from 'react';
import './style.css';
import { Card } from '../../components/Card'

export function Home() {

    //Estados
    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);
    const [user, setUser] = useState ({ name: '', avatar: ''});

    function handleAddStudent() {
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-BR", {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }),
        };

        setStudents(prevState => [...prevState, newStudent])
    }

    /* 
    OUTRA MANEIRA DE FAZER UTILIZANDO ASYNC AWAIT
    

    useEffect(() => {
        async function fetchData()
        {
            const response = await fetch('https://api.github.com/users/dev-alissonalves')
            const data = await response.json();
            setUser({  
                name: data.name,
                avatar: data.avatar_url,
            });
        }

        fetchData()
        
    },[]);
        
    */
    useEffect(() => {
        // Corpo do useEffect
        fetch('https://api.github.com/users/dev-alissonalves')
        .then(res => res.json())
        .then(data => {
            setUser({  
                name: data.name,
                avatar: data.avatar_url,
             })
        }) 

    },[]);

    return (
        <div className="container">

            <header>

                <h1>Lista de Presença</h1>
                
                <div>
                    <strong>{user.name}</strong>
                    <img src={user.avatar} alt="Imagem de Álisson no GitHub" />
                </div>

            </header>


            <input
                type="text"
                placeholder="Digite o nome aqui..."
                onChange={e => setStudentName(e.target.value)}
            />

            <button
                type="button"
                onClick={handleAddStudent}>
                Adicionar
            </button>

            {
                students.map((student) =>
                (
                    <Card
                        key={student.time}
                        name={student.name}
                        time={student.time}
                    />
                ))
            }

        </div>
    );
}
