import {
  StringValidator,
  LettersValidator,
  ZipCodeValidator,
} from "../../src/validator";

describe("validator", () => {
  const strings = ["Hello", "98052"];
  // 内联类型
  const validators: { [s: string]: StringValidator } = {};
  validators["ZIP code"] = new ZipCodeValidator();
  validators["Letters only"] = new LettersValidator();

  test('log match', () => {
    expect(validators["ZIP code"].isAcceptable(strings[0])).toBeFalsy();
    expect(validators["ZIP code"].isAcceptable(strings[1])).toBeTruthy();
    expect(validators["Letters only"].isAcceptable(strings[0])).toBeTruthy();
    expect(validators["Letters only"].isAcceptable(strings[1])).toBeFalsy();
  });
});
