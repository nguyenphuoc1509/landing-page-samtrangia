const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;
const BASE = `https://res.cloudinary.com/${CLOUD}/image/upload`;

type Opts = {
  width?: number;
  quality?: number | "auto";
  format?: "auto" | "webp";
};

export function cld(publicId: string, opts: Opts = {}): string {
  const { width, quality = "auto", format = "auto" } = opts;
  const transforms = [`f_${format}`, `q_${quality}`, width && `w_${width}`]
    .filter(Boolean)
    .join(",");
  return `${BASE}/${transforms}/${publicId}`;
}