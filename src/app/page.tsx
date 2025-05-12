import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trusted_Brands from "@/components/Trusted_Brands";
import Features from "@/components/Features";
import Productivity from "@/components/Productivity";
import Team from "@/components/Team/Team";
import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Trusted Brands */}
      <Trusted_Brands />

      {/* Productivity Section */}
      <Productivity />

      {/* Features Grid */}
      <Features />

      {/* Team Section */}
      <Team />

      {/* Blog Section */}
      <Blog />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
