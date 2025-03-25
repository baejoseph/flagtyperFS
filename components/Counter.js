"use client";

import { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-semibold">{props.title}</h2>
            
            <div className="flex items-center gap-4">

                <button
                    className="btn btn-circle"
                    onClick={() => setCount(count - 1)}
                    > - </button>

                <span className="text-4xl font-mono min-w-[3ch] text-center">
                    {count}
                </span>

                <button
                    className="btn btn-circle"
                    onClick={() => setCount(count + 1)}
                    > + </button>

            </div>
            
        </div>
    );
}

export default Counter;