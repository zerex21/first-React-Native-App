import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding:60px 10px 10px 10px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px
`;

const PostDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

const PostTitle= styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDate= styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export const Post = ({title, imageUrl, createdDate}) => {
    return (
      <PostView>
        <PostImage source = {{uri: imageUrl} }/>
        <PostDetails>
          <PostTitle>{title}</PostTitle>
          <PostDate>{createdDate}</PostDate>
        </PostDetails>
      </PostView>
    )
}
