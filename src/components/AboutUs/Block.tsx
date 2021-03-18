import './Block.scss'
import './Block_mobile.scss'

interface Props {
    position: Position,
    title: string,
    image: string,
    alt: string,
    text: string
}

export enum Position {
    left = "odd",
    right = "even"
}

const Block:React.FunctionComponent<Props> = (props) => {

    return (
    <div className={ `row ${ props.position }` } >
        { props.position === Position.left ? <img src={ props.image } alt={ props.alt } />: null }
        <div className='text-box'>
            <h2 className='title'>
                { props.title }
            </h2>
            <p>
                { props.text }
            </p>
        </div>
        { props.position === Position.right ? <img src={ props.image } alt={ props.alt } />: null }
    </div>
    )
  
}
  
  export default Block
