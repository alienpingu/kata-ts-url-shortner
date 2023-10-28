import Link from "../src/models/link";

describe("Link", () => {
    const newLink:Link = new Link();
    it("Test function Should return true", () => expect(newLink.test()).toBe(true))
});