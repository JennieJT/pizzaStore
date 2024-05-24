import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to = '/'>&larr;</Link>
      <span> This is a header. </span>
    </header>
  )
}
