const symbols = [
  "🍕", "🚀", "🐶", "🎮", "🏀", "🐱", "🌈", "🎲",
  "🍎", "📱", "🦄", "💎", "🎯", "🧩", "👾", "🎵",
  "⚽", "🍩", "🌟", "🍉", "🚗", "🧸", "🧠", "🍔",
  "🐼", "🎁", "🍇", "🐸", "🐧", "🎓", "🕹️", "🐝"
];

export const generateTiles = (level) => {
  let pairCount;

  switch (level) {
    case "easy":
      pairCount = 8;
      break;
    case "medium":
      pairCount = 18;
      break;
    case "hard":
      pairCount = 32;
      break;
    default:
      pairCount = 8;
  }

  const selectedSymbols = symbols.slice(0, pairCount);
  const tilePairs = [...selectedSymbols, ...selectedSymbols];

  // Shuffle
  const shuffled = tilePairs.sort(() => Math.random() - 0.5);

  return shuffled.map((symbol, index) => ({
    id: index,
    symbol,
    isFlipped: false,
    isMatched: false,
  }));
};