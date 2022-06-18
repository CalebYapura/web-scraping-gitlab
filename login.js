const {Builder, By, Key, until} = require('selenium-webdriver');
// const { elementIsSelected } = require('selenium-webdriver/lib/until');
// var chrome = require('selenium-webdriver/chrome');

const navegadorDriver='firefox';// chrome / firefox

capabilities = {
    'build': 'Mocha-Selenium-Sample',
    'name': 'Your Test Name',
    'platform':'Windows 10',
    'browserName': navegadorDriver,
    'version': 'latest',
    'visual': true,
    'network':true,
    'console':true,
    'tunnel': false,
    chromeOptions: {
        args: [
            '--no-sandbox',
            "--disable-plugins"
        ],
     
      }  
    };


(async function example() {
    let driver = await new Builder().forBrowser(navegadorDriver).withCapabilities(capabilities).build();//chrome
    try {
        
    

        // setTimeout(async() => {
            await  driver.get('https://about.gitlab.com/'); // url de la pagina para entrar 
            
            // await driver.wait(until.titleIs('The One DevOps Platform | GitLab'), 5000);

            await driver.findElement(By.xpath("//*[@id='supportDropdown']")).click();
            await driver.sleep(5000);

            await driver.findElement(By.xpath("/html/body/div[1]/div/div/div[1]/nav/div[1]/div/div[1]/button[1]/div/ul[3]/li/a")).click();
            await driver.sleep(5000);  

            // buscando el formulario 
            let form = await driver.findElement(By.className('form-container'));

            driver.executeScript('arguments[0].scrollIntoView()', form);  // scroll    
            driver.sleep(3000);  
            
            // llenando formulario 
            let firstName = await driver.findElement(By.id('FirstName'));
            await driver.sleep(2000);
            firstName.sendKeys('Kaleb');

            let lastName = await driver.findElement(By.id('LastName'));
            await driver.sleep(2000);
            lastName.sendKeys('yapura');

            let Company = await driver.findElement(By.id('Company'));
            await driver.sleep(2000);
            Company.sendKeys('UAB');

            let Title = await driver.findElement(By.id('Title'));
            await driver.sleep(2000);
            Title.sendKeys('Estudiante');

            let Email = await driver.findElement(By.id('Email'));
            await driver.sleep(2000);
            Email.sendKeys('caleb.yapura@uab.edu.bo');

            
            let Phone = await driver.findElement(By.id('Phone'));
            await driver.sleep(2000);
            Phone.sendKeys('74114492');

            let Employee_Buckets__c = await driver.findElement(By.id('Employee_Buckets__c'));
            await driver.sleep(2000);
            Employee_Buckets__c.sendKeys('1-99');
            
            await driver.findElement(By.xpath("//*[@id='Country']/option[32]")).click();
            await driver.sleep(5000);
            // Country.sendKeys('');
            // driver.executeScript('arguments[0].scrollIntoView(0,300);', Phone);  // scroll    
            

            // let check = await driver.findElement(By.id('implementationServiceRequested'));

            // driver.executeScript('arguments[0].scrollIntoView();', check); 
            // driver.sleep(5000);  
            // await driver.findElement(By.css("input[value='option2'"));<option value="1-99">1-99</option>
        //   let contri=  await driver.findElement(By.xpath("//*[@id='Country']/option[32]")).click();
            // let Country= await driver.findElement(By.xpath('//*[@id="Country"]'));
       
        //    let Employee_Buckets__c= await driver.findElement(By.id('Employee_Buckets__c'));
        //       let x=  (await Employee_Buckets__c.getLocation).x;
        //       let y=  (await Employee_Buckets__c.getLocation).y;
        //     driver.executeScript(`window.scroll(${x},${y})`);  // scroll    
            // driver.sleep(300);  
            // check.click();
        // setTimeout(async() => {
            // await driver.findElement(By.id('Employee_Buckets__c')).click();
            // await driver.findElement(By.css("option[value='1-99']")).click();
        // }, 2000);

            // await driver.findElement(By.xpath("//*[@id='Country']/option[32]")).click();

           
        // let Employee_Buckets__c= await driver.findElement(By.id('Employee_Buckets__c'));
        // let sc= new Selection(Employee_Buckets__c);
    //    console.log(sc);
            // let Employee_Buckets__c = new Selection(driver.findElement(By.id('Employee_Buckets__c')));
            // Employee_Buckets__c.collapse();
            // Employee_Buckets__c.setPosition(1);
            // lastName.sendKeys('74114492');


            // await driver.wait('', 5000);

            // await driver.wait(until.titleIs('The One DevOps Platform | GitLab'), 5000);
        //   const precios = await driver.findElement(By.className("slp-row tiers"));


        //   const div =  await precios.getText;
        //   console.log(div);
            //  .sendKeys('YapuraC', Key.TAB);
            // await driver.findElement(webdriver.By.id('user_login')).sendKeys('YapuraC', Key.TAB);
            // await driver.findElement(By.name('user_password')).sendKeys('YapuraC', Key.RETURN);
        // }, 5000);
 
    //   await driver.findElement(By.name('user_login')).sendKeys('YapuraC', Key.TAB);
 

    //   await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
    const btn = await driver.findElement(By.xpath("/html/body/div[5]/div/div/div/div/div[1]/form/div[40]/span/button"));

    driver.executeScript('arguments[0].scrollIntoView(0,300);', btn); 
    await driver.sleep(5000);
    btn.click();
    await driver.sleep(2000);
    // Submission received! We'll be in contact shortly.
    // wait on logged in message
    // await driver.wait(webdriver.until.elementLocated(webdriver.By.id("logged-in-message")), 10000);
    // await driver.sleep(5000);
    // driver.wait(function () {
    //     return driver.isElementPresent(driver.By.xpath("//*[@id='confirmform']/p"));
    // }, 5000);

    } finally {
      await driver.quit();
    }
  })();