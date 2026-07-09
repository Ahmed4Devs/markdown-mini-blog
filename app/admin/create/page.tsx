"use client";

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Eye } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'


export default function page() {
  const [preview, setPreview] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log({
      title,
      content
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Create New Post</h1>
            <Button variant="outline" onClick={() => setPreview(!preview)}>
              <Eye className="h-4 w-4 mr-2" />
              {preview ? "Edit" : "Preview"}
            </Button>
          </div>
          <div
            className={`grid grid-cols-1 ${preview && "lg:grid-cols-2 gap-8"}`}
            >
            {/* Textarea Editor */}
            <Card>
              <CardHeader>
                <CardTitle>Write Post</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='space-y-2'>
                    <Label htmlFor="title">Title</Label>
                    <Input 
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter post title..."
                      required
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor="content">Content (Markdown)</Label>
                    <Textarea 
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Write your post in markdown..."
                      rows={20}
                      required
                      className='min-h-80'
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="published"
                      checked={published}
                      onCheckedChange={setPublished}
                    />
                    <Label htmlFor="published">Publish immediately</Label>
                  </div>

                  <Button type="submit" disabled={loading} className='w-full'>
                    {loading ? "Creating..." : "Create Post"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Preview */}
            {preview && (
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">{/* ..code here.. */}</h2>
                    {/* <MarkdownRenderer
                      content={content || "Your content will appear here..."}
                    /> */}
                  </div>
                </CardContent>
            </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
