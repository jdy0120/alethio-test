import React, { useReducer } from 'react';
import { createCtx } from '../utils/createCtx';

const [useCtx, Provider] = createCtx<Context>();

interface Context {
  state: State;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export enum ActionType {
  SetToken = 'set-token',
  RemoveToken = 'remove-token',
}

export interface State {
  token?: string;
}

const initialState: State = {
  token: undefined,
};

interface SetTokenAction {
  type: ActionType.SetToken;
  payload: string;
}

interface RemoveTokenAction {
  type: ActionType.RemoveToken;
}

type Action = SetTokenAction | RemoveTokenAction;

interface Props {
  children?: React.ReactElement;
}

type Reducer = (state: State, action: Action) => State;

const setToken =
  (dispatch: React.Dispatch<SetTokenAction>) =>
  (token: string): void => {
    dispatch({ type: ActionType.SetToken, payload: token });
  };

const removeToken =
  (dispatch: React.Dispatch<RemoveTokenAction>) => (): void => {
    dispatch({ type: ActionType.RemoveToken });
  };

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set-token':
      return { ...state, token: action.payload };
    case 'remove-token':
      return { ...state, token: undefined };
    default:
      return state;
  }
};

function AppProvider(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);

  const actions = {
    setToken: setToken(dispatch),
    removeToken: removeToken(dispatch),
  };

  return <Provider value={{ state, ...actions }}>{props.children}</Provider>;
}

export { useCtx as useAppContext, AppProvider };
