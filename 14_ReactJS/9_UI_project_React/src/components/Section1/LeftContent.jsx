import Arrow from './Arrow'
import HeroText from './HeroText'

const LeftContent = () => {
    return (
        <div className='h-full w-1/4 flex flex-col justify-between '>
            <HeroText/>
            <Arrow/>
        </div>
    )
}

export default LeftContent

