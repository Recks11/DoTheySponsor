export function cleanString(data: string) {
   if (data === undefined) return "";
   return data.replace('_', ' ')
}