import React from 'react';

import { Title } from '@/components/title';
import { SEO } from '@/components/seo';
import Layout from '@/components/layout';

const Home: React.FC = () => (
    <Layout>
        <SEO title="Molly's Country Crafts"
             description="Hand painted local stones and Waldorf inspired crafts"
             article={false} />
        <Title />
    </Layout>
);

export default Home;
