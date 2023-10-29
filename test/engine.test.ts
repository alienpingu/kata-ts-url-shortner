import Engine from "../src/models/engine";

const newEngine:Engine = new Engine();
const longURL = "https://google.com/profile/me?view=mobile&dock=break";
const shortURL = newEngine.shortify(longURL);

describe("Shortify", () => {
    it("Should return short url", () => expect(newEngine.shortify(longURL)).toBe(shortURL));
});
describe("Translate", () => {
    it("Should return short url", () => expect(newEngine.translate(longURL)).toBe(shortURL));
    it("Should return long url", () => expect(newEngine.translate(shortURL)).toBe(longURL));
    it("Should return undefined if url not exist", () => expect(newEngine.translate("jojo")).toBe(undefined));
    it("Should incremet 2 times the view counter", () => expect(newEngine.track(shortURL)).toBe(2));
    it("Should log date 2 times ", () => {
        const response:string[]|undefined = newEngine.log(shortURL);
        expect(response?.length).toStrictEqual(2);
    });

})
describe("Track", () => {
    it("Should return Number as view counter", () => expect(newEngine.track(shortURL)).toStrictEqual(expect.any(Number)));
    it("Should return undefined as view counter if url not exist", () => expect(newEngine.track("jojo")).toBe(undefined));
});
describe("Statics", () => {
    it("Should return Link statics from short url", () => expect(newEngine.statics(shortURL)).toMatchObject({
        shortURL: expect.any(String),
        longURL: expect.any(String),
        viewCounter: expect.any(Number),
        log: expect.any(Array)
    }));
    it("Should return Link statics from long url", () => expect(newEngine.statics(longURL)).toMatchObject({
        shortURL: expect.any(String),
        longURL: expect.any(String),
        viewCounter: expect.any(Number),
        log: expect.any(Array)
    }));
    it("Should return undefined if url not exist", () => expect(newEngine.statics("jojo")).toBe(undefined));
});
describe("Log", () => {
    it("Should return array of date as log for shortURL ", () => expect(newEngine.log(shortURL)).toStrictEqual(expect.any(Array)));
    it("Should return array of date as log for longURL ", () => expect(newEngine.log(longURL)).toStrictEqual(expect.any(Array)));
    it("Should return undefined if url log not exist", () => expect(newEngine.log("jojo")).toBe(undefined));
});
describe("Delete", () => {
    it("Should return true if url was deleted", () => {
        newEngine.delete(shortURL);
        expect(newEngine.log(longURL)).toBe(undefined)
    });
    it("Should return undefined if url not exist when delete", () => expect(newEngine.delete("jojo")).toBe(undefined));

});