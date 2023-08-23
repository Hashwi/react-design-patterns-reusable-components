import React from "react";

export const NumberedList = ({
items,
resourceName,
itemComponent: ItemComponet,
}) => {
    return(
        <>
        
        {items.map((item, i) => (
            <>
            <h3>{i + 1}</h3>
            <ItemComponet key={i}  {...{[resourceName ]: item}} />
            </>
        ))}
        </>
    )
}
