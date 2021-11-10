import { Selector } from 'testcafe';

fixture `check wikipedia logo`
    .page `https://es.wikipedia.org/wiki/Wikipedia:Portada`;

test('My test', async t => {
  
    const logoExists = Selector('#p-logo').exists;

    await t
        
        .expect(logoExists).ok();
        console.log("wikipedia logo exits");
});
