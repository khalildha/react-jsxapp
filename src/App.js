import logo from './logo.svg';
import './App.css';
import imageInSrc from './imageInSrc.jpg';
 import './style.css';

function App() {
  return (
    <>
    <div style={{border:"solid 1px black,maxWidth:100vw"}}>

 <h1 className='title red'>KHALIL</h1>

 <br />

 <img src={imageInSrc} />

 <br />

 <img src="/imageInPublic.jpg" />

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>
</>
  );
}

export default App;
