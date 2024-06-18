import { Heading, Text, Image, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import img from  "./legm.png";

/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-09 13:57:10 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-06-18 15:08:35
 * @Description: Homepage component showing the default homescreen when first visiting the page
 */


export const Homepage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar/>

      {/* Main content */}
      <div className="flex-grow flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center flex-grow" style={{paddingTop: '10rem', backgroundImage: "url('https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2024/04/lebron_james_1843796328.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 p-4">
            <h2 className="text-6xl font-bold mb-2 text-center">Lead Your Favorite NBA Team to Glory 🏀</h2>
            <p className="text-md mb-4 text-xl max-w-2xl text-center">LeGM is the premier AI-powered NBA simulation game that puts you in the driver’s seat of your dream team’s destiny. Make strategic decisions, manage your roster, and bring home the championship!</p>
            <a href="/register" style={{padding: 15}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Get Started</a>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-6 bg-gray-800 flex-grow">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="hover:scale-95 cursor-pointer transition duration-300 ease-in-out relative bg-gray-700 py-20 p-4 rounded-lg overflow-hidden" style={{ backgroundImage: "url('https://www.usab.com/imgproxy/nrVDM2AVF-ag9t1d1z3SgcN82L74uQLPfDKhm6uWRc8/rs:fit:2000:0:0:g:ce/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3VzYWItY29tLXByb2QvdXBsb2FkLzIwMjMvMDUvMjMvZTUxMTI0YmItNTdkZS00Y2M4LTlkYjktNTcyNzk3ZGRhNWZiLmpwZw.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2">Roster Management</h3>
                  <p className="text-lg">Customize your team's roster with real NBA players and make strategic trades to build the ultimate lineup.</p>
                </div>
              </div>
              <div className="hover:scale-95 cursor-pointer transition duration-300 ease-in-out relative bg-gray-700 py-20 p-4 rounded-lg overflow-hidden" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1399286644/vector/basketball-strategy-field-game-tactic-chalkboard-template-hand-drawn-basketball-game-scheme.jpg?s=612x612&w=0&k=20&c=CagnlmdSZic18s8uyYRnT51Vk5HqNaFbCQg70NPFbQM=')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2">Realistic Simulations</h3>
                  <p className="text-lg">Experience realistic game simulations powered by advanced AI, bringing the excitement of the NBA to your screen.</p>
                </div>
              </div>
              <div className="hover:scale-95 cursor-pointer transition duration-300 ease-in-out relative bg-gray-700 py-20 p-4 rounded-lg overflow-hidden" style={{ backgroundImage: "url('https://www.essentiallysports.com/wp-content/uploads/lebron-harden-iso.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2">Season Challenges</h3>
                  <p className="text-lg">Face off against other teams, overcome challenges, and lead your team through a thrilling NBA season.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-2">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 LeGM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}