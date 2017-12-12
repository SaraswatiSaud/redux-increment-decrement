export const decrement = (value) => {
  return {
    type: 'DECREMENT',
    payload: value
  };
}
