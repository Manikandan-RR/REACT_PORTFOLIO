import world_political_maps from "../assets/images/world-political-maps.jpg"


export function Contact() {
    return (
        <div>
            <section className="Contacts mb hd">

                <div className="container ht-100">

                    <div className="d-flex  ht-100 flex-wrap align-item-center">

                        <div className="wt-48">
                            <form>
                                <div className="card" style={{ marginRight: "4%" }}>

                                    <div className="card-body contbtn">
                                        <p>Contact</p>
                                        <h2>Get In Touch</h2>
                                        <input type="text" placeholder="Name:" className="contact-input" />
                                        <input type="email" placeholder="Email:" className="contact-input" />
                                        <input type="text" placeholder="Phone:" className="contact-input" />
                                        <textarea placeholder="Write Your Message" className="contact-input"></textarea>
                                        <button className="btn btn-contact">CONTACT US</button>

                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className="wt-48">
                            <div className="card">

                                <div className="card-body">
                                    <img src={world_political_maps} width={"100%"} alt="WorldMap" style={{ padding: "2%", paddingLeft: "0%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}