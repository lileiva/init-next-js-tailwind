import PropTypes from 'prop-types'

const defaultTitle = 'hello from next js'
const Index = ({ title = defaultTitle }) => (
  <div>
    <h2>{title}</h2>
    <p className="text-gray-900 m-3">
      with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method for
      production builds.
    </p>
  </div>
)
Index.propTypes = {
  title: PropTypes.string,
}
Index.defaultProps = {
  title: defaultTitle,
}

export default Index
