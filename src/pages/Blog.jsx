import React, { useState } from "react";

import SubscriptionBanner from "../components/Blog/SubscriptionBanner";
import EditorsPickCarousel from "../components/Blog/EditorsPickCarousel";
import BlogGridSection from "../components/Blog/BlogGridSection";
import Layout from "../components/Layout/MainLayout";
import BlogShareModal from "../utils/share-modal";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <>
        <SubscriptionBanner />

        <EditorsPickCarousel />
        <BlogGridSection />

        <BlogShareModal
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    </Layout>
  );
};

export default Home;