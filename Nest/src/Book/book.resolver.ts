// import {
//   Query,
//   Resolver,
//   Args,
//   ResolveField,
//   Parent,
//   Mutation,
// } from '@nestjs/graphql';
// import { BookService } from './book.service';
//
// @Resolver('Book')
// export class BookResolver {
//   constructor(private bookService: BookService) {}
//   @Query('books')
//   getBooks() {
//     return this.bookService.findAll();
//   }
//   @Mutation('createBook')
//   createBook(@Args('title') title: string, @Args('price') price: number) {
//
//     return this.bookService.createBook(title,price);
//   }
// }
