import { Input } from './ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Props = {
    inputText: string
    setInputText: React.Dispatch<React.SetStateAction<string>>
    sendMessage: (e: React.FormEvent<HTMLFormElement>) => void
}

const ChatInput = ({ inputText, setInputText, sendMessage }: Props) => {
    
    // FUNCTION TO SAVE INPUT
    const saveInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
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
