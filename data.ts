import { AppData } from './types';

export const appData: AppData = {
  title: "Eras of AI History: An Exploration",
  author: "Dominik Lukeš",
  eras: [
    {
      id: "prehistory",
      title: "AI Prehistory",
      period: "Until 1930s",
      shortPeriod: "< 1930s",
      description: [
        "We can see the development of some archetypes (Frankestein, Mechanical Turk, adding machines) and early versions of tools (calculus, probability) we will see later. But cannot find a direct developmental links."
      ],
      events: [
        { label: "Early archetypes and philosophical foundations: Golem (Jewish legend), Mechanical Turk (1770), Frankenstein (1818)" },
        { label: "René Descartes (1596-1650) - Mechanism, mind-body dualism" },
        { label: "Gottfried Leibniz (1646-1716) - Symbolic logic, calculus ratiocinator" },
        { label: "Thomas Bayes (1701-1761) - Bayesian probability" },
        { label: "George Boole (1815-1864) - Boolean algebra" },
        { label: "Charles Babbage (1791-1871) - Difference Engine, Analytical Engine" },
        { label: "Ada Lovelace (1815-1852) - First computer program" },
        { label: "Bertrand Russell & Alfred North Whitehead (1910-1913) - 'Principia Mathematica'" }
      ]
    },
    {
      id: "ancient",
      title: "AI Ancient History - Axial Age",
      period: "1936 - 1973",
      shortPeriod: "1936-73",
      description: [
        "Many of the foundational ideas and conceptual structures we recognise today and to which we can trace direct ancestry. Many ideas from many areas (mathematics, logic, neurology, linguistics) coming together or emerging at the same time. Happening in the context of great social and technological upheavals (wars, invention of computers, new societal structures and sources of funding for science).",
        "We can pick arbitrary dates as start (1936 Turing 'On Computable Numbers' or 1943 Mcculloch and Pitts 'On logical calculus immanent in in the ideas of nervous activity' to 1969 Perceptrons or 1973 The Lighthill Report). It also surrounds the turning point namely the coining of the term AI (1956) and the first implementations of various algorithms.",
        "Most of what was written then is still something we can learn from but it's not a place to start. Also, despite the direct links when we look closely, we see as many dissimilarities and discontinuities as similarities."
      ],
      events: [
        { label: "Foundational ideas emerge: 'On Computable Numbers' by Alan Turing (1936)" },
        { label: "'A Mathematical Theory of Communication' by Claude Shannon (1948) - Foundations of information theory" },
        { label: "'A Logical Calculus of Ideas Immanent in Nervous Activity' by McCulloch & Pitts (1943)" },
        { label: "'The Organization of Behavior' by Donald Hebb (1949)" },
        { label: "'Computing Machinery and Intelligence' by Alan Turing (1950)" },
        { label: "'Modes of Meaning' by J.R. Firth (1951) - Contextual theory of meaning" },
        { label: "'Syntactic Structures' by Noam Chomsky (1957) - Transformational generative grammar" },
        { label: "Dartmouth Conference coins 'Artificial Intelligence' (1956)" },
        { label: "'The Perceptron' by Frank Rosenblatt (1958) - Introduces first trainable neural network" },
        { label: "'Perceptrons' by Minsky & Papert (1969)" },
        { label: "Various demo implementations: Checkers (Arthur Samuel), ELIZA (Joseph Weizenbaum), Mark I Perceptron" }
      ]
    },
    {
      id: "middle-ages",
      title: "AI Middle Ages",
      period: "Mid-1970s - Early 1990s",
      shortPeriod: "1970s-90s",
      description: [
        "The end of the great churn of the Axial age. Often given as an example of a period of 'darkness' which is unjust because many things were happening that lay the foundations for later but were much more patchy and subdued (with less funding) than earlier. Saw periods of rises and falls in various areas - expert systems, connectionism, generativist NLP. Most of those ideas developed directly into what we have today but in ways that are mostly of historical interest. Writings from this time are widely cited but not widely read."
      ],
      events: [
        { label: "Patchy progress, less funding: 'The Lighthill Report' (1973)" },
        { label: "Minsky, McCarthy, Simon - Symbolic AI and knowledge representation" },
        { label: "Expert systems (MYCIN, DENDRAL)" },
        { label: "Early machine translation attempts (SYSTRAN)" },
        { label: "Cyc project launched by Douglas Lenat (1984)" },
        { label: "'Learning representations by back-propagating errors' by Rumelhart, Hinton & Williams (1986)" },
        { label: "'Parallel Distributed Processing' by Rumelhart & McClelland (1986) - Foundations of connectionism" }
      ]
    },
    {
      id: "industrial-revolution",
      title: "First AI Industrial Revolution",
      period: "Mid-1990s - 2000s",
      shortPeriod: "1990s-00s",
      description: [
        "This time gave the shape to the type of AI we have today. The symbolic AI failed to produce meaningful gains while stochastic approaches started to bear fruit with first usable image recognition and speech recognition. But each system had to be created separately, we had machines that could learn but lacked computing power, data sets and techniques. The idea of a general AI seemed almost beyond reach. Yet, it revitalised the AI field (called data science or machine learning) and many of the technologies still power the world around us. But despite the direct links, many of the things we take for granted now were not present.",
        "During this time, AI was a collection of ML algorithms that had little in common powering things like spam filters, recommendation engines, speech recognition, basic NLP (NER, LSA...). We also saw the launch of Roomba but overall robotics progress was slow."
      ],
      events: [
        { label: "Stochastic approaches bear fruit: 'Long Short-Term Memory' by Hochreiter & Schmidhuber (1997)" },
        { label: "Statistical machine translation" },
        { label: "Hidden Markov Models for speech recognition" },
        { label: "NLP advancements - Named Entity Recognition (NER), Latent Semantic Analysis (LSA)" },
        { label: "Recommendation engines (e.g., Amazon, Netflix)" },
        { label: "Sentiment analysis and opinion mining" },
        { label: "Information retrieval and search engine improvements" }
      ]
    },
    {
      id: "deep-learning",
      title: "Deep Learning Revolution",
      period: "2012 - 2017",
      shortPeriod: "2012-17",
      description: [
        "In 2012 the AlexNet paper was published that showed the viability of neural networks (until then thought a dead end by everyone but a committed few) by using GPUs and training on ImageNet, the first publicly available data set for training and testing. Showed the future: data sets + optimised hardware + neural nets with clever techniques. The term 'deep learning' becoming a sign of the age to distinguish itself from earlier. Many other developments Mikolov's embeddings, Karpathy's unreasonable effectiveness of RNNs, CNNs, GANs, RL, etc.",
        "Also, a huge improvement in quality and access to tech like image or speech recognition or machine translation. Release of Siri, Alexa and Google Home. Google Translate became usable, dictation features in Google Docs were more widely available, TTS voices were becoming better. A lot of excitement but also a bit of a stalling (neither Alexa nor Siri were improving at much of a pace). Self-driving cars failed to meet all of their predictions (despite many useful improvements to driving) and the Roomba of 2012 was pretty much the same as that of 2002. Both are still limited. GANs showed promise in image generation but not much improvement. Google Photos introduced image recognition but was not improving fast. AI was also powering computational photography which is the one area where Apple shone.",
        "Much of the AI of the earlier age persisted as data science in things like Netflix or Amazon recommendations."
      ],
      events: [
        { label: "Neural networks prove viable: 'ImageNet Classification with Deep CNNs' (AlexNet) by Krizhevsky et al. (2012)" },
        { label: "'Efficient Estimation of Word Representations in Vector Space' by Mikolov et al. (2013)" },
        { label: "'Sequence to Sequence Learning with Neural Networks' by Sutskever et al. (2014)" },
        { label: "'Generative Adversarial Networks' by Goodfellow et al. (2014)" },
        { label: "'The Unreasonable Effectiveness of Recurrent Neural Networks' by Karpathy (2015)" }
      ]
    },
    {
      id: "transformer",
      title: "Transformer Revolution",
      period: "2017 - 2022",
      shortPeriod: "2017-22",
      description: [
        "Started not with a bang but an unassuming paper in 2017 that did not even have Transformer in the name. But transformers turned out to be the tech that would take over most areas where neural nets were used and showed great promise.",
        "This period had some key milestones: 1) GPT2 release - 2019 - showed what this can do. 2) LLMs are few shot learners - 2020 - GPT3 and the start of the prompt engineering revolution (which could deserve its own timeline with things like the discovery of CoT, etc.) 3) InstructGPT - 2022 - successful implementation of RLHF that enabled the release of a usable chatbot aligned to the needs of a conversation partner.",
        "We also saw the start of a compute divide but also open source efforts like Eleuther AI, etc. In parallel, we had the diffusion revolution with DALL-E, Stable Diffusion and Midjourney blowing our minds. This is the best documented period of AI history with most of the developments accessible."
      ],
      events: [
        { label: "Transformers dominate AI: 'Attention Is All You Need' by Vaswani et al. (2017)" },
        { label: "'Improving Language Understanding by Generative Pre-Training' (GPT) by Radford et al. (2018)" },
        { label: "'BERT - Pre-training of Deep Bidirectional Transformers' by Devlin et al. (2018)" },
        { label: "'Language Models are Unsupervised Multitask Learners' (GPT-2) by Radford et al. (2019)" },
        { label: "'Language Models are Few-Shot Learners' (GPT-3) by Brown et al. (2020)" },
        { label: "'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models' by Wei et al. (2022)" },
        { label: "'Retrieval-Augmented Generation' by Lewis et al. (2020)" },
        { label: "'InstructGPT' by Ouyang et al. (2022)" }
      ]
    },
    {
      id: "pc-age",
      title: "PC (Post ChatGPT) Age",
      period: "2023 - Present",
      shortPeriod: "2023+",
      description: [
        "The year 2023 would deserve its own history with things like GPT4, Claude 2, Lllama 2, Gemini, Mistral, etc. Rise of MoEs, multimodality, long context windows, AI APIs, etc. But this would really be more 'political science' than history."
      ],
      events: [
        { label: "Rapid advancements in AI capabilities: ChatGPT launch (2022)" },
        { label: "'Constitutional AI - Harmlessness from AI Feedback' by Anthropic (2022)" },
        { label: "GPT-4 release by OpenAI (2023)" },
        { label: "Claude 2 release by Anthropic (2023)" },
        { label: "'Direct Preference Optimization' by Stanford University (2023)" },
        { label: "'Towards Monosemanticity' by Elhage et al. (2023)" }
      ]
    }
  ]
};