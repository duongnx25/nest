import { Injectable } from "@nestjs/common";

@Injectable()
export class CatService {
    private readonly cats: Array<string>;

    constructor() {
      this.cats = [];
    }

    create(cat): object {
      this.cats.push(cat);

      return cat;
    }

    findAll() {
      return this.cats;
    }
}