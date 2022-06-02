import React, { useEffect, useState } from 'react';


import { Button } from './button';
import { Card } from './card';
import { RegisterInput } from './registerInput';
import { RadioInput } from './radioInput';
import { UploadBtn } from './uploadBtn';


import avatar1 from './assests/ellipse1.svg';
import avatar2 from './assests/Ellipse2.svg';
import avatar3 from './assests/Ellipse3.svg';
import avatar4 from './assests/Ellipse4.svg';
import avatar5 from './assests/Ellipse5.svg';
import avatar6 from './assests/Ellipse6.svg';
import logo from './assests/logo.png';
import successImage from './assests/success-image.svg';

let arrCards = [
  {
    image: avatar6,
    name: 'Salvador Stewart Flynn Thomas...',
    pos: 'Frontend Developer Frontend ...',
    mail: 'frontend_develop@gmail.com',
    phone: '+38 (098) 278 44 24',
  },
  {
    image: avatar1,
    name: 'Takamaru Ayako Jurrien',
    pos: 'Lead Independent Director',
    mail: 'Takamuru@gmail.com',
    phone: '+38 (098) 278 90 24',
  },
  {
    image: avatar2,
    name: 'Ilya',
    pos: 'Co-Founder and CEO',
    mail: 'Ilya_founder@gmail.com',
    phone: '+38 (098) 235 44 24',
  },
  {
    image: avatar3,
    name: 'Alexandre',
    pos: 'Lead Independent Director',
    mail: 'Alexandr_develop@gmail.com',
    phone: '+38 (098) 198 44 24',
  },
  {
    image: avatar5,
    name: 'Simon',
    pos: 'President of Commerce',
    mail: ' Simon@gmail.com',
    phone: '+38 (098) 278 44 00',
  },
  {
    image: avatar4,
    name: 'Winny',
    pos: 'Former Senior Director',
    mail: 'Winny_develop@gmail.com',
    phone: '+38 (098) 278 22 88',
  },
];

function App() {
  const [readyInputs, setReadyInputs] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [mailValue, setMailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [radio, setRadio] = useState(false);
  const [uploadImageInputValue, setUploadImageInputValue] = useState('')

  const regName = /\b[a-zA-Z]{2,}\b \b[a-zA-Z]{2,}\b/;
  const regMail = /[\w\d-]+[[\w\d-.][\w\d-]+@gmail.com$/;
  const regPhone = /^\+38[0-9]{10}$/;
  const regUploadImageInput = /\w+/

  const testPhone = regPhone.test(phoneValue);
  const testName = regName.test(nameValue);
  const testMail = regMail.test(mailValue);
  const testUploadImageInput = regUploadImageInput.test(uploadImageInputValue)


  useEffect(() => {
    if (
      !!nameValue &&
      !!mailValue &&

      !!phoneValue &&
      radio !== false &&
      testPhone &&
      testName &&
      testMail 
    
    ) {
      setReadyInputs(true);
    } else {
      setReadyInputs(false);
    }
  }, [
    readyInputs,
    nameValue,
    mailValue,
    phoneValue,
    radio,
    testPhone,
    testName,
    testMail

  ]);

let somethingfunc = async (e) => {
  e.preventDefault();

  let response = await fetch('/article/formdata/post/user-avatar', {
    method: 'POST',
    body: new FormData(this)
  });

  let result = await response.json();

  alert(result.message);
};




  return (
    <div className='wrapper'>
      <header>
        <div>
          <img className='logo' src={logo} alt='logo' />
        </div>
        <div>
          <a href='#users'><Button backgroundColor='#F4E041' text='Users' /></a>
          <a href='#signUp'><Button backgroundColor='#F4E041' text='Sign up' /></a>
        </div>
      </header>
      <main>
        <section>
          <div className='home homeBg'>
            <div>
              <h1>Test assignment for front-end developer</h1>
              <p>
                What defines a good front-end developer is one that has skilled
                knowledge of HTML, CSS, JS with a vast understanding of User
                design thinking as they'll be building web interfaces with
                accessibility in mind. They should also be excited to learn, as
                the world of Front-End Development keeps evolving.
              </p>
              <a href='#signUp'><Button backgroundColor='#F4E041' text='Sign up' /></a>
            </div>
          </div>
        </section>
        <section id='users'>
          <h2>Working with GET request</h2>
          <div className='card-box'>
            {arrCards.map((item) => (
              <Card
                image={item.image}
                name={item.name}
                pos={item.pos}
                mail={item.mail}
                phone={item.phone}
                margin={item.margin}
              />
            ))}
          </div>
          <div className='show-more'>
            <Button backgroundColor='#F4E041' text='Show more' />
          </div>
        </section>
        <section id='signUp'>
          <h2>Working with POST request</h2>
          <div className='register-form-box'>
            <form onSubmit={somethingfunc} className='registerForm'>
              <div className='register-inputs'>
                <RegisterInput
                  test={testName}
                  value={nameValue}
                  placeholder='Your name'
                  helperText='Ivan Ivanov'
                  setValue={(event) => setNameValue(event.target.value)}
                />
                <RegisterInput
                  test={testMail}
                  value={mailValue}
                  placeholder='Email'
                  helperText='example.me@gmail.com'
                  setValue={(event) => setMailValue(event.target.value)}
                />
                <RegisterInput
                  test={testPhone}
                  value={phoneValue}
                  placeholder='Phone'
                  helperText='+38(XXX) XXX-XX-XX'
                  setValue={(event) => setPhoneValue(event.target.value)}
                />
              </div>
              <div className='select-position'>
                <p>Select your position</p>
                <div className='inputs-radio'>
                  <RadioInput value='Frontend developer' radio={radio} setRadio={(e) => {setRadio(e.target.value)}}/>
                  <RadioInput value='Backend developer' radio={radio} setRadio={(e) => {setRadio(e.target.value)}}/>
                  <RadioInput value='Designer' radio={radio} setRadio={(e) => {setRadio(e.target.value)}}/>
                  <RadioInput value='QA' radio={radio} setRadio={(e) => {setRadio(e.target.value)}}/>
                </div>
              </div>
       
              <div className='upload-photo'>
            
      <UploadBtn inputTest={testUploadImageInput} value={uploadImageInputValue}/>
               <RegisterInput 
               test={testUploadImageInput}
                  value={uploadImageInputValue}
                  setValue={(event) => setUploadImageInputValue(event.target.value)} placeholder='Upload your photo'/>
              </div>
              <Button
                alignSelf='center'
                text='Sign up'
                color='#FFFFFFDE'
                disabled={readyInputs ? false : true}
                backgroundColor={readyInputs ? '#F4E041' : '#B4B4B4'}
              
              />
            </form>
          </div>
        </section>
        <section className='successfuly-registered'>
          <h2>User successfully registered</h2>
          <img
            src={successImage}
            alt='successImage'
            className='success-image'
          />
        </section>
      </main>
    </div>
  );
}

export default App;
