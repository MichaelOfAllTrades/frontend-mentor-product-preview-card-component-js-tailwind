import classnames from "classnames";
import IconCart from '../images/icon-cart.svg';

import ImageProductDesktop from '../images/image-product-desktop.jpg';
import ImageProductMobile from '../images/image-product-mobile.jpg';

export default function ProductPreview() {
  return (
    <div className={classnames(`w-[340px] h-auto m-auto flex flex-col rounded-[10px] overflow-hidden
    md:w-[550px] md:flex-row`)}>
      {/* https://stackoverflow.com/questions/30460681/changing-image-src-depending-on-screen-size */}
      <picture className={classnames(`md:w-[52%]`)}>
        <source media="(max-width: 767px)" srcset={ImageProductMobile} />
        <img src={ImageProductDesktop} alt="IfItDoesntMatchAnyMedia" />
      </picture>
      <div className={classnames(`p-[20px] bg-[#FFFFFF]
      md:w-[48%]`)}>
        <h4 className={classnames(`mb-[20px] montserrat-font perfume-font-weight text-[14px]`)}>P E R F U M E</h4>
        <h1 className={classnames(`mb-[20px] font-Fraunces fraunces-font-and-weight text-[28px] leading-[30px]`)}>Gabrielle Essence Eau De Parfum</h1>
        <p className={classnames(`mb-[38px] w-[85%] montserrat-font floral-font-weight text-[12px] leading-[20px]`)}>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer- Creator for the House of CHANEL.</p>
        <div className={classnames(`flex flex-row mb-[20px]`)}>
          <h1 className={classnames(`mr-[24px] fraunces-font-and-weight text-[#3C8067] text-[28px] center`)}>$149.99</h1>
          <h5 className={classnames(`my-auto text-[12px] font-[300]`)}><strike>$169.99</strike></h5>
        </div>
        <button className={classnames(`flex flex-row w-[100%] h-[40px] bg-[#3C8067] hover:bg-[#1C232B] rounded-[7px]`)}>
          <div className={classnames(`m-auto flex flex-row`)}>
            <div className={classnames(`m-auto mr-[12px]`)}>
              <img src={IconCart} alt="iconcart" className={classnames(`h-[16px] w-auto`)} />
            </div>
            <h6 className={classnames(`text-white`)}>Add to Cart</h6>
          </div>
        </button>
      </div>
    </div>
  );
}