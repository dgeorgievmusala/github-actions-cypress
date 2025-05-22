/// <reference types="cypress" />

describe("Intercept Fake API Test", () => {
  it("should intercept and modify the response of a GET request", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },

      {
        statusCode: 200,
        body: [
          {
            book_name: "Learn JavaScript",
            isbn: "12345",
            aisle: "67890",
          },
        ],
      }
    ).as("getBooks");
    cy.get(".btn.btn-primary").click();
    cy.wait("@getBooks");
    cy.get("p").should("have.text", "Oops only 1 Book available");
  });
});
