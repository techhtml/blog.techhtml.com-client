import { NextPage } from "next";
import useSWR from "swr";
import { MDViewer } from "../../components/MDViewer";
import { PostData } from "../../types/Post";
import { fetcher } from "../../utils/fetcher";

const PostPage: NextPage = () => {
  const { data, error } = useSWR('http://localhost:1337/api/posts/', fetcher);

  if(error) return (<div>Error</div>)
  if(!data) return (<div>Loading...</div>)

  return (
    <div>
      {data.data.map((postdata: PostData) => {
        return (
          <MDViewer 
            key={`posts-${postdata.id}`}
            author={postdata.attributes.author}
            title={postdata.attributes.title}
            contents={postdata.attributes.contents} />
        )
      })}
    </div>
  )
}

export default PostPage;