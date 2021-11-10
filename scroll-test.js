import { Selector } from 'testcafe';

fixture `scroll test`
    .page `https://es.wikipedia.org/wiki/Convenio_Lord_Eliot`;

test('Scroll element into view', async t => {
    const target = Selector('#Enlaces_externos');
    await t
        .scrollIntoView(target);
});