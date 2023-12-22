const puppeteer = require("puppeteer");

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://www.instagram.com/", {
    // timeout: 15 * 1000,
    // waitUntil: ["domcontentloaded"],
  });

  //   // Set screen size
  //   await page.setViewport({ width: 1080, height: 1024 });

  //   // Type into search box

  setTimeout(async () => {
    console.log("Hold complete!");
    // Call the callback function to resume the main functionality

    // await page.click('input[name=username]');
    // await page.$eval("input[name=username]", (el) => el.click);
    const inputUsername = "input[name=username]";
    const inputPassword = "input[name=password]";
    const inputSearch = "input[aria-label=Search input]";
    // const button = 'button[type=submit]';

    await page.type(inputUsername, "insider_4_u");
    await page.type(inputPassword, "akm123");

    await page.click("button[type=submit]");
    let ariaLabelValue = "Search";
    const svgSelector = `[aria-label="${ariaLabelValue}"]`;
    await page.waitForSelector(svgSelector);
    await page.click(svgSelector);

    let newAriaLabelValue = "Search input";
    const inputSelector = `input[aria-label="${newAriaLabelValue}"]`;
    await page.waitForSelector(inputSelector);
    await page.type(inputSelector, "p_a_r_u_l");

    // Wait for the <object> tag to be available in the DOM
    // const ele = await page.waitForSelector(objectWithTypeSelector);

    // console.log(ele);

    setTimeout(async () => {
      //   const ele1 = await page.waitForSelector(
      //     '//*[@id="mount_0_0_av"]/div/div/div[2]/div/div/div[1]/div[1]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div[2]/div'
      //   );

      // const objectWithTypeSelector = 'object[type="nested/pressable"]';

      // await page.waitForSelector(objectWithTypeSelector);

      // await page.click(objectWithTypeSelector);

      const ele1 = await page.waitForXPath(
        `//div/div/div[2]/div/div/div[1]/div[1]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div[2]/div/a[1]`
      );
      await ele1.click();

      const ele2 = await page.waitForXPath(
        `//div/div/div[2]/div/div/div[1]/div[1]/div[2]/div[2]/section/main/div/header/section/div[1]/div[1]/div/div[2]/div`
      );

      await ele2.click();

      const ele3 = await page.waitForXPath(
        `/html/body/div[5]/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/div[3]/button[2]`
      );

      ele3.click();

      const ele4 = await page.waitForXPath(
        `//div/div/div[2]/div/div/div[1]/div[1]/div[2]/section/div/div/div/div[1]/div/div[2]/div/div[1]/div/div/div/div[2]/div/div/div[2]/div/div/div[2]/div/div[1]/p`
      );

      ele4.click();

      for (let index = 0; index < 50; index++) {
        await page.keyboard.sendCharacter(`this is boat element ${index + 1}`);

        const ele5 = await page.waitForXPath(
          `//div/div/div[2]/div/div/div[1]/div[1]/div[2]/section/div/div/div/div[1]/div/div[2]/div/div/div/div/div/div[2]/div/div/div[2]/div/div/div[3]`
        );

        ele5.click();
      }

      //   await page.keyboard.press("Enter");

      //   const ele3 = await page.waitForXPath("//*[contains(text(), 'Message')]");

      //   console.log(ele3);
      //   await ele3.click();

      //   await page.click(ele1);

      //   const elementHandle = await page.$eval(
      //     "#mount_0_0_cT > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div.x78zum5.xdt5ytf.x1t2pt76.x1n2onr6.x1ja2u2z.x10cihs4 > div.x9f619.xvbhtw8.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1uhb9sk.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.x1q0g3np.xqjyukv.x1qjc9v5.x1oa3qoh.x1qughib > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1dr59a3.xixxii4.x13vifvy.xeq5yr9.x1n327nk > div > div > div.x10l6tqk.x1u3tz30.x1ja2u2z > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1iyjqo2.x2lwn1j.xeuugli.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1 > div > div > div.x6s0dn4.x78zum5.xdt5ytf.x5yr21d.x1odjw0f.x1n2onr6.xh8yej3 > div",
      //     (element) => {
      //       // This function will be executed in the context of the browser
      //       // Return whatever you want to retrieve from the element
      //       return element ? element.textContent : null;
      //     }
      //   );

      //   console.log(elementHandle);

      console.log("Hold on");
    }, 5000);

    // Now you can interact with the selected <object> tag as needed
    // For example, you can click on it

    // Wait for a moment to see the effect (optional)

    // Log the information to the console
    // console.log(elementsInfo);
  }, 5 * 1000);

  //   await page.$eval('input[name=password]', el => el.value = 'Adenosine triphosphate');

  //   // Wait and click on first result
  //   const searchResultSelector = ".search-box__link";

  //   // Locate the full title with a unique string
  //   const textSelector = await page.waitForSelector(
  //     "text/Customize and automate"
  //   );
  //   const fullTitle = await textSelector?.evaluate((el) => el.textContent);

  //   // Print the full title
  //   console.log('The title of this blog post is "%s".', fullTitle);

  //   await browser.close();
})();
