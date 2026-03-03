

const { expect } = require('@playwright/test');
const { UniqueGenerator } = require('../utils/UniqueGenerator.js');

class LoginPage {

    constructor(page) {
        this.page = page;
        this.rejectCookies = this.page.getByRole('button', { 'name': 'Reject All' })
        this.maybeLater = this.page.getByRole('button', { 'name': 'Maybe Later' });
        this.signupBtn = this.page.getByRole('button', { 'name': 'Sign Up / Login' })
        this.emailInputBox = this.page.locator('#email');
        this.nextBtn = this.page.getByRole('button', { 'name': 'Next' })

    }

    async handleCookies() {
        await this.rejectCookies.click();
        if (await this.maybeLater.isVisible()) {
            await this.maybeLater.click();
        }

    }

    async navigatetoUserPage() {
        await this.signupBtn.click();
        await this.emailInputBox.first().fill(UniqueGenerator.getFakeData('email'));
        await this.nextBtn.click();
        const postHeading = this.page.getByRole('heading', { 'name': 'Let’s create your account' });
        console.log(await expect(postHeading).toHaveText(`Let’s create your account`));

        
        //expect(postHeading).toBeTruthy();
        //expect(postHeading).toBeFalsy();


    }

}

module.exports = { LoginPage }