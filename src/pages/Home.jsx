import { Navbar, Chat, SideBar,Button } from "../components"



const Home = () => {
    return (
   
        <div className="home-height overflow-auto select-none dark:bg-slate-600 pt-4">
            <Button />
            <SideBar />

            <Navbar />
            <Chat />
            <Chat />
            <Chat />
        </div>
    )
}

export default Home