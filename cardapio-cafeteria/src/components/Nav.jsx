const Nav = ({ numItemSelecionado, setNumItemSelecionado }) => {
  return (
    <div className="nav">
      <p className={"itens" + (numItemSelecionado === 0 ? " itens-selecionado" : "")} 
      onClick={() => setNumItemSelecionado(0)}>
      Cafés
      </p>

      <p className={"itens " + (numItemSelecionado === 1 ? " itens-selecionado" : "")} 
      onClick={() => setNumItemSelecionado(1)}>
      Comidas
      </p>

      <p className={"itens " + (numItemSelecionado === 2 ? " itens-selecionado" : "")} 
      onClick={() => setNumItemSelecionado(2)}>
      Outras bebidas
      </p>
    </div>
  )
}

export default Nav;
