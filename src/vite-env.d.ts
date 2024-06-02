/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vitest" />

declare module '*.svg' {
  import * as React from 'react'

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >

  export default ReactComponent
}

declare module '*.woff2' {
  const src: string
  export default src
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
