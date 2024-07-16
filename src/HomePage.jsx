import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { setDisasterDetail } from './redux/actions';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './context/DarkMode';

const Bantuan = () => {
    const [disasterCategories, setDisasterCategories] = useState([]);
    const dispatch = useDispatch();
    const { isDarkMode } = useContext(DarkModeContext);

    const handleImageClick = async (category) => {
        try {
            const id = category.id;
            const response = await axios.get(`https://eonet.gsfc.nasa.gov/api/v3/categories/${category.id}`);
            const { title, description } = response.data;
            dispatch(setDisasterDetail({ id, title, description }));
        } catch (error) {
            console.error('Error fetching disaster detail:', error);
        }
    };

    useEffect(() => {
        const fetchDisasterCategories = async () => {
            try {
                const response = await axios.get('https://eonet.gsfc.nasa.gov/api/v3/categories');
                const categories = response.data.categories;
                const mappedCategories = categories.map(category => ({
                    id: category.id,
                    description: category.description,
                }));
                setDisasterCategories(mappedCategories);
            } catch (error) {
                console.error('Error fetching disaster categories:', error);
            }
        };

        fetchDisasterCategories();
    }, []);

    const imageUrls = [
        'foto-Drought.jpeg',
        'foto-dustHaze.jpeg',
        'foto-Earthquakes.jpeg',
        'foto-Floods.jpeg',
        'foto-Landslides.jpeg',
        'foto-Manmade.jpeg',
    ];

    return (
        <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}>
            <Navbar />
            <div className="flex-1 overflow-y-auto">
                <div className="w-full font-bold text-center py-5">
                    <h2 className="text-4xl">PENDATAAN REKONTRUKSI</h2>
                    <h4 className="text-2xl">SOLUSI ANDA DALAM MENDAPATKAN BANTUAN</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 pb-10 px-6">
                    {disasterCategories.slice(0, 6).map((category, index) => (
                        <div key={index} className={`${isDarkMode ? 'bg-slate-500 text-white' : 'bg-white text-gray-700'} shadow-md rounded-lg overflow-hidden`}>
                            <Link to='/detail'>
                                <img
                                    src={`foto-${id}.jpeg`}
                                    alt={category.id}
                                    className="w-full h-32 object-cover cursor-pointer"
                                    onClick={() => handleImageClick(category)}
                                />
                            </Link>
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-2">{category.id}</h2>
                                <p className="text-sm">{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Bantuan;
