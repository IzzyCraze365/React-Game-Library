//PascalCasing is a Good Convention for React
function Message(){
    // JSX: JavaScript XML
    const name= `John`
    if(name){
    return <h1>Hello {name}</h1>
    }
    return <h1>Hello World</h1> // This was our original code that we added to
}

export default Message;