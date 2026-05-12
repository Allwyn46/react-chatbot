import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput'
import Chatmessages from './components/Chatmessages'
import type { messageprops } from './constants/interfaces'

function App() {
    const [chatMessages, setChatMessages] = useState<messageprops[]>([
        {
            message: 'hello chat',
            sender: 'user',
            id: `${crypto.randomUUID()}`,
        },
        {
            message: 'hello sir',
            sender: 'bot',
            id: `${crypto.randomUUID()}`,
        },
        {
            message: 'how"s the weather today?',
            sender: 'user',
            id: `${crypto.randomUUID()}`,
        },
        {
            message: 'Its cloudy sir',
            sender: 'bot',
            id: `${crypto.randomUUID()}`,
        },
    ])

    return (
        <>
            <div className="w-screen h-screen">
                <ChatInput setChatMessages={setChatMessages}/>
                <section>
                    <Chatmessages chatMessages={chatMessages}/>
                </section>
            </div>
        </>
    )
}

export default App
