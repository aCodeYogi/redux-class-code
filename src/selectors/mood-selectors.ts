import { State } from "../store";

export function happyMomentsSelector(state: State) {
  return state.happy.happyMoments;
}

export function sadMomentsSelector(state: State) {
  return state.sad.sadMoments;
}

// state mein kya change hua aur kya change nahi hua? Taki sahi components...
// ... ko refresh kiya jaa sake
// heuristic algorithms ->
