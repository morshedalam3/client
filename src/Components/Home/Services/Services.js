import React from 'react';
import fluoride from '../../../images/001-dental.png';
import cavity from '../../../images/tooth (1).png';
import teeth from '../../../images/tooth.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const ServiceData = [
    {
        name: 'Fluoride Treatment',
        image: fluoride
    },
    {
        name: 'Cavity filling',
        image: cavity
    },
    {
        name: 'Teeth Whitening',
        image: teeth
    }
]
const Services = () => {
    return (
        <section className="Service-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>Our Services</h5>
                <h2 className="secondary">Service We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 t-5">
                    {
                        ServiceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;