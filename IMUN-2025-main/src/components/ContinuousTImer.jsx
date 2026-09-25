import React, { useEffect, useState } from 'react';
import { EVENT } from '../event';

function calculateTimeLeft(targetTime) {
  const difference = Math.max(0, targetTime - Date.now());
  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    complete: difference === 0,
  };
}

export default function ContinuousTimer() {
  const targetTime = new Date(EVENT.startDate).getTime();
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetTime));

  useEffect(() => {
    const updateTimer = () => setTimeLeft(calculateTimeLeft(targetTime));
    const interval = window.setInterval(updateTimer, 1000);
    updateTimer();
    return () => window.clearInterval(interval);
  }, [targetTime]);

  const units = [
    ['Days', timeLeft.days],
    ['Hours', timeLeft.hours],
    ['Minutes', timeLeft.minutes],
    ['Seconds', timeLeft.seconds],
  ];

  return (
    <aside className="countdown-card" aria-label="Countdown to SVVVIMUN 2026">
      <div className="countdown-header">
        <p className="countdown-kicker">Countdown to opening</p>
        <span className="countdown-status">{timeLeft.complete ? 'Live now' : 'Doors open soon'}</span>
      </div>

      <div className="countdown-grid" aria-live="off">
        {units.map(([label, value]) => (
          <div className="countdown-unit" key={label}>
            <span className="countdown-value">{String(value).padStart(2, '0')}</span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>

      <p className="countdown-date">
        {timeLeft.complete ? 'The 2026 conference is now in progress.' : `${EVENT.openingDateLabel} · 09:00 IST`}
      </p>
    </aside>
  );
}
