import './App.css';
import { Provider } from 'react-redux';
import { store } from './components/store/themeReducer'
import { Home,Chat,Contact ,Auth} from './pages';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ChatView from './Section/ChatView';

function App() {

    return (
    <div>
        <div className='max-w-[105rem] mx-auto shadow-sm border-[1px]'>
<Router>
    
    
        <Provider store={store}>
        <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/chat/small/:id' element={<ChatView/>}>
        
        </Route>
        <Route path='/chat/:id' element={<Chat/>}>
        
        </Route>
         
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/auth' element={<Auth/>}/>
        
        </Routes>
        </Provider>

        </Router>
        </div>
    </div>
    );
}

export default App;