import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const ReadAllItems = (props) => {
  return (
    <div>
      <Head><title>Next Market</title></Head>
      <div className="grid-container-in">

      {props.allItems.map((item) => (
        <Link href={`/item/${item._id}`} key={item.id}>
          <a>
            <Image
              src={item.image}
              width="750px"
              height="500px"
              alt="item-image"
              ></Image>
            <h2>¥{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description.substring(0, 80)}...</p>
          </a>
        </Link>
      ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://next-market-omega.vercel.app/api/item/readall");
  const allItems = await response.json();
  return {
    props: allItems,
  };
};

export default ReadAllItems;
