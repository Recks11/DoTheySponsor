import { notifyInfo } from "./notifier";

export async function clipboardCopy(text: string) {
   try {
      await navigator.clipboard.writeText(text)
      notifyInfo('copied link to clipboard')
   } catch (ex) {
      console.error('Failed to copy: ', ex);
   }
}