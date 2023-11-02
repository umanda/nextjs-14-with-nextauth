import React from 'react'

const ForgotPassword = () => {
   return (
      <section className="py-12 px-4 bg-gray-100 min-h-screen">
         <div className="container mx-auto max-w-lg text-center">
            <div className="text-center mb-10">
               <h1 className="font-heading mb-4 text-5xl tracking-tighter">Get a new password</h1>
               <p className="text-xl tracking-tight"></p>
            </div>
            <form className="mb-6 p-9 bg-white border border-gray-200 rounded-2xl">
               <div className="mb-2"><input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 focus:border-gray-700 rounded-lg transition duration-200" name="email" type="email" placeholder="Email" /></div>
               <button className="inline-block mb-3 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" type="submit">Reset password</button>
            </form>
            <div className="px-3 mt-6 text-sm">Remember it after all?<a className="ml-3 text-blue-600" href="/auth/signin">Sign in</a></div>
         </div>
      </section>
   )
}

export default ForgotPassword