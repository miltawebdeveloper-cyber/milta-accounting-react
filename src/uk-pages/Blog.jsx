import React from "react";

import SubscriptionBanner from "../uk-components/Blog/SubscriptionBanner";
import EditorsPickCarousel from "../uk-components/Blog/EditorsPickCarousel";
import BlogGridSection from "../uk-components/Blog/BlogGridSection";
import Layout from "../components/Layout/MainLayout";


const Home = () => {
  return (
    <Layout>
    <>
      <SubscriptionBanner />
      <BlogGridSection />
    </>
    </Layout>
  );
};

export default Home;
