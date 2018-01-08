import { Participant } from '../../../shared/model/participant';
import { Message } from '_debugger';
import { Thread } from '../../../shared/model/thread';

/** This is custom type that is define what is the data we store in our store */
export interface StoreData {
    
    participants: {[key:number]: Participant}  

    threads: {[key:number]: Thread};

    messages: {[key:number]: Message};    // we are going to store our messages per message id
}

export const INITIAL_STORE_DATA: StoreData = {
    threads: {},
    messages: {},
    participants: {}
};