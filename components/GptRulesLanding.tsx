import Link from 'next/link';
import { FaChrome } from 'react-icons/fa';

const GptRulesLanding = () => {
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
            <header className="w-full flex justify-between p-4 max-w-5xl">
                <h1 className="text-lg text-black font-bold">Bookmark Organizer</h1>
                <Link href="https://chromewebstore.google.com/detail/bookmark-organizer/cbooolhmbfhplnkfedjohjinljbdjjcg" className="flex items-center bg-black text-white font-bold px-8 py-4 rounded-4xl hover:bg-gray-400">
                    <FaChrome className="mr-2" /> Add to Chrome
                </Link>
            </header>
            
            <main className="text-center px-4 max-w-3xl mt-20">
                <h2 className="text-black text-8xl font-bold">Organize your Digital Life</h2>
                <p className="text-gray-600 text-2xl mt-4">Organize your bookmarks into structured folders with one click.</p>
                <Link href="https://chromewebstore.google.com/detail/bookmark-organizer/cbooolhmbfhplnkfedjohjinljbdjjcg" className="mt-4 inline-flex items-center bg-black text-white font-bold px-8 py-4 rounded-4xl hover:bg-gray-400">
                    <FaChrome className="mr-2" /> Add to Chrome
                </Link>
            </main>
            
            <section className="mt-8 w-full flex justify-center">
                <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4">
                    <iframe 
                        className="w-full h-64 md:h-96 rounded-lg" 
                        src="https://www.youtube.com/embed/MCb-OXvBV60" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            
            <footer className="mt-8 text-gray-500 text-sm text-center">
                <p className="mt-2">© 2025 Bookmark Organizer</p>
            </footer>
        </div>
    );
};

export default GptRulesLanding;
