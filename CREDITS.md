# Créditos y licencia

## Este proyecto es una obra derivada — GPL-3.0

El escritorio que se sirve en `/` procede del repositorio
[github.com/girlglock/girlglock](https://github.com/girlglock/girlglock), de dea,
publicado bajo **GNU GPL-3.0**. El código fue copiado y modificado
(datos personales sustituidos) el **20 de agosto de 2026**.

La GPL-3.0 autoriza expresamente copiar y modificar. A cambio impone
condiciones **si distribuyes o publicas** el resultado:

1. El proyecto completo debe permanecer bajo GPL-3.0.
2. Debe conservarse el aviso de copyright original y el texto de la licencia
   (`public/LICENSE`).
3. Debe indicarse de forma visible que el trabajo fue modificado y en qué fecha.
4. Debes ofrecer el código fuente a quien reciba el sitio.

Mientras solo lo ejecutes en local, ninguna de estas condiciones se activa.

## Plantilla base — MIT

El andamiaje de Next.js procede de
[ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template),
de JCodesMore, bajo licencia MIT. El `LICENSE` de la raíz se sustituyó por la
GPL-3.0 porque el proyecto en conjunto es ahora obra derivada; este aviso
conserva la atribución MIT que esa licencia exige.

## 7.css — MIT

El aspecto de Windows 7 lo aporta [7.css](https://github.com/khang-nd/7.css),
de Khang Nguyen Duy, bajo licencia MIT. El HTML lo carga desde unpkg.

## Recursos de terceros

- Fondo de escritorio e iconos de Windows 7: repositorio público
  [bartekl1/windows-ui-assets](https://github.com/bartekl1/windows-ui-assets).
  Los diseños originales son propiedad de Microsoft.
- Iconos clásicos: [win98icons.alexmeub.com](https://win98icons.alexmeub.com/).

## Pendiente de limpiar

Todavía quedan en `public/` elementos que pertenecen a la autora original y que
conviene revisar antes de publicar nada:

- `style.css` y `404.html` cargan imágenes alojadas en su servidor personal.
- `og:image` en `index.html` apunta a un emote suyo.
- Las subcarpetas (`ae/`, `ps2/`, `input-overlay/`, `speaking-cat/`, etc.) son
  proyectos suyos, no tuyos.
