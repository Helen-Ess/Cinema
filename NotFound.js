const NotFound = ({onNotFound}) => {
    return(
        <div>
            <h1>No results :(</h1>
            <input type="btn" defaultValue='Вернться на главню страницу' onClick={() => onNotFound()}/> 
        </div>
    )
}

export default NotFound