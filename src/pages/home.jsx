import Me_N1 from "../assets/images/Me_N1.jpg";
import { Link, useNavigate } from "react-router-dom";



export function HomePage() {
    const navigate = useNavigate();

    return (
        <div>git remote add origin https://github.com/Manikandan-RR/REACT_PORTFOLIO.git

            <section className="banner">

                <div className="container ht-100">

                    <div className="d-flex  ht-100 flex-wrap align-items-center">

                        <div className="wt-35 hd" style={{ marginLeft: "5%", marginRight: "10%" }}>

                            <h1 style={{ paddingTop: "50px" }}>Hey! I am Web Developer</h1>
                            <p className="opacity" style={{ paddingBottom: "30px" }}>I am a Full-Stack Web Developer with extensive
                                experience of over 4
                                years. My expertise is in
                                creating & designing websites, Mobile Apps, and Desktop Applications.</p>

                            {/* <Link to="/aboutus">
                                <button className="btn learn-more" style={{ marginRight: "20px" }} >Learn
                                    More</button>
                            </Link> */}

                            <button className="btn btn-contact" onClick={() => navigate("/aboutus")} style={{ marginRight: "20px" }}> Learn More</button>

                            <button className="btn btn-contact" onClick={() => navigate("/contact")} > Hire Me</button>

                        </div>

                        <div className="wt-50">
                            <img src={Me_N1} style={{ width: "80%", paddingTop:"120px" }} />
                        </div>
                        
                    </div>
                </div>
            </section>

        </div >
    )
}