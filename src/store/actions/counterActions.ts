export const INCREMENT = "INCREMENT" as const;
export const DECREMENT = "DECREMENT" as const;
export const RESET = "RESET" as const;

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

