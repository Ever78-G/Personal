
export function Button({text}){
    return(
        <button type="submit">
            {text}
        </button>
        
    )
}

export function Forms({ numero, nombres = [] }) {
    const forms = [];

    for (let a = 0; a < numero; a++) {
        forms.push(
            <label key={a}>
                {nombres[a]}:
                <input type="text" />
            </label>
        );
    }

    return (
        <div>
            {forms}
        </div>
    );
}