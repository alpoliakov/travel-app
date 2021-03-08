import { ObjectId } from 'mongodb';
import { Arg, Query, Resolver, UseMiddleware } from 'type-graphql';

import { Country, CountryModel } from '../entity/Country';
import { isAuth } from '../middleware/isAuth';
import { ObjectIdScalar } from '../schema/object-id.scalar';

@Resolver(() => Country)
export class CountryResolver {
  @Query(() => Country, { nullable: true })
  @UseMiddleware(isAuth)
  country(@Arg('countryId', () => ObjectIdScalar) countryId: ObjectId) {
    return CountryModel.findById(countryId);
  }

  @Query(() => [Country])
  countries() {
    return CountryModel.find();
  }
}
