'use client';

export default function TeacherInfo() {
  return (
    <div className="teacher-info" id="teacher-info">
      <h1 className="teacher-info-name">أ/ أمير زيدان</h1>
      
      <p className="teacher-info-title">
        مستر أمير زيدان | مدرس اللغة الإنجليزية للثانوية العامة والأزهرية
      </p>

      <div className="teacher-info-quote">
        <p>
          لو الإنجليزي مقلقك، عبقري لغة هيلحقك! مستر أمير زيدان هيساعدك بخبرة كبيرة، أفكار مبتكرة، واستراتيجيات مراجعة ذكية توصلك لأعلى الدرجات.
        </p>
      </div>

      <button className="cta-button" id="cta-subscribe">
        <svg className="cta-button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
        اشترك معانا
      </button>
    </div>
  );
}
