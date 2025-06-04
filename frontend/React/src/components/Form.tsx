
import {SaveForm} from "./SaveForm.tsx";



function Form ({EditForm, cities, setCities}){

    return(
<>
    <div className="background"></div>

    <nav className="navbar">
        <div className="title">
            <a className="navbar-brand">City database test</a>
        </div>
        <div className="navbar-link">
            <ul className="nav-ul">
                <li>
                    <a href={"/#/list"} className="nav-link">
                        <p className="link-text">List of cities</p>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    <div className="container" id="container-form">
        <div className="card">
            <div>
                            <SaveForm EditForm={EditForm} cities={cities} setCities={setCities}>

                            </SaveForm>
            </div>
        </div>
    </div>
</>
    )
}
export default Form;