import './App.css'
import ChatInput from './components/ChatInput'
import Usermessage from './components/Usermessage'

function App() {
    return (
        <>
            <div className="w-screen h-screen">
                <ChatInput />
                <section className="flex justify-center items-center">
                    <Usermessage message="hello chat" />
                </section>
            </div>
        </>
    )
}

export default App
