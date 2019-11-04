import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { AppState } from './store';
import { sendMessage } from './store/chat/actions';

export const thunkSendMessage = (
  message: string
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const asyncResp = await exampleAPI();
  dispatch(
    sendMessage({
      message,
      user: asyncResp,
      timestamp: new Date().getTime()
    })
  );
};

function exampleAPI() {
  return Promise.resolve('Acync Chat Bot');
}
