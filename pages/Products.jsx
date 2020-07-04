import PropTypes from 'prop-types'

const defaultTitle = 'hello from Products 2'

const Products = ({ title = defaultTitle }) => (
  <div>
    <h2>{title}</h2>
  </div>
)

Products.propTypes = {
  title: PropTypes.string,
}
Products.defaultProps = {
  title: defaultTitle,
}

export default Products
