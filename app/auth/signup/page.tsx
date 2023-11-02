import Image from 'next/image'
import React from 'react'

const Signup = () => {
    return (
        <section className="py-12 px-4 bg-gray-100 min-h-screen">
            <div className="container mx-auto max-w-lg text-center">
                <div className="text-center mb-10">
                    <h1 className="font-heading mb-4 text-5xl tracking-tighter">Create an account at Drawify.AI</h1>
                    <p className="text-xl tracking-tight">Free trial. No credit card required.</p>
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
                    <div className="mb-2"><input className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-300 focus:border-gray-700 rounded-lg transition duration-200" name="confirmPass" type="password" placeholder="Confirm Password" /></div>
                    <button className="inline-block mb-3 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200" type="submit">Sign up</button>
                </form>

                <div className="px-3 mt-6 text-sm">
                    <div className="mb-3">By signing up, you are agreeing to our <a className="text-blue-600" href="/legal/terms-of-service">Terms of Service</a> and <a className="text-blue-600" href="/legal/privacy-policy">Privacy Policy</a>.</div>
                    Already have an account?<a className="ml-3 text-blue-600" href="/auth/signin">Sign in</a>
                </div>
            </div>
        </section>)
}

export default Signup