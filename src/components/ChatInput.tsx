import { Input } from './ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { messageprops } from '@/constants/interfaces'
import { Chatbot, chatbot } from 'supersimpledev'

type Props = {
    setChatMessages: React.Dispatch<React.SetStateAction<messageprops[]>>
    inputText: string
    setInputText: React.Dispatch<React.SetStateAction<string>>
}

const ChatInput = ({ setChatMessages, inputText, setInputText }: Props) => {
    
    // FUNCTION TO SAVE INPUT
    const saveInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

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
        console.log(response)

        setInputText('')
    }

    return (
        <div className="flex justify-center items-center">
            <Card className="w-full max-w-lg mt-3">
                <CardHeader>
                    <CardTitle>Welcome to chatbot</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={sendMessage}>
                        <div className="flex justify-between items-center gap-6">
                            <div className="grid gap-2 w-150">
                                <Input
                                    id="chatmessage"
                                    type="text"
                                    placeholder="Enter your message"
                                    value={inputText}
                                    onChange={saveInput}
                                    required
                                />
                            </div>
                            <Button type="submit" className="max-w-md">
                                Send
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default ChatInput
