import Link from "next/link"

const Header: React.FC = () => {
	return (
		<header className='container'>
			<Link href='/'>Home</Link>
			<Link href='/about'>About</Link>
			<Link href='/blog'>Blog</Link>
		</header>
	)
}

export {Header}