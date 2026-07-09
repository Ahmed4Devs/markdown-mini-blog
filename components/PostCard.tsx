import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"
import { Button } from "./ui/button"

function PostCard({ post }: {post: any}) {
  const likeLoading = false;
  const liked = true;

  return (
    <Card>
      <CardHeader>
        <div>
          <Avatar>
            <AvatarImage src={post.author.image || ""}/>
            <AvatarFallback>{post.author.name?.[0] || "A"}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-xl">
          <Link href={`/posts/${post.id}`} className="hover:underline">{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex item-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1"
        > 
          <Heart 
            className={`h-4 w-4 ${
              likeLoading
                ? "animate-pulse"
                : liked
                ? "fill-red-500 text-red-500"
                : ""
            }`}
          />
          <span>10</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-1"
        >
          <MessageCircle />
          <span>5</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PostCard