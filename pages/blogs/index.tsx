import axios from "axios";
import { useMyContext } from "@/utils/store";

export default function Blogs({ userCookie }: { userCookie: any }) {
  const { user } = useMyContext();
  console.log("userCookie", userCookie);
  console.log("user", user);

  return (
    <div>
      blogs
      {userCookie?.name}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/hello");
    const data = response.data;
    console.log("data", data);

    return {
      props: {
        userCookie: data || "",
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        userCookie: "ooo,kkkkkko",
      },
    };
  }
}
