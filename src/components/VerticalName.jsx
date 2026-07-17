'use client';

export default function VerticalName() {
  const firstName = 'AMIR';
  const lastName = 'ZEDAN';

  return (
    <div className="vertical-name" id="vertical-name" dir="ltr">
      <div className="marquee-column">
        <div className="marquee-content-up">
          {/* Duplicate for seamless loop */}
          <span className="name-word">{firstName}</span>
          <span className="name-word" aria-hidden="true">{firstName}</span>
        </div>
      </div>
      <div className="marquee-column">
        <div className="marquee-content-down">
          <span className="name-word">{lastName}</span>
          <span className="name-word" aria-hidden="true">{lastName}</span>
        </div>
      </div>
    </div>
  );
}
