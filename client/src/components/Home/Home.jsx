import React, { Component } from 'react';
import './Home.scss';


const Home = () => {
    
    return (
        <section className = 'main'> 
            <h1 className='main__header'>Welcome back, Olivia</h1>
            <div className='main__dashboard'>
                <div className="main__symptom-checker">
                    <h4>Have a health concern?</h4>
                    <p>Check your symptoms fast from the comfort of your home, and get
                        a recommended course of action.
                    </p>
                    <p>If needed, we'll help you find a doctor and book an 
                        appointment with their clinic.
                    </p>
                    <div>
                        <img src="https://via.placeholder.com/200" alt=""/>
                        <button>Start checkup</button>
                    </div>
                    <div>Div top-right</div>
                    <div>Div bottom-left</div>
                    <div>Div bottom-right</div>
                </div>
            </div>

        </section>
    );
}


export default Home;