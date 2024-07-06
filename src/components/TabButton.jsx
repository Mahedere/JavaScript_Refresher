 export default function TabButton({children}){
    function handleClick(){
        console.log("hi")
    }
return(

    <button onClick={handleClick}>{children}</button>
)
 }