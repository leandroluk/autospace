import {Field, Float, InputType} from '@nestjs/graphql';

@InputType()
export class LocationFilterInput {
  @Field(() => Float)
  ne_lat: number;

  @Field(() => Float)
  ne_lng: number;

  @Field(() => Float)
  sw_lat: number;

  @Field(() => Float)
  sw_lng: number;
}
