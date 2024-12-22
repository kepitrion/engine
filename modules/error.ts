export class DatabaseError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "DatabaseError";
  }
}

export class EngineError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "EngineError";
  }
}

export class ParserError extends Error {
  constructor(message: string) {
    super(message);

    this.name = "ParserError";
  }
}
