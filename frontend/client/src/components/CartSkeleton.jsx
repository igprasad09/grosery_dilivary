import React from "react";

export const CartSkeleton = () => {
    return (
        <div className="border -ml-3 md:ml-0 scale-80 border-gray-700/20 rounded-md md:px-2 px-4 py-1 bg-white min-w-56 max-w-56 w-full animate-pulse">
            <div className="flex items-center justify-center px-2">
                <div className="bg-gray-500/40 rounded-md w-24 h-24 md:w-36 md:h-36" />
            </div>
            <div className="mt-2 space-y-1">
                <div className="h-3 w-1/3 bg-gray-500/40 rounded" />
                <div className="h-4 w-3/4 bg-gray-500/40 rounded" />
                <div className="flex items-center gap-1 mt-1">
                    {Array(5).fill("").map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-gray-300/40 rounded" />
                    ))}
                </div>
                <div className="flex items-end justify-between mt-3">
                    <div className="h-4 w-20 bg-gray-500/40 rounded" />
                    <div className="h-8 w-[64px] md:w-[80px] bg-gray-500/40 rounded" />
                </div>
            </div>
        </div>
    );
};
