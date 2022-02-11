import uuid from "react-uuid"

const INITIAL_STATE = {
    note: [
        {
            title: 'Recette de cuisine',
            subtitle: 'Tarte tatin',
            message: 'Voici ma recette de tarte tatin...',
            id: uuid()
        },
        {
            title: 'Projet React',
            subtitle: 'React avec redux',
            message: 'Voici un projet React en utilisant Redux etc...',
            id: uuid()
        },
        {
            title: 'Liste de course',
            subtitle: 'Ma liste de course',
            message: 'Pommes, poires, fraises, abricots',
            id: uuid()
        }
    ]
}


export default function noteReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADDNOTE":
            const newNote = [...state.note]
            const addId = action.payload
            addId.id = uuid()
            newNote.push(addId)
            return {
                note: newNote
            }
        case "UPDATENOTE":
            return {}
        case "DELETENOTE":
            const deleteNote = [...state.note]
            const index = deleteNote.findIndex(obj => obj.id === action.id)
            deleteNote.splice(index, 1)

            return {
                note: deleteNote
            }
        default: return state
    }
}