import { Thread } from '../thread';
import { Participant } from '../participant';
import { Message } from '../message';

export interface AllUserData {
    paricipants: Participant[];   
    threads: Thread[];           // Thread is the list of threads to which the user subscribe
    messages: Message[];         // Messages of those threads
}