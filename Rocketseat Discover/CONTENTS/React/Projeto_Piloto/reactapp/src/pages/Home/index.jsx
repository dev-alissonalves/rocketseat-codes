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

        setStudents([newStudent])
    }

    return (
        <div className="container">

            <h1>Lista de Presença  ReactApp</h1>

            <input
                type="text"
                placeholder="Digite o nome aqui..."
                onChange={e => setStudentName(e.target.value)}
            />

            <button 
                type="button"
                onClick = { handleAddStudent }> 
                Adicionar
            </button>

            {
                students.map((student) => 
                (
                    <Card name={student.name} time={student.time} />
                ))
            }

        </div>
    );
}
