'use client'

import { Button } from '@/components';
import Link from 'next/link'
import { useRouter } from 'next/navigation';


export default function Custom404(){
  const router = useRouter();
    return (
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-primary via-purple-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden">

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="relative mb-8">
                    <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r bg-primary select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 text-8xl md:text-9xl font-black text-purple-500 opacity-20 blur-2xl animate-pulse">
                        404
                    </div>
                </div>
                <div className="mb-12 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        The page you `&apos;`re looking for seems to have vanished into the digital void.
                        Don`&apos;`t worry though, even the best explorers sometimes take a wrong turn.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/">
                        <Button
                            className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                        >
                            <span className="relative z-10">Take Me Home</span>
                        </Button>
                    </Link>
                    <Button
                        onClick={() => router.back()}
                        className="group px-8 py-4 bg-transparent border-2 border-primary text-purple-300 font-semibold rounded-full transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
                    >
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    )
}