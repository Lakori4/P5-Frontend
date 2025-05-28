import { FunctionalComponent } from "preact/src/index.d.ts";

const Form:FunctionalComponent = () => {
    return (
        <form action="/profile" method="POST">
            <input type="text" name="name" placeholder="Nombre" required/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form