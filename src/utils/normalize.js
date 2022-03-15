export function normalize(str) {
  const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','ä':'a','ë':'e','ï':'i','ö':'o','ü':'u','Ä':'A','Ë':'E','Ö':'O','Ü':'U'};
  return str.split('').map( letra => acentos[letra] || letra).join('').toString().toLowerCase()
 }