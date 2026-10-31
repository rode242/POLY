import React, { useEffect, useRef } from 'react';
import { AssessmentAnalyticsSection } from '../sections/AssessmentAnalyticsSection';
import { animateEntrance } from '../animations/gsapAnimations';

export function AnalyticsPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    animateEntrance(pageRef.current, 0.1);
  }, []);

  return (
    <div ref={pageRef} className="flex-1 py-4">
      <AssessmentAnalyticsSection />
    </div>
  );
}

