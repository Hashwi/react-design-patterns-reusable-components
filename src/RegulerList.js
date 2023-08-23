import React from "react";

export const RegulerList = ({
items,
resourceName,
itemComponent: ItemComponet,
}) => {
    return(
        <>
        {items.map((item, i) => (
            <ItemComponet key={i}  {...{[resourceName ]: item}} />
        ))}
        </>
    )
}
