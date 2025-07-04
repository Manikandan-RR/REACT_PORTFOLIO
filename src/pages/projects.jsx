import portfolio_one from "../assets/images/portfolio_one.jpg"
import portfolio_two from "../assets/images/portfolio_two.jpg"
import portfolio_three from "../assets/images/portfolio_three.jpg"
import portfolio_four from "../assets/images/portfolio_four.jpg"
import portfolio_five from "../assets/images/portfolio_five.jpg"
import portfolio_six from "../assets/images/portfolio_six.jpg"



export function Projects() {
    return (
        <div>

            <section className="Projects hd" style={{ paddingTop: "100px" }}>

                <div className="container ht-100">

                    <div className="text-center portwidth" style={{ margin: "0 auto" }}>
                        <p className="mb-0">Projects</p>
                        <h2 className="mt-0 mb-0">We Offer Great Affordable Premium Prices</h2>
                        <p className="opacity">It is a long established fact that a reader will be distracted by the readable
                            content of a page when
                            looking at its layout. The point of using.</p>
                    </div>

                    <div className="d-flex flex-wrp portimg">
                        <img src={portfolio_one} className="mr-2" />
                        <img src={portfolio_three} className="mr-2" />
                        <img src={portfolio_five} className="mr-2" />
                        <img src={portfolio_two} className="mr-2" />
                        <img src={portfolio_four} className="mr-2" />
                        <img src={portfolio_six} className="mr-2" />
                    </div>

                </div>

            </section>

        </div>
    )
}