import { Header } from "../../components/Header";

import { FaqOver } from "../../components/FaqOver";
import { FaqUtil } from "../../assets/js/Util/Faq";
import Layout from "../../components/Layout";

export const Faq = () => {
  return (
    <div className="w-full">
      <Layout active={7} page="Faq">
        <div className="md:w-[90%]  w-[692px] mx-auto mt-[36px]">
          <h1 className="text-[32px] text-center font-semibold text-white mb-8">
            Frequently Asked Questions
          </h1>

          <ul className="flex flex-col gap-4">
            {FaqUtil.map((EachFaq) => (
              <FaqOver EachFaq={EachFaq} />
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
};
