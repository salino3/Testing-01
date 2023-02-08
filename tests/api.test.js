
const request = require("supertest");

 const app = require("../index");

//* Get endpoints
describe('GET /drinks/cocktail', () => {

    it("respond with json containing a list of params about cocktail Martini", (done) => {
      request(`http://localhost:4300`)
        .get("/drinks/cocktail/martini")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .timeout(5000)
        .expect(200, done);
    }); 

      it("respond with json containing a list of params about cocktail Margarita", (done) => {
        request(`http://localhost:4300`)
          .get("/drinks/cocktail/margarita")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .timeout(5000)
          .expect(200, done);
      }); 

});



describe('GET /drinks/ingredients', () => {
 
    it("respond with json containing a list of params about ingredients Margarita", (done) => {
      request(`http://localhost:4300`)
        .get("/drinks/ingredients/margarita")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .timeout(5000)
        .expect(200, done);
    }); 

       it("respond with json containing a list of params about ingredients Martini", (done) => {
         request(`http://localhost:4300`)
           .get("/drinks/ingredients/martini")
           .set("Accept", "application/json")
           .expect("Content-Type", /json/)
           .timeout(5000)
           .expect(200, done);
       }); 


});