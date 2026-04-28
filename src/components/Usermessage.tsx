import userprofile from '../assets/profile.jpg'

const Usermessage = () => {
    return (
        <div className="flex justify-between items-center max-w-75">
            <div>
                <h1>hello</h1>
            </div>
            <div>
                <img src={userprofile} alt="" width="100px" />
            </div>
        </div>
    )
}

export default Usermessage
