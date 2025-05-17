export type Player = {
    id: number;
    name: string;
    initiative: number;
    lifePoints: number;
};

export type Action =
| { type: "ADD_PLAYER"; payload: { id: number, name: string, initiative: number, lifePoints: number | null } }
| { type: "UPDATE_PLAYER_LIFE_POINTS"; payload: { id: number, lifePoints: number } }
| { type: "UPDATE_NAME"; payload: string }
| { type: "UPDATE_INITIATIVE"; payload: number }
| { type: "UPDATE_LIFE_POINTS"; payload: number }
| { type: "REMOVE_PLAYER"; payload: number }
| { type: "NEXT_TURN" }
| { type: "RESET_FORM" }
| { type: "SET_FIRST_PLAYER", payload: number }
| { type: "INCREMENT_TURN" }
| { type: "RESET_TURN" }