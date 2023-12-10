import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class SampleResolver {
  @Query(() => String)
  async hello() {
    return 'Hello World!';
  }
}