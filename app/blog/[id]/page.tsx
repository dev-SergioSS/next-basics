import { Metadata } from "next"
import { title } from "process"

type Props = {
	params: {
		id: string // id бо назва файлу [id]
	}
}

export async function generateMetadata({
	params: { id }
}: Props): Promise<Metadata> {
	const post  = await getData(id)
	return { title: post.title }
}

async function getData (id: string) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
		next: {
			revalidate: 60
		}
	})

	return response.json()
}





export default async function Post({ params: { id } }: Props) { 
	const post =  await getData(id)

	return (
		<>
			<h2>Post page - {post.title}</h2>
			<p>{ post.body}</p>
		</>
 )
 }