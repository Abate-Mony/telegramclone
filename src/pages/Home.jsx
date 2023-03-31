import { Navbar, Chat, SideBar, Button } from "../components"

import Users from '../Constants/User'

const Home = () => {
    return (

        <div className="home-height overflow-auto select-none dark:bg-slate-600 pt-4">
            <Button />
            <SideBar />
            {
                Users?.map((user, idx) => <Chat user={user} key={idx}/>)}
            <Navbar />

        </div>
    )
}

export default Home