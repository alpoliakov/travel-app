import { Field, InputType } from 'type-graphql';

@InputType()
export class AuthInput {
  @Field({ nullable: true })
  name?: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  avatar?: string;
}