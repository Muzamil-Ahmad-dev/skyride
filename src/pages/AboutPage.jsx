import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Welcome to Our Online Store</h1>
        <hr />
        <p className="lead text-center">
          Welcome to our one-stop destination for luxury and high-performance items. Our team works tirelessly to ensure we bring the most advanced and exciting items to you.
        </p>
        <p className="text-center">
          We offer a wide variety of high-quality items, including Boats, Cars, Electric Scooters, Guns, Mobile Homes, and Helicopters. Whether you're looking for adventure, speed, or comfort, we've got just what you need.
        </p>

        <h2 className="text-center py-4">Explore Our Items</h2>
        <div className="row">
          {/* Boat */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.unsplash.com/photo-1518709268804-bf3db6323de2"
                alt="Boat"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Boat</h5>
                <p className="text-center">Find your perfect boat for water adventures and leisure trips.</p>
              </div>
            </div>
          </div>
          {/* Car */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.unsplash.com/photo-1614729257002-146d9e0cb2d5"
                alt="Car"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Car</h5>
                <p className="text-center">Explore our selection of cars built for performance, luxury, and style.</p>
              </div>
            </div>
          </div>
          {/* Electric Scooter */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.unsplash.com/photo-1592194878698-cb61e0e9a404"
                alt="Electric Scooter"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Electric Scooter</h5>
                <p className="text-center">Ride in style with eco-friendly electric scooters, perfect for city commuting.</p>
              </div>
            </div>
          </div>
          {/* Gun */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.unsplash.com/photo-1601946481087-e2307bc44ecb"
                alt="Gun"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Gun</h5>
                <p className="text-center">Browse our top-quality guns, crafted for precision and reliability.</p>
              </div>
            </div>
          </div>
          {/* Mobile Home */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.unsplash.com/photo-1604048687895-36016e8f6c92"
                alt="Mobile Home"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Mobile Home</h5>
                <p className="text-center">Experience comfort and mobility with our luxurious mobile homes.</p>
              </div>
            </div>
          </div>
          {/* Helicopter */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.unsplash.com/photo-1535684819743-c1ecac2e489e"
                alt="Helicopter"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Helicopter</h5>
                <p className="text-center">Soar to new heights with our selection of helicopters for personal and professional use.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center py-4">Why Choose Us?</h2>
        <p className="text-center">
          We are committed to providing exceptional service and the highest quality items. From your initial interest to delivery, our team ensures a seamless experience. We pride ourselves on our customer-first approach.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
