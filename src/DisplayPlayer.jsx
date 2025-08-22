

export default function DisplayPlayer({player}) {
    const {name, age, profession} = player;


    return (
        <>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <h3>Profession: {profession}</h3>
        </>
    )
}
