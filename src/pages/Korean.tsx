import { Phone, CheckCircle2, Languages } from 'lucide-react';
import { CLINIC_INFO } from '../constants';
import CTASection from '../components/CTASection';

export default function Korean() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-white pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="max-content">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Languages className="w-8 h-8 text-secondary" />
                </div>
                <span className="text-lg font-bold text-secondary">한국어 진료 안내</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-8 leading-tight tracking-tight">
                한국어 진료 가능 — <span className="text-cta">Plano, TX</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                플레이노 SC Family Clinic에서는 한국어 상담과 진료가 가능합니다. 
                환자분들이 편안하게 소통하며 최고의 의료 서비스를 받으실 수 있도록 최선을 다합니다.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-bg-alt p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                <h2 className="text-2xl font-bold text-primary mb-8">채승기 원장 (Dr. Steven Chae, MD)</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  25년 이상의 풍부한 임상 경험을 가진 보드 인증 가정의학과 전문의입니다. 
                  UT Southwestern 의대 졸업 및 Yale 부속 병원에서 수련을 마쳤으며, 
                  환자 한 분 한 분을 가족처럼 정성껏 진료합니다.
                </p>
                <div className="space-y-5">
                  {[
                    "한국어와 영어 모두 능통한 의사",
                    "메디케어(Medicare) 및 각종 보험 환영",
                    "개인별 맞춤형 만성 질환 관리",
                    "예방 접종 및 정기 건강 검진"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-accent-green mr-4 shrink-0" />
                      <span className="font-bold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-prose-content">
            <div className="prose prose-slate max-w-none mb-20">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">주요 진료 과목</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "일반 가정의학과 진료",
                  "당뇨, 고혈압, 고지혈증 관리",
                  "각종 예방 접종 및 건강 검진",
                  "메디케어 웰니스 체크업",
                  "학교 및 직장 신체 검사",
                  "급성 질환 및 통증 관리"
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="w-2 h-2 bg-cta rounded-full mr-4" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <h3 className="text-3xl font-bold mb-6 relative z-10">지금 예약하세요</h3>
              <p className="text-xl text-slate-300 mb-10 relative z-10">한국어로 편하게 상담받으실 수 있습니다. 전화 한 통으로 건강을 챙기세요.</p>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center px-10 py-5 bg-cta text-white text-xl font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 relative z-10"
              >
                <Phone className="w-6 h-6 mr-3" />
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="신규 환자 접수 중" 
        subtitle="플레이노 지역 한인 커뮤니티의 건강을 위해 최선을 다하겠습니다."
      />
    </div>
  );
}
