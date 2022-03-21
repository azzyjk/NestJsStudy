import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  constructor(id: number, age: number) {
    this.id = id;
    this.age = age;
  }

  @Field(() => Int)
  age: number;

  @Field(() => Int)
  id: number;
}
