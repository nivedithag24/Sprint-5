import "./App.css";
import Greet from './compo/greet'
// import My from './compo/greet'
// import {Greet} from './compo/greet'
import Welcome from './compo/welcome'
// import Hello from './compo/hello'

import Message from './compo/message'
import Counter from './compo/counter'
import Destructure from './compo/destructure'
import Eventhandling from "./compo/eventhandling";
import Eventbind from "./compo/eventbind";
import Parentcompo from "./compo/parentcompo";
import Usergreeting from "./compo/usergreeting";
import Listrendering from "./compo/listrendering";
import Indexkey from "./compo/indexkey";
import Forms from "./compo/forms";
import Portals from "./compo/portals";
import Errorboundary from "./compo/errorboundary";
import Hero from "./compo/hero";
import LifecycleA from './compo/lifecycleA'
import Fragment from './compo/fragment'
import Table from "./compo/table";
import Purecompo from './compo/purecompo'
import Parentcomponent from "./compo/parentcomponent";
import Memo from "./compo/memo";
import Refsdemo from "./compo/refsdemo";
import Focusinput from "./compo/focusinput";
import FRParentInput from "./compo/FRParentInput";
import Clickcounter from "./compo/clickcounter";
import Hovercounter from "./compo/hovercounter";
import withCounter from "./compo/withcounter";
import Clickcountertwo from "./compo/clickcountertwo";
import Hovercountertwo from "./compo/hovercountertwo";
import User from "./compo/user";
import {UserProvider} from './compo/usercontext'
import ComponentC from "./compo/componentC";
import React_hooks_app from "./react_hooks_app";
import Renderwrap from "./renderwrap";
// import Contextwrap from "./contextwrap"


function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <My /> */}

      {/* <Welcome /> */}
      {/* <Hello /> */}
       
      <Greet name='stark'  heroname='wonder women'><p>This is children props for functional component</p></Greet>
      <Greet name='clark' heroname='Superman'><button>Action</button></Greet>
      <Greet name='Diana' />


      <Welcome name='Diana'  heroname='wonder women'><p>This is children propsfor class component</p></Welcome>
      <Welcome name='Neo' heroname='Superman'><button>class props btn</button></Welcome>

{/* <Message /> */}
{/* <Counter /> */}

{/* <Destructure name='stark' age='25' /> */}

{/* <Eventhandling/> */}
{/* <Eventbind /> */}
{/* <Parentcompo /> */}

{/* <Usergreeting /> */}

{/* <Listrendering /> */}

{/* <Indexkey /> */}

{/* <Forms /> */}

{/* <LifecycleA /> */}

{/* <Fragment /> */}

{/* <Portals /> */}

{/* <Errorboundary>
  <Hero heroName='Batman' />
  <Hero heroName='Superman' />
  <Hero heroName='Joker' />
</Errorboundary> */}

{/* or (placement of error boundaries using nested compo)  */}

{/* <Errorboundary>
  <Hero heroName='Batman' />
  </Errorboundary>
  <Errorboundary>
  <Hero heroName='Superman' />
  </Errorboundary>
  <Errorboundary>
  <Hero heroName='Joker' />
  </Errorboundary> */}


{/* <Table /> */}
{/* <Purecompo /> */}

{/* <Parentcomponent /> */}

{/* <Memo /> */}

{/* <Refsdemo /> */}
   
   {/* <Focusinput /> */}
   
   {/* <FRParentInput /> */}

{/* <Clickcounter /> */}
{/* <Hovercounter /> */}


{/* <withCounter /> */}
{/* <Clickcountertwo /> */}
{/* <Hovercountertwo /> */}

{/* <User render={(isLoggedIn)=>isLoggedIn ?'Stark' : 'Guest'} /> */}

{/* part2 */}
{/* <UserProvider value="Stark">
  <ComponentC />
</UserProvider> */}

{/* for part3 first point and second point*/}

  {/* <ComponentC /> */}



{/* <React_hooks_app /> */}

{/* <Contextwrap /> */}

{/* <Renderwrap /> */}

    </div>
  );
}

export default App;
