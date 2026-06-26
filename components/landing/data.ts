import { NavItem, StatItem, IngredientItem, ComparisonRow, TestimonialItem, ComboItem, FooterLinks, ProductItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "#" },
  { label: "Sản phẩm", href: "#" },
  { label: "Công dụng", href: "#" },
  { label: "Thành phần", href: "#" },
  { label: "Đánh giá", href: "#" },
  { label: "Liên hệ", href: "#" },
];

export const STATS: StatItem[] = [
  { value: "50.000+", label: "Khách hàng tin dùng", icon: "users" },
  { value: "4,9/5", label: "Đánh giá thực tế", icon: "star" },
  { value: "52+", label: "Saponin quý hiếm", icon: "leaf" },
  { value: "100%", label: "Từ Sâm Ngọc Linh", icon: "shield" },
];

export const HERO_BADGES: string[] = [
  "Sâm Ngọc Linh Việt Nam",
  "Ngâm và đóng chai thủ công",
  "Chứng nhận an toàn thực phẩm, sản xuất tại nhà máy đạt chuẩn",
];

export const INGREDIENTS: IngredientItem[] = [
  {
    name: "SÂM NGỌC LINH NGUYÊN CỦ",
    description:
      "Tinh hoa từ Sâm Ngọc Linh quý hiếm, giữ trọn giá trị tự nhiên trong từng sản phẩm.",
    image: "/image/sam-ngoc-linh.jpg",
  },
  {
    name: "RƯỢU NẾP TRUYỀN THỐNG",
    description:
      "Kết hợp cùng rượu nếp lên men tự nhiên, tạo nên hương vị dịu nhẹ, tinh tế.",
    image: "/image/nguyen-lieu-hat-nep.png",
  },
  {
    name: "CHAI THỦY TINH CAO CẤP",
    description:
      "Thiết kế sang trọng, phù hợp thưởng thức hoặc làm quà biếu ý nghĩa.",
    image: "/image/ruou-premium.png",
  },
];
export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Nguồn nguyên liệu" },
  { label: "Hàm lượng hoạt chất" },
  { label: "Đa dạng sản phẩm" },
  { label: "Khả năng lưu trữ, ngâm ủ lâu dài" },
  { label: "Độ an toàn" },
];

export const OUR_FEATURES: string[] = [
  "Sâm Ngọc Linh chuẩn Việt Nam",
  "Hơn 52 Saponin quý hiếm",
  "Đa dạng: rượu sâm nguyên củ và chiết xuất khép kín",
  "Càng ủ lâu, càng đậm vị",
  "Không sử dụng cồn công nghiệp hay chất phụ gia",
];

export const THEIR_FEATURES: string[] = [
  "Nguyên liệu pha trộn",
  "Ít hoạt chất",
  "Ít lựa chọn sản phẩm",
  "Dễ biến chất khi để lâu",
  "Có pha cồn công nghiệp",
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Anh Tuấn",
    role: "Doanh nhân",
    rating: 5,
    quote:
      "Mình thường nhấp một ly rượu sâm nhỏ sau bữa tối, cảm thấy người ấm và thư giãn hơn rõ rệt.",
  },
  {
    name: "Chị Yến",
    role: "Nhân viên văn phòng",
    rating: 5,
    quote:
      "Mình mua rượu sâm biếu ba ở nhà, ông uống thử rồi khen vị êm, không gắt như rượu thường.",
  },
  {
    name: "Anh Huy",
    role: "Kinh doanh",
    rating: 5,
    quote:
      "Rượu sâm mình mua biếu đối tác cuối năm, ai cũng khen bình rượu sang trọng và chất lượng.",
  },
];

export const COMBOS: ComboItem[] = [
  {
    name: "RƯỢU SÂM NGỌC LINH CHAI PREMIUM",
    price: "Liên hệ",
    quantity: "Chai Premium",
    features: [
      "Dòng sản phẩm cao cấp Samtramy",
      "Thiết kế sang trọng, nổi bật",
      "Thích hợp làm quà biếu VIP",
      "Mang dấu ấn tinh hoa Ngọc Linh",
    ],
    highlight: false,
    image: "/san-pham/ruou-sam-premium.png",
  },
  {
    name: "RƯỢU WHISKY SÂM NGỌC LINH",
    price: "2.000.000đ",
    quantity: "Chai 500ml",
    features: [
      "Kết hợp Sâm Ngọc Linh và rượu Whisky",
      "Hương vị đậm đà, hậu vị êm",
      "Thiết kế chai cao cấp",
      "Phù hợp thưởng thức và biếu tặng",
    ],
    highlight: true,
    image: "/san-pham/ruou-whisky-500ml.png",
  },
  {
    name: "RƯỢU SÂM NGỌC LINH CHAI CLASSIC",
    price: "Liên hệ",
    quantity: "Chai Classic",
    features: [
      "Sâm Ngọc Linh kết hợp rượu truyền thống",
      "Hương vị hài hòa, tinh tế",
      "Thiết kế sang trọng",
      "Lựa chọn phù hợp làm quà tặng",
    ],
    highlight: false,
    image: "/san-pham/ruou-sam-classic.png",
  },
];

export const FOOTER_LINKS: FooterLinks = {
  about: ["Về chúng tôi", "Nguồn gốc Sâm Ngọc Linh", "Câu chuyện thương hiệu"],
  quick: ["Trang chủ", "Sản phẩm", "Công dụng", "Đánh giá"],
  policy: [
    "Chính sách đổi trả",
    "Chính sách bảo mật",
    "Điều khoản sử dụng",
    "Chính sách vận chuyển",
  ],
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "ruou-whisky-sam-ngoc-linh-500ml",
    name: "Rượu Whisky Sâm Ngọc Linh 500ml",
    category: "Rượu sâm ngọc linh",
    price: "2.000.000đ",
    unit: "Chai 500ml",
    image: "/san-pham/ruou-whisky-500ml.png",
    rating: 5,
    reviewCount: 128,
    badges: [{ label: "Bán chạy", variant: "best" }],
  },

  {
    id: "ruou-sam-trai-cay-len-men",
    name: "Samy — Rượu Sâm Ngọc Linh vị trái cây lên men",
    category: "Rượu sâm ngọc linh",
    price: "1.080.000đ",
    originalPrice: "1.180.000đ",
    unit: "Chai 500ml",
    image: "/san-pham/ruou-samy.png",
    rating: 5,
    reviewCount: 96,
    badges: [
      { label: "Mới", variant: "new" },
      { label: "Sale", variant: "sale" },
    ],
  },

  {
    id: "combo-3-chai-whisky-sam-ngoc-linh",
    name: "Combo 3 Chai Rượu Whisky Sâm Ngọc Linh",
    category: "Combo quà tặng",
    price: "Liên hệ",
    unit: "Combo 3 chai",
    image: "/san-pham/combo-whisky-3-chai.png",
    rating: 5,
    reviewCount: 45,
    badges: [{ label: "Quà tặng", variant: "best" }],
  },

  {
    id: "ruou-cay-sam-ngoc-linh-1000ml",
    name: "Rượu Cây Sâm Ngọc Linh 1000ml",
    category: "Rượu sâm ngọc linh",
    price: "Liên hệ",
    unit: "Bình 1000ml",
    image: "/san-pham/ruou-cay-sam-1000ml.jpg",
    rating: 5,
    reviewCount: 38,
  },

  {
    id: "ruou-sam-ngoc-linh-187ml",
    name: "Rượu Sâm Ngọc Linh 187ml",
    category: "Rượu sâm ngọc linh",
    price: "Liên hệ",
    unit: "Chai 187ml",
    image: "/san-pham/ruou-sam-187ml.png",
    rating: 5,
    reviewCount: 52,
    badges: [{ label: "Bán chạy", variant: "best" }],
  },

  {
    id: "ruou-sam-ngoc-linh-premium",
    name: "Rượu Sâm Ngọc Linh Chai Premium",
    category: "Rượu sâm cao cấp",
    price: "Liên hệ",
    unit: "Chai Premium",
    image: "/san-pham/ruou-sam-premium.png",
    rating: 5,
    reviewCount: 31,
    badges: [{ label: "Cao cấp", variant: "best" }],
  },

  {
    id: "ruou-sam-ngoc-linh-classic",
    name: "Rượu Sâm Ngọc Linh Chai Classic",
    category: "Rượu sâm cao cấp",
    price: "Liên hệ",
    unit: "Chai Classic",
    image: "/san-pham/ruou-sam-classic.png",
    rating: 5,
    reviewCount: 27,
  },

  {
    id: "combo-3-chai-ruou-sam-ngoc-linh-100ml",
    name: "Combo 3 Chai Rượu Sâm Ngọc Linh",
    category: "Combo quà tặng",
    price: "Liên hệ",
    unit: "Combo 3 chai 100ml",
    image: "/san-pham/combo-sam-100ml.png",
    rating: 5,
    reviewCount: 41,
    badges: [{ label: "Quà tặng", variant: "best" }],
  },
];
