import React from 'react';
import Capture2 from '../../assets/images/Capture2.PNG';
import FemaleBody from '../../assets/images/female_body.png';
import Chevron from '../../assets/icons/chevron_right-24px.svg';
import './PageC.scss';

const PageC = () => {
    return (
        <section className='symptoms wrapper'>
            <img className='symptoms__header' src={Capture2} alt='hjk' />
            <div className="symptoms__main">
                <div className='symptoms__top'>
                    <div>
                        <h2 className='symptoms__heading'>What are your symptoms?</h2>
                        <input className='symptoms__input' type='text' placeholder='search e.g. headache' />
                        <p className='symptoms__text'>Please try to enter more than one symptom</p>
                    </div>
                    <div>

                        <img className='symptoms__image' src={FemaleBody} alt='human-figure' />
                    </div>
                </div>
                <div className='symptoms__links'>
                    <a href='/pageb' className='symptoms__links-back'><img className='symptoms__image-chevron' src={Chevron} alt='chevron icon' />Back</a>
                    <a href='/paged' className='symptoms__links-next'> Next</a>
                </div>
            </div>
        </section>
    );
};

export default PageC;