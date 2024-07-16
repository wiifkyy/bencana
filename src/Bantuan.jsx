import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DarkModeContext } from './context/DarkMode';

const Bantuan = () => {
    const [provinsi, setProvinsi] = useState('');
    const [kabupaten, setKabupaten] = useState('');
    const [kecamatan, setKecamatan] = useState('');
    const [desa, setDesa] = useState('');
    const [noHp, setNoHp] = useState('');
    const [keperluan, setKeperluan] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [provinsiOptions, setProvinsiOptions] = useState([]);
    const { isDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await axios.get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
                const provinces = response.data.map((provinsi) => ({
                    label: provinsi.name,
                    value: provinsi.id,
                }));
                setProvinsiOptions(provinces);
            } catch (error) {
                console.error('Error fetching provinces:', error);
            }
        };

        fetchProvinces();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (provinsi && kabupaten && kecamatan && desa && noHp && keperluan) {
            setShowSuccess(true);
            console.log({
                provinsi,
                kabupaten,
                kecamatan,
                desa,
                noHp,
                keperluan
            });
            setProvinsi('');
            setKabupaten('');
            setKecamatan('');
            setDesa('');
            setNoHp('');
            setKeperluan('');
        } else {
            alert('Silakan lengkapi semua kolom sebelum mengirimkan formulir.');
        }
    };

    return (
        <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} mx-auto h-full flex flex-col min-h-screen`}>
            <Navbar />
            <div className='flex-grow'>
            <div className="max-w-md mx-auto h-screen">
                <div className={`${isDarkMode ? 'bg-slate-500' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                    <h1 className="text-4xl font-bold text-center mb-4">Form Bantuan</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="provinsi" className="block text-sm font-medium text-gray-700">Provinsi</label>
                            <select
                                id="provinsi"
                                name="provinsi"
                                value={provinsi}
                                onChange={(e) => setProvinsi(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Pilih Provinsi</option>
                                {provinsiOptions.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="kabupaten" className="block text-sm font-medium text-gray-700">Kabupaten</label>
                            <input
                                type="text"
                                id="kabupaten"
                                name="kabupaten"
                                value={kabupaten}
                                onChange={(e) => setKabupaten(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="kecamatan" className="block text-sm font-medium text-gray-700">Kecamatan</label>
                            <input
                                type="text"
                                id="kecamatan"
                                name="kecamatan"
                                value={kecamatan}
                                onChange={(e) => setKecamatan(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="desa" className="block text-sm font-medium text-gray-700">Desa</label>
                            <input
                                type="text"
                                id="desa"
                                name="desa"
                                value={desa}
                                onChange={(e) => setDesa(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="noHp" className="block text-sm font-medium text-gray-700">Nomor HP</label>
                            <input
                                type="tel"
                                id="noHp"
                                name="noHp"
                                value={noHp}
                                onChange={(e) => setNoHp(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="keperluan" className="block text-sm font-medium text-gray-700">Keperluan</label>
                            <textarea
                                id="keperluan"
                                name="keperluan"
                                value={keperluan}
                                onChange={(e) => setKeperluan(e.target.value)}
                                rows={3}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600">Kirim</button>
                    </form>
                    {/* Popup sukses */}
                    {showSuccess && (
                        <div className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md">
                            <p className="font-bold">Formulir berhasil dikirim!</p>
                            <p>Terima kasih atas partisipasi Anda.</p>
                        </div>
                    )}
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Bantuan;
