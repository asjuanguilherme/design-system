import Button from "../components/Button"
import { Fa500Px, FaHome } from 'react-icons/fa'

const Index = () => {
  return (
    <div>
      <h2>Botões</h2>
      <br></br>
      <Button
        label="pequeno"
        href="https://google.com.br"
        variant="primary"
        size="small"
        corner="pill"
        className="mr-4"
      />
      <Button
        label="padrão"
        href="https://google.com.br"
        variant="primary"
        corner="pill"
        className="mr-4"
      />
      <Button
        label="Grande"
        href="https://google.com.br"
        variant="primary"
        corner="pill"
        size="large"
      />
      <br/>
      <br/>
      <Button
        label="preenchido"
        href="https://google.com.br"
        variant="primary"
        corner="pill"
        className="mr-4"
      />
      <Button
        label="não preenchido"
        href="https://google.com.br"
        variant="primary"
        outlined={true}
        corner="pill"
        className="mr-4"
      />
      <br/>
      <br/>
      <Button
        label="quadrado"
        href="https://google.com.br"
        variant="primary"
        corner="squared"
        className="mr-4"
      />
      <Button
        label="arredondado"
        href="https://google.com.br"
        variant="primary"
        corner="rounded"
        className="mr-4"
      />
      <Button
        label="formato de pilula"
        href="https://google.com.br"
        variant="primary"
        corner="pill"
        className="mr-4"
      />
      <br/>
      <br/>
      <Button
        label="ícone à esquerda"
        href="https://google.com.br"
        variant="primary"
        corner="pill"
        prefix={ <FaHome />}
        className="mr-4"
      />
      <Button
        label="ícone à direita"
        href="https://google.com.br"
        variant="primary"
        corner="pill"
        sufix={ <FaHome />}
        className="mr-4"
      />
      <br/>
      <br/>
      <Button
        label="com carregamento"
        href="https://google.com.br"
        variant="primary"
        corner="pill"
        loading={true}
        className="mr-4"
      />
      <br/>
      <br/>
      <Button
        label="desativado"
        href="https://google.com.br"
        variant="primary"
        disabled={ true }
        corner="pill"
        loading={true}
        className="mr-4"
      />
      <br/>
      <br/>
      <Button
        label="primário"
        href="https://google.com.br"
        variant="primary"
        corner="pill"
        className="mr-4"
      />
      <Button
        label="sucesso"
        href="https://google.com.br"
        variant="success"
        corner="pill"
        className="mr-4"
      />
      <Button
        label="alerta"
        href="https://google.com.br"
        variant="warning"
        corner="pill"
        className="mr-4"
      />
      <Button
        label="erro"
        href="https://google.com.br"
        variant="error"
        corner="pill"
        className="mr-4"
      />
      <Button
        label="escuro"
        href="https://google.com.br"
        variant="black"
        corner="pill"
        className="mr-4"
      />
      <br/>
      <br/>
      <Button
        label=""
        icon={ <FaHome /> }
        href="https://google.com.br"
        variant="error"
        corner="squared"
        className="mr-4"
      />
      <br/>
      <br/>
      <br/>
      <h1>Combine as propriedades e atinja seu objetivo!</h1>
      <br/>
      <Button
        label="Inserir Digital"
        href="https://google.com.br"
        variant="error"
        sufix={ <Fa500Px/> }
        corner="squared"
        size="large"
        className="mr-4"
      />
    </div>
  )
}

export default Index