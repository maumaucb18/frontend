import GlobalStyle from './styles/global'
import styled from 'styled-components'
import Form from './components/Form.js'
import Grid from "./components/Grid"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Container = styled.div`
  
  width:100%;
  border-radius:20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
`


const Title = styled.h2``

function App() {
  return (
    <>
      
      <Container>
      
        <Title>USUÁRIOS</Title>
        <Form />
        <Grid/>
      </Container>
      <ToastContainer autoCLose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
      
    </>
  )
}

export default App
