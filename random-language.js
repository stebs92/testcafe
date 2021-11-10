import { Selector } from 'testcafe';

fixture `click random language on wikipedia`
    .page `https://es.wikipedia.org/wiki/Wikipedia:Portada`;

test('Click test', async t => {
    
    //select list
    const list = Selector(".interlanguage-link").length;

    //random number

    const num = Math.floor((Math.random() * 50) + 1);

    //select random child

    const randomLi = Selector(`.interlanguage-link:nth-child(${num})`);
    
    await t

    .click(randomLi);
    console.log(`has seleccionado el idioma numero: ${num}`);
});