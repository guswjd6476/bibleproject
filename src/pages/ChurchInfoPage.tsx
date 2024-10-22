import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ChurchInfoPage = () => {
    const router = useRouter();
    const [page, setPage] = useState(1);

    const handleNextPage = () => {
        if (page < 3) {
            setPage(page + 1);
        } else {
            router.push('/FormPage'); // 폼 페이지로 이동
        }
    };

    const handleGoBack = () => {
        if (page === 1) {
            router.back(); // 비디오 페이지로 이동
        } else {
            setPage(page - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-200 to-green-200">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center transition-all duration-300 transform">
                {/* 페이지 1 */}
                {page === 1 && (
                    <>
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Why do you hate it?</h1>
                        <Image
                            width={300}
                            height={300}
                            src="/6.jpg"
                            alt="혐오의 시대 이미지"
                            className="rounded-lg h-full w-full mb-3 shadow-md transition-transform duration-300 transform"
                        />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            대혐오의 시대 를 살아가는 우리,
                            <br /> 싫음의 이유를 알지 못하며,
                            <br />
                            불충분한 근거로 뭉친 다수의 동의가
                            <br />
                            소수를 혐오하게 만드는 시대 속에서
                            <br />왜 정말 싫어하시나요?
                        </p>
                    </>
                )}

                {/* 페이지 2 */}
                {page === 2 && (
                    <>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <Image
                                width={300}
                                height={300}
                                src="/1.jpg"
                                alt="봉사 이미지 1"
                                className="rounded-lg h-full shadow-md transition-transform duration-300 transform hover:scale-105"
                            />
                            <Image
                                width={300}
                                height={300}
                                src="/2.jpg"
                                alt="봉사 이미지 2"
                                className="rounded-lg h-full shadow-md transition-transform duration-300 transform hover:scale-105"
                            />
                            <Image
                                width={300}
                                height={300}
                                src="/3.jpg"
                                alt="봉사 이미지 3"
                                className="rounded-lg h-full shadow-md transition-transform duration-300 transform hover:scale-105"
                            />
                            <Image
                                width={300}
                                height={300}
                                src="/4.jpg"
                                alt="봉사 이미지 4"
                                className="rounded-lg h-full shadow-md transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            우리에게 값 없이 생명을 주는 하늘의 빛과 비와 공기같이 우리는 이웃을 사랑하며, 이 귀한 것을
                            아낌없이 나눠주고 싶습니다. 하늘로부터 배운 생명의 봉사 정신으로 오늘도 자원봉사단은 하늘
                            나라의 봉사자가 되어 어두운 세상 곳곳을 비추어 온기를 전합니다.
                        </p>
                    </>
                )}

                {/* 페이지 3 */}
                {page === 3 && (
                    <>
                        <Image
                            width={300}
                            height={300}
                            src="/5.jpg"
                            alt="봉사 이미지 5"
                            className="rounded-lg h-full w-full mb-3 shadow-md transition-transform duration-300 transform hover:scale-105"
                        />
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            신천지는 뜻을 하늘에서 이룬 것같이 오늘날 이 땅에 이루신 하는 하나님의 나라입니다.
                            <br />
                            신천지는 하나님의 뜻에 따라 <br />
                            진리의 말씀과 보고들은 것을 증거하며, <br />
                            만국을 소성하기 위해 일하고 있습니다.
                            <br />
                            <br />
                            왜? 를 알지 못하는 혐오에서 벗어나
                            <br />
                            <br />
                            하나님의 뜻을 실천히며,
                            <br />
                            1000명이 넘는 목회자들이 선택한
                            <br />
                            <br />
                            진리의 말씀에 귀를 기울여 주세요.
                        </p>
                    </>
                )}

                <button
                    onClick={handleNextPage}
                    className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 w-full transition-transform duration-300 transform hover:scale-105"
                >
                    {page === 3 ? '다음' : '다음'}
                </button>

                <button
                    onClick={handleGoBack}
                    className="mt-6 text-blue-500 hover:underline transition duration-300 transform hover:scale-105"
                >
                    ← {page === 1 ? '뒤로가기' : '이전 페이지'}
                </button>
            </div>
        </div>
    );
};

export default ChurchInfoPage;
