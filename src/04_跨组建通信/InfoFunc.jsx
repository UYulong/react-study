import ThemeContext from './context'

function InfoFunc() {
  return (
    <div>
      <ThemeContext.Consumer>
        {
          ({ name, age }) => {
            return <h2>InfoFunc:{name}-{age}</h2>
          }
        }
      </ThemeContext.Consumer>
    </div>
  )
}

export default InfoFunc