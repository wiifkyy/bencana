import 'boxicons/css/boxicons.min.css';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white p-4 font-bold">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-1/2 text-sm mb-4 md:mb-0">
                    &copy; 2024 <span className='text-gray-200'>Bencana.Help</span>. All rights reserved.
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4">
                    <a href="https://www.facebook.com" className="text-white">
                        <i className='bx bxl-whatsapp text-4xl'></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;