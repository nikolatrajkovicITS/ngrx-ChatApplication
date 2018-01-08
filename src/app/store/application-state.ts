import { UiState } from "app/store/ui-state";
import { StoreData } from './store-data';


export interface ApplicationState {
    uiState: UiState,
    storeData: StoreData 

}