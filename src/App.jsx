import './App.css';
import { Provider } from 'react-redux';
import { store } from './components/store/themeReducer'
import { Home,Chat,Contact ,Auth} from './pages';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {

    return (
        <Router>
    
    
        <Provider store={store}>
        <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/chat/:id' element={<Chat/>}>
        </Route>
        
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/auth' element={<Auth/>}/>
        
        </Routes>
        </Provider>

        </Router>
    );
}

export default App;