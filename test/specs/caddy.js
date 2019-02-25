import {expect} from "chai";

describe("caddy", () => {

    it("works", () => {
        const CADDY_PORT = 2015;
        browser.url(`http://${process.env.CADDY_SERVER}:${CADDY_PORT}/`);
        browser.waitForVisible('h1=Caddy web server');
    });

});