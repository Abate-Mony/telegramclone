import { createStore } from "redux"
const initialState = {
        bool: true,
        sidebar: false,
        payload: {
            print: "hello sand"
        }
    }
    // const [toogleSideBar,setToggleSideBar] = useState(false)
const handleClassToggle = (initialState) => {
    return {...initialState, sidebar: !initialState.sidebar }
}
const changeTheme = () => {

    // if (localStorage.theme === 'dark' || (!('theme' in localStorage)
    // && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark')
    //   } else {
    //     document.documentElement.classList.remove('dark')
    //   }
    const timeout = setTimeout(() => {
        clearTimeout(timeout)
        document.documentElement.classList.toggle('dark')
    }, 450);
}
const themeReducer = (initialState, action) => {
    switch (action.type) {
        case "theme-toggle":
            changeTheme()
            return {...initialState, bool: !initialState.bool }
        case "side-bar":
            return {...initialState, sidebar: !initialState.sidebar }
        default:
            return initialState
    }
}
export const store = createStore(themeReducer, initialState)