class PageHelper {
    constructor(page){
        this.page = page;
    }

    async waitForNetworkIdle(){
            await this.page.waitForNetworkIdle('networkidle')
    }

    


}

module.exports = { PageHelper };