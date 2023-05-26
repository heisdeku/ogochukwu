import Checkbox from "@/components/Checkbox";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

type CelebCategoryProps = {
  iconUrl: string;
  category?: string;
  percentage?: number;
};

const CelebCategory: React.FC<CelebCategoryProps> = ({
  iconUrl,
  category,
  percentage,
}) => {
  return (
    <div className="flex items-center h-9 rounded-tiny border border-gray-600 p-[10px] w-fit gap-x-2 text-base-0 text-xs cursor-pointer">
      <div className="flex items-center gap-x-1">
        <Image
          className="w-4 h-4"
          height={16}
          width={16}
          src={iconUrl}
          alt={`Celeb Category ${category} Icon`}
        />
        <p className="capitalize">{category}</p>
      </div>
      <span className="font-bold">– {percentage}%</span>
    </div>
  );
};

type TableRowProps = {
  index: number;
  isSelected?: boolean;
  transactionId?: string;
  transactionDate?: string;
  description?: string;
  category?: string;
  amount?: string;
  status: string;
};

const TableRow: React.FC<TableRowProps> = ({
  index,
  isSelected = false,
  transactionDate,
  transactionId,
  description,
  category,
  amount,
  status,
}) => {
  const STATUS_BG_COLOR =
    status === "processed" ? "bg-status-green" : "bg-secondary-500";
  const STATUS_TEXT_COLOR =
    status === "processed" ? "text-green-200" : "text-secondary-300";
  return (
    <div
      className={`${
        index % 2 === 0 ? "bg-gray-10" : "bg-gray-9"
      } h-[71px] w-full flex items-center p-4 text-base-0 text-sm`}
    >
      <div className="mr-8">
        <Checkbox checked={isSelected} />
      </div>
      <div className="cursor-pointer w-[18.6%]">
        <p className="text-sm">{transactionId}</p>
        <span className="text-xs leading-4">{transactionDate}</span>
      </div>
      <div className="cursor-pointer w-[30.89%]">
        <p>{description}</p>
      </div>
      <div className="cursor-pointer w-[16.02%] capitalize">
        <p>{category}</p>
      </div>
      <div className="cursor-pointer w-[16.16%]">
        <p>₦ {amount}</p>
      </div>
      <div className="flex items-center justify-between w-[14%]">
        <span
          className={`text-xs leading-4 py-[5px] px-[10px] rounded-full capitalize ${STATUS_BG_COLOR} ${STATUS_TEXT_COLOR}`}
        >
          {status}
        </span>
        <button>
          <Image
            src={"/svgs/utility/more.svg"}
            alt="More"
            height={16}
            width={16}
          />
        </button>
      </div>
    </div>
  );
};

const transactions = [
  {
    id: "HA930929239-52",
    date: "Today • 09:29 AM",
    description: "Booking - Received from Escrow",
    category: "booking",
    amount: "25,500",
    status: "processed",
  },
  {
    id: "K471392222-52",
    date: "Today • 09:29 AM",
    description: "Withdrawal - Transfer to Bank",
    category: "Withdrawal",
    amount: "20,050",
    status: "processing",
  },
  {
    id: "HA930929239-52",
    date: "Sep 07, 2022 • 09:29 AM",
    description: "Direct Message - Received from Escrow",
    category: "Direct Message",
    amount: "1,275",
    status: "processed",
  },
  {
    id: "HA930929239-52",
    date: "Sep 07, 2022 • 09:29 AM",
    description: "Booking - Received from Escrow",
    category: "booking",
    amount: "65,550",
    status: "processed",
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="py-8 px-6">
        <aside className="grid gap-x-5 grid-cols-4">
          <div className="border border-gray-600 rounded-tiny h-[108px] p-6 space-y-3">
            <h4 className="text-gray-300 text-xs leading-4">
              Total No. of Fans
            </h4>
            <h2 className="text-base-0 text-2xl font-bold leading-8">56,266</h2>
          </div>
          <div className="border border-gray-600 rounded-tiny h-[108px] p-6 space-y-3">
            <h4 className="text-gray-300 text-xs leading-4">
              Total No. of Celebs
            </h4>
            <h2 className="text-base-0 text-2xl font-bold leading-8">15,737</h2>
          </div>
          <div className="border border-gray-600 rounded-tiny h-[108px] p-6 space-y-3">
            <h4 className="text-gray-300 text-xs leading-4">
              Total Commisions Earned
            </h4>
            <h2 className="text-base-0 text-2xl font-bold leading-8">
              <span className="text-gray-600 mr-[2px] font-medium">₦</span>
              5,235,923
              <span className="text-sm font-medium ml-[2px]">.29</span>
            </h2>
          </div>
          <div className="border border-gray-600 rounded-tiny h-[108px] p-6 space-y-3">
            <h4 className="text-gray-300 text-xs leading-4">
              Total Transaction Amount
            </h4>
            <h2 className="text-base-0 text-2xl font-bold leading-8">
              <span className="text-gray-600 mr-[2px] font-medium">₦</span>
              35,570,147
              <span className="text-sm font-medium ml-[2px]">.48</span>
            </h2>
          </div>
        </aside>
        <aside className="w-full relative flex flex-row gap-x-5 mt-5 pb-6 border-b border-gray-500">
          <div className="rounded-tiny bg-white h-[400px] border border-gray-600 w-1/2 pl-6 pr-4 pt-4 pb-6">
            <div className="h-10 flex justify-between items-center w-full">
              <h5 className="text-base-0 text-2xl font-bold leading-8">
                Celebs by Career Category
              </h5>
              <button className="w-10 h-10 cursor-pointer bg-gray-10 border border-gray-600 rounded-full flex items-center justify-center hover:opacity-70">
                <Image
                  src={"/svgs/arrows-out.svg"}
                  className="w-5 h-5"
                  width={20}
                  height={20}
                  alt="arrows-out-expand icon"
                />
              </button>
            </div>
            <div className="flex mt-6">
              <div className="max-w-[304px] gap-4 flex flex-wrap">
                <CelebCategory
                  iconUrl="/svgs/ic-ct-actor.svg"
                  category="Actor"
                  percentage={25}
                />
                <CelebCategory
                  iconUrl="/svgs/ic-ct-actress.svg"
                  category="Actress"
                  percentage={17}
                />
                <CelebCategory
                  iconUrl="/svgs/ic-ct-athlete.svg"
                  category="Athlete"
                  percentage={12}
                />
                <CelebCategory
                  iconUrl="/svgs/ic-ct-comedian.svg"
                  category="Comedian"
                  percentage={13}
                />
                <CelebCategory
                  iconUrl="/svgs/ic-ct-contentcreator.svg"
                  category="Content Creator"
                  percentage={9}
                />
                <CelebCategory
                  iconUrl="/svgs/ic-ct-oap.svg"
                  category="On-Air Personality"
                  percentage={3}
                />
                <CelebCategory
                  iconUrl="/svgs/ic-ct-popular.svg"
                  category="Popular Figure"
                  percentage={8}
                />
                <CelebCategory
                  iconUrl="/svgs/ic-ct-musician.svg"
                  category="Musician"
                  percentage={10}
                />
              </div>
            </div>
          </div>
        </aside>
        <section className="w-full mt-8 flex gap-x-5">
          <div className="w-[38%] bg-gray-10 border border-gray-600 rounded-tiny h-10 p-3 flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66671 14.5C3.90004 14.5 0.833374 11.4333 0.833374 7.66667C0.833374 3.9 3.90004 0.833336 7.66671 0.833336C11.4334 0.833336 14.5 3.9 14.5 7.66667C14.5 11.4333 11.4334 14.5 7.66671 14.5ZM7.66671 1.83334C4.44671 1.83334 1.83337 4.45334 1.83337 7.66667C1.83337 10.88 4.44671 13.5 7.66671 13.5C10.8867 13.5 13.5 10.88 13.5 7.66667C13.5 4.45334 10.8867 1.83334 7.66671 1.83334Z"
                fill="#808080"
              />
              <path
                d="M14.6666 15.1667C14.54 15.1667 14.4133 15.12 14.3133 15.02L12.98 13.6867C12.7866 13.4933 12.7866 13.1733 12.98 12.98C13.1733 12.7867 13.4933 12.7867 13.6866 12.98L15.02 14.3133C15.2133 14.5067 15.2133 14.8267 15.02 15.02C14.92 15.12 14.7933 15.1667 14.6666 15.1667Z"
                fill="#808080"
              />
            </svg>
            <div className="border-r mx-3 border-gray-600 h-full" />
            <input
              className="bg-[transparent] flex-1 text-xs font-normal text-base-0 placeholder:text-gray-800 placeholder:text-xs placeholder:leading-4 placeholder:font-normal"
              placeholder="Search for transaction ID, date, category"
            />
          </div>
          <div className="flex gap-x-[7px] items-center w-[62%]">
            <button className="h-10 py-3 px-[10px] bg-gray-10 w-fit rounded flex items-center gap-x-8 text-xs leading-4">
              <span className="pr-1 border-gray-600 border-r w-[75px] items-center flex gap-x-1">
                <Image
                  src={"/svgs/utility/outline-setting.svg"}
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  alt="Outline Setting"
                />
                Category
              </span>
              <div className="flex justify-between gap-x-15 items-center">
                <span className="text-base-0 text-xs">All</span>
                <Image
                  src={"/svgs/utility/arrow-down.svg"}
                  width={12}
                  height={12}
                  alt="arrow down utility"
                />
              </div>
            </button>
            <div className="h-10 py-3 px-[10px] bg-gray-10 rounded-tiny flex items-center gap-x-8">
              <span className="pr-1 border-gray-600 border-r w-fit items-center flex gap-x-1 text-xs leading-4">
                <Image
                  src={"/svgs/utility/outline-date-filters.svg"}
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  alt="Outline date filters"
                />
                Date filters
              </span>
              <button className="flex justify-between gap-x-15 items-center">
                <span className="text-base-0 text-xs truncate">Start Date</span>
                <Image
                  src={"/svgs/utility/arrow-down.svg"}
                  width={12}
                  height={12}
                  alt="arrow down utility"
                />
              </button>
              <div className="border-r border-gray-600 h-full" />
              <button className="flex justify-between gap-x-15 items-center">
                <span className="text-base-0 text-xs truncate">End Date</span>
                <Image
                  src={"/svgs/utility/arrow-down.svg"}
                  width={12}
                  height={12}
                  alt="arrow down utility"
                />
              </button>
            </div>
          </div>
        </section>
        <section className="mt-5 w-full rounded-tiny border border-gray-600">
          {/**table header */}
          <div className="bg-white h-12 border-b border-gray-500 rounded-t-tiny rounded-tr-tiny flex p-4">
            <div className="mr-8">
              <Checkbox />
            </div>
            <div className="cursor-pointer w-[18.6%]">
              <button className="flex items-center gap-x-2 hover:opacity-75">
                <p className="leading-4 text-xs">Transaction ID/Date</p>
                <Image
                  src={"/svgs/utility/asc-desc.svg"}
                  width={8}
                  height={16}
                  className="w-2 h-4"
                  alt="ascending-descending-icon"
                />
              </button>
            </div>
            <div className="cursor-pointer w-[30.89%]">
              <button className="flex items-center gap-x-2 hover:opacity-75">
                <p className="leading-4 text-xs">Description</p>
                <Image
                  src={"/svgs/utility/asc-desc.svg"}
                  width={8}
                  height={16}
                  className="w-2 h-4"
                  alt="ascending-descending-icon"
                />
              </button>
            </div>
            <div className="cursor-pointer w-[16.02%]">
              <button className="flex items-center gap-x-2 hover:opacity-75">
                <p className="leading-4 text-xs">Category</p>
                <Image
                  src={"/svgs/utility/asc-desc.svg"}
                  width={8}
                  height={16}
                  className="w-2 h-4"
                  alt="ascending-descending-icon"
                />
              </button>
            </div>
            <div className="cursor-pointer w-[16.16%]">
              <button className="flex items-center gap-x-2 hover:opacity-75">
                <p className="leading-4 text-xs">Amount</p>
                <Image
                  src={"/svgs/utility/asc-desc.svg"}
                  width={8}
                  height={16}
                  className="w-2 h-4"
                  alt="ascending-descending-icon"
                />
              </button>
            </div>
            <div className="cursor-pointer">
              <button className="flex items-center gap-x-2 hover:opacity-75">
                <p className="leading-4 text-xs">Status</p>
                <Image
                  src={"/svgs/utility/asc-desc.svg"}
                  width={8}
                  height={16}
                  className="w-2 h-4"
                  alt="ascending-descending-icon"
                />
              </button>
            </div>
          </div>
            {transactions?.map((transaction, i) => {
              return (
                <TableRow
                  index={i}
                  key={i}
                  transactionDate={transaction?.date}
                  transactionId={transaction?.id}
                  status={transaction?.status}
                  description={transaction?.description}
                  category={transaction?.category}
                  amount={transaction?.amount}
                />
              );
            })}   
        </section>
      </section>
    </Layout>
  );
}
