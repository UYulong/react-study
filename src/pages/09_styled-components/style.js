import styled from 'styled-components'

export const AppWrapper = styled.div.attrs(props => ({
  defaultSize: props.size || 30,
  defaultColor: props.color || 'cyan'
}))`
.title {
  color: red;
  font-size: 22px;
}

.book-list {
  background-color: moccasin;

  .item {
    font-size: 12px;
    color: pink;
  }
}

.text {
  font-size: ${props => props.defaultSize}px;
  color: ${props => props.defaultColor};
}
`