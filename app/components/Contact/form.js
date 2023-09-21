import React, { useRef, useState } from 'react';
import { alertMessage } from '@/lib/atoms';
import emailjs from '@emailjs/browser';
import { useAtom } from 'jotai';

export const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useAtom(alertMessage);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nthx8fl', 'template_hqf31n4', form.current, 'ToYJ92mvbEoBFTcFW')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          setMessage("Order Received ⛾ ")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form_container flex flex-col p-4">
      <p className='font-poppins text-sm md:text-base bg-mist rounded-xl p-4'>
        get in touch with me through email: <a href="mailto:wytseng113@gmail.com" className='underline font-poppins'>wytseng113@gmail.com</a>
      </p>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
