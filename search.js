const puppeteer = require('puppeteer');

(async () => {
    const obj = require("./signupdetails.json");
    //const obj1 =JSON.parse(obj);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.int.simplycreditinc.com/staging/manage/#signup', {waitUntil: 'networkidle2'});
  
    await page.$eval('input[name=invite_code]', el => el.value = obj.invite_code);
    // await page.$eval('input[name=email]', el => el.value = 'ratul.lamborghini@gmail.com');
    // await page.$eval('input[name=email-confirm]', el => el.value = 'ratul.lamborghini@gmail.com');
    // await page.$eval('input[name=password]', el => el.value = '1236123514');
    // await page.$eval('input[name=password-confirm]', el => el.value = '1236123514');
    // await page.$eval('input[name=first-name]', el => el.value = 'Raohto');
    // await page.$eval('input[name=last-name]', el => el.value = 'sen');
    // await page.$eval('input[id=phone]', el => el.value = '21315124123');
    // await page.$eval('input[name=address1]', el => el.value = 'qdiqclkn');
    // await page.$eval('input[name=city]', el => el.value = 'wefgbweofn');
    // await page.$eval('select[name=state]', el => el.value = 'AL');
    // await page.$eval('select[name=dob-month]', el => el.value = '2');
    // await page.$eval('select[name=dob-day]', el => el.value = '20');
    // await page.$eval('select[name=dob-year]', el => el.value = '1992');
    // await page.$eval('input[name=zip]', el => el.value = '37192370');   
    // await page.$eval('input[name=ssn]', el => el.value = 'SJJFNG');   
    // await page.$eval('input[name=monthly-income]', el => el.value = '1236123');   
    // await page.$eval('input[name=house-pay]', el => el.value = '1234123');   
     
     //await page.click('input[type="submit"]');
     //await page.waitForNavigation()
   
 


    await page.screenshot({path: 'example.png',fullPage: true});
     
 
    
    await browser.close();
})();