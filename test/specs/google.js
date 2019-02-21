import {expect} from "chai";

describe("Google.com", () => {

    it("shows", () => {
        browser.url("https://www.google.com");
        browser.waitForVisible("input[type=text]");
    });

});