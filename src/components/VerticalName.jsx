'use client';

export default function VerticalName() {
  const firstName = 'AMIR';
  const lastName = 'ZEDAN';

  return (
    <div className="vertical-name" id="vertical-name">
      <span className="vertical-name-mr">Mr.</span>
      <div className="vertical-name-columns">
        <div className="name-column">
          {firstName.split('').map((letter, i) => (
            <span key={`first-${i}`} className="name-letter" style={{ animationDelay: `${i * 0.1}s` }}>
              {letter}
            </span>
          ))}
        </div>
        <div className="name-column">
          {lastName.split('').map((letter, i) => (
            <span key={`last-${i}`} className="name-letter" style={{ animationDelay: `${(i + firstName.length) * 0.1}s` }}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
