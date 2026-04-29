import type { NextConfig } from "next";

const UPVC_SHOWCASE = "/products?cat=upvc&sub=upvc-systems";

const nextConfig: NextConfig = {
  async redirects() {
    const legacyUpvcSubs = [
      "sliding-upvc-windows",
      "casement-upvc-windows",
      "tilt-turn",
      "slide-fold-doors",
      "internal-doors",
      "sliding-doors",
      "villa-windows",
    ] as const;
    return [
      ...legacyUpvcSubs.map((sub) => ({
        source: `/products/upvc/${sub}/:path*`,
        destination: UPVC_SHOWCASE,
        permanent: true,
      })),
      // Old per-design URLs → single showcase page
      {
        source: "/products/upvc/upvc-systems/:productId",
        destination: UPVC_SHOWCASE,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
