import Image from "next/image";
import Link from "next/link";
import swell from "swell-node"

async function getData() {
  swell.init('rgw-jewellery', 'sk_test_rNoP1LMSZgj9l4EdiTsQYMMiMvwHKi7w');
   
  const res = await swell.get('/products', {
    where: { active: true },
    limit: 25,
    page: 1,
  });
 
  return res;
}

export default async function Shop() {
  const data = await getData();

  return (
    <main className="mx-auto container grid grid-cols-3">
      {data.results.map((item, index) => (
        <Link key={index} href={"shop/" + item.slug}>
          <div className="space-y-2 mt-2">
            <Image
              alt=""
              src={item.attributes.hero_image.file.url}
              width={item.attributes.hero_image.file.width}
              height={item.attributes.hero_image.file.height}
              />
            <p className="text-sm uppercase">{item.name}</p>
            <p className="text-sm">From £{item.price}</p>
          </div>
        </Link>
      ))}
    </main>
  )
}

