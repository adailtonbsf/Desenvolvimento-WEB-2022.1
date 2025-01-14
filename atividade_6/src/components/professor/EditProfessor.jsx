import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseService from "../../services/FirebaseService";


const EditProfessorPage = () =>
    <FirebaseContext.Consumer>
        {(firebase) => <EditProfessor firebase={firebase} />}
    </FirebaseContext.Consumer>

function EditProfessor(props) {

    const [name, setName] = useState('')
    const [university, setUniversity] = useState('')
    const [degree, setDegree] = useState('Graduado')
    const params = useParams()
    const navigate = useNavigate();

    useEffect(
        () => {
            FirebaseService.retrieveProfessors_promisse(
                props.firebase.getFirestoreDb(),
                (professors) => {
                    setName(professors.name)
                    setUniversity(professors.university)
                    setDegree(professors.degree)
                }, params.id
            )
        }, [params.id]
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        const updatedProfessor = { name, university, degree }
        
        FirebaseService.updateProfessors(
            props.firebase.getFirestoreDb(),
            () => {
                navigate("/listProfessor")
            }, params.id, updatedProfessor
        )
    }

    return (
        <>
            <main>
                <h2>
                    Editar Professor
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Nome: </label>
                        <input type='text'
                            className='form-control'
                            value={(name == null || name === undefined) ? '' : name}
                            name='name'
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className='form-group'>
                        <label>Universidade: </label>
                        <input type='text'
                            className='form-control'
                            value={university ?? ''}
                            name='university'
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className='form-group'>
                        <label>Titulação: </label>
                        <input type='text'
                            className='form-control'
                            value={degree ?? 0}
                            name='degree'
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    <div className='form-group' style={{ paddingTop: 20 }}>
                        <input type='submit' value='Atualizar Professor' className='btn btn-primary' />
                    </div>
                </form>
            </main>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </>
    );
}

export default EditProfessorPage