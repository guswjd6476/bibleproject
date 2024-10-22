import { useState } from 'react';
import { useRouter } from 'next/router';

const VideoPage = () => {
    const [isVideoWatched, setIsVideoWatched] = useState(false);
    const router = useRouter();

    const handleVideoEnd = () => {
        setIsVideoWatched(true);
        router.push('/ChurchInfoPage');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
            {!isVideoWatched ? (
                <video
                    className="h-full max-h-screen mb-4"
                    controls
                    autoPlay // 자동 재생
                    onEnded={handleVideoEnd}
                >
                    <source
                        src="/shorts.mp4"
                        type="video/mp4"
                    />
                    브라우저가 비디오를 지원하지 못합니다
                </video>
            ) : null}
        </div>
    );
};

export default VideoPage;
