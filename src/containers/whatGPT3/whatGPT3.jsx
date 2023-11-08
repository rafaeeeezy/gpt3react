import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const whatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>

      <div className='gpt3_whatgpt3-feature'>
        <Feature title='What is GPT-3' text='GPT-3 is a powerful and versatile language model that has garnered widespread attention and acclaim for its ability to generate human-like text and understand the context of the input it receive' />
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature title='Chatbots' text='GPT-3 is used to build intelligent chatbots and virtual assistants that can understand and respond to user queries conversationally'/>

        <Feature title='Knowledgebase' text='GPT-3 can certainly be used to create and interact with knowledge bases, making information retrieval and dissemination more accessible and user-friendly'/>

        <Feature title='Education' text='GPT-3 can provide explanations, summaries, and answers to help students with their learning and homework'/>
      </div>
      
    </div>
  )
}

export default whatGPT3