import { useState } from 'react'
import './App.css'
import ChatInput from './components/ChatInput'
import Chatmessages from './components/Chatmessages'
import type { messageprops } from './constants/interfaces'
import { Chatbot } from 'supersimpledev'

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

    const [inputText, setInputText] = useState('')

    // FUNCTION TO SEND MESSAGE
    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setChatMessages((prevMessages) => [
            ...prevMessages,
            {
                message: inputText,
                sender: 'user',
                id: `${crypto.randomUUID()}`,
            },
        ])

        const response = Chatbot.getResponse(inputText)

        setTimeout(() => {
            if (response) {
                setChatMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        message: response,
                        sender: 'bot',
                        id: `${crypto.randomUUID()}`,
                    },
                ])
            }
        }, 1500)

        setInputText('')
    }

    return (
        <>
            <div className="w-screen h-screen">
                <ChatInput
                    inputText={inputText}
                    setInputText={setInputText}
                    sendMessage={sendMessage}
                />
                <section>
                    <Chatmessages chatMessages={chatMessages} />
                </section>
            </div>
        </>
    )
}

export default App
