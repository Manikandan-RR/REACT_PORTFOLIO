import Me_N1 from "../assets/images/Me_N1.jpg"



export function Skills() {
    return (
        <div>
            <section className="skill hd" style={{paddingTop:"100px"}}>

                <div className="container ht-100">

                    <div className="d-flex  ht-100 flex-wrap align-item-center">

                        <div className="wt-52 mb" style={{marginLeft:"5%", marginRight:"10%"}}>
                            <p className="mb-0">My Skill</p>

                            <h2 className="mt-0 mb-0">I Am Expert In</h2>
                            <p className="opacity" style={{paddingBottom:"30px"}}>I've created and updated websites for many
                                different clients. I worked with multiple CMS including WordPress, Joomla, and Drupal, as well
                                as created my own custom website management system in Node.js.</p>

                            <div className="flx" style={{marginLeft:"0"}}>
                                <button className="skillbtn">HTML</button>
                                <button className="skillbtn">CSS</button>
                                <button className="skillbtn">BOOT STRAP</button>
                                <button className="skillbtn">JAVA SCRIPT</button>                                
                                <button className="skillbtn">REACT.JS</button>
                                <button className="skillbtn">NODE.JS</button>
                                <button className="skillbtn">EXPRESS JS</button>
                                <button className="skillbtn">Mongo DB</button>
                            </div>

                        </div>

                        <div className="wt-50">
                            <img src={Me_N1} alt="Image1" style={{ width: "90%" }} />
                            {/* <img style="width: 90%;" src="https://live.designtocodes.com/OnePage/NextGenAppsPro/assets/images/skill_right_img.png"> */}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}