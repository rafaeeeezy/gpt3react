import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const possibility = () => (
    <div className='gpt3__possibility section__padding' id='possibility'>

      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>

      <div className='gpt3__possibility-content'>
        <h4>Try ChatGPT-3 now (Early Access)</h4>
        <h1 className='gradient__text'>Exploring the Capabilities of ChatGPT: Conversations, Questions, and More</h1>
        <p>ChatGPT can engage in text-based conversations, answer questions, provide information, and carry out tasks that involve processing and generating text.  It is a versatile tool for automating text-based interactions and is used in various industries to improve customer service, assist with information retrieval, and even provide entertainment through chat-based applications</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
export default possibility;