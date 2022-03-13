const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

enum PlayType {
  Fold = 'fold',
  Play = 'play',
  Marginal = 'marginal',
  ThreeBet = 'three-bet',
}

export type RangesProperties = {
  value: string;
  isSuited?: boolean;
  playType: PlayType;
};

export const createRangesArray = () => {
  const rangesArray: RangesProperties[][] = [];

  for (let i = 0; i < cards.length; i += 1) {
    const row: RangesProperties[] = [];
    const firstCard = cards[i];
    for (let j = 0; j < cards.length; j += 1) {
      const secondCard = cards[j];

      const rangesProperty: RangesProperties = {
        value: '',
        playType: PlayType.Fold,
      };
      if (i < j) {
        rangesProperty.value = `${firstCard}${secondCard}s`;
        rangesProperty.isSuited = true;
      } else if (i === j) {
        rangesProperty.value = `${firstCard}${secondCard}`;
      } else {
        rangesProperty.value = `${secondCard}${firstCard}o`;
        rangesProperty.isSuited = false;
      }

      row.push(rangesProperty);
    }
    rangesArray.push(row);
  }

  return rangesArray;
};

export const getAreCardsSame = (cards: string) => {
  return cards.length === 2;
};
