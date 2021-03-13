import { ObjectId } from 'mongodb';
import { Arg, FieldResolver, Query, Resolver, Root, UseMiddleware } from 'type-graphql';

import { Country, CountryModel } from '../entity/Country';
import { Place, PlaceModel } from '../entity/Place';
import { isAuth } from '../middleware/isAuth';
import { ObjectIdScalar } from '../schema/object-id.scalar';

@Resolver(() => Place)
export class PlaceResolver {
  @Query(() => Place, { nullable: true })
  @UseMiddleware(isAuth)
  place(@Arg('placeId', () => ObjectIdScalar) placeId: ObjectId) {
    return PlaceModel.findById(placeId);
  }

  @Query(() => [Place])
  places(@Arg('countryId', () => ObjectIdScalar) countryId: ObjectId) {
    return PlaceModel.find({ country: countryId });
  }

  @FieldResolver()
  async country(@Root() place: Place): Promise<Country | null> {
    return await CountryModel.findById(place.country);
  }
}
