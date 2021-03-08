import { getModelForClass, prop as Property } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

import { Ref } from '../types/Ref';
import { Country } from './Country';

@ObjectType()
class DataLocalePlace {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  country: string;
}

@ObjectType()
class LocalePlace {
  @Field()
  en: DataLocalePlace;

  @Field()
  ru: DataLocalePlace;

  @Field()
  uk: DataLocalePlace;
}

@ObjectType()
export class Place {
  @Field()
  readonly _id: ObjectId;

  @Field(() => [String])
  @Property({ required: true })
  imagesUrl: string[];

  @Field(() => LocalePlace)
  @Property({ required: true })
  data: LocalePlace;

  @Field(() => Country)
  @Property({ ref: Country, required: true })
  country: Ref<Country>;
}

export const PlaceModel = getModelForClass(Place);
