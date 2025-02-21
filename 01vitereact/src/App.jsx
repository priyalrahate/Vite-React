
import Chai from "./chai"

function App() {
  const username="with me"

  return (  //can return only 1 element but for learning multiple elements you can use fragments 
    <>
       <Chai/>
       <h2>Chai aur react {username}</h2>
       <p>test para</p>
    </>

  )
}
export default App
