export default function Footer() {
    return (
        <footer className="bg-white py-12 border-t border-gray-100">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-condensed font-bold tracking-tighter">LMST</h2>
                    <p className="text-sm text-gray-500 mt-1">© 2025 LMST. All rights reserved.</p>
                </div>
                <div className="flex space-x-6 text-sm text-gray-500">
                    <a href="#" className="hover:text-black transition-colors">Instagram</a>
                    <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                    <a href="/contact" className="hover:text-black transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
