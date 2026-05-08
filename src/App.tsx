import './App.css'
import ChatInput from './components/ChatInput'
import Chatmessages from './components/Chatmessages'

function App() {
    return (
        <>
            <div className="w-screen h-screen">
                <ChatInput />
                <section>
                    <Chatmessages />
                </section>
            </div>
        </>
    )
}

export default App
