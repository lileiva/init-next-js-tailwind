import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'twin.macro'

const SButton = styled.button(() => [
  tw`text-red-300
  m-3
  bg-gray-300
  p-8
  `,
])

const Button = () => <button type="button">Success</button>
const defaultTitle = 'hello from next js'
const Index = ({ title = defaultTitle }) => (
  <div>
    <h2>{title}</h2>
    <p className="text-gray-900 m-3">
      with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method for
      production builds.
      <Button />
      <SButton> texto </SButton>

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
