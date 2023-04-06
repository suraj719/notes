
const initialState = {
    notes:[],
};
function rootReducer(state = initialState ,action){
    if(action.type ==='ADD_NOTE'){
        return {
            notes:[
                ...state.notes,
                {
                    title:action.title,
                    content:action.content
                }

            ]
        }
    } 
    else if(action.type === 'REMOVE_NOTE'){
        return{
            notes: state.notes.filter((note, index)=>{
                return index !== action.id
            })
        }
    }
    else if(action.type === 'UPDATE_NOTE') {
        const newarr = [...state.notes]
        newarr[action.id] = {
            title:action.newtitle,
                    content:action.newcontent
        }
        // return {
        //     notes: state.notes.map((n,index) => {
        //         if(index === action.id) {
        //              return({
        //             title:action.newtitle,
        //             content:action.newcontent
        //             })
        //         }else{
        //             return({
        //                 title:action.title,
        //                 content:action.content
        //             })
        //         }
        //     })
        // }
        return {
            ...state,notes:newarr,
        }
    }
    else{
        return state
    }
}

export default rootReducer