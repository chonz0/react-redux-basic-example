const greetings = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GREETING':
      return [
        ...state,
        {
          text: action.text
        }
      ]
    default:
      return state
  }
}
export default greetings;