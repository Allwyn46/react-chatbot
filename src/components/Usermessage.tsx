import botprofile from '../assets/bot.jpeg'
import userprofile from '../assets/profile-remove.png'
import type { messageprops } from '@/constants/interfaces'

const Usermessage = ({ message, sender }: messageprops) => {
    return (
        <div className="">
            {sender === 'bot' ? (
                <div className="flex justify-start items-center w-full">
                    <img src={botprofile} alt="" width="100px" />
                    <div className="message-blue">
                        <p className="message-content">{message}</p>
                    </div>
                </div>
            ) : (
                <div className="flex justify-end items-center gap-2 w-full">
                    <div className="message-orange">
                        <p className="message-content">{message}</p>
                    </div>
                    <img src={userprofile} alt="" width="100px" />
                </div>
            )}
        </div>
    )
}

export default Usermessage
