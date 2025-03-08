export type Player = {
    id: number;
    name: string;
    initiative: number;
};

export type Action =
| { type: "ADD_PLAYER"; payload: { id: number, name: string, initiative: number } }
| { type: "UPDATE_NAME"; payload: string }
| { type: "UPDATE_INITIATIVE"; payload: number }
| { type: "REMOVE_PLAYER"; payload: number }
| { type: "NEXT_TURN" }
| { type: "RESET_FORM" }
| { type: "SET_FIRST_PLAYER", payload: number }
| { type: "INCREMENT_TURN" }
| { type: "RESET_TURN" }