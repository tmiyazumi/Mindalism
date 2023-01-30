# Mindalism - The Modern Journaling Application

This was a project created for [SwampHacks 2023](https://2023.swamphacks.com/) on 1/29/23. Please check out our [DevPost](https://devpost.com/software/mindalism)!

![](https://github.com/Antonio-Villarreal/Mindalism/blob/main/mindalism/Screenshot_20230129_073140.png)

## Table of Contents
- [Inspiration](#inspiration)
- [What is Mindalism](#what-is-mindalism)
- [How we built it](#how-we-built-it)
- [Challenges](#challenges)
- [Accomplishments](#accomplishments)
- [Learnings](#what-we-learned)
- [What's next for Mindalism](#whats-next-for-mindalism)

---

## Inspiration
The common quote "Don't forget to stop and smell the roses" is something undervalued in the 21st century. The focus is centered around being productive and speeding along to the finish line while much of life passes us by. Our project is inspired by this concept of pumping the breaks to note the important moments of life. Mindalism gives personal/daily journaling a modern edge by increasing accessibility and ease of use through Google Cloud's Speech-to-Text capabilities. It has been proven that taking a few minutes a day to reflect on activities and feelings can lead to increased feelings of well-being and fewer depressive symptoms after only one month. As a group of college students ranging from a second year to a fourth year, we understand the struggles with mental health and wanted to create a tool to help others.

## What is Mindalism?
Mindalism is a web application that enables the user to transcribe their thoughts onto our digital journals through the power of Speech-to-Text capabilities. We not only enable them to record their thoughts, experiences, and feelings, but we catalog the history so users can revisit memories, and receive AI-generated summaries about periods of their life plus analytics on sentiment analysis and outlook. We hope to provide the equivalent of a digital photo album of memories, but deliver it in a therapeutic approach seeking to boost people's mental health and well-being.

## How we built it
This application was developed with a full-stack approach to ensure accessibility and ease of use for users at the frontend while maximizing strong technology at the backend. We used React.js, Javascript, Materials UI, apexChart.js to complete the frontend of the application. For the backend, we utilized Python and Flask to complete and use the Google Cloud Speech-to-Text API, OpenAI API, natural language toolkit, PyAudio, and JSON files.

## Challenges
Google Cloud Speech-to-Text API: 
Initially, our first major problem was getting onboarded to the Google Cloud Platform to utilize their Speech-To-Text API to transcribe audio. We faced problems setting up the virtual environment that was able to access the capabilities of GCP, which caused many hours of stack overflow and YouTube videos.

API Limitations: 
We sought to expand our boundaries by maximizing the usage of APIs. We encountered some problems when trying to use sentiment analysis APIs to analyze journal entires. The most complicated issue was setting up the requests to communicate between the frontend and backend to know when to initiate the Speech-To-Text.

JSON formatting: 
Organizing user information and journal entries across large time periods proved to be difficult.

## Accomplishments
- Completing a fully functioning prototype of our idea to bring a modern edge to personal journaling.
- Developing a necessary and impactful project that has the potential to make a difference by addressing real-world problems.
- Working with innovative, trending technologies such as Open AI and GCP’s Speech-to-Text transcription.

## What we learned
We learned the importance of planning and task distribution amongst team members to maximize the time given. We also gained technical experience in languages like JavaScript and Python, learned more about frameworks like Flask and React, and gained exposure to Google Cloud, Speech-to-Text transcribing, Natural Language Toolkit, Open AI, and other APIs.

## What's next for Mindalism?
We initiated the steps to connect our project with Firebase, but ran out of time to completely initiate the setup so focusing on more efficient storage and user authentication would be utmost. Another step would be providing improved sentiment analysis and insights to enable users to be more informed about their experience, outlook, and mindset. Improving the UI for better ease and accessibility for users would be important, especially since we would want to put it on the App Store.
