import CardSkeleton from "./CardSkeleton";


export function PetListSkeleton(){
    const element = Array.from({ length: 9 }, (_, i) => i);
    return (
        <>
            {element.map((_,idx) => {
                return (
                    <CardSkeleton key={idx}/> 
                )
            })}
        </>   
    )
}