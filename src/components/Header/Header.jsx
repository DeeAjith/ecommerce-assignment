import React from "react";
import Slider from "../Slider";

const Header = (props) => {
  const { navData } = props;
  return (
    <header>
      <div className="flex flex-col mx-auto max-width-1 container px-4">
        <TopBar />
        <MainMenu navData={navData} />
      </div>
      <Slider />
    </header>
  );
};

export default Header;

const MainMenu = ({ navData }) => {
  return (
    <div className="flex justify-between items-center pt-2 pb-4">
      <HeaderLogo />
      <nav className="bg-white">
        <ul className="flex relative gap-6">
          <HeaderLinks navData={navData} />
        </ul>
      </nav>
      <div className="actions flex gap-8">
        <SearchIon />
        <CartIcon />
      </div>
    </div>
  );
};

const TopBar = () => {
  return (
    <ul className="flex text-[#333333] text-xs justify-end gap-[19px] py-3">
      <li>
        <a href="/help">Help</a>
      </li>
      <li>
        <a href="/myaccount/orders">Orders & Returns</a>
      </li>
      <li>
        <span className="cursor-default">Hi, John</span>
      </li>
    </ul>
  );
};

const HeaderLinks = ({ navData }) => {
  return navData.map((item) => {
    return (
      <li key={item.id}>
        <a href={item.path} className="px-1 text-base font-semibold">
          {item.title}
        </a>
      </li>
    );
  });
};

const HeaderLogo = () => {
  return (
    <a className="hover:no-underline hover:text-[#333333]" href="/">
      <h1 className="text-2xl font-bold">ECOMMERCE</h1>
    </a>
  );
};
const SearchIon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.5145 24.4586L20.8214 19.7655C22.1843 18.1309 22.8646 16.0338 22.7206 13.9104C22.5767 11.787 21.6197 9.80084 20.0486 8.36511C18.4776 6.92938 16.4135 6.15462 14.2858 6.202C12.158 6.24939 10.1305 7.11526 8.62492 8.61951C7.11935 10.1237 6.25168 12.1505 6.20241 14.2782C6.15315 16.4059 6.92609 18.4707 8.36043 20.043C9.79477 21.6153 11.7801 22.5741 13.9033 22.7199C16.0266 22.8657 18.1243 22.1873 19.7601 20.8258L24.4533 25.5199C24.5229 25.5896 24.6057 25.6448 24.6967 25.6826C24.7878 25.7203 24.8853 25.7397 24.9839 25.7397C25.0824 25.7397 25.18 25.7203 25.2711 25.6826C25.3621 25.6448 25.4448 25.5896 25.5145 25.5199C25.5842 25.4502 25.6395 25.3675 25.6772 25.2764C25.7149 25.1854 25.7343 25.0878 25.7343 24.9893C25.7343 24.8907 25.7149 24.7931 25.6772 24.7021C25.6395 24.611 25.5842 24.5283 25.5145 24.4586ZM7.73388 14.4893C7.73388 13.1542 8.12977 11.8492 8.87147 10.7392C9.61316 9.62912 10.6674 8.76396 11.9008 8.25307C13.1342 7.74218 14.4914 7.6085 15.8007 7.86896C17.1101 8.12941 18.3129 8.77228 19.2569 9.71628C20.2009 10.6603 20.8437 11.863 21.1042 13.1724C21.3646 14.4818 21.231 15.839 20.7201 17.0724C20.2092 18.3058 19.344 19.36 18.234 20.1017C17.124 20.8434 15.8189 21.2393 14.4839 21.2393C12.6943 21.2373 10.9785 20.5255 9.71311 19.26C8.44767 17.9946 7.73587 16.2789 7.73388 14.4893Z"
        fill="#333333"
      />
    </svg>
  );
};

const CartIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 24.25C14 24.5467 13.912 24.8367 13.7472 25.0834C13.5824 25.33 13.3481 25.5223 13.074 25.6358C12.7999 25.7494 12.4983 25.7791 12.2074 25.7212C11.9164 25.6633 11.6491 25.5204 11.4393 25.3107C11.2296 25.1009 11.0867 24.8336 11.0288 24.5426C10.9709 24.2517 11.0006 23.9501 11.1142 23.676C11.2277 23.4019 11.42 23.1676 11.6666 23.0028C11.9133 22.838 12.2033 22.75 12.5 22.75C12.8978 22.75 13.2794 22.908 13.5607 23.1893C13.842 23.4706 14 23.8522 14 24.25ZM22.25 22.75C21.9533 22.75 21.6633 22.838 21.4166 23.0028C21.17 23.1676 20.9777 23.4019 20.8642 23.676C20.7506 23.9501 20.7209 24.2517 20.7788 24.5426C20.8367 24.8336 20.9796 25.1009 21.1893 25.3107C21.3991 25.5204 21.6664 25.6633 21.9574 25.7212C22.2483 25.7791 22.5499 25.7494 22.824 25.6358C23.0981 25.5223 23.3324 25.33 23.4972 25.0834C23.662 24.8367 23.75 24.5467 23.75 24.25C23.75 23.8522 23.592 23.4706 23.3107 23.1893C23.0294 22.908 22.6478 22.75 22.25 22.75ZM26.7172 10.9703L24.0425 19.6619C23.9024 20.1226 23.6175 20.5259 23.2301 20.812C22.8427 21.0981 22.3734 21.2517 21.8919 21.25H12.8816C12.3931 21.2482 11.9184 21.0882 11.5285 20.7939C11.1386 20.4997 10.8545 20.087 10.7188 19.6178L7.32687 7.75H5.75C5.55109 7.75 5.36032 7.67098 5.21967 7.53033C5.07902 7.38968 5 7.19891 5 7C5 6.80109 5.07902 6.61032 5.21967 6.46967C5.36032 6.32902 5.55109 6.25 5.75 6.25H7.32687C7.65257 6.25108 7.96916 6.35761 8.22925 6.55365C8.48934 6.74969 8.67895 7.0247 8.76969 7.3375L9.53 10H26C26.1174 9.99996 26.2331 10.0275 26.3379 10.0803C26.4427 10.1331 26.5336 10.2098 26.6034 10.3042C26.6732 10.3986 26.7198 10.508 26.7396 10.6237C26.7593 10.7394 26.7517 10.8581 26.7172 10.9703ZM24.9847 11.5H9.95844L12.1606 19.2062C12.2054 19.3629 12.3 19.5007 12.4301 19.5988C12.5602 19.6969 12.7186 19.75 12.8816 19.75H21.8919C22.0524 19.7501 22.2086 19.6986 22.3377 19.6033C22.4668 19.508 22.5619 19.3737 22.6091 19.2203L24.9847 11.5Z"
        fill="#333333"
      />
    </svg>
  );
};
