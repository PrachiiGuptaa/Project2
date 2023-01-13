import React from "react";
import Trainers from './Trainer.module.css'
import { useState } from "react";


function Trainer(){
    const [Show,SetShow] = useState()
    return(
        <>
        <div className={Trainers.page}>
            <h1 style={{color :"white" , fontWeight:"bolder" ,fontStyle:"italic" ,textShadow:"4px 4px black" , marginBottom:"2em"}}>
                MEET OUR TEAM !
            </h1>
            <div className={Trainers.rap}>
                <img width="300em" height="200em"
                 
                  src="https://as2.ftcdn.net/v2/jpg/03/50/00/79/1000_F_350007935_2kvg6F1aZIbllABM5MgXj8wtCRStfeFY.jpg" />
                <img width="280em" height="200em"
                src="https://www.youngisthan.in/wp-content/uploads/2015/09/gym-trainer.jpg" />
                <img width="270em" height="200em"
                src="https://blog.myfitnesspal.com/wp-content/uploads/2017/02/10-Things-to-Look-for-in-Your-Personal-Trainer-1024x643.jpg" />
                <img width="300em" height="200em"
                src="https://anschutzwellness.com/wp-content/uploads/2021/03/AHWC_training1.jpg" />
                </div>
                <button className={Trainers.btn1} onClick={()=>SetShow(true)}>See whole Team</button>
                {Show ? <>
                <div className={Trainers.rap}>
                <img width="270em" height="200em"
                src="https://img-aws.ehowcdn.com/750x428p/s3-us-west-1.amazonaws.com/contentlab.studiod/getty/6beb73b812d542b98688446c47d5be5d?type=webp" />
                <img width="300em" height="200em"
                 src="https://dollarsprout.com/wp-content/uploads/2020/12/personal-training-teaching-woman-to-stretch-600x230.jpg" />
                <img width="300em" height="200em"
                src="https://www.karpfitness.com/wp-content/uploads/2017/05/48840731_ml-1184x647.jpg" />
                <img width="300em" height="200em"
                src="https://www.fitnessfirst.com.sg/-/media/project/evolution-wellness/fitness-first/south-east-asia/singapore/personal-training/trainers/boost-key-visual.jpg" />
            </div>
            <button className={Trainers.btn1} onClick={()=>SetShow(false)}>See less</button> </>: " "} 


        </div>
        
        
        </>

    )


}
export default Trainer