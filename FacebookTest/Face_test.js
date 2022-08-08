Feature('Face');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://google.com');
    I.wait(1);
    I.click('//input[@name="q"]');
    I.fillField('//input[@name="q"]','facebook');
    I.click('//input[@name="btnK"]');
    I.wait(1);
    I.click('//div[@class="CCgQ5 vCa9Yd QfkTvb MUxGbd v0nnCb"]');
    I.wait(1);
    I.click('//div[@class="_9bq4"]');
    I.wait(1);
    I.fillField('//input[@id="email"]','*Email*');
    I.wait(1);
    I.fillField('//input[@id="pass"]','*Password*');
    I.wait(1);
    I.click('//button[@id="loginbutton"]');
    I.wait(10);
    I.fillField('//input[@type="search"]','*Friend Name*');
    I.wait(1);
    I.click('//div[@class="bp9cbjyn nhd2j8a9 j83agx80 ni8dbmo4 stjgntxs l9j0dhe7 dwzzwef6 ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi kvgmc6g5 oygrvhab cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr"]');
    I.wait(2);
    I.click('//div[@aria-label="Mesaj"]');
    I.wait(2);
    I.fillField('//p[@class="kvgmc6g5 oygrvhab"]','*Type message*');
    I.wait(2);
    I.pressKey('Enter');
    I.wait(2);
    




});
