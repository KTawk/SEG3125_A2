import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="bg-white text-black">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-black text-white">
        <h1 className="text-2xl font-bold">RIDEZ</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#appointment" className="hover:text-orange-500">Book Appointment</a>
          <a href="#contact" className="hover:text-orange-500">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-center p-10">
        <img
          src="/bike-image.png" // replace with correct image
          alt="Bike"
          className="w-96 mb-6 md:mb-0"
        />
        <div className="md:ml-10">
          <h2 className="text-3xl font-bold mb-4">The Best Bicycling Experience</h2>
          <p className="mb-4 max-w-md">We provide the best quality bikes and top-notch services for all bicycle lovers. Ride with passion!</p>
          <Button>Discover More</Button>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-gray-100 py-10 text-center">
        <h3 className="text-2xl font-semibold mb-6">Our Facilities & Features</h3>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          <Card><CardContent className="p-6">Complete Overhaul</CardContent></Card>
          <Card><CardContent className="p-6">Custom Parts & Accessories</CardContent></Card>
          <Card><CardContent className="p-6">Bike Fitting & Delivery</CardContent></Card>
        </div>
      </section>

      {/* Humble Beginning */}
      <section className="flex flex-col md:flex-row items-center p-10">
        <img
          src="/mechanic.jpg" // replace with correct image
          alt="Mechanic"
          className="w-80 mb-6 md:mb-0"
        />
        <div className="md:ml-10">
          <h3 className="text-2xl font-bold mb-4">A Humble Beginning</h3>
          <p className="max-w-lg">Starting with a passion for bikes, we grew into a trusted shop for all biking needs. Visit us and see how we can make your ride smoother.</p>
        </div>
      </section>

      {/* Special Services */}
      <section className="bg-gray-100 py-10 text-center">
        <h3 className="text-2xl font-semibold mb-6">Try Our Special Services</h3>
        <div className="grid md:grid-cols-3 gap-6 px-6">
          <Card><CardContent className="p-6">Customer Service <Button className="mt-4">Learn More</Button></CardContent></Card>
          <Card><CardContent className="p-6">Product Support <Button className="mt-4">Learn More</Button></CardContent></Card>
          <Card>
            <CardContent className="p-6">
              <p>Take 20% Off One Full-Price Item</p>
              <Button className="mt-4">Shop Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white p-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Need Help?</h4>
            <p>Contact our support team.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Call Us</h4>
            <p>666 - 880 - 33388</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Subscribe Us</h4>
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded text-black w-full"
            />
            <Button className="mt-2">Subscribe</Button>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">© Copyright 2024 RIDEZ. All rights reserved.</div>
      </footer>
    </div>
  );
}
