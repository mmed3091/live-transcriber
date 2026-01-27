# Multilingual Live Transcriber (MLT)

MLT is a real-time speech-to-text tool that allows users to transcribe audio in multiple languages. It captures and transcribes audio instantly, making it ideal for language learning, live events, or as an accessibility tool. 

---
## Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Deepgram](https://img.shields.io/badge/Deepgram-0A0A0A?style=for-the-badge&logo=deepgram&logoColor=white)

---
## Key Features

- Real-time speech-to-text transcription
- Supports multiple languages: English, Spanish, French, German, Hindi, Russian, Portuguese, Japanese, Italian, and Dutch)
- Live audio streaming via Deepgram API
- Responsive React-based UI

---
## How It Works
1. User grants microphone access and speaks into the application in any of the above languages
2. Audio is streamed to Deepgram via WebSockets in real-time
3. Deepgram transcribes the speech into text and sends it back to the client
4. The transcription is displayed live in the UI
5. User can export the transcription using the provided button as a text file



---
## Dependencies
Create a `.env` file in the project root with the following variable:
```
VITE_API_KEY=your_deepgram_api_key_here
```

---
## How to Run

Clone the repository
```
git clone https://github.com/mmed3091/live-transcriber.git
```
Navigate to the project root
```
cd live-transcriber
```

Install dependencies

``` 
npm install
```

Start the development server

``` 
npm run dev
 ```

Open browser and navigate to:

```
http://localhost:5173/
```

---
## Future Improvements

- User authentication (login, signup, and session management)
- Persist transcriptions and user data for history and retrieval
- Add rate limiting to control API usage and prevent abuse
  

---
## Skills Demonstrated
- Building a responsive UI with React and TypeScript
- WebSocket implementation for low-latency streaming
- Consuming Deepgram API for real-time speech-to-text
- Project setup and build tooling with Vite
- Clear documentation and code organisation








