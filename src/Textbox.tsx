import React from "react"

const Textbox = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(
    (props, ref) => {
        return (
            <div className="p-5 rounded-lg shadow-lg dark:bg-zinc-800 m-3" {...props} ref={ref}>
                {props.children}
            </div>
        )
    }
)

export default Textbox