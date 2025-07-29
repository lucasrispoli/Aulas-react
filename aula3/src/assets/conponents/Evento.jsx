export default function Evento(){
    function testeEvento(){
        console.log("teste evento");

    }
    function segundoEvento(){
        console.log("segundo evento");


    }

    return(
        <div>
            <Botao evento ={testeEvento} text ="botao1"/>
              <Botao evento ={segundoEvento} text ="botao2"/>    
        </div>
    );
}