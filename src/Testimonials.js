import React from "react";

function Testimonials(){
    return(
        <section className="testimonials">
            <h2>Testimonials</h2>
            {/* testimoni1 */}
            <div className="testimonial-card">
                <p>Rating: 4/5</p>
                <div className="user-profile">
                    <div className="user-image-placeholder"></div>
                    <cite>- bariq</cite>
                </div>
                <p>"The fruit was amazing!"</p>
            </div>
            {/* testimoni2 */}
            <div className="testimonial-card">
                <p>Rating: 5/5</p>
                <div className="user-profile">
                    <div className="user-image-placeholder"></div>
                    <cite>- Emann</cite>
                </div>
                <p>"Great"</p>
            </div>
            {/* testimoni3 */}
            <div className="testimonial-card">
                <p>Rating: 5/5</p>
                <div className="user-profile">
                    <div className="user-image-placeholder"></div>
                    <cite>- Bayu</cite>
                </div>
                <p>"The fruit was amazing!"</p>
            </div>
            {/* testimoni1 */}
            <div className="testimonial-card">
                <p>Rating: 5/5</p>
                <div className="user-profile">
                    <div className="user-image-placeholder"></div>
                    <cite>- Akbar</cite>
                </div>
                <p>"Best!"</p>
            </div>
        </section>
    );
}

export default Testimonials;