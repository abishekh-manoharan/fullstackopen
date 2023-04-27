import Part from "./Part";

function Content(props) {
    console.log(props.content);
    return (
        <>
            {props.content.map((e) => <Part name={e.name} exercises={e.exercises} key={e.id}/>)}
        </>
    )
}

export default Content;