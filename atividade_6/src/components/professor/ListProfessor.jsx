import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ProfessorTableRow from './ProfessorTableRow';

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseService from "../../services/FirebaseService";

const ListProfessorPage = () =>
    <FirebaseContext.Consumer>
        {(firebase) => <ListProfessor firebase={firebase} />}
    </FirebaseContext.Consumer>

function ListProfessor(props) {

    const [professors, setProfessors] = useState([])
    //const [flag, setFlag] = useState(false)
    useEffect(
        () => {
            FirebaseService.listProfessors_onSnapshot(
                props.firebase.getFirestoreDb(),
                (professors) => {
                    setProfessors(professors)
                }
            )
        }, [props]
    )

    function deleteProfessorById(_id){
        let professorsTemp = professors
        for(let i=0;i<professorsTemp.length;i++){
            if(professorsTemp[i]._id === _id){
                //console.log('1')
                professorsTemp.splice(i,1)
            }
        }
        setProfessors([...professorsTemp]) //deve-se criar um outro array para disparar o re-render
        //setFlag(!flag)
    }

    function generateTable() {

        if (!professors) return
        return professors.map(
            (professors, i) => {
                return <ProfessorTableRow
                    professors={professors}
                    key={i}
                    deleteProfessorById={deleteProfessorById}
                    firestoreDb={props.firebase.getFirestoreDb()}
                />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Professores
                </h2>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Universidade</th>
                            <th>Titulação</th>
                            <th colSpan={2} style={{ textAlign: 'center' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </>
    );
}

export default ListProfessorPage