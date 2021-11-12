import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

fixture `testcafe wikipedia`
    .page `https://es.wikipedia.org/wiki/Wikipedia:Portada`;

test('My test', async t => {
  
    const logoExists = Selector('#p-logo').exists;
    //primer ejercicio
    await t
        
        .expect(logoExists).ok();
        console.log("wikipedia logo exits");

    //segundo ejercicio
    const father = Selector("#Artículo_destacado").parent();
    const img = father.find('img');

    await t
        .hover(img);
        console.log("hover sucessfull");
        
    //tercer ejercicio

    const selectBasedOnText = Selector('span').withText('Página aleatoria');

    await t
        .click(selectBasedOnText);
        console.log("click sucessfull");

    //cuarto ejercicio

    const target = Selector('#Enlaces_externos');

    const scroll = ClientFunction(function() {
        scrollIntoView(target);
    });
    
    try {  
        await t 
        
        .scroll();
        
        console.log("scroll sucessful");
    } catch (error) {
        console.log("no existe enlaces externos");
    }
                
    //quinto ejercicio
    
    const goBack = ClientFunction(() => window.history.back());

    await goBack();

    //sexto ejercicio
    
    //select list
   
    const list = await Selector(".interlanguage-link");

    //count list elements

    const listCount = await list.count;

    //random number

    const num = Math.floor((Math.random() * listCount) + 1);

    //select random child

    const randomLi = Selector(`.interlanguage-link:nth-child(${num})`);
    
    await t

    .click(randomLi);
    console.log(`has seleccionado el idioma numero: ${num}`);
    
});