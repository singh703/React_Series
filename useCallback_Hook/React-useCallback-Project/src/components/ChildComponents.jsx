import React from 'react'

const ChildComponents = React.memo(
    (props) => {

        console.log("Child Component go re-render");
      return (
        <div>
            <button onClick={props.handleClick}>
                {props.buttonName}
            </button>
        </div>
      )
    }
)

export default ChildComponents

// React.meo -> wrap -> components -> component re-render tabhi hoga jab props change nahi toh re-render nhi hoga

// If u r sending a function, then react.memo wont be able to save you from re-rendering
