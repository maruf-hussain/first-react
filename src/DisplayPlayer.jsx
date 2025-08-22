

export default function DisplayPlayer({player}) {
    const {name, age, profession} = player;
    const style = {
        border: '2px solid blue',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: '#fdd5d5ff',
        displayGrid:'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        textAlign: 'center',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s',
    };

    return (
        <>
        <div style={style}>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <h3>Profession: {profession}</h3>
        </div>
            
        </>
    )
}
