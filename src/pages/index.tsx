import Button from "../components/Button"
import { FaHome } from 'react-icons/fa'

const Index = () => {
  return (
    <div>
      <h2>Botões</h2>
      <br></br>
      <Button
        label="Olá Mundo"
        href="https://google.com.br"
        variant="primary"
        corner="rounded"
        sufix={ <FaHome/> }
      />
    </div>
  )
}

export default Index