import Image from 'next/image'
import React from 'react'

const Signin = () => {
   return (
      <section className="py-12 px-4 bg-gray-100 min-h-screen">
         <div className="container mx-auto max-w-lg text-center">
            <div className="text-center mb-10">
               <h1 className="font-heading mb-4 text-5xl tracking-tighter">Welcome back to Drawify.AI</h1>
               <p className="text-xl tracking-tight">Let&apos;s start generate.</p>
            </div>
            <div className="mt-2">
                    <div className="mb-2 flex gap-5">
                        <button className="py-4 px-4 w-full bg-gray-200 rounded-lg border-0 hover:bg-gray-300 focus:outline-none">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/assets/images/providers/google-icon.svg"
                                    className="mr-2" width={25} height={25}
                                    alt='Sign up with Google'
                                />Sign up with Google</div>
                        </button>
                        <button className="py-4 px-4 w-full bg-gray-200 rounded-lg border-0 hover:bg-gray-300 focus:outline-none">
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/assets/images/providers/facebook-icon.svg"
                                    className="mr-2" width={25} height={25}
                                    alt='Sign up with Facebok'
                                />Sign up with Facebook</div>
                        </button>
                    </div>
                    <div className="w-full p-2">
                        <div className="flex items-center -m-2.5 mb-2">
                            <div className="flex-1 p-2.5">
                                <div className="h-px bg-gray-300"></div>
                            </div>
                            <div className="auto p-2.5"><span className="text-xl text-gray-600 tracking-tight">or</span></div>
                            <div className="flex-1 p-2.5">
                                <div className="h-px bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            <form className="mb-6 p-9 bg-white border border-gray-200 rounded-2xl">
               <div className="mb-2"><input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 focus:border-gray-700 rounded-lg transition duration-200" name="email" type="email" placeholder="Email" /></div>
               <div className="mb-2"><input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 focus:border-gray-700 rounded-lg transition duration-200" name="pass" type="password" placeholder="Password" /></div>
               <button className="inline-block mb-3 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" type="submit">Sign in</button>
            </form>
            <div className="px-3 mt-6 text-sm">
               <a className="text-blue-600" href="/auth/signup">Create an account</a>
               <a className="ml-4 text-blue-600" href="/auth/forgot-password">Forgot Password?</a>
            </div>
         </div>
      </section>
   )
}

export default Signin