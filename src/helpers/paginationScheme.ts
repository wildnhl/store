export function paginationScheme(pages: number, currentPage: number) {
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const scheme = [1, previousPage, currentPage, nextPage, pages];
  const filteredScheme = scheme.filter((item) => item > 0 && item <= pages);
  const set = new Set(filteredScheme);
  const result = Array.from(set);

  if (result[0] + 1 !== result[1]) {
    result.splice(1, 0, NaN);
  }

  if (result[result.length - 2] + 1 !== result[result.length - 1]) {
    result.splice(result.length - 1, 0, NaN);
  }
  return result;
}
