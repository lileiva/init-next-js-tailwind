import PropTypes from 'prop-types'

const defaultTitle = 'hello from next js'
const Index = ({ title = defaultTitle }) => (
  <div>
    <h2>{title}</h2>
  </div>
)
Index.propTypes = {
  title: PropTypes.string,
}
Index.defaultProps = {
  title: defaultTitle,
}

export default Index
