import Checkbox from "@/components/Checkbox";
import Layout from "@/components/Layout";
import SvgBarChart from "@/components/SvgBarChart";
import Image from "next/image";
import React, { useState } from "react";

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
  isSelected,
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
  const [allChecked, sedtAllChecked] = useState(false);
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
              <svg
                width="280"
                height="280"
                viewBox="0 0 280 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-1"
              >
                <path
                  d="M276 140C278.209 140 280.006 138.209 279.943 136C279.456 118.979 275.868 102.177 269.343 86.4243C262.307 69.4387 251.995 54.0052 238.995 41.005C225.995 28.0048 210.561 17.6925 193.576 10.6569C177.823 4.13181 161.021 0.543592 144 0.057139C141.791 -0.00596977 140 1.79086 140 4V52C140 54.2091 141.792 55.9901 143.999 56.0952C153.664 56.5558 163.187 58.6835 172.145 62.3941C182.337 66.6155 191.597 72.8029 199.397 80.603C207.197 88.4032 213.384 97.6632 217.606 107.855C221.316 116.813 223.444 126.336 223.905 136.001C224.01 138.208 225.791 140 228 140H276Z"
                  fill="#8F5EEC"
                />
                <path
                  d="M206.789 258.471C207.874 260.395 210.316 261.08 212.209 259.941C231.439 248.364 247.621 232.322 259.369 213.151C271.117 193.98 278.065 172.279 279.65 149.89C279.806 147.686 278.087 145.821 275.879 145.728L227.922 143.706C225.715 143.613 223.86 145.328 223.662 147.529C222.504 160.397 218.391 172.844 211.621 183.891C204.852 194.937 195.628 204.253 184.688 211.126C182.818 212.302 182.131 214.733 183.216 216.657L206.789 258.471Z"
                  fill="#5D81F4"
                />
                <path
                  d="M95.1717 268.399C94.4436 270.485 95.5425 272.772 97.6481 273.44C114.438 278.769 132.094 280.885 149.691 279.664C167.287 278.443 184.482 273.909 200.375 266.312C202.368 265.36 203.141 262.943 202.132 260.978L180.203 218.28C179.194 216.315 176.786 215.549 174.775 216.464C165.647 220.615 155.839 223.103 145.814 223.799C135.79 224.494 125.732 223.385 116.118 220.534C114 219.906 111.722 220.996 110.993 223.082L95.1717 268.399Z"
                  fill="#D971EF"
                />
                <path
                  d="M15.1757 193.99C13.1481 194.867 12.2102 197.225 13.1447 199.226C27.6807 230.363 53.1684 255.071 84.7413 268.633C86.7711 269.505 89.0988 268.494 89.9124 266.441L107.59 221.815C108.404 219.761 107.394 217.445 105.381 216.535C87.5991 208.492 73.1681 194.502 64.5774 176.979C63.6049 174.995 61.2589 174.058 59.2313 174.935L15.1757 193.99Z"
                  fill="#73CBF6"
                />
                <path
                  d="M5.21901 121.832C3.02967 121.537 1.00963 123.072 0.777171 125.269C-1.41021 145.941 1.03361 166.842 7.9309 186.452C8.6639 188.536 10.9836 189.564 13.0458 188.771L57.8532 171.558C59.9154 170.766 60.9353 168.454 60.2421 166.357C56.667 155.538 55.3302 144.105 56.3131 132.754C56.5037 130.553 54.9781 128.539 52.7888 128.244L5.21901 121.832Z"
                  fill="#5FF1AF"
                />
                <path
                  d="M25.0087 67.3846C23.1408 66.2051 20.665 66.7603 19.5394 68.6611C11.5349 82.1772 5.86206 96.9445 2.75892 112.343C2.32251 114.509 3.78979 116.579 5.96698 116.953L53.2728 125.087C55.4499 125.462 57.5088 123.998 57.9863 121.841C59.7918 113.686 62.8034 105.847 66.9215 98.581C68.0108 96.6591 67.4617 94.1931 65.5938 93.0136L25.0087 67.3846Z"
                  fill="#FF53DE"
                />
                <path
                  d="M52.6762 35.738C51.2578 34.0444 48.7308 33.8171 47.0784 35.2833C39.48 42.0259 32.638 49.5755 26.6733 57.7987C25.3762 59.5869 25.8503 62.0794 27.6749 63.3249L67.3191 90.3867C69.1436 91.6322 71.6248 91.1563 72.9557 89.3931C75.9836 85.3817 79.3655 81.6501 83.0605 78.2433C84.6846 76.7458 84.9148 74.23 83.4964 72.5364L52.6762 35.738Z"
                  fill="#FF535C"
                />
                <path
                  d="M135.465 4.07562C135.392 1.86771 133.541 0.131618 131.336 0.268305C104.825 1.91179 79.3252 11.0651 57.8208 26.6572C56.0323 27.954 55.7082 30.4707 57.0556 32.2214L86.3301 70.2609C87.6774 72.0116 90.1838 72.33 91.9967 71.0675C104.183 62.5809 118.404 57.4761 133.206 56.2752C135.408 56.0965 137.14 54.2568 137.066 52.0489L135.465 4.07562Z"
                  fill="#FF9F52"
                />
              </svg>
            </div>
          </div>
          <div className="rounded-tiny bg-white h-[400px] border border-gray-600 w-1/2 p-4">
            <div className="h-10 flex justify-between items-center w-full">
              <h5 className="text-base-0 text-2xl font-bold leading-8">
                Celebs by Social media
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
            <SvgBarChart />
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
              <Checkbox
                onClick={() => {
                  sedtAllChecked(!allChecked);
                }}
                checked={allChecked}
              />
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
                isSelected={allChecked}
              />
            );
          })}
        </section>
      </section>
    </Layout>
  );
}
