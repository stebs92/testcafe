import { Selector } from 'testcafe';

fixture `hover image`
    .page `https://es.wikipedia.org/wiki/Wikipedia:Portada`;

    test('Hover test', async t => {
        await t
            .hover('.image');
    });