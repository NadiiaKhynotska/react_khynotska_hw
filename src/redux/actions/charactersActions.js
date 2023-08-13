const charactersActionsTypes ={
    SET_CHARACTERS: 'SET_CHARACTERS'
}

const charactersActions = {
    setCharacters: (payload)=> ({type: charactersActionsTypes.SET_CHARACTERS, payload})
}

export {
    charactersActions,
    charactersActionsTypes
}