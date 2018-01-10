import { ApplicationState } from '../store/application-state';

 export function usernameSelector(state: ApplicationState): string {
     const currentUserId = state.uiState.userId,
           currentParticipant = state.storeData.participants[currentUserId];

     if (!currentParticipant) {
         return "";
     }

    return scurrentParticipant.name;
 }