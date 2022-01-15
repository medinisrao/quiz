import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Quiz from './components/Quiz'

const App = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home></Home>}></Route>
                <Route exact path='/quizPage' element={<Quiz></Quiz>}></Route>
            </Routes>
        </BrowserRouter>

    </>
}

export default App
