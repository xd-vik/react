const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const axios = require("axios");
const fs = require("fs");
const Tesseract = require("tesseract.js");

const chromeDriverPath = "./chromedriver_win32";

// Set up Chrome options
const chromeOptions = new chrome.Options();
// chromeOptions.addArguments('--headless');

const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(chromeOptions)
  .build();

(async function example() {
  try {
    await driver.manage().window().maximize();

    await driver.get("https://www.irctc.co.in/nget/profile/user-registration");

    // Main Load Checkkkkk
    // await driver.wait(until.elementLocated(By.id('userName')), 1000);

    let isUserIdAvailable = false;
    const names = [
        "Aarav", "Aarohi", "Abha", "Abhay", "Aditi",
        "Advik", "Aishwarya", "Akash", "Akshara", "Ameya",
        "Ananya", "Aniket", "Anjali", "Ansh", "Anushka",
        "Arnav", "Aryan", "Ashwini", "Ayush", "Bhavana",
        "Chaitanya", "Chandni", "Darsh", "Devika", "Dhruv",
        "Divya", "Ekta", "Eshaan", "Gayatri", "Girish",
        "Hemant", "Isha", "Ishan", "Jagruti", "Jatin",
        "Jhanvi", "Kabir", "Kavya", "Krish", "Kriti",
        "Laksh", "Mahi", "Manan", "Manasi", "Mayank",
        "Meera", "Mihir", "Naina", "Nakul", "Neha",
        "Niharika", "Nikhil", "Nikita", "Nisha", "Ojas",
        "Palak", "Parth", "Payal", "Prachi", "Pranav",
        "Prisha", "Pritam", "Radha", "Rahul", "Raj",
        "Rajesh", "Rhea", "Rishi", "Riya", "Ronak",
        "Ruchi", "Rudra", "Ruhi", "Rupal", "Sahil",
        "Sakshi", "Samaira", "Sanjana", "Sarika", "Sarthak",
        "Siddharth", "Simran", "Sneha", "Soham", "Suhani",
        "Sumit", "Tanisha", "Tanya", "Utkarsh", "Vaishnavi",
        "Varun", "Vidhi", "Vikram", "Vinita", "Yash",
        "Yogesh", "Zara", "Zoya"
    ];
    
    // Function to choose a random name
    function getRandomName() {
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
    
    // Example usage:
    const randomName = getRandomName();
    // details
    // const randomName = "Pankaj";
    let randomUserId = randomName +"ax"+ Math.floor(Math.random() * 9000 + 1000);
    // const randomPassword = "Viks91107" ;
    const randomPassword = randomName + "@"+ Math.floor(Math.random() * 90000 + 10000);
    
    const randomMobile =
      "9" + Math.floor(Math.random() * 900000000 + 100000000);
    const randomEmail =
      "random" + Math.floor(Math.random() * 9000 + 1000) + "@example.com";

    // await driver.findElement(By.id('userName')).clear();
    await driver.findElement(By.id("userName")).sendKeys(randomUserId);

    try {
      const errorMessageElement = await driver.findElement(
        By.xpath(
          "//div[@class='col-xs-11']//span[contains(text(), 'User Name Not Available')]"
        )
      );
      await driver.findElement(By.id("userName")).clear();
      randomUserId = "user" + Math.floor(Math.random() * 9000 + 1000);
      await driver.findElement(By.id("userName")).sendKeys(randomUserId);
    } catch (error) {
      isUserIdAvailable = true;
    }

    // await driver.findElement(By.id('userName')).sendKeys(randomUsername);
    await driver.findElement(By.id("usrPwd")).sendKeys(randomPassword);
    await driver.findElement(By.id("cnfUsrPwd")).sendKeys(randomPassword);
    const preferredLanguageSpan = await driver.findElement(
      By.xpath("//span[contains(text(), 'Preferred Language')]")
    );
    await preferredLanguageSpan.click();

    const englishSpan = await driver.findElement(
      By.xpath("//span[contains(text(), 'English')]")
    );

    await englishSpan.findElement(By.xpath("..")).click();

    const preferredSecuritySpan = await driver.findElement(
      By.xpath("//span[contains(text(), 'Security Question')]")
    );
    await preferredSecuritySpan.click();

    const securitySpan = await driver.findElement(
      By.xpath("//span[contains(text(), 'What is your pet name?')]")
    );

    await securitySpan.findElement(By.xpath("..")).click();

    await driver
      .findElement(By.css('input[formcontrolname="secAns"]'))
      .sendKeys("PetName123");

    const continueButton = await driver.findElement(
      By.css('button[label="Continue"]')
    );

    await continueButton.click();

    console.log("SECTION 1 Completed ");

    await driver.findElement(By.id("firstName")).sendKeys(randomName);
    const preferredOccupation = await driver.findElement(
      By.xpath("//span[contains(text(), 'Select Occupation')]")
    );
    await preferredOccupation.click();

    const occupationSpan = await driver.findElement(
      By.xpath("//span[contains(text(), 'STUDENT')]")
    );

    await occupationSpan.findElement(By.xpath("..")).click();

    const today = new Date();
    const minDOBYear = today.getFullYear() - 50;
    const maxDOBYear = today.getFullYear() - 20;
    const randomDOBYear =
      Math.floor(Math.random() * (maxDOBYear - minDOBYear + 1)) + minDOBYear;
    const randomDOBMonth = Math.floor(Math.random() * 12) + 1;
    const randomDOBDay = Math.floor(Math.random() * 28) + 1;

    const randomDOB = `${randomDOBDay}-${randomDOBMonth}-${randomDOBYear}`;

  


    const dobInput = await driver.findElement(
      By.css('.ui-calendar input[type="text"]')
    );
    await dobInput.sendKeys(randomDOB);
    const dateElement = await driver.findElement(By.xpath('//td[contains(@class, "ng-star-inserted")]//a[text()="12"]'));
        
        // Click on the date "12" element
        await dateElement.click();

    const unmarriedCheckbox = await driver.findElement(By.id("unmarried"));
    await unmarriedCheckbox.click();
    const maleOption = await driver.findElement(
      By.css(
        '.ui-selectbutton.ui-buttonset-3 div[aria-label="Male"] span.ui-button-text'
      )
    );
    await maleOption.click();
    await driver.findElement(By.id("mobile")).sendKeys(randomMobile);
    await driver.findElement(By.id("email")).sendKeys(randomEmail);

    let selectElement = await driver.findElement(
      By.css('select[formcontrolname="nationality"]')
    );
    await driver.wait(until.elementIsVisible(selectElement));
    await selectElement.click();
    await selectElement.sendKeys("in");
    await selectElement.sendKeys(Key.ENTER);

    await continueButton.click();
    console.log("SECTION 2 Completed ");

    await driver.findElement(By.id("resAddress1")).sendKeys("Shivtola");

    let pinCodeInput = await driver.findElement(
      By.css('input[formcontrolname="resPinCode"]')
    );

    await pinCodeInput.sendKeys("841224");
    let cityDropdown = await driver.findElement(
      By.css('select[formcontrolname="resCity"]')
    );
    await cityDropdown.click();
    await driver.wait(
      until.elementLocated(By.css('option[value="Saran"]')),
      2000
    );

    let saranOption = await cityDropdown.findElement(
      By.css('option[value="Saran"]')
    );
    await saranOption.click();

    let postDropdown = await driver.findElement(
      By.css('select[formcontrolname="resPostOff"]')
    );
    await postDropdown.click();
    await driver.sleep(1000);

    let postOption = await postDropdown.findElement(
      By.css('option[value="Dhamsar B.O"]', 2000)
    );
    await postOption.click();

    await driver.findElement(By.id("resPhone")).sendKeys(randomMobile);

    let radioButtonYes = await driver.findElement(
      By.css('p-radiobutton[value="Y"]')
    );
    await radioButtonYes.click();

    console.log("Before captcha");
    // captcha work

    // in production
    let captchaInput = await driver.findElement(
      By.css('input[formcontrolname="captcha"]')
    );
    await captchaInput.click()
    
    console.log("Please fill the captcha manually within 8 seconds.");
    

    // workiing here

    const element = await driver.findElement(By.className('captcha-img'));

    const screenshot = await element.takeScreenshot();

    fs.writeFileSync('capt.png', screenshot, 'base64');
    console.log('Screenshot saved successfully.');
    

    async function performOCR() {
        try {
          console.log("under the function");
          const out = await Tesseract.recognize("capt.png", "eng");
          const recognizedText =  out.data.text;
          console.log("Recognized text:", recognizedText);
          return recognizedText;
      
        } catch (error) {
          console.error("Error during OCR:", error);
        }
      }
    
    
      const extractedText = await performOCR().then((recognizedText) => {
        if (recognizedText) {
          console.log("under the fnb");
           captchaInput.click();
           console.log("clicked");
           let baby = recognizedText.replace(/\s/g, "");
          captchaInput.sendKeys(baby);
        } else {
          console.error("Failed to recognize text.");
        }
      });
    

    await driver.executeScript(
      `document.querySelector('input[formcontrolname="termCondition"]').click();`
    );


    let submitButton = await driver.findElement(
      By.xpath("//button[@label='Register']"),
      1000
    );
    await submitButton.click();
    
    console.log("work Done");

    let okButton = await driver.findElement(By.css("button.regCnfBtn"), 2000);
    await okButton.click();

    // Wait for registration completion
    await driver.wait(until.urlContains("user-registration"), 10000);
    console.log("User registration successful!");

    async function saveUserDetailsToFile(userId, password) {
        // Define the file path
        const filePath = 'user_details.txt';
    
        // Create a string with the user details
        const userDetails = `User ID: ${userId}, Password: ${password}\n`;
    
        try {
            let existingData = '';
            if (fs.existsSync(filePath)) {

                existingData = fs.readFileSync(filePath, 'utf8');
            }
            const newData = existingData + userDetails;

            fs.writeFileSync(filePath, newData);
            console.log('User details saved to file.');
        } catch (err) {
            console.error('Error saving user details:', err);
        }
    }

    saveUserDetailsToFile(randomUserId, randomPassword);
    console.log(
      `User Details are \n Userid = ${randomUserId} Password = ${randomPassword}`
    );
    
  } catch (error) {
    console.error("User registration failed or timeout occurred.");
  } finally {


    // await driver.quit();
  }
})();