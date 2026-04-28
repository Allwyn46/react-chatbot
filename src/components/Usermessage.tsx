import userprofile from '../assets/profile.jpg'
import type { messageprops } from '@/constants/interfaces'

const Usermessage = ({ message }: messageprops) => {
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
