import '../index.css'

export const HashTags = ({ name, color }) => {
    return (
        <button className='sidebar-hashtags'>
            <span className={`${color}`}>#</span> {name}
        </button>
    )
}
