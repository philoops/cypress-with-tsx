import { add } from "../../src/pages/index";

describe("doing some math", () => {
  it("can add numbers", () => {
    expect(add(1, 2)).to.equal(3);
  });
});
