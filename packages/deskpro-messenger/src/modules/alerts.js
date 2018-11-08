import { ofType } from 'redux-observable';
import { map, switchMap, takeUntil, take } from 'rxjs/operators';

import { APP_SHUTDOWN } from './app';
import { LOAD_APP_INFO_SUCCESS } from './info';
import { messageReceived } from './chat';

export const listenForAlertsEpic = (action$, _, { api }) =>
  action$.pipe(
    ofType(LOAD_APP_INFO_SUCCESS),
    take(1),
    switchMap(() => {
      return api.getAlertsStream().pipe(
        map((alert) => {
          if (alert.type.startsWith('chat.')) {
            return messageReceived(alert);
          }
          // TODO: handle other types of alerts if needed.
        }),
        takeUntil(action$.pipe(ofType(APP_SHUTDOWN)))
      );
    })
  );
//#endregion
