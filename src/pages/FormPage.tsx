import { useRouter } from 'next/router';

const FormPage = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back(); // 이전 페이지(비디오 페이지)로 이동
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 ">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-lg sm:text-2xl font-bold text-pink-600 mb-4">🎉 럭키비키 추첨 🎉</h2>
                <p className="text-pink-500 ">이름과 휴대폰 번호를 입력하고</p>
                <p className="text-pink-500 mb-6">럭키빅키 응모에 도전해보세요!</p>

                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="이름"
                        className="border border-pink-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                        required
                    />
                    <input
                        type="tel"
                        placeholder="휴대폰 번호"
                        className="border border-pink-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-pink-400"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transform transition duration-300 hover:scale-105"
                    >
                        응모하기
                    </button>
                </form>

                <button
                    onClick={handleGoBack}
                    className="mt-6 text-pink-500 hover:underline"
                >
                    ← 뒤로가기
                </button>
            </div>
        </div>
    );
};

export default FormPage;
