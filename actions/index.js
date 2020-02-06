export const addGreeting = text => ({
  type: 'ADD_GREETING',
  text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});