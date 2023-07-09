import Image from "next/image";
import swell from "swell-node"

async function getData(slug) {
  swell.init('rgw-jewellery', 'sk_test_rNoP1LMSZgj9l4EdiTsQYMMiMvwHKi7w');
   
  const res = await swell.get(`/products/${slug}`);
 
  return res;
}

export default async function Item({ params: { slug } }) {
  const data = await getData(slug)
  console.log(data)
  return (
    <main className="flex -mt-24">
      <div className="w-5/12 mt-48 px-20">
        <h1 className="text-xl mb-12 uppercase">{data.name}</h1>
        <div className="text-sm" dangerouslySetInnerHTML={{__html: data.description}} />
      </div>
      <div className="w-7/12">
        {data.images.map((image, index) => (
          <Image 
            key={index}
            alt=""
            src={image.file.url}
            width={image.file.width}
            height={image.file.height}
          />
        ))}
      </div>
    </main>
  )
}

