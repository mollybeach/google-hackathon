import React from 'react';
import Page from '../../assets/icons/page.svg';
import box from '../../assets/images/recb.png';
import Capture1 from '../../assets/icons/Capture 1.PNG';
import './PageE.scss';
import { Link } from 'react-router-dom';

const Recommendations = () => {
    return (

        <section className='recommendations wrapper'>
            <img className='recommendations__capture' src={Capture1} alt='ssg' />
            <div className='recommendations__info'>
                <p className='recommendations__text'>Consult a doctor within 24 hours</p>
                <div className='recommendations__rules'>
     
                    <div className='recommendations__conditions'>
                        <p className='recommendations__text-sm'>Recommended Specialist</p>
                        <p className='recommendations__text-sm'>General Practitioner</p>
                    </div>
                </div>

                <div className='recommendations__rules'>
               
                    <div className='recommendations__conditions'>
                        <p className='recommendations__text'>Private and secure</p>
             
                    </div>
                </div>

                <p className='recommendations__text'>Would you like to book an appointment? </p>
             

                <div className='recommendations__buttons'>
                    <a className='recommendations__buttons-1' href='/'>No</a>
                    <Link path='/pagea'><a className='recommendations__buttons-2' href='/'>Yes</a></Link>
                </div>
            </div>

            <svg width="1249" height="750" viewBox="0 0 1249 750" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">

<rect x="25" y="15" width="1199" height="700" rx="10" fill="white"/>
<rect x="25.25" y="15.25" width="1198.5" height="699.5" rx="9.75" stroke="#DADBDF" stroke-width="0.5"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="1249" height="750" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="10"/>
<feGaussianBlur stdDeviation="12.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
<img src={box} className='recommendations__box'alt='img'></img>

<svg width="1249" height="377" viewBox="0 0 1249 377" fill="none" xmlns="http://www.w3.org/2000/svg">

<g filter="url(#filter0_d)">
<rect x="25" y="15" width="1199" height="327" rx="10" fill="#F4F8FF"/> 
<rect x="25.25" y="15.25" width="1198.5" height="326.5" rx="9.75" stroke="#DADBDF" stroke-width="0.5"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="1249" height="377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="10"/>
<feGaussianBlur stdDeviation="12.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>



        </section>
    );
};

export default Recommendations;