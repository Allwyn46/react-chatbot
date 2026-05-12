import type { messageprops } from '@/constants/interfaces'
import Usermessage from './Usermessage'

type Props = {
    chatMessages: messageprops[]
}

const Chatmessages = ({ chatMessages }: Props) => {
    return (
        <>
            {chatMessages.map((chatmessage, index) => (
                <Usermessage
                    message={chatmessage.message}
                    sender={chatmessage.sender}
                    id={chatmessage.id}
                    key={index}
                />
            ))}
        </>
    )
}

export default Chatmessages
