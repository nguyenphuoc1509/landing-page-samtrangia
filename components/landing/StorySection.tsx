"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const STORY_BLOCKS = [
  {
    id: "ruou-sam-nguyen-cu",
    eyebrow: "Rượu Sâm Nguyên Củ Ngọc Linh",
    title: "Tinh Hoa Từ Củ Sâm Nguyên Vẹn — Lưu Giữ Hương Vị Núi Rừng Trà My",
    intro:
      "Rượu Sâm Ngọc Linh Trà My được chế tác từ những củ sâm nguyên vẹn, kết hợp cùng rượu truyền thống để tạo nên hương vị đặc trưng:",
    points: [
      "🌿 Củ Sâm Ngọc Linh nguyên vẹn từ vùng núi Trà My, Quảng Nam",
      "🥃 Hương vị hài hòa giữa vị sâm tự nhiên và rượu truyền thống",
      "🏔️ Lưu giữ nét đặc trưng của vùng đất được thiên nhiên ưu đãi",
      "✨ Thiết kế sang trọng, phù hợp trưng bày và làm quà biếu cao cấp",
      "🎁 Lựa chọn ý nghĩa dành tặng người thân, đối tác và những dịp đặc biệt",
    ],
    image: "/image/story-1.png",
    imageAlt: "Rượu Sâm Nguyên Củ Ngọc Linh Trà My",
    reverse: false,
  },
  {
    id: "ruou-sam-cao-cap",
    eyebrow: "Rượu Sâm Ngọc Linh Cao Cấp",
    title:
      "Sự Kết Hợp Giữa Tinh Hoa Dược Liệu Việt Và Nghệ Thuật Chế Tác Truyền Thống",
    intro:
      "Mỗi sản phẩm là sự kết tinh giữa nguyên liệu quý và giá trị văn hóa của vùng núi Ngọc Linh:",
    points: [
      "🌱 Sử dụng Sâm Ngọc Linh Trà My - một trong những dòng sâm quý của Việt Nam",
      "🥃 Hương rượu đậm đà, cân bằng cùng vị đặc trưng của sâm",
      "🏞️ Mang câu chuyện về núi rừng Quảng Nam trong từng sản phẩm",
      "🎖️ Phù hợp cho những người yêu thích sản phẩm dược liệu cao cấp",
      "🎁 Là món quà sang trọng thể hiện sự trân trọng và tinh tế",
    ],
    image: "/image/story-2.png",
    imageAlt: "Rượu Sâm Ngọc Linh cao cấp",
    reverse: true,
  },
  {
    id: "ruou-sam-tra-my",
    eyebrow: "Rượu Sâm Ngọc Linh Trà My",
    title:
      "Hương Vị Núi Rừng Quảng Nam Trong Từng Giọt Rượu Sâm",
    intro:
      "Được tạo nên từ nguồn nguyên liệu quý tại vùng Trà My, Quảng Nam — nơi gắn liền với danh tiếng của Sâm Ngọc Linh:",
    points: [
      "🌿 Sâm Ngọc Linh chọn lọc từ vùng núi Trà My, Quảng Nam",
      "🥃 Sự hòa quyện tự nhiên giữa sâm và rượu truyền thống",
      "🏔️ Mang đậm dấu ấn văn hóa và thiên nhiên Việt Nam",
      "🍶 Đóng chai thủy tinh cao cấp, thích hợp lưu giữ lâu dài",
      "🎁 Sản phẩm phù hợp làm quà biếu trong các dịp quan trọng",
    ],
    image: "/image/story-3.png",
    imageAlt: "Rượu Sâm Ngọc Linh Trà My chai thủy tinh",
    reverse: false,
  },
  {
    id: "ruou-sam-qua-tang",
    eyebrow: "Rượu Sâm Cao Cấp — Quà Tặng Ý Nghĩa",
    title:
      "Trang Trọng, Tinh Tế — Món Quà Mang Giá Trị Việt",
    intro:
      "Rượu Sâm Ngọc Linh Trà My là lựa chọn phù hợp để dành tặng người thân, khách hàng và đối tác:",
    points: [
      "🎁 Thiết kế sang trọng, phù hợp cho các dịp biếu tặng",
      "🌿 Thể hiện giá trị của Sâm Ngọc Linh - dược liệu quý Việt Nam",
      "✨ Sự kết hợp giữa vẻ đẹp truyền thống và phong cách hiện đại",
      "📦 Đóng gói cẩn thận, đảm bảo tính thẩm mỹ khi trao tặng",
      "🏆 Gửi gắm sự trân trọng qua từng sản phẩm",
    ],
    image: "/image/story-4.png",
    imageAlt: "Rượu Sâm Ngọc Linh hộp quà cao cấp",
    reverse: true,
  },
];

function StoryBlockReveal({ block, index }: { block: (typeof STORY_BLOCKS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
      className={`py-16 md:py-24 ${block.reverse ? "bg-gray-50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Text */}
          <motion.div
            className={`flex flex-col gap-4 ${block.reverse ? "md:order-2" : "md:order-1"}`}
            initial={{ opacity: 0, x: block.reverse ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="text-[#C4A468] text-xs font-semibold tracking-widest uppercase">
              {block.eyebrow}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
              {block.title}
            </h3>
            <p className="text-gray-400 text-sm italic leading-relaxed">
              {block.intro}
            </p>
            <ul className="flex flex-col gap-2 mt-1">
              {block.points.map((point, i) => (
                <motion.li
                  key={i}
                  className="text-gray-600 text-sm leading-relaxed flex items-start gap-2"
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                >
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className={`relative w-full rounded-2xl overflow-hidden bg-gray-200 ${block.reverse ? "md:order-1" : "md:order-2"}`}
            style={{ aspectRatio: "1 / 1" }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <img
              src={block.image}
              alt={block.imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

export default function StorySection() {
  const [expanded, setExpanded] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerInView = useInView(bannerRef, { once: true, margin: "-60px" });

  return (
    <section id="story" className="bg-white">
      {/* Hero Banner */}
      <div className="bg-gray-50 border-b border-gray-100" ref={bannerRef}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              className="relative w-full h-[380px] rounded-2xl overflow-hidden bg-gray-200"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={bannerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/image/banner.png"
                alt="Câu chuyện sản phẩm Rượu Sâm Trà My"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: 36 }}
              animate={bannerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <p className="text-[#C4A468] text-xs font-semibold tracking-widest uppercase">
                Câu chuyện Rượu Sâm Trà My
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                Từ đại ngàn Ngọc Linh, Samtrangia mang đến những chai rượu sâm lưu giữ hương vị và giá trị của núi rừng Việt Nam.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sâm Ngọc Linh là một trong những dòng sâm quý của Việt Nam, gắn liền
với vùng núi Ngọc Linh và Trà My, Quảng Nam. Rượu Sâm Trà My được tạo
nên từ những củ sâm nguyên vẹn kết hợp cùng rượu nếp truyền thống, lưu giữ
hương vị đặc trưng và giá trị văn hóa của vùng đất này.
              </p>

              <motion.button
                onClick={() => setExpanded((v) => !v)}
                className="text-[#C4A468] text-sm font-semibold flex items-center gap-2 w-fit group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="cursor-pointer">
                  {expanded ? "THU GỌN NỘI DUNG" : "TÌM HIỂU THÊM"}
                </span>
                <motion.span
                  className="text-base cursor-pointer"
                  animate={{ rotate: expanded ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="story-expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="divide-y divide-gray-100">
              {STORY_BLOCKS.map((block, i) => (
                <StoryBlockReveal key={block.id} block={block} index={i} />
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="bg-[#C4A468] py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="max-w-2xl mx-auto px-6 text-center flex flex-col gap-4">
                <p className="text-white text-xs font-semibold tracking-widest uppercase opacity-80">
                  Sẵn sàng trải nghiệm
                </p>
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  Khám phá các sản phẩm Rượu Sâm Trà My ngay hôm nay
                </h3>

                <motion.a
                  href="#combo"
                  onClick={() => setExpanded(false)}
                  className="inline-flex self-center bg-white text-[#C4A468] font-semibold px-7 py-3 rounded-lg hover:bg-gray-50 transition-colors mt-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  XEM COMBO SẢN PHẨM
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}