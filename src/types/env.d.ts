import { CSSProperties, StyleValue } from "@vue/runtime-dom";

interface ImportMetaEnv extends Readonly<Record<string, string>> {
   readonly VITE_API_URL: string
   // more env variables...
}

interface CustomStyle extends CSSProperties {

}

interface ImportMeta {
   readonly env: ImportMetaEnv
}