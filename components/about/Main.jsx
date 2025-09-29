import Image from "next/image";
import AnthonyImg from './assets/Team_Photos_Anthony.png';
import CueImg from './assets/Team_Photos_Cue.png';

//Images
import oneCardImage from "./assets/one.svg";
import twoCardImage from "./assets/two.svg";
import threeCardImage from "./assets/three.svg";

function Main() {
  return (
    <div className="flex flex-col items-center mb:mt-0 mb:pb-20 pb-6 -mt-[100px] pt-48 mb:py-40 text-white">
      <div className="mb:max-w-[1100px] w-full">
        {/* Title, Description & button*/}
        <div className="relative">
          <div className="mx-10">
            <h1 className="text-center text-4xl mb:text-center mb:text-5xl font-light text-white">
              About Us
            </h1>
            <h2 className="mt-4 text-center text-lg mb:px-0 mb:text-center text-[#A2ACCF] mb:text-xl">By Traders, For Traders</h2>
          </div>

          <div className="aspect-square rounded-full w-[300px] bg-[#45D1FF33]/30 absolute left-0 blur-[200px] -z-10"></div>
        </div>

        <div className="flex flex-col items-center mb:pb-16 w-full justify-center px-8 mb:px-0">

          {/* Cue Banks */}
          <div className="flex flex-col items-center mb:flex-row  mb:mt-16 relative">
            <Image src={CueImg} className="w-56" alt='cue-img' />
            <div className="flex flex-col items-center mt-5 mb:mt-0 mb:items-start  mb:ml-24">
              <h2 className="mb:text-left text-center text-4xl font-light text-white">Cue Banks</h2>
              <p className=" mb:text-left text-center text-sm mt-4 mb:w-full text-[#A2ACCF]">
                Starting at just $8.30 an hour in Jamaica, Quillan Roberto Black discovered life-changing potential in forex trading when he made $800 in his first week through Trade King. His success opened his eyes to possibilities beyond the 9-to-5 grind, inspiring him to create Tx3 Funding Futures. Through this platform, he&apos;s passionate about sharing his knowledge and helping others achieve the same financial freedom that transformed his own life – teaching them that there&apos;s more to earning than just trading time for money.
              </p>
            </div>
            <div className="aspect-square rounded-full w-[300px] bg-[#45D1FF33]/30 absolute right-0 -bottom-72 blur-[200px] -z-10"></div>
          </div>

          {/* Anthony Williams */}
          <div className="flex flex-col-reverse items-center mb:flex-row  mt-12 mb:mt-12">

            <div className="flex flex-col mb:items-end items-center ">
              <h2 className="mb:text-left text-center text-4xl font-light text-white">Anthony Williams</h2>
              <p className="mb:text-right text-center text-sm mt-4 mb:w-full text-[#A2ACCF]">From a small Mississippi town and humble beginnings, Anthony Williams refused to let poverty define his path. Starting forex trading at just 17, his relentless drive led him to make his first million by age 24. Today, Anthony balances his thriving trading career with being a dedicated father of two and loving husband. Through podcasts and YouTube videos, he shares his knowledge and journey to inspire others, proving that with determination, anyone can rise above their circumstances and create lasting success.</p>
            </div>
            <Image src={AnthonyImg} className="w-56 ml-0 mb:ml-20" alt='anthony-img' />
          </div>



        </div>

        {/* Cards */}
        <section className="mb:mt-20 mb:mb-20 mb-0 mt-14 flex flex-col items-center w-full  mb:flex-row justify-around">
          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-[#122620]/50 to-black/0 rounded-lg border border-[#717892] h-fit mb:h-[450px] w-auto mb:w-80 flex flex-col items-center mx-8 mb:mx-0 mb:mb-0 mb-10">
            <Image src={oneCardImage} alt="card-img" width={250} height={250} />
            <div className="text-center px-10 mb-10">
              <p className="text-white font-medium text-xl">Mission Statement</p>
              <p className="text-[#A2ACCF] font-light text-base mt-2">To give traders the opportunity and conditions to scale their profits for fast-tracked success, choice and freedom.</p>
            </div>
          </div>
          {/* Vision Statement */}
          <div className="bg-gradient-to-br from-[#122620]/50 to-black/0 rounded-lg border border-[#717892] h-fit mb:h-[450px] w-auto mb:w-80 flex flex-col items-center mx-8 mb:mx-0  mb:mb-0 mb-10">
            <Image src={twoCardImage} alt="card-img" width={250} height={250} />
            <div className="text-center px-10 mb-10">
              <p className="text-white font-medium text-xl">Vision Statement</p>
              <p className="text-[#A2ACCF] font-light text-base mt-2">To build an unprecedented collaborative community for serious traders.</p>
            </div>
          </div>
          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-[#122620]/50 to-black/0 rounded-lg border border-[#717892] h-fit mb:h-[450px] w-auto mb:w-80 flex flex-col items-center mx-8 mb:mx-0  mb:mb-0 mb-10">
            <Image src={threeCardImage} alt="card-img" width={250} height={250} />
            <div className="text-center px-10 mb-10">
              <p className="text-white font-medium text-xl">Purpose Statement</p>
              <p className="text-[#A2ACCF] font-light text-base mt-2">To be the best platform for traders to manifest a Tx3 Funding Futures lifestyle.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Main
