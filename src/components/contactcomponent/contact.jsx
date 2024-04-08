import '../contactcomponent/contact.css';
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import React,{useState} from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
    
const sendEmail = (e) => {
  e.preventDefault();
  

  emailjs
    .sendForm('service_1op4aas', 'template_k6mrn5r', form.current, {
      publicKey: 'bLuN6NVNSeruxWfzB',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
        
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};
     
      
  return (
<section id='contact'>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className="container contact__container">
    <div className="contact__options">
      <article className="contact_option">
      <MdOutlineMail className='contact__option-icon' />
        <h4>Email</h4>
        <h5>neharathore25088@gmail.com</h5>
        <a href="neharathore25088@gmail.com" target='_blank'>Send a messege</a>
      </article>


      <article className="contact_option">
      <RiMessengerLine className='contact__option-icon'/>
        <h4>messenger</h4>
        <h5>egatortutorials</h5>
        <a href="https://m.me//ernest.achiever" target='_blank'>Send a messege</a>
      </article>

      <article className="contact_option">
      <BsWhatsapp className='contact__option-icon' />
        <h4>WhatsApp</h4>
        <h5>+123456789</h5>
        <a href="https://api.whatshapp.com/semd?phone+23355733888" target='_blank'>Send a messege</a>
      </article>
    </div>
    {/*end of contact senction*/}

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name'  value={name} onChange={(e) => setName(e.target.value)}  required/>
      <input type="email" name='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <textarea name="messege" rows="7" placeholder='Your Messege'  value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
      <button type='submit' className='btn btn-primary'>Send Messege</button>
    </form>
  </div>
</section> 
 )
}

export default Contact