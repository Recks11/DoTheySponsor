export function extractNameFromUrl() {
   const url = new URL(window.location.href)
   const name = url.searchParams.get('name');
   if (!name) return "";
   return decodeURI(name);
}