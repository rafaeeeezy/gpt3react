import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const header = () => {
  return (

    <div className="gpt3__header section__padding" id="home">

      <div className="gpt3__header-content">

        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>

        <p>GPT-3, which stands for "Generative Pre-trained Transformer 3," is a state-of-the-art artificial intelligence language model developed by OpenAI. It represents a significant advancement in natural language processing and understanding, building upon its predecessors, GPT-1 and GPT-2.</p>

        <div className="gpt3__header-content__input">

          <input type="email" placeholder='Your Email Address'/>

          <button type='button'>Get Started</button>

        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people requested access a visit in the last 24 hours</p>
        </div>       

      </div>

      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>

    </div>
  )
}

export default header