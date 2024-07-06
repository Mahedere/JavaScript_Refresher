import image from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'
const reactDescriptions=['Fundamental','Crucial','Core']
function getRandomInt(max){
  return Math.floor(Math.random()*(max+1))
}
function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt='...'/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function Header() {
  const description=reactDescriptions[getRandomInt(2)]
  return (
    <header>
      <img src={image} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>)
}
function App() {
  return (
    <div>
<Header/>
      <main>
        <section id='core-concepts' title=''>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title="Components" description="The core UI building block" image={componentsImg}/>
          <CoreConcept title="Props" description=""/>
          <CoreConcept/>
          <CoreConcept/>
          <CoreConcept/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
