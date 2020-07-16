import React from 'react'
import CardCompo from './CardCompo'

const Card = () => {
    return (
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <CardCompo title="Shubham" Subtitle="Some Description here" btnText="No Submit"></CardCompo> 
          </div>
          <div className="col-4">
            <Card></Card>
          </div>
          <div className="col-4">
            <Card></Card>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Card