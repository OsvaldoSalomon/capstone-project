import './Hashtags.css'

const Hashtags = () => {
    const tags = ['#love', '#instagood ', '#fashion ', '#photooftheday ',
        '#photooftheday ', '#art ', '#photography ', '#happy ',
        '#cute ', '#tbt ',]
    return (
        <div className='hashtagBody'>
            <h2>More profiles</h2>
            {tags.map(tag => {
                return (
                    <>
                        <h3>{tag}</h3>
                        <hr/>
                    </>
                )
            })}
        </div>
    )
}

export default Hashtags;