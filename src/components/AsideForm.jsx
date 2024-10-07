import './styles/asideForm.css'

function Aside({ onChangeName, onChangeEmail, onChangePhone, onChangeTitle, onChangeSchool, onChangeDate, onChangeCompany, onChangePosition, onChangeRespons, onChangeDateYears }) {
    return (
        <>
            <div className="container">
                <div className="form_area">
                    <p className="title">RELLENA CAMPOS</p>
                    <form action="">
                        <div className="form_group">
                            <label className="sub_title" htmlFor="name">
                                Name
                            </label>
                            <input
                                placeholder="Enter your full name"
                                className="form_style"
                                type="text"
                                id="name"
                                onChange={onChangeName}
                            />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="email">
                                Email
                            </label>
                            <input
                                placeholder="Enter your email"
                                id="email"
                                className="form_style"
                                type="email"
                                onChange={onChangeEmail}
                            />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                placeholder="Enter your phone number"
                                id="phone"
                                className="form_style"
                                type="tel"
                                onChange={onChangePhone}
                            />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="title">
                                Title
                            </label>
                            <input
                                placeholder="Enter your title"
                                id="title"
                                className="form_style"
                                type="text"
                                onChange={onChangeTitle}
                            />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="school">
                                School
                            </label>
                            <input
                                placeholder="Enter your school"
                                id="school"
                                className="form_style"
                                type="text"
                                onChange={onChangeSchool}
                            />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="studyDate">
                                Date of Study
                            </label>
                            <input
                                placeholder="Enter date of study"
                                id="studyDate"
                                className="form_style"
                                type="date"
                                onChange={onChangeDate}
                            />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="company">
                                Company Name
                            </label>
                            <input
                                placeholder="Enter company name"
                                id="company"
                                className="form_style"
                                type="text"
                                onChange={onChangeCompany}
                            />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="position">
                                Position Title
                            </label>
                            <input
                                placeholder="Enter position title"
                                id="position"
                                className="form_style"
                                type="text"
                                onChange={onChangePosition}
                            />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="responsibilities">
                                Main responsibilities
                            </label>
                            <input
                                placeholder="Enter main responsibilities"
                                id="responsibilities"
                                className="form_style"
                                type="text"
                                onChange={onChangeRespons}
                            />
                        </div>
                        <div className="form_group">
                            <label className="sub_title" htmlFor="yearsWorked">
                                Years worked
                            </label>
                            <input
                                placeholder="Enter years worked"
                                id="yearsWorked"
                                className="form_style"
                                type="number"
                                onChange={onChangeDateYears}
                            />
                        </div>

                        <div>
                            <button className="btn">SAVE ME</button>
                            <p>
                                Have an Account?{" "}
                                <a className="link" href="">
                                    Login Here!
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Aside