import { Input } from './ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { messageprops } from '@/constants/interfaces'

type Props = {
    setChatMessages: React.Dispatch<React.SetStateAction<messageprops[]>>
}

const ChatInput = ({ setChatMessages }: Props) => {
    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        setChatMessages((prevMessages) => [
            ...prevMessages,
            {
                message: 'hello from the other side',
                sender: 'user',
                id: `${crypto.randomUUID()}`,
            },
        ])
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
