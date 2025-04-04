import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../assets/header';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';  // Adding icons for contact info

function Home() {
  return (
    <div>
      <Header />
      <div className="App" style={{ paddingTop: '150px' }}>
        {/* Hero Section */}
        <div className="App-title bg-light p-5 rounded shadow-sm home" id="hero">
          <h1 className="display-4">Welcome to BoarderFlow</h1>
          <p className="lead">A Web-Based System for Efficient Boarding House Administration</p>
          <a href="#features" className="btn btn-primary btn-lg mt-3">Learn More</a><br />
          <Link to="/login" className="btn btn-success btn-lg mt-3">Login Now</Link>
        </div>

        {/* Features Section */}
        <div className="container mt-5 text-center features" id="features">
          <h2 className="mb-4 text-white">Features</h2>
          <Carousel interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100 rounded carousel-img"
                src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg"
                alt="Feature 1"
                style={{ objectFit: 'cover', height: '400px' }}
              />
              <Carousel.Caption>
                <div className="bg-dark p-3 opacity-75 rounded">
                  <h5 className="card-title">Payment Tracking</h5>
                  <p className="card-text">Efficient Payment Tracking for Landlords</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100 rounded carousel-img"
                src="https://images.pexels.com/photos/9025272/pexels-photo-9025272.jpeeg"
                alt="Feature 2"
                style={{ objectFit: 'cover', height: '400px' }}
              />
              <Carousel.Caption>
                <div className="bg-dark p-3 opacity-75 rounded">
                  <h5 className="card-title">Automatic Bill Calculator</h5>
                  <p className="card-text">An automatic Bill Calculator for all Boarders as well as the owner</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100 rounded carousel-img"
                src="https://images.pexels.com/photos/688835/pexels-photo-688835.jpeg"
                alt="Feature 3"
                style={{ objectFit: 'cover', height: '400px' }}
              />
              <Carousel.Caption>
                <div className="bg-dark p-3 opacity-75 rounded">
                  <h5 className="card-title">Design Friendly</h5>
                  <p className="card-text">An easy navigation for users</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Contact Section */}
        <div className="contact container mt-5 contact-section" id="contact">
          <h2 className="mb-4 text-center text-white">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 mb-4">
              <div className="card bg-light h-100 shadow-lg">
                <div className="card-body bg-dark text-white text-start p-4">
                  <h5 className="card-title">Get In Touch</h5>
                  <p className="card-text">
                    <FaMapMarkerAlt className="mr-2" /> Zone 9 Cugman, CDO Misamis Oriental
                    <br />
                    <FaEnvelope className="mr-2" /> info@boarderflow.com
                    <br />
                    <FaPhoneAlt className="mr-2" /> (123) 456-7890
                  </p>
                  <a href="mailto:info@boarderflow.com" className="btn btn-light btn-block">Email Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
