import axios from "axios";

export default function Blogs({ userCookie }: { userCookie: any }) {
  console.log("userCookie", userCookie);
  return (
    <div>
      blogs 
      {userCookie?.name}
    </div>
  )
}



export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/hello');
    const data = response.data;
    console.log('data', data);

    return {
      props: {
        userCookie: data || '',
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        userCookie: 'ooo,kkkkkko', 
      },
    };
  }
}
