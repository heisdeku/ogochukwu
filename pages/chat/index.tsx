import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

type ChatProps = {
  read?: boolean;
};
const Chat: React.FC<ChatProps> = ({ read = true }) => {
  return (
    <div
      className={`w-full h-[108px] py-6 pl-8 pr-6 flex justify-between items-start cursor-pointer border-b border-gray-9 hover:bg-gray-600 ${
        read ? "" : "bg-gray-9"
      }`}
    >
      <div className="space-y-3">
        <p className="text-xs">#180380280</p>
        <div className="flex flex-row gap-x-3 items-center">
          <div className="relative w-[54px]">
            <Image
              src={"/bimbo-ademoye.svg"}
              height={32}
              width={32}
              className="h-8 w-8 border border-secondary-300 rounded-full"
              alt="Bimbo Ademoye"
            />
            <Image
              src={"/jaydon.svg"}
              height={32}
              width={32}
              className="h-8 w-8 border border-white rounded-full absolute z-10 top-0 left-[40%]"
              alt="Jaydon"
            />
          </div>
          <h5 className="text-base-0 text-base">
            Bimbo Ademoye <span className="text-[#999999]">x</span> Jaydon{" "}
          </h5>
        </div>
      </div>
      <button className="cursor-pointer hover:opacity-75">
        <Image
          src={"/svgs/utility/more.svg"}
          alt="More"
          height={16}
          width={16}
        />
      </button>
    </div>
  );
};

export default function Home() {
  const ChatPerson: React.FC<{ image?: string; name?: string }> = ({
    image,
    name,
  }) => {
    return (
      <div className="flex items-center gap-x-3">
        <Image
          src={image || ""}
          height={32}
          width={32}
          className="h-8 w-8 border border-white rounded-full"
          alt="Jaydon"
        />
        <p className="text-sm text-base-0 capitalize">{name}</p>
      </div>
    );
  };
  const ChatText: React.FC<{ text?: string }> = ({ text }) => {
    return (
      <div className="bg-gray-600 p-3 max-w-full w-fit rounded-tiny c-chat__text">
        <p className="text-sm text-base-0 leading-[22px]">{text}</p>
      </div>
    );
  };
  return (
    <Layout>
      <section className="w-full h-screen overflow-hidden flex">
        <div className="w-[45%]">
          <div className="w-full py-8 h-[100px] flex justify-between items-center bg-white shadow-chat-header-overlay px-6">
            <h3 className="text-[32px] leading-[43px] text-base-0 font-bold">
              Chats
            </h3>
            <div className="w-[347px] bg-gray-10 border border-gray-600 rounded-tiny h-10 p-3 flex items-center">
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
                placeholder="Search for celebrity, chat ID"
              />
            </div>
          </div>
          <div>
            <Chat />
            <Chat read={false} />
            <Chat />
            <Chat />
          </div>
        </div>
        <div className="w-[55%] relative overflow-y-scroll min-h-screen">
          <div className="bg-gray-10 shadow-chat-preview-shadow w-1/2 h-[100px] fixed top-0 flex items-start px-8 py-5 justify-between">
            <div className="space-y-3">
              <p className="text-xs">#180380280</p>
              <div className="flex flex-row gap-x-3 items-center">
                <div className="relative w-[54px]">
                  <Image
                    src={"/bimbo-ademoye.svg"}
                    height={32}
                    width={32}
                    className="h-8 w-8 border border-secondary-300 rounded-full"
                    alt="Bimbo Ademoye"
                  />
                  <Image
                    src={"/jaydon.svg"}
                    height={32}
                    width={32}
                    className="h-8 w-8 border border-white rounded-full absolute z-10 top-0 left-[40%]"
                    alt="Jaydon"
                  />
                </div>
                <h5 className="text-base-0 text-base">
                  Bimbo Ademoye <span className="text-[#999999]">x</span> Jaydon{" "}
                </h5>
              </div>
            </div>
            <button className="cursor-pointer hover:opacity-75">
              <Image
                src={"/svgs/utility/more.svg"}
                alt="More"
                height={16}
                width={16}
              />
            </button>
          </div>
          <div className="bg-gray-9 min-h-full pt-[132px] pb-12 px-8">
            <p className="c-chat__time text-sm text-center">Today 9:41 PM</p>
            <div className="space-y-4 c-chat__area">
              <div className="c-chat__content sender">
                <ChatPerson name="Jaydon" image="/jaydon.svg" />
                <ChatText text="Hello Bimbo, i’m a big fan, i’d like to say thank you for being an amazing and inspiring personality to everyone. I love you️" />
                <span className="leading-4 text-xs text-gray-300 font-normal">
                  2 hours ago
                </span>
              </div>
              <p className="c-chat__status success">CHAT REQUEST ACCEPTED</p>
              <div className="c-chat__content receiver">
                <ChatPerson name="Bimbo Ademoye" image="/bimbo-ademoye.svg" />
                <ChatText text="Thank you Jaydon for your kind words ❤️" />
                <ChatText text="How are you doing today?" />
                <span className="leading-4 text-xs text-gray-300 font-normal">
                  1 hour 45 seconds ago
                </span>
              </div>
              <div className="c-chat__content sender">
                <ChatPerson name="Jaydon" image="/jaydon.svg" />
                <ChatText text="I’m fine thank you." />
                <ChatText text="You’ve been an inspiration to me over the years, thank you" />
                <ChatText text="I’d like to be a mentee, if you allow it 🤲🏽" />
                <span className="leading-4 text-xs text-gray-300 font-normal">
                  1 hour ago
                </span>
              </div>
              <div className="c-chat__content receiver">
                <ChatPerson name="Bimbo Ademoye" image="/bimbo-ademoye.svg" />
                <ChatText text="I’m glad i’ve been able to inspire you from afar. It gladens my heart." />
                <ChatText text="I’m sorry I cannot be your mentor. I don’t think I have time for that." />
                <span className="leading-4 text-xs text-gray-300 font-normal">
                  36 seconds ago
                </span>
              </div>
              <p className="c-chat__status failed">
                BIMBO ADEMOYE HAS ENDED THE CHAT
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
