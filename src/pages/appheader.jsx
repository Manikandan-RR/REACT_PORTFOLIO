import { Link, useNavigate } from "react-router-dom";


export function AppHeader() {
    const navigate = useNavigate();

    return (
        <div>

            <header class="app-header">

                <div class="container">

                    <div class="d-flex align-item-center justify-content-between noto-sans-regular">

                        <div class="name">
                            <h1>MANIKANDAN R</h1>
                        </div>

                        <ul class="app-menu">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>

                        <button className="btn btn-contact" onClick={() => navigate("/contact")} > Lets Talk </button>


                    </div>

                </div>

            </header >


        </div>
    )
}


