"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";
import image from "../static/image/banner.jpg";
import { ChevronRight } from "lucide-react";
import PetList from "@/components/main/PetList";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function Home() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [activeTabValue, setActiveTabValue] = useState<"missing" | "abandonment">("abandonment");
  console.log(activeTabValue);
  return (
    <div className="flex flex-col  w-full items-center gap-6">
      <div className="w-full flex justify-center">
        <div className="sm:w-[60%] w-[90%] h-[250px] rounded-md border flex">
          <div className="flex justify-center items-center relative w-full h-full ">
            <Image src={image} layout="fill" objectFit="contain" alt="banner image" placeholder="blur" />
          </div>
          <div className="w-full h-full p-6 flex flex-col justify-center items-end gap-6">
            <p className="font-bold md:text-2xl text-lg">
              반려 동물 실종 시
              <br />
              소중한 골든타임에 필요한
              <br />
              가이드를 제공합니다.
            </p>
            <div className="w-full flex justify-end">
              <Button variant="outline">
                가이드
                <ChevronRight size="18" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full justify-center items-center">
        <Tabs defaultValue={activeTabValue} className="w-[400px] flex justify-center">
          <TabsList>
            <TabsTrigger value="missing" onClick={() => setActiveTabValue("missing")}>
              실종 동물
            </TabsTrigger>
            <TabsTrigger value="abandonment" onClick={() => setActiveTabValue("abandonment")}>
              유기 동물
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {activeTabValue === "missing" && <Button className="absolute right-0">실종 동물 등록</Button>}
      </div>
      {activeTabValue === "abandonment" ? <PetList /> : null}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
