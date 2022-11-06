import React from "react"
import "./style.css"
import contactpng from "../images/contactpng.png"

function Contact() {
    return (
        <div>

            <div className="container">
                <div className="row">

                    <div className='col-md-12 text-center'>
                        <h2 className=" text-success  headings text-center">Get In Touch</h2>
                    </div>
                </div>
                <div className="row mt-3">
                <div className='col-md-12 col-sm-12 col-xl-12 col-xxl-12 text-center'>
                        <img src={contactpng} className=" text-success  headings text-center"/>
                    </div>
                    </div>

        
     
            <div className='row font-weight-bold mt-3'>
                <div className='col-md-12 col-sm-12 col-xl-12 col-xxl-12'>
               
                    <div className='card'>
                        <div className='card-body'>

                            <form autoComplete="off">
                                <div className='from-group mt-2 font-weight-bold'>
                                    <label htmlFor='name'>Full Name</label>
                                    <input type="text" id="name" className='form-control'  name="name" />
                                </div>


                                <div className='from-group mt-2'>
                                    <label htmlFor='email'>Email</label>
                                    <input type="text" id="email" className='form-control'  name="email" />
                                </div>


                                <div className='from-group mt-2'>
                                    <label htmlFor='subject'>subject</label>
                                    <input type="text" id="subject" className='form-control'  name="subject" />
                                </div>

                                <div className='from-group mt-2'>
                                    <label htmlFor='message'>Message</label>
                                    <textarea  id="message" className='form-control'  name="message" />
                                </div>



                                <div className='from-group mt-2'>
                                    <button className='btn btn-success' value='submit' type="button">send</button>
                                </div>

                            </form>

                        </div>
                    </div>
                    
                </div>
            </div>
          
        </div>
        </div>
    )
}
export default Contact