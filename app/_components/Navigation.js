import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
      <nav className="h-24 sticky top-0 container flex justify-between items-center mx-auto uppercase text-sm">
        <Link href="/shop">
          Shop
        </Link>
        <Link href="/">
          <div className="w-16">
            <Image src="/Logo.svg" width="76" height="26" />
          </div>
        </Link>
        <Link href="/cart">
          Cart
        </Link>
      </nav>
    )
}
  