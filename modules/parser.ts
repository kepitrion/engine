class DefaultParser {
  target: string;

  constructor(strToParse: string) {
    this.target = strToParse;
  }

  parse() {
    let isInNoMarkup, isInUnderline, isInItalic, isInBold, isInStrikethrough, isInsuperscript, isInsubscript = 0; //0 = False, 1 = Parser Hint, 2 = True

    const strList = this.target.split("");

    for(const string of strList) {
      if (string == "\*") {
        if(isInBold === 0) isInBold = 1;
        else isInBold = 2;
      }
      else if (string == "\_") {
        if(isInItalic === 0) isInItalic = 1;
        else isInItalic = 2;
      }
    }
  }
}

export class Parser {
  target: string[];

  constructor(strToParse: string) {
    this.target = strToParse.split("\n");
  }

  parse() {
  }
}