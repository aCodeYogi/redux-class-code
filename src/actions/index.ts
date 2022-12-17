export type ActionCreator<T = undefined> = (...args: any) => {
  type: string;
  payload?: T;
};
