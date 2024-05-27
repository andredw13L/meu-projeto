import Button from "./events/Button"

function Evento({numero}) {

    function meuEvento(e) {
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento() {
        console.log("Ativando segundo evento!")
    }


    return(
        <div>
            <p>Clique para dispara um evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}

export default Evento