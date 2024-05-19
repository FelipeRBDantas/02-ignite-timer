import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  // SET_ACTIVE_CYCLE_ID = 'SET_ACTIVE_CYCLE_ID',
  // SET_CYCLES = 'SET_CYCLES',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

// export function setCyclesAction(cycles: Cycle[]) {
//   return {
//     type: ActionTypes.SET_CYCLES,
//     payload: {
//       cycles,
//     },
//   }
// }

// export function setActiveCycleIdAction(id: string | null) {
//   return {
//     type: ActionTypes.SET_ACTIVE_CYCLE_ID,
//     payload: {
//       id,
//     },
//   }
// }