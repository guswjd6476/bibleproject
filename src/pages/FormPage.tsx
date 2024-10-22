import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const FormPage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [responsiblePerson, setResponsiblePerson] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleGoBack = () => {
        router.back(); // 이전 페이지(비디오 페이지)로 이동
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/saveFeedback', {
                name,
                contact,
                responsiblePerson,
                feedback,
            });

            if (response.status === 200 && response.data.success) {
                // 폼 제출 성공 시 "감사합니다!" 페이지로 이동
                router.push('/ThankYouPage');
            } else {
                alert('피드백 저장에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('오류 발생:', error);
            alert('오류가 발생했습니다. 나중에 다시 시도해주세요.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 ">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h2 className="text-lg sm:text-2xl font-bold text-pink-600 mb-4">🎉 럭키비키 추첨 🎉</h2>
                <p className="text-pink-500 ">이름과 휴대폰 번호를 입력하고</p>
                <p className="text-pink-500 mb-6">럭키빅키 응모에 도전해보세요!</p>

                <form
                    className="w-full flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="이름"
                        className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="연락처"
                        className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="담당자명"
                        className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={responsiblePerson}
                        onChange={(e) => setResponsiblePerson(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="피드백을 남겨주세요"
                        className="px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
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
