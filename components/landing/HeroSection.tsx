"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HERO_BADGES } from "./data";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.2 },
  },
};

const badgeItem = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ef]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/bg-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f5ef]/60 via-[#f8f5ef]/40 to-[#f8f5ef]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5ef]/80 via-transparent to-[#f8f5ef]/20" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text */}
          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="text-[#C4A468] text-sm font-semibold tracking-widest uppercase"
            >
              Rượu sâm cao cấp từ thiên nhiên
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight"
            >
              RƯỢU SÂM NGỌC LINH
              <br />
              BÁU VẬT TỪ ĐẠI NGÀN
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-base leading-relaxed max-w-sm"
            >
              Tinh hoa Sâm Ngọc Linh Quảng Nam — rượu sâm ngâm theo phương pháp
              truyền thống, bồi bổ sức khỏe cho cả gia đình.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 flex-wrap"
            >
              <motion.a
                href="#combo"
                className="bg-[#C4A468] hover:bg-[#b8965a] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                MUA NGAY
              </motion.a>

              <motion.a
                href="#story"
                className="border border-gray-400 text-gray-700 hover:border-gray-700 font-semibold px-7 py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                KHÁM PHÁ THÊM
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-6 pt-4 border-t border-gray-200"
              variants={containerVariants}
            >
              {HERO_BADGES.map((badge) => (
                <motion.div
                  key={badge}
                  variants={badgeItem}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-md">
                    🌿
                  </div>
                  <span className="text-xs text-gray-600">{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Product image */}
          <motion.div
            className="flex justify-center items-end relative"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Glow halo */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#C4A468]/20 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            />

            {/* Shadow */}
            <motion.div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-6 bg-black/15 blur-xl rounded-full"
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />

            <motion.div
              className="relative w-full max-w-sm h-80 md:h-[420px]"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/image/PREMIUM.png"
                alt="Rượu Sâm Trà My — Rượu sâm cao cấp từ Sâm Ngọc Linh"
                fill
                priority
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Fade bottom to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}