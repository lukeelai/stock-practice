export default (stocks, { text, sortBy, reverse }) => {
  return stocks
    .filter(stock => stock.symbol.toLowerCase().includes(text.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price" && !reverse.price) {
        return a.latestPrice < b.latestPrice ? 1 : -1;
      } else if (sortBy === "price" && reverse.price) {
        return a.latestPrice > b.latestPrice ? 1 : -1;
      } else if (sortBy === "change" && !reverse.change) {
        return a.changePercent < b.changePercent ? 1 : -1;
      } else if (sortBy === "change" && reverse.change) {
        return a.changePercent > b.changePercent ? 1 : -1;
      } else if (sortBy === "symbol" && !reverse.symbol) {
        return a.symbol > b.symbol ? 1 : -1;
      } else if (sortBy === "symbol" && reverse.symbol) {
        return a.symbol < b.symbol ? 1 : -1;
      } else {
        return stocks;
      }
    });
};
