import { DepositCard } from "../../components/DepositCard";
import { Header } from "../../components/Header";
import Layout from "../../components/Layout";

export const Deposit = () => {
  return (
    <div className="w-full">
      <Layout active={4} page="Deposit">
        <div className="md:w-[100%]  w-[534px] mx-auto mt-[36px]">
          <DepositCard />
        </div>
      </Layout>
    </div>
  );
};
