import userprofile from '../assets/profile.jpg'
import botprofile from '../assets/bot.jpeg'
import type { messageprops } from '@/constants/interfaces'

const Usermessage = ({ message, sender }: messageprops) => {
    return (
        <div className="flex justify-between items-center max-w-75">
            {sender === 'bot' ? (
                <>
                    <div>
                        <img src={botprofile} alt="" width="100px" />
                    </div>
                    <div>
                        <h1>{message}</h1>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <h1>{message}</h1>
                    </div>
                    <div>
                        <img src={userprofile} alt="" width="100px" />
                    </div>
                </>
            )}
        </div>
    )
}

export default Usermessage
