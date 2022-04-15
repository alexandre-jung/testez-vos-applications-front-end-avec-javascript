import { getAge } from "./age";

describe("getAge unit test", () => {
    it('should render "Vous avez actuellement 36 ans', () => {
        expect(getAge(36)).toBe('Vous avez actuellement 36 ans');
    })
});
