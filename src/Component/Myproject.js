import React from "react";
const ProjectInfo = [
  {
    projectName: "Task Manager",
    projectDescription:
      "Task Manger is used for CRUD Operation in Node using HTML CSS REACT AND BOOTSTRAP",
    linkVisit: "https://github.com/ruchi14-02/mernproject",
    image: "",
  },
  {
    projectName: "Content Management System",
    projectDescription:
      "CMS is a MERN Project  USING HTML CSS REACT AND BOOTSTRAP NODEJS EXPRESSJS",
    linkVisit: "https://github.com/ruchi14-02/cms-1.0",
    image: "",
  },
  {
    projectName: "Portfolio React",
    projectDescription:
      " Portfolio React  developed by using HTML CSS REACT AND BOOTSTRAP ",
    linkVisit: "https://taskz3.herokuapp.com",
    image: "",
  },
  
];

const Projects = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5 text-success headings"> Myprojects</h1>
      <div className="row">

        {
            ProjectInfo.map((item,index)=>{
            const { projectName,projectDescription,linkVisit}= item;
                
                return(
                    
                     <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-2" key={index}>
                        <div className="card w-100 h-100">
                            {/* <img src={image} alt={image} className="img-fluid card-img-top"/> */}
                            <div className="card-header text-center">
                                <div className="card-title my-2 text-success headings"><b>{projectName}</b></div>
                            </div>
                            <div className="card-body mx-1">
                                <p className="card-text lead">
                                    {projectDescription}
                                </p>
                                
                            </div>
                            <div className="text-center footer my-3">
                                    <a href={linkVisit} target="_blank" rel="noopener noreferrer" className="btn btn-success">Visit</a>
                                </div>
                        </div>
                     </div>
                )
            })
        }
       
      </div>
    </div>
  );
};

export default Projects;