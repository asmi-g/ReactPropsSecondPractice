import './App.css';
import Joke from "./Joke"
import jokesData from './jokesData';

/* Change made: Instead of hard coding each joke's properties into an individual JSX component call of <Joke/>, 
a file called jokesData.js was created to store an array of objects, with one property of question(joke setup), and one property of answer(joke punchline).
Then, the array.map() method was used to access each individual item in the array, and equate the value of their question, 
to the setup property in the JSX component of <Joke/>, and the same was done for the answer with the punchline property. What was returned was the jokeElements array,
which stored the jokes that print to the screen */

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.question} punchline={joke.answer}/>
  })
  return(
    <div>
      {jokeElements}
    </div>
  )
}

/*
      <Joke 
        setup="I got my daughter a fridge for her birthday" 
        punchline ="I can't wait to see her face light up when she opens it"
        isPun={false}
        upvotes={10}
        downvotes={2}/>
      
      <Joke 
        setup="How did the hacker escape the police?" 
        punchline= "He just ransomware" 
        isPun={true}/>

      <Joke 
        setup="Why don't pirates travel on mountain roads?" 
        punchline="Scurvy"
        isPun={true}/>

      <Joke 
        setup= "Why do bees stay in the hive during winters?" 
        punchline="Swarm" 
        isPun={true}/>

      <Joke 
        setup="What's the best thing about Switzerland?" 
        punchline="I don't know, but the flag is a big plus!"
        isPun={false}/>

      <Joke 
        punchline = "It's hard to explain puns to kleptomaniacs because they always take things literally"
        isPun={true}/>
 */

export default App;
