'use client'

import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl w-full mx-auto bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Image and Introduction */}
            <div className="md:w-1/3 bg-gray-700 p-8 flex flex-col justify-center items-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 mb-6 flex items-center justify-center">
                 {/* You can place an image here */}
                 <span className="text-6xl text-white">🧑‍💻</span>
              </div>
              <h1 className="text-3xl font-bold text-white text-center">Sakan Wokkum</h1>
              <p className="text-xl text-gray-300 text-center">(Gun)</p>
              <p className="text-gray-400 mt-4 text-center">
                Hello! I'm passionate about technology, programming, and all things tech-related!
              </p>
            </div>

            {/* Right Side - Details */}
            <div className="md:w-2/3 p-8 text-white">
              <h2 className="text-2xl font-bold border-b-2 border-gray-600 pb-2 mb-6">About Me</h2>

              {/* Academic Information */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-3">🌻 Academic Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="font-bold">Faculty:</p>
                    <p>Faculty of Science and Digital Innovation</p>
                  </div>
                  <div>
                    <p className="font-bold">Program:</p>
                    <p>B.Sc. Computer Science</p>
                  </div>
                  <div>
                    <p className="font-bold">Birth Date:</p>
                    <p>24th November 2003</p>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-3">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="font-bold">MBTI Type:</p>
                    <p>INFP</p>
                  </div>
                  <div>
                    <p className="font-bold">Hobbies:</p>
                    <p>Coding, Gaming, Movies, Podcasts, Tech Exploration</p>
                  </div>
                  <div>
                    <p className="font-bold">Favorite Colors:</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="w-6 h-6 rounded-full bg-black border border-gray-500"></span>
                      <span className="w-6 h-6 rounded-full bg-gray-500 border border-gray-400"></span>
                      <span className="text-gray-400">(Black & Grey)</span>
                    </div>
                  </div>
                   <div>
                    <p className="font-bold">Career Goal:</p>
                    <p>Whatever I Like</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}