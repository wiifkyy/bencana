import { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { DarkModeContext } from './context/DarkMode';

const About = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <div className={` min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white '}`}>
            <Navbar/>
            <div className="flex-1 bg-cover bg-center">
                <div className="flex justify-center">
                    <div className="container mx-auto text-center p-4">
                        <h1 className="text-4xl font-bold mb-4">Tentang Kami!</h1>
                        <div className={` p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-slate-600 text-white' : 'bg-white'}`}>
                            <p className="mb-4">
                            Selamat datang di website Bantuan Bencana, platform yang didedikasikan untuk mendukung dan memfasilitasi pendataan rekonstruksi. Kami percaya bahwa data yang akurat dan terintegrasi adalah kunci untuk perencanaan yang efektif dan keberhasilan proyek rekonstruksi.
                            </p>
                            <p className="mb-4">
                            Visi kami adalah menciptakan sistem yang transparan dan efisien, memungkinkan semua pemangku kepentingan untuk berkolaborasi dalam mendokumentasikan dan menganalisis data rekonstruksi. Dengan memanfaatkan teknologi terkini, kami bertujuan untuk mempercepat proses pengumpulan data dan memastikan bahwa setiap informasi yang diperoleh dapat diakses dan digunakan untuk pengambilan keputusan yang lebih baik.
                            </p>
                            <p className="mb-4">
                            Kami berkomitmen untuk memberikan informasi yang jelas dan berguna bagi masyarakat, pemerintah, dan lembaga terkait. Melalui website ini, kami berharap dapat membangun kesadaran akan pentingnya pendataan yang akurat dan mendukung upaya rekonstruksi yang berkelanjutan.
                            </p>
                            <p className="mb-4">
                            Bergabunglah dengan kami dalam perjalanan ini untuk menciptakan masa depan yang lebih baik melalui data yang tepat dan terpercaya.
                            </p>
                            <p>
                                Terima kasih telah mengunjungi situs kami. Jika Anda memiliki pertanyaan atau membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi kami.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;
