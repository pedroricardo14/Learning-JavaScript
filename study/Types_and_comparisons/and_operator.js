let isBatteryOn = true; 
let isSwitchOn = true; 
console.log(isBatteryOn && isSwitchOn);
let isBatteryOn1 = true; 
let isSwitchOn1 = false; 
console.log(isBatteryOn1 && isSwitchOn1);
let isBatteryOn2 = false; 
let isSwitchOn2= false; 
console.log(isBatteryOn2 && isSwitchOn2);
let isBatteryOn3 = false; 
let isSwitchOn3 = false; 
let result = isBatteryOn3 && isSwitchOn3; 
console.log(result);
let cost = 50; 
let sellPrice = 60; 
const profit = sellPrice - cost; 
const result1 = cost < sellPrice && profit > 0; 
console.log(result1);
let age = 18; 
let isPass = true; 
const isEligible = age >= 18 && isPass; 
console.log(isEligible);
let isRecipientValid = true; 
let isSubjectFilled = false; 
const isMailSent = isRecipientValid  && isSubjectFilled; 
console.log("Mail Sending Successful?: " + isMailSent);
let isWifiConnected = true; 
let isURLValid = true; 
const willSiteLoad = isWifiConnected && isURLValid; 
console.log(willSiteLoad);