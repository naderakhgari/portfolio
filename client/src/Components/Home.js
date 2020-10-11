import React from "react";

const Home = ()=>{
    return(
        <div className="home-container col-12">
            <div className="col-6 right-home">
                <p>
                    I am Full Stack Developer
                </p>
            </div>
            <div className="col-6 left-home">
            <a href="/projects" className="nolink home-link"><p>projects</p></a>
            <a href="/cv" className="nolink home-link"><p>CV</p></a>
        </div>
        </div>
        
    )
}
export default Home;