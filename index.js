const puppeteer = require('puppeteer');

(async () => {
    console.log("Starting headless browser...");
	// const browser = await puppeteer.launch({headless: "new"});
	// const page = await browser.newPage();
	// await page.goto('https://www.google.com/');
	
	// await browser.close();
    console.log("Worked!");

    var interval = setInterval(function(){ 
        console.log('Hello World'); 
      }, 2000);
      setTimeout(function() { 
        clearInterval(interval); 
      }, 10000);
})();