import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Large Scale',
    text: 'GPT-3 is one of the largest language models to date, with 175 billion parameters, making it exceptionally proficient at understanding and generating text in multiple languages'
  },
  {
    title: 'Natural Language Understanding',
    text: 'GPT-3 excels at comprehending and generating human-like text. It can answer questions, translate languages, create coherent essays, and even hold text-based conversations that appear almost indistinguishable from human-written content'
  },
  {
    title: 'Contextual Understanding',
    text: "One of GPT-3's standout features is its ability to maintain context over a longer span of text. It can follow and respond to multi-turn conversations, ensuring a more coherent and contextually relevant output"
  },
  {
    title: 'Zero-Shot Learning',
    text: 'GPT-3 has the remarkable ability to perform tasks with minimal or even zero prior training. This means it can tackle new tasks without being explicitly trained on them, by understanding natural language prompts and generating appropriate responses.'
  }
]

const features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default features