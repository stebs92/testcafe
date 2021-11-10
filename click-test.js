import { Selector } from 'testcafe';

fixture `click on pagina aleatoria`
    .page `https://es.wikipedia.org/wiki/Wikipedia:Portada`;

test('Click test', async t => {
    const selectBasedOnText = Selector('span').withText('Página aleatoria');

    await t
        .click(selectBasedOnText);
});
