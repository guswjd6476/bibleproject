import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h1 className="text-2xl font-bold mb-4">QR Code Example</h1>
            <p className="mb-4">Scan the QR code to watch the video.</p>
            <Link
                className="text-blue-500 underline"
                href="/VideoPage"
            >
                Go to Video
            </Link>
        </div>
    );
};

export default HomePage;
