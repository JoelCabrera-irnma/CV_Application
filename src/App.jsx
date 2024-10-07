import { useState } from "react";
import './App.css'
import Aside from './components/AsideForm.jsx'
import Resume from "./components/CvComponent.jsx";

function App() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [school, setSchool] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [responsabilities, setResponsabilities] = useState('')
    const [yearsWorking, setYearsWorking] = useState('')

    return (
        <div className="mainBox">
            <Aside
                onChangeName={(e) => setName(e.target.value)}
                onChangeEmail={(e) => setEmail(e.target.value)}
                onChangePhone={(e) => setPhone(e.target.value)}
                onChangeSchool={(e) => setSchool(e.target.value)}
                onChangeTitle={(e) => setTitle(e.target.value)}
                onChangeDate={(e) => setDate(e.target.value)}
                onChangeCompany={(e) => setCompany(e.target.value)}
                onChangePosition={(e) => setPosition(e.target.value)}
                onChangeRespons={(e) => setResponsabilities(e.target.value)}
                onChangeDateYears={(e) => setYearsWorking(e.target.value)}
            />
            <main>
                <Resume name={name} phone={phone} email={email} school={school} title={title} date={date} company={company} position={position} responsabilities={responsabilities} yearsWorking={yearsWorking} />
            </main>
        </div>

    )
}

export default App