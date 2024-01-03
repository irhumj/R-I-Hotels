import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "fresh Fruits",
                info: "We care about your health and your taste"
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: "Beautiful and adventures trails near hotel"
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info: "For your safety and easy travel we provide free shuttle service"
            },
            {
                icon:<FaBeer/>,
                title: "Unlimited Drink",
                info: "We provide you unliited drink so you can enjoy your stay"
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}