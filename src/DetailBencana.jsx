import { useSelector } from 'react-redux';
import { useContext } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { DarkModeContext } from './context/DarkMode';

const DisasterDetail = () => {
  const { id, description } = useSelector(state => state.disaster);
  const { isDarkMode } = useContext(DarkModeContext);
  console.log(id);

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className={`max-w-md w-full mx-auto ${isDarkMode ? 'bg-slate-500 text-white' : 'bg-white text-gray-700'}`}>
          <div className="p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">{id}</h1>
            <img src={`foto-${id}.jpeg`} alt="Disaster" className="w-full h-48 object-cover mb-4 rounded-md shadow-md" />
            <p className="text-lg">{description}</p>
          </div>
          <div className="justify-between">
          <a href="/">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md"
              >
                Kembali
              </button>
            </a>
            <a href="/bantuan">
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md shadow-md mt-2"
              >
                Perlu Bantuan Terkait bencana?
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisasterDetail;
