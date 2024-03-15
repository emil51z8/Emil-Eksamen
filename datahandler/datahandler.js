async function getData() {
    const apiURL = "https://www.elprisenligenu.dk/api/v1/prices/2024/01-02_DK2.json"; // URL til API
    const request = await new Request(apiURL); // request til API
    const response = await fetch(request); // fetcher data fra API
    var prices = response.json(); // data fra API bliver lavet om til JSON
    return new Promise((resolve, reject) => {
    resolve(prices); // returnerer data fra API
    reject("Error" + err);
    });    
} 


module.exports = {
    getData
};