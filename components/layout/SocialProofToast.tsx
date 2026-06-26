"use client";

import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const ORDERS = [
  {
    name: "Nguyễn Văn Hùng",
    city: "Hà Nội",
    product: "Rượu Sâm Ngọc Linh Chai Oval 500ml",
    time: "2 phút trước",
    color: "from-amber-400 to-amber-600",
    bg: "bg-amber-50",
  },
  {
    name: "Trần Minh Anh",
    city: "TP. Hồ Chí Minh",
    product: "Rượu Whisky Sâm Ngọc Linh 500ml",
    time: "5 phút trước",
    color: "from-emerald-400 to-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "Lê Quốc Bảo",
    city: "Đà Nẵng",
    product: "Rượu Sâm Ngọc Linh Chai Premium",
    time: "8 phút trước",
    color: "from-green-400 to-green-600",
    bg: "bg-green-50",
  },
  {
    name: "Phạm Thị Lan",
    city: "Quảng Nam",
    product: "Rượu Sâm Ngọc Linh Chai Classic",
    time: "12 phút trước",
    color: "from-yellow-400 to-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    name: "Hoàng Văn Nam",
    city: "Hải Phòng",
    product: "Combo 3 Chai Rượu Sâm Ngọc Linh 187ml",
    time: "15 phút trước",
    color: "from-blue-400 to-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Võ Thị Mai",
    city: "Cần Thơ",
    product: "Yến Sâm Ngọc Linh Cao Cấp",
    time: "3 phút trước",
    color: "from-purple-400 to-purple-600",
    bg: "bg-purple-50",
  },
  {
    name: "Đặng Văn Phúc",
    city: "Nha Trang",
    product: "Combo Quà Tặng Rượu Sâm Ngọc Linh",
    time: "7 phút trước",
    color: "from-orange-400 to-orange-600",
    bg: "bg-orange-50",
  },
  {
    name: "Nguyễn Thị Hương",
    city: "Huế",
    product: "Rượu Sâm Ngọc Linh 1000ml",
    time: "10 phút trước",
    color: "from-teal-400 to-teal-600",
    bg: "bg-teal-50",
  },
];

function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[parts.length - 2][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomDelay(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}

function AnimatedAvatar({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  const initials = getInitials(name);
  return (
    <div className="relative shrink-0">
      {/* Outer ring that pulses */}
      <div
        className={`absolute inset-0 rounded-full ${color} opacity-20 scale-110 animate-ping`}
        style={{ animationDuration: "2.5s" }}
      />
      {/* Avatar circle */}
      <div
        className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${color}
          flex items-center justify-center shadow-md border-2 border-white overflow-hidden`}
      >
        {/* Decorative inner pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 48 48"
          fill="none"
        >
          <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="1" />
          <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="0.5" />
          <circle cx="24" cy="24" r="8" stroke="white" strokeWidth="0.5" />
        </svg>
        {/* Initials */}
        <span
          className="relative z-10 text-white font-bold text-sm drop-shadow-sm"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
        >
          {initials}
        </span>
      </div>
      {/* Bell badge */}
      <span
        className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 rounded-full
          flex items-center justify-center text-[10px] shadow-md animate-[bellRing_2s_ease-in-out_infinite]"
      >
        🔔
      </span>
    </div>
  );
}

export default function SocialProofToast() {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showToast() {
    const order = getRandomItem(ORDERS);

    toast.custom(
      (t) => (
        <div
          className={`flex items-center gap-4 bg-white rounded-2xl px-5 py-4 max-w-sm w-full
            border border-[#C4A468]/20
            shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            transition-all duration-500
            ${t.visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}`}
        >
          <AnimatedAvatar name={order.name} color={order.color} />

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-gray-900 truncate">
                {order.name}
              </p>
              <span className="text-[11px] text-gray-400 shrink-0">
                {order.time}
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-snug">
              tại{" "}
              <span className="font-medium text-gray-700">{order.city}</span>{" "}
              vừa đặt mua
            </p>
            <p className="text-sm font-semibold text-[#C4A468] truncate">
              🌿 {order.product}
            </p>
          </div>
        </div>
      ),
      { duration: 3500 },
    );

    timerRef.current = setTimeout(showToast, getRandomDelay(3, 5));
  }

  useEffect(() => {
    timerRef.current = setTimeout(showToast, 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
