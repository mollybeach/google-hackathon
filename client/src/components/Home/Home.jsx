import React from 'react';
import './Home.scss';
import Graphic from '../../assets/images/homepage_graphic.png';
import GraphicTwo from '../../assets/images/dashboard-doctor.PNG';
import GraphicThree from '../../assets/images/dashboard-chart.PNG';
import GraphicFour from '../../assets/images/dashboard-graph.PNG';

import { Link } from 'react-router-dom';


const Home = () => {
    
    return (
        <section className = 'main'> 
            <div className='main__component'>
                <h1 className='main__header'>Welcome back, Olivia</h1>
                <div className='main__dashboard'>
                    <article className="main__symptom-checker">
                        <div className="main__symptom-checker-left">
                            <h4 className="main__subheader">Have a health concern?</h4>
                            <p className="main__paragraph">
                                Check your symptoms fast from the comfort of your home, and get
                                a recommended course of action.
                            </p>
                            <p className="main__paragraph">
                                If needed, we'll help you find a doctor and book an 
                                appointment with their clinic.
                            </p>
                        </div>
                        <div className="main__symptom-checker-right">
                            <img className="main__graphic" src={Graphic} alt=""/>
                            <Link to='/pagea'><button className="main__button">Start checkup</button></Link>
                        </div>
                    </article>
                    <article className='main__article-two'>
                        <img className="main__graphic-two" src={GraphicTwo} alt=""/>
                        <button className="main__button-two">Book appointment</button>
                    </article>
                    <article className='main__article-three'>
                        <img className="main__graphic-three" src={GraphicThree} alt=""/>
                        <button className="main__button">View Reports</button>
                    </article>
                    <article className='main__article-four'>
                        <img className="main__graphic-four" src={GraphicFour} alt=""/>
                    </article>
                </div>
            </div>
        </section>
    );
}


export default Home;