"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COMPARISON_ROWS, OUR_FEATURES, THEIR_FEATURES } from "./data";

export default function ComparisonSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const tableInView = useInView(tableRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, x: -32 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#C4A468] text-xs font-semibold tracking-widest uppercase mb-4">
              Vì sao chọn Rượu Sâm Trà My
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              Khác biệt từ thiên nhiên, khác biệt từ chất lượng
            </h2>
          </motion.div>

          <div ref={tableRef} className="overflow-x-auto">
            <motion.table
              className="w-full text-sm"
              initial={{ opacity: 0 }}
              animate={tableInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <thead>
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={tableInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <th className="text-left pb-4 text-gray-500 font-medium w-1/3">
                    Tiêu chí
                  </th>
                  <th className="pb-4 text-center text-[#C4A468] font-bold bg-amber-50 rounded-t-lg px-4 w-1/3">
                    Sản phẩm của chúng tôi
                  </th>
                  <th className="pb-4 text-center text-gray-400 font-medium w-1/3">
                    Sản phẩm thông thường
                  </th>
                </motion.tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <motion.tr
                    key={row.label}
                    className="border-t border-gray-300"
                    initial={{ opacity: 0, y: 16 }}
                    animate={tableInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.15 + i * 0.08,
                    }}
                  >
                    <td className="py-3 text-gray-600 font-medium">
                      {row.label}
                    </td>
                    <td className="py-3 text-center bg-amber-50 px-4">
                      <span className="text-green-600 font-medium flex items-center justify-center gap-1">
                        <span>✓</span>
                        <span className="text-xs">{OUR_FEATURES[i]}</span>
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <span className="text-red-400 flex items-center justify-center gap-1">
                        <span>✗</span>
                        <span className="text-xs text-gray-400">
                          {THEIR_FEATURES[i]}
                        </span>
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>

        </div>
      </div>
    </section>
  );
}
