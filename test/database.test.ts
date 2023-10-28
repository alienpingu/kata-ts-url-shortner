import Database from "../src/models/database";

describe("Database", () => {
    const newDatabase:Database = new Database();
    it("Test function Should return true", () => expect(newDatabase.test()).toBe(true))
});