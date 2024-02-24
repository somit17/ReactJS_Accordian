import './App.css';

function App() {
  return (
    <><body class="body" id="body__wrapper">
    <div class="page__wrapper">
      <h1 class="heading">Power of HTML</h1>
      <div class="accordion">
        <details>
          <summary>What are some random questions to ask?</summary>
          <p>That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question to ask friends, family and people you want to get to know better.</p>
        </details>
        <details>
          <summary>Do you include common questions?</summary>
          <p>This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator are questions that elicit a bit more information that a typical common question.</p>
        </details>
        <details>
          <summary>Can I use this for 21 questions?</summary>
          <p>Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated and you'll instantly have a random list of 21 questions to use. If you want to curate the 21 questions to use, you can spend some time on the generator until you find 21 questions you like, then use those the next time you play the 21 questions game.</p>
        </details>
        <details>
          <summary>Are these questions for girls or for boys?</summary>
          <p>The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with). These questions were created to elicit interesting and thoughtful answers and aren't specific to a specific type of person.</p>
        </details>
      </div>
    </div>
  </body></>
  );
}

export default App;
