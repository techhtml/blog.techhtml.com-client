import { NextPage } from "next";
import { MDViewer } from "../../components/MDViewer";

const PostPage: NextPage = () => {
  return (
    <div>
      <MDViewer title='안녕하세요?' contents='# hello' />
    </div>
  )
}

export default PostPage;