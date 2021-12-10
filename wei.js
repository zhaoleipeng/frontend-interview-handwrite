const NoLanes = /*                        */ 0b0000000000000000000000000000000;
const NoLane = /*                          */ 0b0000000000000000000000000000000;

const SyncLane = /*                        */ 0b0000000000000000000000000000001;
const SyncBatchedLane = /*                 */ 0b0000000000000000000000000000010;

const InputDiscreteHydrationLane = /*      */ 0b0000000000000000000000000000100;
const InputDiscreteLanes = /*                    */ 0b0000000000000000000000000011000;

const InputContinuousHydrationLane = /*           */ 0b0000000000000000000000000100000;
const InputContinuousLanes = /*                  */ 0b0000000000000000000000011000000;

const DefaultHydrationLane = /*            */ 0b0000000000000000000000100000000;
const DefaultLanes = /*                   */ 0b0000000000000000000111000000000;

const TransitionHydrationLane = /*                */ 0b0000000000000000001000000000000;
const TransitionLanes = /*                       */ 0b0000000001111111110000000000000;

const RetryLanes = /*                            */ 0b0000011110000000000000000000000;

const SomeRetryLane = /*                  */ 0b0000010000000000000000000000000;

const SelectiveHydrationLane = /*          */ 0b0000100000000000000000000000000;

const NonIdleLanes = /*                                 */ 0b0000111111111111111111111111111;

const IdleHydrationLane = /*               */ 0b0001000000000000000000000000000;
const IdleLanes = /*                             */ 0b0110000000000000000000000000000;

const OffscreenLane = /*                   */ 0b1000000000000000000000000000000;

// const InputDiscreteLanes = /*                    */ 0b0000000000000000000000000011000;
// const DefaultLanes = /*                   */ 0b0000000000000000000111000000000;
// const TransitionLanes = /*                       */ 0b0000000001111111110000000000000;

function includesSomeLane(a, b) {
  // console.log(a&b)
  return (a & b) !== NoLanes;
}

function isSubsetOfLanes(set, subset) {
  return (set & subset) === subset;
}

function mergeLanes(a, b) {
  return a | b;
}

function removeLanes(set, subset) {
  return set & ~subset;
}

console.log(includesSomeLane(SyncBatchedLane, SyncLane));