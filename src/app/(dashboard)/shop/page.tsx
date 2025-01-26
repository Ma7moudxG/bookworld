import AuthorCard from '@/components/AuthorCard'
import BookCard from '@/components/BookCard'
import StoreCard from '@/components/StoreCard'
import Link from 'next/link'
import React from 'react'

const stores = [
  {id: 1, name: "Cover Discovery" },
  {id: 2, name: "Good On Paper" },
  {id: 3, name: "Pages For Ages"},
]
const authors = [
  {id: 1, name: "Theresa Webb" , href:"/theresa.png", books:12 },
  {id: 2, name: "Serenity Cooper" , href:"/serenity.png", books:29 },
  {id: 3, name: "Jacob Warren" , href:"/jacob.png", books:10 },
]
const books = [
  {id: 1, name:"To Kill a Mockingbird", author: "Theresa Webb" , href:"/tokill.png"},
  {id: 2, name:"Cats And Agents", author: "Serenity Cooper" , href:"/cats.png" },
  {id: 3, name:"Lion Of Yesterday", author: "Jacob Warren" , href:"/lion.png" },
  
]

const Shop = () => {
  return (
    <main className='flex flex-col gap-4 p-6'>
      {/* Main header directory */}
      <div>
        <div>
          <h1 className='text-lg'>Shop</h1>
          <h3 className='text-sm text-gray-500'>Shop</h3>
        </div>
        <hr className='m-8'/>
      </div>

      <section className='w-full flex gap-4 flex-col '>
        <div className='flex justify-between'>
          <h1 className='text-lg font-bold'>Browse by Stores</h1>
          <Link href="/stores">
          <button className='bg-[#D86128] text-white text-sm px-3 py-2 rounded-md'>View All</button>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full justify-between'>
          { stores.map( (store, id) => {
            return (
              <StoreCard 
                key={id}
                name = {store.name}
              />
            )
          })}
        </div>
      </section>

      <section className='w-full flex gap-4 flex-col '>
        <div className='flex justify-between'>
          <h1 className='text-lg font-bold'>Browse by Authors</h1>
          <Link href="/authores">
          <button className='bg-[#D86128] text-white text-sm px-3 py-2 rounded-md'>View All</button>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full justify-between'>
          { authors.map( (author, id) => {
            return (
              <AuthorCard 
                key={id}
                name = {author.name}
                books = {author.books}
                href={author.href}
              />
            )
          })}
        </div>
      </section>

      <section className='w-full flex gap-4 flex-col '>
        <div className='flex justify-between'>
          <h1 className='text-lg font-bold'>Browse by Books</h1>
          <Link href="/authores">
          <button className='bg-[#D86128] text-white text-sm px-3 py-2 rounded-md'>View All</button>
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full justify-between'>
          { books.map( (book, id) => {
            return (
              <BookCard 
                key={id}
                name = {book.name}
                author = {book.author}
                href={book.href}
              />
            )
          })}
        </div>
      </section>
    </main>

  )
}

export default Shop