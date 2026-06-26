"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  {
    id: 1,
    name: "Rượu Sâm Ngọc Linh Trà My",
    desc: "Chai 500ml",
    tag: "Bán chạy",
    image: "/image/banner-popup.png",
    href: "#combo",
  },
];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const INTERVAL_MS = 3000;

export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [pipKey, setPipKey] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const goTo = useCallback((i: number) => {
    setActive(i);
    setPipKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % PRODUCTS.length;
        setPipKey((k) => k + 1);
        return next;
      });
    }, INTERVAL_MS);
    return () => clearInterval(interval);
  }, [open, pipKey]);

  const current = PRODUCTS[active];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: "rgba(10,8,6,0.75)", backdropFilter: "blur(4px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setOpen(false)}
          />

          {/* Popup */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              className="relative w-full max-w-[860px] pointer-events-auto flex overflow-hidden rounded-xl"
              style={{ height: 520 }}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.5, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── LEFT — dark image panel ── */}
              <div
                className="relative w-[60%] shrink-0 overflow-hidden flex flex-col justify-end"
                style={{ background: "#1A1208" }}
              >
                {/* Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={current.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: 0.55 }}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 0.58, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  />
                </AnimatePresence>

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(160deg, transparent 25%, #1A1208 100%)",
                  }}
                />

                {/* Tag */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.tag}
                    className="absolute top-5 left-5 text-[9px] font-medium tracking-[0.18em] uppercase px-2.5 py-1"
                    style={{
                      background: "#C4A468",
                      color: "#1A1208",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {current.tag}
                  </motion.span>
                </AnimatePresence>

                {/* Product name bottom-left */}
                <div className="relative z-10 px-5 pb-5">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={current.name}
                      className="font-light italic leading-tight mb-0.5"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 20,
                        color: "#F5E8D0",
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      {current.name}
                    </motion.p>
                  </AnimatePresence>
                  <p
                    className="text-[11px] font-light tracking-wide"
                    style={{ color: "#C4A468", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {current.desc}
                  </p>
                </div>
              </div>

              {/* ── RIGHT — cream content panel ── */}
              <div
                className="flex-1 flex flex-col justify-between px-7 py-7 relative"
                style={{ background: "#FDFAF5" }}
              >
                {/* Close */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-sm transition-colors cursor-pointer"
                  style={{ color: "#9A8870" }}
                  aria-label="Đóng"
                >
                  ✕
                </button>

                {/* Top content */}
                <div>
                  <p
                    className="text-[9px] font-medium tracking-[0.22em] uppercase mb-2.5"
                    style={{ color: "#C4A468", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Chính hãng · Rượu Sâm Trà My
                  </p>

                  <h2
                    className="font-light leading-[1.15] mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 30,
                      color: "#1A1208",
                    }}
                  >
                    Rượu Sâm<br />
                    <em style={{ fontStyle: "italic", fontWeight: 600, color: "#C4A468" }}>
                      Ngọc Linh
                    </em>
                  </h2>

                  <p
                    className="text-[11px] font-light leading-relaxed mb-4"
                    style={{ color: "#7A6B55", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Khai thác từ độ cao 1.200–2.000m,<br />
                    vùng núi Ngọc Linh, Quảng Nam.
                  </p>

                  {/* Divider */}
                  <div style={{ height: "0.5px", background: "#E8DEC8", marginBottom: 16 }} />

                  {/* Trust list */}
                  <div className="flex flex-col gap-2">
                    {[
                      "100% Sâm Ngọc Linh tự nhiên",
                      "Giao hàng toàn quốc — COD",
                      "Hoàn tiền 100% nếu hàng giả",
                    ].map((item) => (
                      <span
                        key={item}
                        className="flex items-center gap-2 text-[11px]"
                        style={{ color: "#5C5040", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold"
                          style={{ background: "#F0E6CC", color: "#C4A468" }}
                        >
                          ✓
                        </span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5 flex flex-col gap-2">
                  <motion.a
                    href={current.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center w-full py-3 text-[12px] tracking-[0.1em] uppercase font-normal"
                    style={{
                      background: "#1A1208",
                      color: "#F5E8D0",
                      fontFamily: "'DM Sans', sans-serif",
                      textDecoration: "none",
                    }}
                    whileHover={{ background: "#2E1F0A" } }
                    whileTap={{ scale: 0.98 }}
                  >
                    Đặt hàng ngay
                  </motion.a>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-[10px] text-center transition-colors"
                    style={{
                      color: "#B0A08A",
                      fontFamily: "'DM Sans', sans-serif",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Không, cảm ơn
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}