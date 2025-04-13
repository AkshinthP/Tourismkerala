import React, { useState } from "react";

function Card(props){

    let favorites=useState("add to favorite");
    let activeclass=useState("")

    let [favtext,setfavtext]=favorites
    // let favtext=favorites[0];
    // let setfavtext=favorites[1];
    let [classstate,setclassstate]=activeclass

    function buttonclick(imgSrc) {
        setfavtext((prevState)=>{
            if (prevState==="add to favorite"){
                props.cardfn(imgSrc)
                return "added to favorite"
            }else{
                
                return "add to favorite"
            }
        });
        setclassstate((prevState)=>{
            if (prevState ==""){
                return "active"
            }else{
                return ""
            }
        })
    

    }
    <i class="fa-solid fa-heart" style="color: #74C0FC;"></i>
    
    return(
        // <h1>this is card</h1>
        <div className={`card ${classstate}`}>    
            <img src={props.cardcontent.imgSrc} alt="" />
            <h3>{props.cardcontent.name}</h3>
            <p>ph :{props.cardcontent.phone}</p>
            <p>email :{props.cardcontent.email}</p>
            <button onClick={(()=>{buttonclick(props.cardcontent.imgSrc)})}>{favtext}</button>

        </div>
    )
}
export default Card;