export default function events(state = '', action) {
  switch (action.type) {
    case 'SELECT_EVENT':
      return action.payload;
    default:
      return state;
  }
}
