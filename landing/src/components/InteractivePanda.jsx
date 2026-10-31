import React, { useEffect, useRef, useState } from 'react';
import pandaCutout from '../assets/panda_cutout.png';
import leftIrisImg from '../assets/left_iris.png';
import rightIrisImg from '../assets/right_iris.png';

export function InteractivePanda({ className = 'w-24 h-28', isHovered = false }) {
  const containerRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const [leftEyePos, setLeftEyePos] = useState({ x: 0, y: 0 });
  const [rightEyePos, setRightEyePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId = null;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      animationFrameId = requestAnimationFrame(() => {
        // Calculate offset for left eye
        if (leftEyeRef.current) {
          const lRect = leftEyeRef.current.getBoundingClientRect();
          const lCenterX = lRect.left + lRect.width / 2;
          const lCenterY = lRect.top + lRect.height / 2;

          const dx = e.clientX - lCenterX;
          const dy = e.clientY - lCenterY;
          const angle = Math.atan2(dy, dx);
          const dist = Math.hypot(dx, dy);

          // Max offset relative to eye size (approx 18% of eye diameter)
          const maxOffset = Math.min(lRect.width * 0.22, 6);
          const offsetDist = Math.min(maxOffset, dist / 25);

          setLeftEyePos({
            x: Math.cos(angle) * offsetDist,
            y: Math.sin(angle) * offsetDist,
          });
        }

        // Calculate offset for right eye
        if (rightEyeRef.current) {
          const rRect = rightEyeRef.current.getBoundingClientRect();
          const rCenterX = rRect.left + rRect.width / 2;
          const rCenterY = rRect.top + rRect.height / 2;

          const dx = e.clientX - rCenterX;
          const dy = e.clientY - rCenterY;
          const angle = Math.atan2(dy, dx);
          const dist = Math.hypot(dx, dy);

          const maxOffset = Math.min(rRect.width * 0.22, 6);
          const offsetDist = Math.min(maxOffset, dist / 25);

          setRightEyePos({
            x: Math.cos(angle) * offsetDist,
            y: Math.sin(angle) * offsetDist,
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none pointer-events-auto transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ aspectRatio: '592 / 691' }}
    >
      {/* Eye Sockets Layer (Behind Panda Cutout) */}
      <div className="absolute inset-0 z-0">
        {/* Left Eyeball (Viewer Left) */}
        <div
          ref={leftEyeRef}
          className="absolute rounded-full bg-white flex items-center justify-center overflow-hidden shadow-inner"
          style={{
            left: '33.1%',
            top: '28.1%',
            width: '9.8%',
            height: '8.2%',
          }}
        >
          <img
            src={leftIrisImg}
            alt="Panda Left Eye Iris"
            className="w-[84%] h-[84%] object-contain transition-transform duration-75 ease-out pointer-events-none"
            style={{
              transform: `translate(${leftEyePos.x}px, ${leftEyePos.y}px)`,
            }}
          />
        </div>

        {/* Right Eyeball (Viewer Right) */}
        <div
          ref={rightEyeRef}
          className="absolute rounded-full bg-white flex items-center justify-center overflow-hidden shadow-inner"
          style={{
            left: '55.6%',
            top: '28.1%',
            width: '9.6%',
            height: '8.2%',
          }}
        >
          <img
            src={rightIrisImg}
            alt="Panda Right Eye Iris"
            className="w-[84%] h-[84%] object-contain transition-transform duration-75 ease-out pointer-events-none"
            style={{
              transform: `translate(${rightEyePos.x}px, ${rightEyePos.y}px)`,
            }}
          />
        </div>
      </div>

      {/* Foreground Panda Body and Eye-Outline Mask */}
      <img
        src={pandaCutout}
        alt="Interactive Panda with Tracking Eyes"
        className="relative z-10 w-full h-full object-contain pointer-events-none filter drop-shadow-md"
      />
    </div>
  );
}

