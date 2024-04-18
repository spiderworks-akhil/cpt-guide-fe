import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ReviewerAvatar from '@/styles/img/UserAvatar.png';
const VideoPlayer = ({ isOpen, onClose, content, setModalContent, poster }) => {
    const [isModalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        setModalOpen(isOpen);
    }, [isOpen]);



    const handleClose = () => {
        setModalOpen(false);
        setModalContent('');
        onClose && onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };




    return (
        <>
            {isModalOpen && (
                <div className="review-popup-block-content-div fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleOverlayClick}>
                    <button onClick={handleOverlayClick}>
                    <svg onClick={handleOverlayClick}  width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5 35.75C28.4375 35.75 35.75 28.4375 35.75 19.5C35.75 10.5625 28.4375 3.25 19.5 3.25C10.5625 3.25 3.25 10.5625 3.25 19.5C3.25 28.4375 10.5625 35.75 19.5 35.75Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8984 24.0987L24.0959 14.9012" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M24.0959 24.0987L14.8984 14.9012" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                    <div className="review-popup-block-content ">

                        {content?.media_type === "Video" ? (
                            <video
                                style={{
                                    height: "100%", width: "100%",
                                }}
                                playsInline
                                muted
                                controls
                                loop
                                alt="video"
                                src={content.file_path || content.review}
                                poster={poster && poster}
                                autoPlay={true}
                                controlsList="nodownload"
                            />
                        ) : null}

                        {content?.
                            comment_type
                            === "Youtube Video" && (
                                < iframe
                                    title="YouTube video player"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                    width="500" height="315"
                                    src={content?.youtube_link}
                                />

                            )}

                    </div>
                </div >
            )}
        </>
    );
};

export default VideoPlayer;
