import Usermessage from './Usermessage'

const Chatmessages = () => {
    const chatmessages = [
        {
            message: 'hello chat',
            sender: 'user',
        },
        {
            message: 'hello sir',
            sender: 'bot',
        },
        {
            message: 'how"s the weather today?',
            sender: 'user',
        },
        {
            message: 'Its cloudy sir',
            sender: 'bot',
        },
    ]
    return (
        <>
            {chatmessages.map((chatmessage) => (
                <Usermessage
                    message={chatmessage.message}
                    sender={chatmessage.sender}
                />
            ))}
        </>
    )
}

export default Chatmessages
