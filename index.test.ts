import { LuccaOrganization } from "./index";

describe("lucca-organization-typescript-sdk", () => {
    it("initialize client", async () => {
        const luccaorganization = new LuccaOrganization({
            apiKey: "API_KEY",
        });
    });
});
