'use client';

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Experiance from "../components/Experiance";
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { Toaster } from 'react-hot-toast';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
        <Home />
        <About />
        {/* <Portfolio />
        <Experiance /> */}
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}
