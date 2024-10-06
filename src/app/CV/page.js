import Link from "next/link";

export default function CV() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-10">
            <div className="max-w mx-auto px-4">
                <header className="mb-8">
                    <h1 className="text-5xl font-bold text-center mb-2">Matthew Gardiner</h1>
                    <p className="text-lg text-center text-gray-600 font-bold dark:text-gray-200">Software Developer</p>
                    <div className="text-center mt-4">
                        <Link href="/CV_Matthew_Gardiner.pdf" download>
                            <button className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-150">
                                Download CV
                            </button>
                        </Link>
                    </div>
                </header>
            </div>
        </div>
    );
}
