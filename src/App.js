
import styled from 'styled-components';
import Hero from './components/hero.jsx';
import Who from './components/who.jsx';
import What from './components/what.jsx';
// import Contact from './components/contact.jsx';
// import Test from './components/test.jsx';
const Container = styled.div`
  height : 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scroll-bar width: none;
  background : url("./images/bg_img2.jpg");
  background-size : cover;
  ${'' /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */}
  &::-webkit-scrollbar {
    display: none;
  }

`
function App() {
  return (
    <Container>
    <Hero />
    <Who />
    <What />
    </Container>
  );
}

export default App;
