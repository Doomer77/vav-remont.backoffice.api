import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  constructor() {}
  findAll(): string[] {
    return ['reactjs', 'angularjs', 'weather'];
  }
}
