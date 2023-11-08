import React from 'react'
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css';

const blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>

      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>

      <div className='gpt3__blog-container'>

        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog01} date="Nov. 8, 2023" text='GPT-3 and Open AI is the future. Let us explore how it is' />
        </div>

        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog02} date="Oct. 17, 2023" text="The Power of ChatGPT: How OpenAI's Language Model Is Transforming Industries" />
          <Article imgUrl={blog03} date="Sept. 6, 2023" text="ChatGPT: Exploring the Power of GPT-3.5 for Natural Language Processing" />
          <Article imgUrl={blog04} date="August 20, 2023" text="Maximizing Productivity: Using ChatGPT for Business Communication" />
          <Article imgUrl={blog05} date="July 29, 2023" text="From Text to Talk: Understanding the Evolution of Chatbots" />
        </div>

      </div>
      
    </div>
  )
}

export default blog