
/** This is state for which is currently selected user  */
export interface UiState {
    userId: number;
    currentThreadId: number;
}

export const INITIAL_UI_STATE: UiState = {
    userId: 1,
    currentThreadId: undefined
}