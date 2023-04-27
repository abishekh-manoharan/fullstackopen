import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({course}) => {
    
    let total = course.parts.reduce((c,e)=>{
        return c + e.exercises
    },0)

    return (
        <>
            <Header name={course.name}/>
            <Content content={course.parts}/>
            <Total total={total}/>
        </>
    )
}

export default Course;

