import React from "react"
import "./style.css"
import html from "../images/html.png"
import css from "../images/css.png"
import javascript from "../images/javascript.png"
import react from "../images/react.png"
import Bootstrap from "../images/Bootstarp.png"
import git from "../images/git.png"
import nodejs from "../images/nodejs.png"
import mongo from "../images/mongo.png"

function Skills() {
    return (
        <div className="bodycolor">
            <h2 className=" headings text-center">Skills</h2>
            <div className="container">
                <div className="row ">
                    <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                        <div className="card mt-4 cardShadow">
                            <div className="card-header">
                                <h4 className="text-success text-center">HTML</h4>
                            </div>
                            <div className="card-body bodycolor">
                                <center><img src={html} alt="html" className="text-center imagesize" /></center>
                            </div>
                            <div className="card-footer"></div>
                        </div>

                    </div>

                    <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                        <div className="card mt-4 cardShadow">
                            <div className="card-header">
                                <h4 className="text-success text-center">CSS</h4>
                            </div>
                            <div className="card-body bodycolor">
                                <center><img src={css} alt="CSS" className="text-center imagesize" /></center>
                            </div>
                            <div className="card-footer"></div>
                        </div>

                    </div>

                    <div className="row ">
                        <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                            <div className="card mt-4 cardShadow">
                            <div className="card-header">
                                <h4 className="text-success text-center ">javascript</h4>
                            </div>
                            <div className="card-body bodycolor">
                                <center><img src={javascript} alt="js" className="text-center jsimagesize" /></center>
                            </div>
                                <div className="card-footer"></div>
                            </div>

                        </div>


                            <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                            <div className="card mt-4 cardShadow">
                            <div className="card-header">
                                <h4 className="text-success text-center ">Reactjs</h4>
                            </div>
                            <div className="card-body bodycolor">
                                <center><img src={react} alt="raact" className="text-center imagesize bodycolor" /></center>
                            </div>
                                <div className="card-footer"></div>
                            </div>

                        </div>

                        <div className=" row ">
                        <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                            <div className="card mt-4 cardShadow">
                            <div className="card-header">
                                <h4 className="text-success text-center">bootstrap</h4>
                            </div>
                            <div className="card-body bodycolor">
                                <center><img src={Bootstrap} alt="boot" className="text-center imagesize" /></center>
                            </div>
                                <div className="card-footer"></div>
                            </div>

                        </div>


                        <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                            <div className="card mt-4 cardShadow">
                            <div className="card-header">
                                <h4 className="text-success text-center">GitHub</h4>
                            </div>
                            <div className="card-body bodycolor">
                                <center><img src={git} alt="boot" className="text-center imagesize" /></center>
                            </div>
                                <div className="card-footer"></div>
                            </div>

                        </div>
                        </div>

                        <div className=" row ">
                        <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                            <div className="card mt-4 cardShadow">
                            <div className="card-header">
                                <h4 className="text-success text-center">mongoDB</h4>
                            </div>
                            <div className="card-body bodycolor">
                                <center><img src={mongo} alt="boot" className="text-center imagesize" /></center>
                            </div>
                                <div className="card-footer"></div>
                            </div>

                        </div>

                   
                        <div className="col-md-12 col-sm-12 col-xl-6 col-xxl-6">
                            <div className="card mt-4 cardShadow">
                            <div className="card-header">
                                <h4 className="text-success text-center">NodeJs</h4>
                            </div>
                            <div className="card-body bodycolor">
                                <center><img src={nodejs} alt="boot" className="text-center imagesize" /></center>
                            </div>
                                <div className="card-footer"></div>
                            </div>

                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Skills