import React from "react"
import { NavLink } from "react-router-dom"
import Educations from "../images/Educations.png"

function Education() {
    return (


        <div>
            <h2 className=" text-success headings text-center">Experience and Education</h2>
            <div className="container">
                <div className="row">
                    {/* <div className="col-md-12 col-sm-12 col-xl-12 col-xxl-12">
                        <div className="card mt-4 cardShadow">
                        <h2 className=" text-success headings text-center"></h2>
                            </div>
                            </div> */}

                </div>
                <div className="row ">
                    <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                        <div className="card mt-4 cardShadow">
                            <div className="card-header">
                            <h2 className=" text-success headings text-center">Education</h2>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <center>
                                    <img src ={Educations} alt="education" className="imagesize"/>
                                    </center>
                                    
                                  
                                    <li className="nav-items text-success font-weight-bolder">
                                   Completing my College From Bhilai institute from Technology,Raipur(Chattishgah)
                                    </li>
                                    <li className="nav-items text-success font-weight-bolder">
                                    Completing my 12TH  and 10TH From Shivom Vidya Peeth,Raipur(Chattishgah)
                                    </li>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                        <div className="card mt-4 cardShadow">
                            <div className="card-header">
                            <h2 className=" text-success headings text-center">Experience</h2>
                            </div>
                            <div className="card-body">
                            <h3 className=" text-success headings text-center">ULCC</h3>
                            <p className="text-success font-weight-bold"> This is Static WebSite .This is a skin care Hospiatal, This is an Static Website Developed by using
                                HTML,CSS AND BOOTSTRAP.In this there is a Menu through which we can visit diiferent sections
                                and get Information about Hospital
                            </p>
                            <a href={`http://ulcc.in/?i=1`} target="_blank"  className="btn btn-success">Visit my site</a>
                          


                            <h3 className=" text-success headings text-center">Freelancer</h3>
                            <p className="text-success font-weight-bold"> This is a Dynamic Website developed by measuring
                            it has two section one for Employer and second for Employee and both are talking according to this app and 
                            freelancing work alloted
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Education