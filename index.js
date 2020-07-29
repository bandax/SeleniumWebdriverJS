require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");

async function ExecuteContacUs() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://www.epam.com");

    await driver.sleep(3000);

    await driver
      .findElement(
        By.className("cta-button-ui cta-button--envelope header__control")
      )
      .click();
   
    await driver
      .findElement(
        By.xpath(
          "(//div[@class='dropdown-list__input form-component__input'])[1]"
        )
      )
      .click();

    await driver.sleep(2000);

    await driver
      .findElement(
        By.css(
          "#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_mail_subjects-results>li:first-child"
        )
      )
      .click();

    await driver.sleep(5000);

    await driver
      .findElement(
        By.xpath(
          "(//div[@class='dropdown-list__input form-component__input'])[2]"
        )
      )
      .click();

    await driver.sleep(2000);

    await driver
      .findElement(
        By.css(
          "#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_position-results>li:first-child"
        )
      )
      .click();

    await driver.sleep(5000);

    await driver
      .findElement(
        By.xpath(
          "(//div[@class='dropdown-list__input form-component__input'])[3]"
        )
      )
      .click();

    await driver.sleep(3000);

    await driver
      .findElement(
        By.css(
          "#select2-_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-results>li:first-child"
        )
      )
      .click();

    await driver
      .findElement(
        By.id(
          "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name"
        )
      )
      .sendKeys("John");
    await driver
      .findElement(
        By.id(
          "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name"
        )
      )
      .sendKeys("Fk");
    await driver
      .findElement(
        By.id(
          "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email"
        )
      )
      .sendKeys("jonfk");
    await driver
      .findElement(
        By.id(
          "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone"
        )
      )
      .sendKeys("342423");
    await driver
      .findElement(
        By.id(
          "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_company"
        )
      )
      .sendKeys("Trin");
    await driver
      .findElement(
        By.id(
          "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_city"
        )
      )
      .sendKeys("Gdl");
    await driver.sleep(2000);
    await driver
      .findElement(
        By.id(
          "_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment"
        )
      )
      .sendKeys("This is just a test");

    await driver.sleep(3000);
    await driver
      .findElement(
        By.xpath(
          "(//label[@class='checkbox__label checkbox-custom-label checkbox__label-text'])[1]"
        )
      )
      .click();
    await driver.sleep(2000);
    await driver
      .findElement(
        By.xpath(
          "(//label[@class='checkbox__label checkbox-custom-label checkbox__label-text'])[2]"
        )
      )
      .click();
    
      await driver.sleep(3000);

   
    await driver.findElement(
        By.xpath(
          "//div[@class='button-ui-wrapper right-button button-submit']/button"
        )
      )
    .click();
  } finally {
    await driver.sleep(5000);
    await driver.quit();
  }
}

ExecuteContacUs();
