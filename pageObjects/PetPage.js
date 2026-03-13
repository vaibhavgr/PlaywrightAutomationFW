const { expect } = require('@playwright/test')
const { PageHelper } = require('../pageObjects/PageHelper.js')


class PetPage extends PageHelper{
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page) {
        super(page);
        this.petNameInput = this.page.locator("#petName");
        this.petYearDropdown = this.page.locator("//*[@name='petAge.year']/parent::*//*[@aria-label='Select']/parent::*/..");
        this.petAgeMonthDropdown = this.page.locator("//*[@name='petAge.month']/parent::*//*[@aria-label='Select']/parent::*/..");
        this.breedDropdown = this.page.locator("//*[contains(@aria-label, 'breed')]/..");
        this.monthDropdown = this.page.locator("//*[@aria-label='Select month']/parent::*");
        this.yearDropdown = this.page.locator("//*[@aria-label='Select year']/..");
        this.isSpayed = this.page.locator("#radio__pet-info__petInfertility__trueLabel");
        this.submitPetBtn = this.page.locator("button[type='submit']");

    }

    async addPet(petname) {
        await this.petNameInput.fill(petname);
        await this.handleDropdown(this.petYearDropdown, "2 years")
        await this.handleDropdown(this.petAgeMonthDropdown, " 2 months")
        await this.handleDropdown(this.breedDropdown, "Afghan Hound");
        await this.handleDropdown(this.monthDropdown, "Mar");
        await this.handleDropdown(this.yearDropdown, "2025");
        await this.isSpayed.click();
        await this.submitPetBtn.filter({ hasText: 'Done' }).click();




    }

    async handleDropdown(dropdown, value) {
        await dropdown.click();
        const optionClick = this.page.getByRole('option', { name: value, exact: true });
        await optionClick.click();
    }


}

module.exports = { PetPage };