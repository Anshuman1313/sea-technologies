// components/HeroSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, Code, Cloud, Smartphone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative  overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-0 left-10 w-20 h-20 bg-blue-100 rounded-full blur-xl opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-100 rounded-full blur-xl opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-cyan-100 rounded-full blur-lg opacity-50 animate-bounce delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium animate-fade-in">
              <CheckCircle className="w-4 h-4 mr-2" />
              Trusted by 500+ businesses worldwide
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 animate-gradient">
                  Smart IT Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                We deliver cutting-edge technology solutions that scale with your business. 
                From web development to cloud infrastructure, we empower your digital transformation.
              </p>
            </div>
            
            {/* Service Icons */}
            <div className="flex gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Code className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Web Development</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Cloud className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Smartphone className="w-5 h-5 text-cyan-500" />
                <span className="text-sm font-medium">Mobile Apps</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#contact" className="group inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 rounded-xl font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 group">
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Watch Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-100">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guaranteed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Mockup */}
          <div className="relative lg:pl-8">
            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform hover:rotate-1 transition-all duration-500 border border-gray-100">
              {/* Browser Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                  sea-technologies.com
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="h-6 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 rounded-lg w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                
                {/* Service Cards Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg mb-3 flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div className="h-2 bg-blue-200 rounded mb-2"></div>
                    <div className="h-2 bg-blue-100 rounded w-2/3"></div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg mb-3 flex items-center justify-center">
                      <Cloud className="w-5 h-5 text-white" />
                    </div>
                    <div className="h-2 bg-purple-200 rounded mb-2"></div>
                    <div className="h-2 bg-purple-100 rounded w-2/3"></div>
                  </div>
                </div>
                
                {/* Chart Area */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <div className="flex items-end justify-between h-16 mb-2">
                    <div className="w-4 bg-blue-400 rounded-t h-8"></div>
                    <div className="w-4 bg-purple-400 rounded-t h-12"></div>
                    <div className="w-4 bg-cyan-400 rounded-t h-6"></div>
                    <div className="w-4 bg-blue-400 rounded-t h-16"></div>
                    <div className="w-4 bg-purple-400 rounded-t h-10"></div>
                    <div className="w-4 bg-cyan-400 rounded-t h-14"></div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  </div>
                </div>
              </div>
              
              {/* Success Badge */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce delay-1000">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>
            
            {/* Background Decoration Cards */}
            <div className="absolute -bottom-8 -left-8 w-72 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl -z-10 transform -rotate-6 opacity-60"></div>
            <div className="absolute -top-8 -left-12 w-40 h-40 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl -z-10 transform rotate-12 opacity-60"></div>
            <div className="absolute top-16 -right-8 w-24 h-24 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-2xl -z-10 transform -rotate-12 opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
