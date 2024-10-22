import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { planpay } from "../constants/index.jsx";
import Button from "../components/Button.jsx";
import { Link } from 'react-router-dom';

const Payment = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s1 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
                Digitalize o código para concluir o pagamento
            </h3>


            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>

            <div className="mt-10 flex w-full justify-center mb-8">
              <Link to="/">
                <Button icon={planpay.icon}>Completado</Button>
              </Link>
            </div>

            <div className="border border-p4 rounded-20 p-14">
                <img
                    src="/images/qrpago.png"
                    width={960}
                    height={380}
                    alt="outline"
                    className="relative inset-0 rounded-20"
                />
            </div>

          </div>          
        </div>
      </Element>
    </section>
  );
};

export default Payment;
