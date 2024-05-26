export enum OrderOptions {
  AlphabeticalAZ = 'Alphabetical (A-Z)',
  ReverseAlphabeticalZA = 'Reverse Alphabetical (Z-A)',
  ByLengthShortestToLongest = 'by Length (Shortest to Longest)',
  ByLengthLongestToShortest = 'by Length (Longest to Shortest)',
}

export const sortByOrderOptions = (option: OrderOptions) => {
  switch (option) {
    case OrderOptions.AlphabeticalAZ:
      return (a: string, b: string) => a.localeCompare(b);
    case OrderOptions.ReverseAlphabeticalZA:
      return (a: string, b: string) => b.localeCompare(a);
    case OrderOptions.ByLengthShortestToLongest:
      return (a: string, b: string) => a.length - b.length;
    case OrderOptions.ByLengthLongestToShortest:
      return (a: string, b: string) => b.length - a.length;
    default:
      throw new Error(`Unknown order option: ${option}`);
  }
};
