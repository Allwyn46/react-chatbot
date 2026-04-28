import userprofile from '../assets/profile.jpg'
import botprofile from '../assets/bot.jpeg'
import type { messageprops } from '@/constants/interfaces'

const Usermessage = ({ message, sender }: messageprops) => {
    if (sender === 'bot') {
        return (
            <div className="flex justify-between items-center max-w-75">
                <div>
                    <img src={botprofile} alt="" width="100px" />
                </div>
                <div>
                    <h1>{message}</h1>
                </div>
            </div>
        )
    }
    return (
        <div className="flex justify-between items-center max-w-75">
            <div>
                <h1>{message}</h1>
            </div>
            <div>
                <img src={userprofile} alt="" width="100px" />
            </div>
        </div>
    )
}

export default Usermessage
