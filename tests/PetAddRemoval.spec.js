const {test , expect , request} = require('@playwright/test');
const { UniqueGenerator } = require('../utils/UniqueGenerator.js');
const { APIUtil } = require('../utils/APIUtil.js');
const { POManager } = require('../pageObjects/POManager.js');

let token
let petName;

test.beforeAll(async() =>{
const apiContext = await request.newContext();
  const apiUtil = new APIUtil(apiContext);
  token = await apiUtil.getAccessToken();
  petName = await apiUtil.addPet(token);
  console.log(petName)

})
