"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { cld } from "@/lib/cloudinary";

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative mx-6 my-12 rounded-3xl overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-[#C4A468]/10" />
      <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full border border-[#C4A468]/10" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/5" />

      {/* Ambient glow */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#C4A468]/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-10 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT — Text */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#C4A468] text-xs font-semibold tracking-widest uppercase">
              Ưu đãi hôm nay
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Sẵn sàng chăm sóc
              <br />
              <span className="text-[#C4A468]">sức khỏe gia đình?</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Đặt hàng ngay hôm nay để nhận ưu đãi combo tốt nhất — giao hàng toàn quốc, thanh toán khi nhận hàng.
            </p>
            <div className="flex items-center gap-4 flex-wrap mt-2">
              <motion.a
                href="#combo"
                className="inline-flex items-center gap-2 bg-[#C4A468] hover:bg-[#b8965a] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                ĐẶT HÀNG NGAY
                <span>→</span>
              </motion.a>

              <motion.a
                href="#story"
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors underline underline-offset-4"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                Tìm hiểu thêm
              </motion.a>
            </div>

            {/* Trust badges */}
            <motion.div
              className="flex gap-6 pt-4 border-t border-white/10 mt-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {["Giao toàn quốc", "COD toàn quốc", "Đổi trả 7 ngày"].map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                >
                  <span className="text-[#C4A468] text-xs">✓</span>
                  <span className="text-gray-400 text-xs">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Product */}
          <motion.div
            className="flex justify-center md:justify-end items-center relative"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Glow halo */}
            <motion.div
              className="absolute w-56 h-56 bg-[#C4A468]/15 blur-2xl rounded-full"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Shadow */}
            <div className="absolute bottom-0 w-36 h-4 bg-black/40 blur-lg rounded-full" />

            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={cld("samtramy/PREMIUM", { width: 340 })}
                alt="Rượu Sâm Trà My — Rượu Sâm Ngọc Linh"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}