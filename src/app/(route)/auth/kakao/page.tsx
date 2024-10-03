export default async function KakaoAuth({ searchParams }: { searchParams: { code: string } }) {
  const AUTH_CODE = searchParams.code;

  const requestBody = {
    code: AUTH_CODE,
    redirectUri: "http://localhost:3000/auth/kakao",
  };
  await fetch(`https://find-my-pet.duckdns.org/api/v1/auth/sign-in/kakao`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  return <div>Kakao Auth Page</div>;
}
