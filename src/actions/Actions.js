export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const INCREMENT_BY_10 = 'INCREMENT_BY_10';
export const DECREMENT_BY_10 = 'DECREMENT_BY_10';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

export const incrementBy10 = () => ({
  type: INCREMENT_BY_10,
});

export const decrementBy10 = () => ({
  type: DECREMENT_BY_10,
});
