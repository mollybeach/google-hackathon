import React from 'react';
import box from '../../assets/images/recb.png';
import box2 from '../../assets/images/recba.png';
import box3 from '../../assets/images/box3.png';

import Capture1 from '../../assets/icons/Capture 1.PNG';
import './PageE.scss';
import { Link } from 'react-router-dom';

const Recommendations = () => {
    return (

        <section className='recommendations wrapper'>
            <img className='recommendations__capture' src={Capture1} alt='ssg' />
            <img src={box3} className='recommendations__box3'alt='img'></img>
     <svg width="1249" height="560" viewBox="0 0 1249 560" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<rect x="25" y="15" width="1199" height="510" rx="10" fill="white"/>
<rect x="25.25" y="15.25" width="1198.5" height="509.5" rx="9.75" stroke="#DADBDF" stroke-width="0.5"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="1249" height="560" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
             

                <div className='recommendations__buttons'>
                    <a className='recommendations__buttons-1' href='/'>No</a>
                    <Link path='/pageg'><a className='recommendations__buttons-2' href='/'>Yes</a></Link>
          
            </div>
            <img src={box2} className='recommendations__box2'alt='img'></img>
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