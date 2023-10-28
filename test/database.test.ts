import Engine from "../src/models/engine";

describe("Engine", () => {
    const newEngine:Engine = new Engine("shrt.com/");
    const longURL = "https://google.com/profile/me?view=mobile&dock=break";
    const shortURL = newEngine.shortify(longURL);

    it("Should return short url", () => expect(newEngine.shortify(longURL)).toBe(shortURL));
    
    it("Should return short url", () => expect(newEngine.translate(longURL)).toBe(shortURL));
    it("Should return long url", () => expect(newEngine.translate(shortURL)).toBe(longURL));
    it("Should return undefined if url not exist", () => expect(newEngine.translate("jojo")).toBe(undefined));

    it("Should return 0 as view counter", () => expect(newEngine.track(shortURL)).toBe(0));
    it("Should return undefined as view counter if url not exist", () => expect(newEngine.track("jojo")).toBe(undefined));

    it("Should return Link from short url", () => expect(newEngine.statics(shortURL)).toMatchObject({
        shortURL: expect.any(String),
        longURL: expect.any(String),
        viewCounter: expect.any(Number),
    }));
    it("Should return Link from long url", () => expect(newEngine.statics(longURL)).toMatchObject({
        shortURL: expect.any(String),
        longURL: expect.any(String),
        viewCounter: expect.any(Number),
    }));
    it("Should return undefined if url not exist", () => expect(newEngine.statics("jojo")).toBe(undefined));

});