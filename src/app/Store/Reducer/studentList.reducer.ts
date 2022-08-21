import { ADD_USER, StudentListAction } from "../actions/studentList.action";

const intialState={
    userList : ["David", "Aleena"]
};

export function studentListReducer(state = intialState,action:StudentListAction){
    switch(action.type){
        case ADD_USER:
            return {...state ,studentList:[...state.userList,action.payload]};
        default:
            return intialState;
    }
    

}

