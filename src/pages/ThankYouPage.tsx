import { useRouter } from 'next/router';

const ThankYouPage = () => {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/'); // 홈 페이지로 이동
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-green-100 to-blue-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">감사합니다!</h1>
                <p className="text-gray-600 mb-6">진리의 말씀으로 모두 천국에 함께 하길 소망합니다</p>
                <button
                    onClick={handleGoHome}
                    className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    처음으로
                </button>
            </div>
        </div>
    );
};

export default ThankYouPage;
