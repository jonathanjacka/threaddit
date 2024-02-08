import Link from 'next/link';
import paths from '@/paths';
import { Button } from "@nextui-org/react";

import PostShow from "@/components/posts/PostShow";
import CommentCreateForm from '@/components/comments/CommentCreateForm';

interface ShowPostPageProps {
  params: {
    slug: string,
    postId: string
  }
}

const ShowPostPage = ( { params }: ShowPostPageProps ) => {
  return (
    <div className="space-y-3">
      <Link href={paths.topicShow(params.slug)}>
        <Button color='primary' variant="light">{'<'} Back to Topic</Button>
      </Link>

      <PostShow postId={params.postId} />
      <CommentCreateForm postId={params.postId} startOpen/>
    </div>
  )
}

export default ShowPostPage
