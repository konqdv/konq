/**
 * La ruta `/` no llega aquí: `next.config.ts` la reescribe a
 * `public/index.html`, que es el escritorio real. Este archivo existe
 * solo para que el App Router tenga una página raíz válida.
 */
export default function Home() {
  return null;
}
