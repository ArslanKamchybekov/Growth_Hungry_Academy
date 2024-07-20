"use client"

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { BookOpen } from 'lucide-react';

const Course = () => {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <Sidebar />
            <div className="p-6 max-w-lg mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="order-1 col-span-1 lg:col-span-3 flex flex-col space-y-6">
                        <div className="border rounded-md overflow-hidden bg-white">
                            <div className="relative aspect-video overflow-hidden bg-slate-100">
                                <div className="absolute inset-y-0 inset-x-0 w-full h-full" data-vimeo-initialized="true">
                                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                                        <iframe style={{ position: 'absolute', top: 0, left: 0, width: "100%", height: "100%" }} title="Title">

                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-md p-6 bg-white">
                            <div className="flex items-center gap-x-2 mb-3">
                                <div className="inline-flex items-center border rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-sky-500/10 text-sky-800">
                                    <BookOpen />
                                    {/* placeholder for now */}
                                    <span>10 chapters</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-lg md:text-2xl mb-2 capitalize">
                                Course Title
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>
                            {/* Tags would under here */}
                            {/* <div className="flex gap-1 flex-wrap">
                                <div className="border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground rounded-md text-center flex items-center justify-center">
                                    Tag
                                </div>
                            </div> */}
                            <div className="mt-4">
                                <div>
                                    <p className="font-medium mt-2 text-sky-700 text-xs">0% Complete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-2 lg:col-span-2 flex flex-col space-y-6">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Course;