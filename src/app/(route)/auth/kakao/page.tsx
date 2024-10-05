"use client";

import { useEffect } from "react";

export default function KakaoAuth({ searchParams }: { searchParams: { code: string } }) {
  console.log(searchParams);
  const AUTH_CODE = searchParams.code;

  const requestBody = {
    code: AUTH_CODE,
    redirectUri: "http://localhost:3000/auth/kakao",
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://find-my-pet.duckdns.org/api/v1/auth/sign-in/kakao`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    };

    fetchData();
  }, []);

  return <div>Kakao Auth Page</div>;
}
