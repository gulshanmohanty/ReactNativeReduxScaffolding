export const getNumberSelector = (state: any): number => {
  return state?.profile?.numberData ?? 0;
};
// optional chaining support has to add
