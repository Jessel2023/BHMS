import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../assets/header';
import { FaPhoneAlt, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../img/logo.png'; // Adjust the path as necessary

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
<section className="pt-40 pb-20 px-6 text-center relative overflow-hidden bg-black">
  {/* Background Abstract Shape */}
  <div className="absolute top-0 left-0 w-full h-full z-0">
    <img
      src="https://framerusercontent.com/images/1uMRvcQf19utYb5sCEX1HHtXlU.png"
      alt="abstract"
      className="object-cover w-full h-full opacity-10"
    />
  </div>

  {/* Background Logo */}
  <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
    <img
      src={logo} // <-- Replace this with your logo path
      alt="BoarderFlow Logo"
      className="w-[300px] md:w-[400px] opacity-10"
    />
  </div>

  {/* Foreground Content */}
  <div className="max-w-5xl mx-auto z-10 relative">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
      Everything you need<br />
      to start and run your<br />
      <span className="text-indigo-400">Business</span>
    </h1>
    <p className="text-lg md:text-xl mb-6">
      A Web-Based System for Efficient Boarding House Administration
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
      <a
        href="#features"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition"
      >
        Learn More
      </a>
      <Link
        to="/login"
        className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-600 transition"
      >
        Login Now
      </Link>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Payment Tracking',
              desc: 'Efficient Payment Tracking for Landlords',
              img: 'https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg',
            },
            {
              title: 'Automatic Bill Calculator',
              desc: 'An automatic Bill Calculator for all Boarders as well as the owner',
              img: 'https://images.pexels.com/photos/9025272/pexels-photo-9025272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            },
            {
              title: 'Design Friendly',
              desc: 'An easy navigation for users',
              img: 'https://images.pexels.com/photos/688835/pexels-photo-688835.jpeg',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
        {/* Left Side - Contact Text */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Get In Touch <br /> With Us.
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Have questions? We're just a message away!
          </p>

          <div className="space-y-6 text-base">
            <div>
              <p className="font-semibold">Our Phone:</p>
              <p className="flex items-center gap-2 text-rose-300">
                <FaPhoneAlt /> +123-456-7890
              </p>
            </div>

            <div>
              <p className="font-semibold">Our Website:</p>
              <p className="flex items-center gap-2 text-rose-300">
                <FaGlobe /> www.boarderflow.com
              </p>
            </div>

            <div>
              <p className="font-semibold">Our Address:</p>
              <p className="flex items-center gap-2 text-rose-300">
                <FaMapMarkerAlt /> Zone 9 Cugman, CDO Misamis Oriental
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Image Placeholder */}
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
              alt="City Skyline"
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
