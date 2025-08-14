# Quizzical App

**The final project from Scrimba platform (React Basics Course) (solo project)**
A responsive, interactive trivia quiz built with React that fetches questions from the Open Trivia Database API. Users can answer multiple-choice questions, check their results, and play again.

## 📝 Demo

Check out the live version here:  
👉 [Quizzical App Live](https://quizzical-app-sc.netlify.app/)

---

## ✨ Features

- **Dynamic quiz data** fetched from the Open Trivia Database (OpenTDB) API
- **Multiple-choice questions** with randomized answer order
- **Automatic HTML entity decoding** for clean question and answer text
- **Selection tracking**: Highlights chosen answers before submission
- **Result feedback**: Correct answers in green, wrong in red
- **Score tracking** with replay option
- **Responsive design** for mobile and desktop

---

## 🛠 Technologies Used

- [React](https://react.dev/) (functional components, hooks)
- [Axios](https://axios-http.com/) for API requests
- HTML `<textarea>` decoding trick for HTML entities
- CSS Flexbox + media queries for layout

---

## 📂 Project Structure

```
src/
├── components/
│   └── Questions.jsx     # Main quiz logic and UI
├── assets/
│   └── intro-page.png    # Background image
├── App.jsx               # Root component
├── index.jsx             # Entry point
└── styles.css            # Global styles
```

## 🎯 How It Works

1. On load, the app fetches **7 sports trivia questions** (medium difficulty) from the OpenTDB API.
2. It stores each question with shuffled answers (correct + incorrect mixed).
3. The user selects one answer per question.
4. Once all are answered, the **Check answers** button activates.
5. Clicking it:
   - Calculates the score
   - Highlights correct answers in green, wrong in red
   - Displays score and **New Quiz** button

---

## 🐞 Troubleshooting

- **Answers not highlighting or score incorrect**

  - Make sure all questions have a selected answer before pressing **Check answers**

- **HTML entities like `&amp;` showing**
  - Use the `removeCharacters` function with a `<textarea>` decoding trick

---

Happy quizzing! 🎉
