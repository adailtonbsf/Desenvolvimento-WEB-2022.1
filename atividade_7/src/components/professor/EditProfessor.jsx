import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseProfessorService from "../../services/FirebaseProfessorService";
import RestrictPage from "../../utils/RestrictPage";

const EditProfessorPage = ({ setShowToast, setToast }) =>
    <FirebaseContext.Consumer>
        {
            (firebase) => {
                return (
                    <RestrictPage isLogged={firebase.getUser() != null}>
                        <EditProfessor
                            firebase={firebase}
                            setShowToast={setShowToast}
                            setToast={setToast} />
                    </RestrictPage>
                )
            }
        }
    </FirebaseContext.Consumer>

function EditProfessor(props) {

    const [name, setName] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const [validate, setValidate] = useState({ name: '', university: '', degree: '' })
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(
        () => {
            FirebaseProfessorService.retrieve(
                props.firebase.getFirestoreDb(),
                (professor) => {
                    setName(professor.name)
                    setUniversity(professor.university)
                    setDegree(professor.degree)
                },
                params.id
            )
        }
        , [params.id, props.firebase]
    )

    const validateFields = () => {
        let res = true
        setValidate({ name: '', university: '', degree: '' })

        if (name === '' || university === '' || degree === '') {
            props.setToast({ header: 'Erro!', body: 'Preencha todos os campos.' })
            props.setShowToast(true)
            setLoading(false)
            res = false
            let validateObj = { name: '', university: '', degree: '' }
            if (name === '') validateObj.name = 'is-invalid'
            if (university === '') validateObj.course = 'is-invalid'
            if (degree === '') validateObj.ira = 'is-invalid'
            setValidate(validateObj)
        }
        return res
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        if(!validateFields()) return
        const updatedProfessor = { name, university, degree }
        FirebaseProfessorService.update(
            props.firebase.getFirestoreDb(),
            () => {
                navigate("/listProfessor")
            }, params.id, updatedProfessor
        )
    }

    const renderSubmitButton = () => {
        if (loading) {
            return (
                <div style={{ paddingTop: 20 }}>
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span style={{ marginLeft: 10 }}>Carregando...</span>
                    </button>
                </div>
            )
        }
        return (
            <>
                <div className="form-group" style={{ paddingTop: 20 }}>
                    <input type="submit" value="Efetuar Edição" className="btn btn-primary" />
                </div>
            </>
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
                        <label>Nome* </label>
                        <input type='text'
                            className={`form-control ${validate.name}`}
                            value={(name == null || name === undefined) ? '' : name}
                            name='name'
                            onChange={(event) => { setName(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Universidade* </label>
                        <input type="text"
                            className={`form-control ${validate.university}`}
                            value={university ?? ""}
                            name="university"
                            onChange={(event) => { setUniversity(event.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Titulação* </label>
                        <input type="number"
                            className={`form-control ${validate.degree}`}
                            value={degree ?? ""}
                            name="degree"
                            onChange={(event) => { setDegree(event.target.value) }} />
                    </div>
                    {renderSubmitButton()}
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default EditProfessorPage