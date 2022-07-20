import React from "react";
import "./style.css"

export default function Card(props){
    console.log(`../images/${props.item.img}`)
    return (
        <div>
            <section className="card-section">
                <div>
                    <img src={props.item.imageUrl} className="card--photo"/>
                </div>
                <div className="main">
                    <div className="mini-section">
                        <img className="location--icon" src="https://img.freepik.com/premium-vector/pin-symbol-indicates-location-gps-map_68708-398.jpg?w=2000" />
                        <p className="location--name">{props.item.location} <a className="location--link" href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                    </div>
                    <div className="description-section">
                        <h1 className="desc--title">{props.item.title}</h1>
                        <p className="desc--date"><b>{props.item.startDate} - {props.item.endDate}</b></p>
                        <p className="desc--description">{props.item.description}</p>
                    </div>
                </div>
            </section>
            <hr />
        </div>
    )
}