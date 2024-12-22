class DefaultParser {
  target: string;

  constructor(strToParse: string) {
    this.target = strToParse;
  }

  parse() {
    let isInNoMarkup, isInUnderline, isInItalic, isInBold, isInStrikethrough, isInsuperscript, isInsubscript = 0; // 0 = False, 1 = Parser Hint, 2 = True

    const strList = this.target.split("");

    for(const string of strList) {
      if (string == "\*") {
        if(isInBold === 0) isInBold = 1;
        else isInBold = 2;
      }
      else if (string == "\'") {
        if(isInItalic === 0) isInItalic = 1;
        else isInItalic = 2;
      }
      else if (string == "\_") {
        if(isInUnderline === 0) isInUnderline = 1;
        else isInUnderline = 2;
      }
      else if (string == "\^") {
        if(isInsuperscript === 0) isInsuperscript = 1;
        else isInsuperscript = 2;
      }
      else if (string == "\,") {
        if(isInsubscript === 0) isInsubscript = 1;
        else isInsubscript = 2;
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