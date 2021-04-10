import React from 'react';
import './Appontment.css'
import doctor from '../../../images/doctor.png'

const Appointment = () => {
    return (
        <section className="make-appointment d-flex justify-content-center">
        <div className="w-75">
            <div className="row">
                <div className="col-md-5 d-none d-md-block ">
                    <img src={doctor} alt=""/>
                </div>
                <div className="col-md-7 text-white text-container py-5">
                    <h5 className="text-primary text-uppercase ">Appointment</h5>
                    <h1 className="my-4">Make an Appointment <br/> Today</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Appointment;