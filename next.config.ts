import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* `output: "standalone"` se eliminó a propósito: es para despliegues
   * autogestionados (Docker). Vercel gestiona el empaquetado por su cuenta. */
  async rewrites() {
    return {
      // Serve the static desktop site from public/index.html at the root,
      // ahead of the App Router.
      beforeFiles: [{ source: "/", destination: "/index.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
