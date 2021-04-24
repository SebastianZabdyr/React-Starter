
// selectors

export const getSearchString = ({searchString}) => searchString;

export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

export const countAllCards = ({cards}) => cards.length;

// action name creator

const reducerName = 'searchString';

const createActionName = name => `app/${reducerName}/${name}`;

// actions types

export const ADD_STRING = createActionName('ADD_SEARCHSTRING');

// action creators

export const createAction_changeSearchString =  payload => ({ payload: { ...payload}, type: ADD_STRING });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
