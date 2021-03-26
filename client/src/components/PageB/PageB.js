import React from 'react';
import './PageB.scss';
import PageBImg from '../../assets/images/PageB.PNG';

function PageB () {
    return (
        <section className="mainb">
            <img src={PageBImg} className="mainb__img"/>
            {/* <div className="main__component-pageb">
                <div className="main__article-pageb">
                    <h2>Is this information still accurate?</h2>
                    <p>We just wanted to make sure your health information is still up-to-date 
                        in order to better address your symptoms and provide you with relevant healthcare options.
                    </p>
                    <div className="main__personal">
                        <p>Sex</p>
                        <p>Female</p>
                        <p>Allergises</p>
                        <p>None</p>
                        <p>Address</p>
                        <p>426 University Ave, M5G 1S9, Toronto, ON, Canada</p>
                    </div>
                    <a href="/"><img src='' />Back</a>
                    <div>
                        <button className="main__button-b-grey">Update Now</button>
                        <button>Next</button>
                    </div>
                </div>
            </div> */}
        </section>
    );
}

export default PageB;