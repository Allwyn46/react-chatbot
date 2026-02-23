import React from 'react'
import { Input } from '../components/ui/input'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const ChatInput = () => {
    return (
        <div className='flex justify-center items-center'>
            <Card className="w-full max-w-lg mt-3">
                <CardHeader>
                    <CardTitle>Welcome to chatbot</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex justify-between items-center gap-6">
                            <div className="grid gap-2">
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