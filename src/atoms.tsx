import {atom} from "recoil";

interface IToDoState {
    [key: string]: string[];
}
export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        toDo:["a", "b"],
        doing:["c", "d"],
        done:["e", "f"],
    },
});