import React from "react";

function Specials() {
    return (
        <section className="specials">
            <div>
                <h2>Ini Minggu Specials!</h2>
                <button>Menu</button>
            </div>

            <div className="specials-cards">
                {/* card1 */}
                <div className="card">
                    <div className="card-image-placeholder"></div>
                    <h3>Greek Salad</h3>
                    <p>ini adalah deskripsi</p>
                    <a href="/Order">Order Now</a>
                </div>

                {/* card2 */}
                <div className="card">
                    <div className="card-image-placeholder"></div>
                    <h3>Bruschetta</h3>
                    <p>ini adalah deskripsi</p>
                    <a href="/Order">Order Now</a>
                </div>

                {/* card3 */}
                <div className="card">
                    <div className="card-image-placeholder"></div>
                    <h3>Lemon Dessert</h3>
                    <p>ini adalah deskripsi</p>
                    <a href="/Order">Order Now</a>
                </div>
            </div>
        </section>
    );
}

export default Specials;
