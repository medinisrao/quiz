export const data = [
    {id:1,language:'english',quetions:[
        {
            heading:'true or false quetions',
            title:'1. Neil armstrong was the first man to walk on the moon?',
           options:[
            'true',
            'false',
           ],
            answer:['true'],
            inputNumber:1,
            type:'TF',
            qnNumber:1,
            id:1,
            correctAnswer:['true']
        },
        {
            heading:'multiple choice quetion',
            title:'2.Which is the longest river on the earth?',
            options:[
                'niger',
                'nile',
                'indus river',
                'Yukon',
               
            ],
            answer:['nile'],
            inputNumber:1,
            qnNumber:2,
            type:'MCQ',
            id:2,
            correctAnswer:['nile']
        },
        {
            heading:'fill in the blanks',
            title:' 3___________is observed as the world environment day?',
            options:[
            'march 10',
            'june 5',
            'december 9',
            'april 2',
            ],
            inputNumber:1,
            qnNumber:3,
            answer:['june 5'],
            type:'fill in the blanks',
            id:3,
            correctAnswer:['june 5']


        },{
            heading:'multiple input select',
            title:'4.select hooks that are used in React js?',
            options:[
                'useRef',
                'Axios',
                'useReducer',
                'router_dom',
                ],
                inputNumber:2,
                answer:['useRef','useReducer'],
                type:'multiple input',
                qnNumber:4,
                id:4,
                correctAnswer:['useRef','useReducer']

        },{
            heading:'match the following',
            instruction:'Answer is based on your order of selecting the options?',
            leftQuetions:[
                'A.india',
                'B.pakistan',
                'C.south korea',
                'D.spain'
            ],
            options:[
                'islamabad',
                'new Delhi',
                'seoul',
                'madrid'
            ],
            correctAnswer:['new Delhi','islamabad','seoul','madrid'],
            clicked:true,
            id:5,
            type:'multiple choice'


        }]},

    {id:2,language:'kannada',quetions:[
        {
            title:"1. ಕುವೆಂಪು ಅವರ ಜನ್ಮದಿನವನ್ನು 'ವಿಶ್ವ ಮಾನವ' ದಿನವನ್ನಾಗಿ ಆಚರಿಸಲಾಗುತ್ತದೆ",
           options:[
            'true',
            'false',
           ],
            answer:['true'],
            inputNumber:1,
            type:'TF',
            qnNumber:1,
            correctAnswer:['true']
        },
        {
            title:'2. ರಿಸರ್ವ್ ಬ್ಯಾಂಕ್ ಆ ಇಂಡಿಯಾ ರಾಷ್ಟ್ರೀಕೃತವಾದದ್ದು ಯಾವಾಗ?',
            options:[
              '1935',
                '1939',
                '1949',
                '1950',
            ],
            answer:['1949'],
            inputNumber:1,
            qnNumber:2,
            type:'MCQ',
            correctAnswer:['1949']
        },
        {
            title:'3. ಕುವೆಂಪುರವರ ಜನ್ಮಸ್ಥಳ________',
            options:[
            'ಚಿಕ್ಕಮಗಳೂರು',
            'ಕೊಪ್ಪಳ',
            'ರಾಯಚೂರು',
            'ಗದಗ',
            ],
            inputNumber:1,
            qnNumber:3,
          
            answer:['ಚಿಕ್ಕಮಗಳೂರು'],
            type:'fill in the blanks',
            correctAnswer:['ಚಿಕ್ಕಮಗಳೂರು']

        },{
            title:'4. ಸೂರ್ಯ ಪದದ ಸಮಾನಾರ್ಥಕ ಪದ',
            options:[
                'ರವಿ',
                'ಶಶಿ',
                'ನೇಸರ',
                'ಪುಸ್ತಕ',
                ],
                inputNumber:2,
                qnNumber:4,
                answer:['ರವಿ','ನೇಸರ'],
                type:'multiple input',
                correctAnswer:['ರವಿ','ನೇಸರ']

        },
        {
            instruction:'ಉತ್ತರವು ಆಯ್ಕೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ನಿಮ್ಮ ಕ್ರಮವನ್ನು ಆಧರಿಸಿದೆ',
            leftQuetions:[
                'A.ನಾಕುತಂತಿ',
                'B.ಮೂಕಜ್ಜಿಯ ಕನಸುಗಳು',
                'C.ಶ್ರೀ ರಾಮಾಯಣ ದರ್ಶನಂ',
                'D.ಸಮಗ್ರ ಸಾಹಿತ್ಯ'
            ],
            options:[
                
                'ಕುವೆಂಪು',
                'ದಾರಾ ಬೇಂದ್ರೆ',
                'ಶಿವರಾಮ ಕಾರಂತ',
                'ಗಿರೀಶ್ ಕಾರ್ನಾಡ್'
            ],
           correctAnswer:['ದಾರಾ ಬೇಂದ್ರೆ','ಶಿವರಾಮ ಕಾರಂತ','ಕುವೆಂಪು','ಗಿರೀಶ್ ಕಾರ್ನಾಡ್'],
            clicked:true,
            id:5,
            type:'multiple choice',
          
            

        }]},


        {id:3,language:'hindi',quetions:[
            {
                title:'1.मराठी ब्रजबुली नाम से जानी जाती है',
               options:[
                'true',
                'false',
               ],
                answer:['false'],
                inputNumber:1,
                type:'TF',
                qnNumber:1,
                id:1,
                correctAnswer:['false']
            },
            {
                title:'2.भारतवर्ष में हिंदी को आप किस वर्ग में रखेंगे',
                options:[
                    'राजभाषा',
                    'राष्ट्र भाषा',
                    'विभाषा',
                    'तकनीकी भाषा',
                    
    
                   
                ],
                answer:['राजभाषा'],
                inputNumber:1,
                qnNumber:2,
                type:'MCQ',
                id:2,
                correctAnswer:['राजभाषा']
            },
            {
                title:' 3._______दक्षिणी भारत हिन्दी प्रचार सभा का मुख्यालय स्थित है ',
                options:[
                'बंगलौर',
                'चेन्नई',
                'मैसूर',
                'हैदराबाद',
                ],
                inputNumber:1,
                qnNumber:3,
                answer:['चेन्नई'],
                type:'fill in the blanks',
                id:3,
                correctAnswer:['चेन्नई']
    
    
            },{
                title:'4.सूर्य का पर्यायवाची शब्द है',
                options:[
                    'रवि',
                    'शशि',
                    'सूरज',
                    'सितारा',
                    ],
                    inputNumber:2,
                    answer:['रवि','सूरज'],
                    type:'multiple input',
                    qnNumber:4,
                    id:4,
                    correctAnswer:['रवि','सूरज']
    
            },{
                instruction:'उत्तर आपकी पसंद के क्रम पर आधारित है',
                leftQuetions:[
                    'A.हिंदुस्तान',
                    'B.पाकिस्तान',
                    'C.दक्षिण कोरिया',
                    'D.स्पेन'
                ],
                options:[
                    'इस्लामाबाद',
                    'नई दिल्ली',
                    'सोल',
                    'मैड्रिड'
                ],
                correctAnswer:['नई दिल्ली','इस्लामाबाद','सोल','मैड्रिड'],
                clicked:true,
                id:5,
                type:'multiple choice'
    
    
            }]}
    
    
]