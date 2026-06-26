"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PRODUCTS } from "./data";
import { ProductItem } from "./types";
import ContactPopup from "./ContactPopup";

// ─── Badge ───────────────────────────────────────────────────────────────────
function Badge({ label, variant }: { label: string; variant: "new" | "hot" | "sale" | "best" }) {
  const styles = {
    new:  "bg-emerald-50 text-emerald-700 border-emerald-200",
    hot:  "bg-red-50 text-red-600 border-red-200",
    sale: "bg-amber-50 text-amber-700 border-amber-200",
    best: "bg-[#C4A468]/10 text-[#9b7930] border-[#C4A468]/30",
  };
  return (
    <span className={`text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded border ${styles[variant]}`}>
      {label}
    </span>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product, index }: { product: ProductItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        className="group bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-[#C4A468]/25 transition-all duration-300"
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Badges */}
          {product.badges && product.badges.length > 0 && (
            <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
              {product.badges.map((b) => (
                <Badge key={b.label} label={b.label} variant={b.variant} />
              ))}
            </div>
          )}

          {/* Out of stock */}
          {product.outOfStock && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center z-10">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest border border-gray-300 px-4 py-2 rounded-full bg-white">
                Hết hàng
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 p-5 flex-1">
          {/* Category */}
          <p className="text-xs font-semibold text-[#C4A468] uppercase tracking-widest">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#9b7930] transition-colors">
            {product.name}
          </h3>

          {/* Unit */}
          {product.unit && (
            <p className="text-sm text-gray-400">{product.unit}</p>
          )}

          {/* Stars */}
          {product.rating && (
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating!) ? "text-amber-400" : "text-gray-200"}`}
                    viewBox="0 0 20 20" fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-400">({product.reviewCount ?? 0})</span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-end justify-between mt-auto pt-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-gray-900">{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">
                -{Math.round((1 - parseInt(product.price.replace(/[^\d]/g, "")) / parseInt(product.originalPrice.replace(/[^\d]/g, ""))) * 100)}%
              </span>
            )}
          </div>

          {/* Button */}
          <div className="flex gap-2.5 pt-1">
            <motion.button
              onClick={() => setShowContact(true)}
              disabled={!!product.outOfStock}
              className="flex-1 cursor-pointer py-3 rounded-xl text-sm font-semibold tracking-wide bg-[#C4A468] text-white hover:bg-[#9b7930] transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
              initial={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Mua ngay
            </motion.button>
          </div>
        </div>
      </motion.div>

      {showContact && (
  <ContactPopup
    productName={product.name}
    onClose={() => setShowContact(false)}
  />
)}
    </>
  );
}

// ─── Filter Tabs ──────────────────────────────────────────────────────────────
const CATEGORIES = [
  "Tất cả",
  "Rượu sâm ngọc linh",
  "Combo quà tặng",
  "Rượu sâm cao cấp",
];

function FilterTabs({ active, onChange }: { active: string; onChange: (cat: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors ${
            active === cat
              ? "text-white"
              : "text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {active === cat && (
            <motion.span
              layoutId="product-filter-pill"
              className="absolute inset-0 bg-[#C4A468] rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
const PAGE_SIZE = 6;

export default function ProductSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = PRODUCTS.filter((product) =>
    activeCategory === "Tất cả"
      ? true
      : product.category.toLowerCase().includes(activeCategory.toLowerCase())
  );

  const getPrice = (price: string) => {
    const value = parseInt(price.replace(/[^\d]/g, ""));
    return Number.isNaN(value) ? 0 : value;
  };

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return getPrice(a.price) - getPrice(b.price);
    if (sortBy === "price-desc") return getPrice(b.price) - getPrice(a.price);
    return 0;
  });

  const visible = sorted.slice(0, visibleCount);
  const hasMore = visibleCount < sorted.length;

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSortChange = (value: "default" | "price-asc" | "price-desc") => {
    setSortBy(value);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
        >
          <div>
            <p className="text-[#C4A468] text-xs font-semibold tracking-widest uppercase mb-2">
              Cửa hàng
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tất cả sản phẩm</h2>
            <p className="text-gray-400 text-sm mt-2">{filtered.length} sản phẩm</p>
          </div>

          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
            className="text-sm border border-gray-200 rounded-xl px-4 py-2.5 bg-white text-gray-700 cursor-pointer"
          >
            <option value="default">Mặc định</option>
            <option value="price-asc">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
          </select>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
        >
          <FilterTabs active={activeCategory} onChange={handleCategoryChange} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + sortBy}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {visible.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {hasMore && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="px-8 py-3.5 border border-gray-300 rounded-full text-sm font-medium text-gray-600"
            >
              Xem thêm sản phẩm
            </button>
          </div>
        )}
      </div>
    </section>
  );
}