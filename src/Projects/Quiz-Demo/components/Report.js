import React from 'react'

const Report = ({score,quetionsLength,userSelectedQuetions}) => {
    const [answerPer,setAnswerPer] = React.useState(0)
    const [wrongPer,setWrongPer] = React.useState(0)
   let correctAnswer=[]

   
    React.useEffect(()=>{
        let percentage = parseFloat(score)/parseFloat(quetionsLength)*100;
        setAnswerPer(percentage)
        setWrongPer(100-percentage)
      

    },[])

    let answers=userSelectedQuetions[0].quetions.map((item)=>{
        return item.correctAnswer
    })

   
    return <div className='report-main'>
          <div className='top'>
            out of <span>{quetionsLength}</span> quetions you answered <span>{score}</span> right
        </div>

                <div className='answers'>
                    <h4 className='crt-title'>Correct answers are:</h4>
                {answers.map((items, index) => {
                        return (
                        <ul type='none'>  
                            <li className='ans'>  {index+1} . {`${items}`} </li>
                            
                        </ul>
                        );
                    })}
                </div>

        
      
        <div className='pie' style={{background:`conic-gradient(green 0% ${answerPer}%, red ${answerPer}% 100%)`}}>

        </div>
        
       <div className='pie-wrapper'>
            <div className='wrong-container'>
                <div className='check-box wr'></div>
                <span>wrong answeres</span>
            </div>
            <div className='right-container'>
                <div className='check-box rt'></div>
                <span>right answeres</span>
            </div>

        </div>
    </div>
}

export default Report

// background: conic-gradient(#FF5722 0% 50%, #2196F3 50% 100%);
