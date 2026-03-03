class PetPage {

    constructor(page) {
        this.page = page;
        this.petNameInput = this.page.locator("#petName");
        this.petYearDropdown = this.page.locator("//*[@name='petAge.year']/parent::*//*[@aria-label='Select']/parent::*/..");
        this.petAgeMonthDropdown = this.page.locator("//*[@name='petAge.month']/parent::*//*[@aria-label='Select']/parent::*/..");
        this.breedDropdown = this.page.locator("//*[contains(@aria-label, 'breed')]/..");
        this.monthDropdown = this.page.locator("//*[@aria-label='Select month']/parent::*");
        this.yearDropdown = this.page.locator("//*[@aria-label='Select year']/..");
        this.isSpayed = this.page.locator("#radio__pet-info__petInfertility__trueLabel");
        this.submitPetBtn = this.page.locator("button[type='submit']");

    }

    async addPet()
    {
        await this.petNameInput.fill('Vaibhav');
        await this.petYearDropdown
        
        

    }


}

module.exports = { PetPage };