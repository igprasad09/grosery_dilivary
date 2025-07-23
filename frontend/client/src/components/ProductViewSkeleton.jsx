import React from "react";

export const ProductViewSkeleton = () => {
    return (
        <div className="flex justify-center mt-10 animate-pulse">
            <div className="max-w-6xl w-full px-6">
                <div className="h-4 w-40 bg-gray-300/40 rounded mb-4" />

                <div className="flex flex-col md:flex-row gap-16 mt-4">
                    {/* Images section */}
                    <div className="flex gap-3">
                        <div className="flex flex-col gap-3">
                            {Array(4).fill("").map((_, idx) => (
                                <div key={idx} className="bg-gray-300/40 rounded w-24 h-24 md:w-24 md:h-24" />
                            ))}
                        </div>
                        <div className="bg-gray-300/40 rounded w-64 h-64 md:w-[400px] md:h-[400px]" />
                    </div>

                    {/* Text section */}
                    <div className="text-sm w-full md:w-1/2 space-y-4">
                        <div className="h-6 w-1/2 bg-gray-300/40 rounded" />
                        <div className="flex gap-1">
                            {Array(5).fill("").map((_, idx) => (
                                <div key={idx} className="w-4 h-4 bg-gray-300/40 rounded" />
                            ))}
                            <div className="h-4 w-10 bg-gray-300/40 rounded ml-2" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-32 bg-gray-300/40 rounded" />
                            <div className="h-6 w-40 bg-gray-300/40 rounded" />
                            <div className="h-3 w-40 bg-gray-300/40 rounded" />
                        </div>
                        <div className="space-y-2 mt-6">
                            <div className="h-4 w-32 bg-gray-300/40 rounded" />
                            <div className="h-20 w-full bg-gray-300/40 rounded" />
                        </div>
                        <div className="flex items-center mt-10 gap-4">
                            <div className="h-12 w-full bg-gray-300/40 rounded" />
                            <div className="h-12 w-full bg-gray-300/40 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
