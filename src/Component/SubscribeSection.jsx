import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here (e.g., send the email to a server)
    console.log("Subscribed with email:", email);
  };

  return (
    <section id="subscribe" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="block-text col-md-6">
            <div className="section-header">
              <h2 className="section-title">Get 25% off Discount Coupons</h2>
            </div>
            <p>
              Take advantage of an exclusive 25% off discount with our special
              coupon offer! This limited-time deal allows you to save on your
              favorite products, making it the perfect opportunity to shop for
              everything you've been eyeing. Whether you're looking to update
              your wardrobe, grab the latest gadgets, or treat yourself to
              something special, this coupon gives you the chance to enjoy
              significant savings. Simply apply the coupon code at checkout, and
              watch the discount automatically reduce your total purchase. Don't
              miss out—shop now and enjoy the savings!
            </p>
          </div>
          <div className="subscribe-content col-md-6">
            <form
              id="form"
              className="d-flex justify-content-between"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email address here"
                value={email}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-dark">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
