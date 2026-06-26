"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const FEATURES = [
  {
    icon: "✦",
    title: "Nguyên liệu cao cấp",
    description: "Sâm Ngọc Linh nguyên củ chọn lọc tại núi Trà My, Quảng Nam — không pha tạp chất, không cồn công nghiệp.",
  },
  {
    icon: "◈",
    title: "Ngâm ủ truyền thống",
    description: "Quy trình ngâm và chiết xuất khép kín, kiểm soát chất lượng theo tiêu chuẩn vệ sinh an toàn thực phẩm.",
  },
  {
    icon: "❋",
    title: "Kiểm định chất lượng",
    description: "Được kiểm định bởi các cơ quan y tế, đảm bảo an toàn tuyệt đối cho người dùng.",
  },
  {
    icon: "⬡",
    title: "Đóng chai sang trọng",
    description: "Chai thủy tinh 500ml/1 lít, đóng nắp kín — bảo quản được lâu, phù hợp dùng và biếu tặng.",
  },
];

const BADGES = ["Sâm Ngọc Linh", "Ngâm rượu truyền thống", "Không pha tạp chất"];

export default function DarkFeatureSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

        .lux-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #a8a8b8;
          opacity: 0.6;
        }
        .lux-headline em {
          font-style: italic;
          color: #c8c8d8;
          opacity: 0.75;
        }
        .lux-ring-outer {
          animation: luxRotate 22s linear infinite;
        }
        .lux-ring-outer::after {
          content: '';
          position: absolute;
          top: 12%;
          left: -4px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #b8b8cc;
          box-shadow: 0 0 12px rgba(180,180,210,0.55), 0 0 4px rgba(220,220,240,0.4);
        }
        @keyframes luxRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <section
        className="relative overflow-hidden min-h-[520px] py-20 px-8"
        style={{ background: "linear-gradient(150deg, #48484c 0%, #525256 45%, #444448 100%)" }}
      >
        {/* Orbs */}
        <div className="absolute rounded-full pointer-events-none" style={{ width: 380, height: 380, background: "radial-gradient(circle, rgba(200,200,210,0.10) 0%, transparent 70%)", filter: "blur(90px)", top: -120, right: -60 }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 260, height: 260, background: "radial-gradient(circle, rgba(160,160,175,0.07) 0%, transparent 70%)", filter: "blur(90px)", bottom: -60, left: "5%" }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 180, height: 180, background: "radial-gradient(circle, rgba(220,220,230,0.06) 0%, transparent 70%)", filter: "blur(90px)", top: "40%", left: "42%" }} />

        {/* Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-14 items-center max-w-[1280px] mx-auto">

          {/* Left */}
          <div ref={leftRef}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="lux-eyebrow flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#a8a8b8] mb-5">
                Thành phần thiên nhiên
              </p>
              <h2
                className="lux-headline text-[#eeeef2] font-bold leading-[1.1] mb-10 -tracking-[0.01em]"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.2rem" }}
              >
                Êm dịu.<br />
                Đậm đà.<br />
                <em>Tinh tế hơn.</em>
              </h2>
            </motion.div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  className="border-t pt-4"
                  style={{ borderColor: "rgba(200,200,215,0.12)" }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={leftInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.1 }}
                >
                  <span className="block text-base mb-1.5 text-[#9090a8]">{feature.icon}</span>
                  <p className="text-[13px] font-medium text-[#d8d8e4] tracking-[0.02em] mb-1">{feature.title}</p>
                  <p className="text-[11.5px] font-light leading-relaxed" style={{ color: "rgba(165,165,180,0.65)" }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-7">
              {BADGES.map((badge, i) => (
                <motion.span
                  key={badge}
                  className="rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em]"
                  style={{ border: "1px solid rgba(200,200,215,0.18)", color: "rgba(190,190,210,0.7)", background: "rgba(255,255,255,0.03)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={leftInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right: Product */}
          <motion.div
            ref={rightRef}
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={rightInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative"
              style={{ width: 340, height: 340 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Rotating outer ring */}
              <div className="lux-ring-outer absolute rounded-full" style={{ inset: -18, border: "1px solid rgba(200,200,215,0.14)" }} />
              {/* Mid ring */}
              <div className="absolute rounded-full" style={{ inset: -8, border: "1px solid rgba(200,200,215,0.08)" }} />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 38% 32%, rgba(200,200,220,0.16) 0%, rgba(140,140,160,0.07) 45%, transparent 72%)" }} />
              {/* Circle */}
              <div
                className="relative z-10 flex items-center justify-center rounded-full w-full h-full overflow-hidden"
                style={{ border: "1px solid rgba(200,200,220,0.18)", background: "linear-gradient(145deg, rgba(44,44,50,0.95) 0%, rgba(26,26,30,0.98) 100%)" }}
              >
                <Image
                  src="/image/CLASSIC.png"
                  alt="Rượu Sâm Ngọc Linh"
                  fill
                  className="object-contain"
                  sizes="340px"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Shimmer bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(200,200,220,0.18) 30%, rgba(220,220,240,0.35) 50%, rgba(200,200,220,0.18) 70%, transparent 100%)" }}
        />
      </section>
    </>
  );
}