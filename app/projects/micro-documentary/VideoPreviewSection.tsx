"use client";

import { useState, useRef, useEffect } from "react";
import Hls from "hls.js";
import { Section } from "./common/Section";
import VideoModal from "./VideoModal";

export function VideoPreviewSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
  
    const src = "https://customer-03tgn6o4u930capn.cloudflarestream.com/1b562dcd1f9009a0531aa455f0c8d589/manifest/video.m3u8";
    let hls: Hls | null = null;
  
    const checkTime = () => {
      if (video.currentTime >= 30) {
        video.currentTime = 0;
      }
    };
  
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
  
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = true;
        video.play().catch(console.error);
        video.addEventListener("timeupdate", checkTime);
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.muted = true;
        video.play().catch(console.error);
        video.addEventListener("timeupdate", checkTime);
      });
    } else {
      video.src = src;
    }
  
    return () => {
      if (hls) hls.destroy();
      video.removeEventListener("timeupdate", checkTime);
    };
  }, []);

  return (
    <>
      <Section className="py-4 md:py-6">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative cursor-pointer group"
            onClick={handleVideoClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg shadow-lg"
              playsInline
              muted
              autoPlay
              preload="metadata"
            />
            <p className="text-center text-xs md:text-sm font-thin text-black/60 mt-4">
              The end result — a polished, authentic piece that elevates brand and voice.
            </p>
        
            
            {/* Custom cursor tooltip */}
            {isHovering && (
              <div
                className="fixed pointer-events-none z-50 bg-black text-white px-3 py-1 rounded-full text-sm font-medium transform -translate-x-1/2 -translate-y-full"
                style={{
                  left: cursorPosition.x,
                  top: cursorPosition.y - 10,
                }}
              >
                Play Me
              </div>
            )}
          </div>
        </div>
      </Section>

      {isModalOpen && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoSrc="https://customer-03tgn6o4u930capn.cloudflarestream.com/1b562dcd1f9009a0531aa455f0c8d589/manifest/video.m3u8"
          title="Micro Documentary"
        />
      )}
    </>
  );
}