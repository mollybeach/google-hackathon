import React from 'react';
import Page from '../../assets/icons/page.svg';
import Shield from '../../assets/icons/shield.svg';
import Capture1 from '../../assets/icons/Capture 1.PNG';
import './PageA.scss';
import { Link } from 'react-router-dom';

const Agreement = () => {
    return (

        <section className='agreement wrapper'>
            <img className='agreement__capture' src={Capture1} alt='ssg' />
            <div className='agreement__info'>
                <p className='agreement__text'>This resource can help you decide what kind of medical care you might need </p>
                <div className='agreement__rules'>
                    <img className='agreement__icon' src={Page} alt='page-icon' />
                    <div className='agreement__conditions'>
                        <p className='agreement__text'>For informational purposes only</p>
                        <p className='agreement__text-sm'>Not a medical diagnosis</p>
                    </div>
                </div>

                <div className='agreement__rules'>
                    <img className='agreement__icon' src={Shield} alt='shield-icon' />
                    <div className='agreement__conditions'>
                        <p className='agreement__text'>Private and secure</p>
                        <p className='agreement__text-sm'>Your answers aren't collected or shared</p>
                    </div>
                </div>

                <p className='agreement__text-sm'>By continuing, you agree to the terms and that this resource is for adults 18 and above. </p>
                <a className='agreement__link' href='/'>Learn more Terms of Service & Privacy Policy</a>

                <div className='agreement__buttons'>
                    <a className='agreement__buttons-1' href='/'>I don't agree</a>
                    <Link path='/pageb'><a className='agreement__buttons-2' href='/'>I agree</a></Link>
                </div>
            </div>
        </section>
    );
};

export default Agreement;