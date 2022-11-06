import React from "react"
import a4size from "../images/a4size.png"

import background from "../images/background.jpg"

const style = {
    fontsize: '30px',
    border: '2px solid tomato',
    padding: '10px',
    backgroundColor: 'transparent',
    position: 'relative',
    top: '470%',
    left: '30%',
    fontSize: '20px',
    boxShadow: '3px 3px 3px rgb(225, 152, 140)',
    backgroundColor: 'tomato',
    opacity: ' 0.8',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bolder',
    transform: ' scale(0.7)'
}
const downloadStyle = {
    fontsize: '30px',
    border: '2px solid tomato',
    padding: '10px',
    marginLeft:'7px',
    backgroundColor: 'transparent',
    position: 'relative',
    top: '370%',
    left: '42%',
    fontSize: '20px',
    boxShadow: '3px 3px 3px rgb(225, 152, 140)',
    backgroundColor: 'tomato',
    opacity: ' 0.8',
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bolder',
    transform: ' scale(0.7)'

}


function Home() {
    return (

    
        <div className="container">
            
            <div className="">
                <div className="row">
                <center>

                    <div className="myname">
                        Hi, I am Ruchi.. <br />
                        Web Developer | Web Designer | Graphics Designer
                    </div>
                </center>
      
            </div>
             
       
          <div className="myimage">
        
        <img src={a4size} alt="images" />

    </div>
            <div className="row">
                <div className="">
                    <a href={"http://localhost:3000/contact"} className="btn btn-success" style={style}>Hire me</a>
                </div>
                <br/><br/>
                <div className="">
                    <a href={"http://localhost:3000/contact"} className="btn btn-success" style={downloadStyle}> Download CV</a>
                </div>
            </div>
        </div>
        </div>
//om

    )
}
export default Home