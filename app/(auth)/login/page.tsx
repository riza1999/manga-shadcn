import React from 'react'
import LoginForm from './components/LoginForm'

const page = () => {
  return (
    <>
      <section className="container max-w-md mx-auto justify-center items-center flex flex-col min-h-screen">
        <h3 className="text-3xl text-center col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5">
          Login
        </h3>
        <LoginForm />
      </section>
    </>
  )
}

export default page