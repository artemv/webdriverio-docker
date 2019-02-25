import {expect} from "chai";

describe("caddy", () => {

    it("works", () => {
        browser.url(`http://${process.env.CADDY_SERVER}/`);
        browser.waitForVisible('h1=Caddy web server');
    });

});