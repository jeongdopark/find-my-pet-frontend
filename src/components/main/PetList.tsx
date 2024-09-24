"use client";

import { useEffect, useState } from "react";
import AbandonmentCard from "../AbandonmentCard";

export interface IPet {
  desertionNo: string;
  filename: string;
  happenDt: string;
  happenPlace: string;
  kindCd: string;
  colorCd: string;
  age: string;
  weight: string;
  noticeNo: string;
  noticeSdt: string;
  noticeEdt: string;
  popfile: string;
  processState: string;
  sexCd: string;
  neuterYn: string;
  specialMark: string;
  careNm: string;
  careTel: string;
  careAddr: string;
  orgNm: string;
  chargeNm: string;
  officetel: string;
}

export default function PetList() {
  const [missingPetList, setMissingPetList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(process.env.NEXT_PUBLIC_API_KEY!).then((res) => res.json());
      setMissingPetList(data.response.body.items.item);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {missingPetList.map((pet: IPet) => {
        return <AbandonmentCard {...pet} />;
      })}
    </div>
  );
}
