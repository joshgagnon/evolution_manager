import {default as Req } from 'superagent';
import {default  as Promise } from 'bluebird';

export function Request(){

    function promisify(r) {
        return new Promise((resolve) => {
            r.end(resolve);
        });
    }

    return (async function(url) {
      console.log('before');
      try {
        response = await promisify(Req(url));
        console.log('after', response);
      } catch (ex) {
        console.error(ex);
      }
    })()
}