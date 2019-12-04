export default (stocks, { sortBy, reverse }) => {
  return stocks.sort((a, b) => {
    if (sortBy === "price" && !reverse.price) {
      return a.latestPrice < b.latestPrice ? 1 : -1;
    } else if (sortBy === "price" && reverse.price) {
      return a.latestPrice > b.latestPrice ? 1 : -1;
    } else if (sortBy === "volume" && !reverse.volume) {
      return a.volume < b.volume ? 1 : -1;
    } else if (sortBy === "volume" && reverse.volume) {
      return a.volume > b.volume ? 1 : -1;
    } else if (sortBy === "symbol" && !reverse.symbol) {
      return a.symbol > b.symbol ? 1 : -1;
    } else if (sortBy === "symbol" && reverse.symbol) {
      return a.symbol < b.symbol ? 1 : -1;
    } else {
      return stocks;
    }
  });
};
