import React from "react";
import About from './About.module.css'
import AboutNavbar from './AboutNavbar'

function AboutUs() {
    function LearnMore(){
        alert("Clicked From AboutUs Section")
    }
    return (
        <>
        <AboutNavbar />
        
            <div className={About.stack} id="about">
                <div className={About.hack}>
                    <div className={About.video}>
                    <iframe className={About.video1} width="300" height="415" src="https://www.youtube.com/embed/faFfE97RfuU" title="YouTube video player" frameborder="0" 
                     allow="accelerometer; autoplay; 
                     clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                     </div>
                     <ul>
                        <div className={About.content}>

                    <h1 style={{ color: "red" , fontWeight:"bolder" , textShadow:"2px 2px white"}}>ABOUT US</h1>
                    <br />
                    <p style={{ fontWeight: "bolder", color:"white" }}>
                        When you're at the gym feeling like 
                    you'll never be one of those people who look like they've been at it their entire lives, 
                     remember that they all started somewhere.
                    </p>
                    <p style={{ fontWeight: "bolder" ,color:"white"}}>
                        When you're at the gym feeling like 
                    you'll never be one of those people who look like they've been at it their entire lives, 
                     remember that they all started somewhere.
                    </p>
                     <button className={About.btn} onClick={LearnMore}>Learn More</button> 
                    {/* <button type="button" class="btn btn-danger" onClick={LearnMore}>Learn More</button> */}
                    </div>
                    </ul>

                </div>
                <div className={About.hack2}>
                    <ul className={About.content}>
                    <h1 style={{ color: "red" , fontWeight:"bolder" ,textShadow:"2px 2px white"}}>WHY YOU CHOOSE US ?</h1>
                    <br />
                        <li style={{color:"yellow"}}>
                        his is the vision that many people have when they decide to join a gym,
                        </li>
                    <p style={{ fontWeight: "bolder",color:"white" }}>his is the vision that many people have when they decide to join a gym,
                     and it’s one that can become a reality if you’re willing 
                     to commit to the habit of working 
                         out at a gym.
                        The benefits are huge, and so despite the recent disruption caused by Covid-19, 
                        read on to discover twenty impressive benefits of joining a gym.</p>
                        <li style={{color:"yellow"}}>
                        his is the vision that many people have when they decide to join a gym,
                        </li>
                        <p style={{ fontWeight: "bolder",color:"white" }}>his is the vision that many people have when they decide to join a gym,
                     and it’s one that can become a reality if you’re willing 
                     to commit to the habit of working 
                         out at a gym.
                        The benefits are huge, and so despite the recent disruption caused by Covid-19, 
                        read on to discover twenty impressive benefits of joining a gym.</p>

                        </ul>
                        <div className={About.video1}>
                    
                        <iframe className={About.video1} width="300" height="415" src="https://www.youtube.com/embed/eaRQF-7hhmo" title="YouTube video player" 
                         frameborder="0" allow="accelerometer; autoplay; 
                         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                         </div>
                </div>
            </div>

        </>

    )
}
export default AboutUs