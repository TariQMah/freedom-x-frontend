import { Header } from "../../components/Header";
import Layout from "../../components/Layout";
import { SettingsCard } from "../../components/SettingsCard";

export const Settings = () => {
  return (
    <div className="w-full">
      <Layout active={6} page="Settings">
        <div className="md:w-[100%]  w-[575px] mx-auto mt-[36px]">
          <SettingsCard />
        </div>
      </Layout>
    </div>
  );
};
