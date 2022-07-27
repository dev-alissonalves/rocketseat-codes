import React, { useState } from 'react';
import './style.css';
import { Card } from '../../components/Card'

export function Home() {

    //Estados
    const [studentName, setStudentName] = useState("");
    const [students, setStudents] = useState([]);

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

    return (
        <div className="container">

            <header>

                <h1>Lista de Presença  ReactApp</h1>
                <div>
                    <strong>Álisson Alves</strong>
                    <img src="https://github.com/dev-alissonalves.png" alt="Imagem de Álisson no GitHub" />
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
