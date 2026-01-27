// components/MyButton.tsx

import { useRouter } from "next/router"; // ✅ Correct for Pages Router

export default function MyButton() {
  const router = useRouter();

  const handleClick = (): void => {
    router.push("/target-page"); // Replace with your route
  };

  return <button onClick={handleClick}>Go to Target Page</button>;
}
