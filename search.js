const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();//launch internal chromium browser
    const page = await browser.newPage();//intiate new page
    const link= 'http://www.int.simplycreditinc.com/staging/manage/#signup'; //link to be visited

    await page.goto(link, {waitUntil: 'networkidle2'});//redirect 
    
    //Fill up form details
    await page.$eval('input[name=invite_code]', el => el.value = 'simplylowrates' );
    await page.$eval('input[name=email]', el => el.value = 'A@A.com ');
    await page.$eval('input[name=email-confirm]', el => el.value = 'A@A.com');
    await page.$eval('input[name=password]', el => el.value = '1236123514');
    await page.$eval('input[name=password-confirm]', el => el.value = '1236123514');
    await page.$eval('input[name=first-name]', el => el.value = 'Raohto');
    await page.$eval('input[name=last-name]', el => el.value = 'sen');
    await page.$eval('input[id=phone]', el => el.value = '21315124123');
    await page.$eval('input[name=address1]', el => el.value = 'qdiqclkn');
    await page.$eval('input[name=city]', el => el.value = 'wefgbweofn');
    await page.$eval('select[name=state]', el => el.value = 'AL');
    await page.$eval('select[name=dob-month]', el => el.value = '2');
    await page.$eval('select[name=dob-day]', el => el.value = '20');
    await page.$eval('select[name=dob-year]', el => el.value = '1992');
    await page.$eval('input[name=zip]', el => el.value = '37192370');   
    await page.$eval('input[name=ssn]', el => el.value = 'SJJFNG');   
    await page.$eval('input[name=monthly-income]', el => el.value = '1236123');   
    await page.$eval('input[name=house-pay]', el => el.value = '1234123');  

    //take a screenshot of the filled-up form
    await page.screenshot({path: 'example.png',fullPage: true});
     
 
    
    await browser.close();//close browser
})();