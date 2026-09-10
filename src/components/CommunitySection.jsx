import { useEffect, useRef, useState } from 'react';
import v1 from '../assets/videos/v1.mp4';
import v2 from '../assets/videos/v2.mp4';
import v3 from '../assets/videos/v3.mp4';
import v4 from '../assets/videos/v4.mp4';
import v5 from '../assets/videos/v5.mp4';
import v6 from '../assets/videos/v6.mp4';
import v7 from '../assets/videos/v7.mp4';
import './CommunitySection.css';

const GRID_VIDEOS = [v1, v2, v3, v4, v7, v6, v5, v1];

function VideoTile({ src, index, activeIndex, onActivate }) {
  const videoRef = useRef(null);
  const isActive = activeIndex === index;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.controls = true;
      video.muted = false;
      video.play().catch(() => {});
      return;
    }

    video.pause();
    video.controls = false;
    video.muted = true;
    video.currentTime = 0;
  }, [isActive]);

  const handleActivate = () => {
    if (!isActive) onActivate(index);
  };

  if (isActive) {
    return (
      <div className="community-video-tile is-playing">
        <video
          ref={videoRef}
          src={src}
          className="community-video-tile__video"
          playsInline
          preload="metadata"
          loop
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="community-video-tile"
      onClick={handleActivate}
      aria-label={`Play video ${index + 1}`}
    >
      <video
        ref={videoRef}
        src={src}
        className="community-video-tile__video"
        muted
        playsInline
        preload="metadata"
      />
      <span className="community-video-tile__play" aria-hidden="true">▶</span>
    </button>
  );
}

export default function CommunitySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="community-section" id="community">
      

      <div className="community-section__inner">
        <header className="community-section__header">
          <p className="community-section__eyebrow">Influencer Approved</p>
          <h2>
            See What The <span>Experts Are Saying</span>
          </h2>
        </header>

        <div className="community-section__grid">
          {GRID_VIDEOS.map((src, index) => (
            <VideoTile
              key={`${src}-${index}`}
              src={src}
              index={index}
              activeIndex={activeIndex}
              onActivate={setActiveIndex}
            />
          ))}
        </div>
      </div>

     
    </section>
  );
}
