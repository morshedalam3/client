import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infoData = [
        {
            title: 'Opening Hour',
            description: 'we are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit our location',
            description: 'Brooklyn NY 10002 USA',
            icon: faMapMarkerAlt,
            background: 'dark'
        },
        {
            title: 'Call Us Now',
            description: '+156549054094',
            icon: faPhone,
            background: 'primary'
        }

    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;