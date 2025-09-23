# Quizzical App

**The final project from Scrimba platform (React Basics Course) (solo project)** <br/>
A responsive, interactive trivia quiz built with React that fetches questions from the Open Trivia Database API. Users can answer multiple-choice questions, check their results, and play again.

Check out the live version here:  
👉 [Quizzical App Live](https://quizzical-app-sc-solo.netlify.app/)
<br/>
👌 [Figma Design](https://www.figma.com/proto/hZ2cic7sZbXUIG9tzOL2DR/Quizzical-App?node-id=8-2&p=f&t=mckMGCb2LHPZsYEX-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

---

## ✨ Features

- **Dynamic quiz data** fetched from the Open Trivia Database (OpenTDB) API.
- **React Router** Navigation Between pages with Dynamic Routing && Nested Routes.
- **Automatic HTML entity decoding** for clean question and answer text.
- **Responsive design** for mobile and desktop.

---

## 🛠 Technologies Used

- [React](https://react.dev/) (functional components, hooks)
- [Axios](https://axios-http.com/) for API requests
- HTML `<textarea>` decoding trick for HTML entities
- CSS Flexbox + media queries for layout
- Netlify for deployment

---

## 🎯 How It Works

1. On load, the app fetches questions from the OpenTDB API.
2. It stores each question with shuffled answers (correct + incorrect mixed).
3. The user selects one answer per question.
4. Once all are answered, the **Check answers** button activates.
5. Clicking it:
   - Calculates the score
   - Highlights correct answers in green, wrong in red
   - Displays score and **New Quiz** button

Happy quizzing! 🎉
