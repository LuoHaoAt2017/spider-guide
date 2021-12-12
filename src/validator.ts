const letterRegx = /^[a-zA-Z]+$/;
const numberRegx = /^[0-9]+$/;

interface StringValidator {
  isAcceptable(s: string): boolean;
}

class LettersValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    return letterRegx.test(s);
  }
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string): boolean {
    return numberRegx.test(s);
  }
}

export {
  StringValidator,
  LettersValidator,
  ZipCodeValidator,
}