import { Selector } from 'testcafe';

fixture `go back`
    .page `https://es.wikipedia.org/wiki/Wikipedia:Portada`;

test('Click test', async t => {
   
    await t.pressKey('alt+left');

});