import './App.css'
import ChatInput from './components/ChatInput'
import Usermessage from './components/Usermessage'

function App() {
    return (
        <>
            <div className="w-screen h-screen">
                <ChatInput />
                <section>
                    <Usermessage message="hello chat" sender="user" />
                    <Usermessage message="hello chat" sender="bot" />
                    <Usermessage message="hello chat" sender="user" />
                    <Usermessage message="hello chat" sender="bot" />
                </section>
            </div>
        </>
    )
}

export default App
