'use client';

export default function VerticalName() {
  const firstName = 'AMIR';
  const lastName = 'ZEDAN';

  // Array to repeat text for seamless scrolling
  const repeatCount = Array(8).fill(0);

  return (
    <div className="vertical-name" id="vertical-name" dir="ltr">
      <div className="marquee-column">
        <div className="marquee-content-up">
          {repeatCount.map((_, i) => (
            <span key={`f-${i}`} className="name-word">{firstName}</span>
          ))}
        </div>
      </div>
      <div className="marquee-column">
        <div className="marquee-content-down">
          {repeatCount.map((_, i) => (
            <span key={`l-${i}`} className="name-word">{lastName}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
