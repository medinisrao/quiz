import React from 'react'
import { useState } from 'react'
import Quiz from './components/Quiz'
import Login from './components/Login'
import { data } from './components/data'
import { useNavigate } from 'react-router-dom'
import './App.css'


const Home = () => {
    let navigate = useNavigate()
   const [userName,setUserName] = useState('')
   const [selectedLang,setSelectedLang] = useState('english')
    const [IsUserLogged,setIsUserLogged] = useState(false)
    const [initialQuetions,setInitialQuetions] = useState(data)
    // const [userSelectedQuetions,setUserSelectedQuetions] = useState([])
    const [selectedGender,setSelectedGender] = useState('male')
    const [age,setAge] = useState(0)
    const [error,setError] = useState(false)

    const handleQuizLogic = ()=>{
       
        console.log('quiz logic')
        setIsUserLogged(true)
        getUserChoosenQuetions(initialQuetions,selectedLang)
        navigate("/quizPage")
        
       
    }
    const displayError = ()=>{
        alert('name cannot be blank')
        setError(true)
        
    }
    const getUserChoosenQuetions = (quetions,language)=>{
        let tempQuetions=quetions.filter((item)=>item.language===language)
        // setUserSelectedQuetions(tempQuetions)
       localStorage.setItem('quetions',JSON.stringify(tempQuetions))
       
    }


    return <>
        {IsUserLogged ? 
        <Quiz  
       >

        </Quiz> : 
        <Login 
        userName={userName}
        setUserName={setUserName}
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
        handleQuizLogic={handleQuizLogic}
        displayError={displayError}
        setIsUserLogged={setIsUserLogged}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        age={age} 
        setAge={setAge}
        error={error}
        >
        </Login>}
    </>
}

export default Home
