import Me_N2 from "../assets/images/Me_N2.jpg";


export function AboutUs() {
    return (
        <div>

            <section className="aboutus hd" style={{ paddingTop: "100px" }}>

                <div className="container">

                    <div className="d-flex flex-wrap align-item-center ">

                        <div className="wt-50 ml mr">

                            <img src={Me_N2} alt="Image2" style={{ width: "70%" }} />

                        </div>

                        <div className="wt-50">

                            <p>About Me</p>
                            <h2>I am a Passionate Web Designer</h2>
                            <p className="opacity">Obviously I am a Web Designer. Web Developer with over 7 years of the best
                                experience.
                                Experienced with all stages of the development cycle for ourself dynamic web projects. The as
                                opposed to using Content here, content here, making it look like readable English.</p>

                            <h3>Smart Work</h3>
                            <p className="opacity">A part of the team that has built the front-end for an enterprise-level web
                                application in
                                AngularJS. I've been a part of a team that has built.</p>

                            <h3>Modern Work</h3>
                            <p className="opacity">I've worked with a wide range of technologies, including MS SQL Server and
                                Python. One of my
                                favorite characteristics of an employer is their passion for the work they are doing.</p>
                        </div>
                    </div>
                </div>

                <p className="text-center mb-0">Hobbies</p>
                <h2 className="text-center mt-0">Things I Love to Do</h2>
                <div className="flx">
                    <label className="box">Football</label>
                    <label className="box">Cybersecurity</label>
                    <label className="box">Cooking</label>
                    <label className="box">Music</label>
                    <label className="box">Digital Marketing</label>
                    <label className="box">Graphic Design</label>
                    <label className="box">Photography</label>
                    <label className="box">DevOps</label>
                    <label className="box">WP Optimization</label>
                    <label className="box">Blogging</label>
                    <label className="box">Coding</label>
                    <label className="box">Gaming</label>
                    <label className="box">UX Research</label>
                    <label className="box">Project Manage</label>
                    <label className="box">Writing</label>
                    <label className="box">Reading</label>
                    <label className="box">Swimming</label>
                    <label className="box">Dancing</label>
                </div>

            </section>

        </div>
    )
}