import React from 'react'

const TouristInfoCards =(props)=> {
  
        return (
           
    <div  style={{width: "17rem"}}>
     <img  className="card-img-top" src={props.source}  alt="..." />
      <div className="card-body">
    <h5 className="card-title">{props.cityname}</h5>
    <p className="card-text">Some quick example text to build on the card title 
    and make up the bulk of the card's content.</p>
    <a href={props.link} className="btn btn-primary">{props.ButtonName}</a>
  </div>
  </div>
            )
    }

export default TouristInfoCards;